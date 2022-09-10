import * as cdk from 'aws-cdk-lib';
import { CfnOutput } from 'aws-cdk-lib';
import {
    CognitoUserPoolsAuthorizer,
    LambdaIntegration,
    MethodLoggingLevel,
    RestApi,
} from 'aws-cdk-lib/aws-apigateway';
import { UserPool, UserPoolClient } from 'aws-cdk-lib/aws-cognito';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Runtime, Tracing } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import { join } from 'path';
import { CfnWebACL, CfnWebACLAssociation } from 'aws-cdk-lib/aws-wafv2';

export class KendraRestApiStack extends cdk.Stack {
    private apiGateway: RestApi;
    private userPool: UserPool;
    private userPoolClient: UserPoolClient;
    private apiAuthorizer: CognitoUserPoolsAuthorizer;
    private queriesPostRequestHandler: NodejsFunction;
    private authHandler: NodejsFunction;

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        this.constructUserPoolwithClient();
        this.constructQueriesPostHandler();
        this.constructAuthHandler();
        this.assignPoliciesToQueriesHandler();
        this.assignPoliciesToAuthHandler();
        this.constructApiGateway();
        this.constructApiGatewayAuthorizer();
        this.constructLambdaIntegrations();
        this.constructWAFAndAssociate();
    }

    private constructUserPoolwithClient() {
        this.userPool = new UserPool(this, 'KendraAPIUserPool', {
            selfSignUpEnabled: false,
            signInAliases: {
                email: true,
                username: true,
            },
        });

        this.userPoolClient = this.userPool.addClient('KendraAPIUserPoolClient', {
            authFlows: {
                adminUserPassword: true,
                custom: true,
                userPassword: true,
                userSrp: true,
            },
            // since this app client is for a REST API + React client, it is a "Public Client"
            // see: https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-client-apps.html
            generateSecret: false,
        });

        const cognitoDomainPrefix = this.node.tryGetContext('cognitoDomainPrefix');

        console.log(cognitoDomainPrefix);

        this.userPool.addDomain('KendraAPIUserPoolDomain', {
            cognitoDomain: {
                domainPrefix: cognitoDomainPrefix,
            },
        });

        new CfnOutput(this, 'UserPoolId', {
            value: this.userPool.userPoolId,
        });

        new CfnOutput(this, 'UserPoolClientId', {
            value: this.userPoolClient.userPoolClientId,
        });

        new CfnOutput(this, 'CognitoDomain', {
            value: `https://${cognitoDomainPrefix}.auth.${
                cdk.Stack.of(this).region
            }.amazoncognito.com`,
        });
    }

    private constructQueriesPostHandler() {
        this.queriesPostRequestHandler = new NodejsFunction(
            this,
            'KendraQueriesPostRequestHandler',
            {
                runtime: Runtime.NODEJS_16_X,
                entry: join(__dirname, '..', 'lambda', 'queries', 'postQuery.ts'),
                handler: 'handler',
                tracing: Tracing.ACTIVE,
            }
        );
    }

    private assignPoliciesToQueriesHandler() {
        const kendraIndexArns = this.node.tryGetContext('kendraIndexArns');
        const dataSourceBuckets = this.node.tryGetContext('s3DataSourceBuckets');

        kendraIndexArns.forEach((arn: string) => {
            const kendraQueryPolicy = new PolicyStatement();
            kendraQueryPolicy.addActions('kendra:Query');
            kendraQueryPolicy.addResources(arn);
            this.queriesPostRequestHandler.addToRolePolicy(kendraQueryPolicy);
        });

        dataSourceBuckets.forEach((bucketName: string) => {
            const s3GetPolicy = new PolicyStatement();
            s3GetPolicy.addActions('s3:GetObject', 's3:GetObjectVersion');
            s3GetPolicy.addResources(`arn:aws:s3:::${bucketName}/*`);
            this.queriesPostRequestHandler.addToRolePolicy(s3GetPolicy);
        });
    }

    private constructAuthHandler() {
        this.authHandler = new NodejsFunction(this, 'KendraAPIAuthHandler', {
            runtime: Runtime.NODEJS_16_X,
            entry: join(__dirname, '..', 'lambda', 'auth', 'auth.ts'),
            handler: 'handler',
            tracing: Tracing.ACTIVE,
            environment: {
                USER_POOL_ID: this.userPool.userPoolId,
                USER_POOL_CLIENT_ID: this.userPoolClient.userPoolClientId,
            },
        });
    }

    private assignPoliciesToAuthHandler() {
        const cognitoAuthPolicy = new PolicyStatement();
        cognitoAuthPolicy.addActions('cognito-idp:AdminInitiateAuth');
        cognitoAuthPolicy.addResources(this.userPool.userPoolArn);
        this.authHandler.addToRolePolicy(cognitoAuthPolicy);
    }

    private constructApiGateway() {
        this.apiGateway = new RestApi(this, 'KendraApiGateway', {
            defaultCorsPreflightOptions: {
                // TODO: programmatically find and set the allowed CORS origin
                // for a specific deployment -- open for now
                allowOrigins: ['*'],
                allowMethods: ['POST', 'GET'],
            },
            deployOptions: {
                metricsEnabled: true,
                loggingLevel: MethodLoggingLevel.INFO,
                dataTraceEnabled: true,
                tracingEnabled: true,
            },
            cloudWatchRole: true,
        });
    }

    private constructApiGatewayAuthorizer() {
        this.apiAuthorizer = new CognitoUserPoolsAuthorizer(this, 'KendraApiAuthorizer', {
            cognitoUserPools: [this.userPool],
            authorizerName: 'KendraApiAuthorizer',
            identitySource: 'method.request.header.Authorization',
        });

        this.apiAuthorizer._attachToApi(this.apiGateway);
    }

    private constructLambdaIntegrations() {
        const queriesPostRequestLambdaIntegration = new LambdaIntegration(
            this.queriesPostRequestHandler
        );
        const queriesPostRequestResource = this.apiGateway.root.addResource('queries');
        queriesPostRequestResource.addMethod('POST', queriesPostRequestLambdaIntegration, {
            authorizer: this.apiAuthorizer,
        });

        const authLambdaIntegration = new LambdaIntegration(this.authHandler);
        const authResource = this.apiGateway.root.addResource('auth');
        authResource.addMethod('POST', authLambdaIntegration);
    }

    private constructWAFAndAssociate() {
        const wafRules: Array<CfnWebACL.RuleProperty> = [];

        // 1 AWS Managed Rules
        const awsManagedRules: CfnWebACL.RuleProperty = {
            name: 'AWS-AWSManagedRulesCommonRuleSet',
            priority: 1,
            overrideAction: { none: {} },
            statement: {
                managedRuleGroupStatement: {
                    name: 'AWSManagedRulesCommonRuleSet',
                    vendorName: 'AWS',
                    excludedRules: [{ name: 'SizeRestrictions_BODY' }],
                },
            },
            visibilityConfig: {
                cloudWatchMetricsEnabled: true,
                metricName: 'awsCommonRules',
                sampledRequestsEnabled: true,
            },
        };

        wafRules.push(awsManagedRules);

        // 2 AWS AnonIPAddress
        const awsAnonIPList: CfnWebACL.RuleProperty = {
            name: 'awsAnonymousIP',
            priority: 2,
            overrideAction: { none: {} },
            statement: {
                managedRuleGroupStatement: {
                    name: 'AWSManagedRulesAnonymousIpList',
                    vendorName: 'AWS',
                    excludedRules: [],
                },
            },
            visibilityConfig: {
                cloudWatchMetricsEnabled: true,
                metricName: 'awsAnonymous',
                sampledRequestsEnabled: true,
            },
        };

        wafRules.push(awsAnonIPList);

        // 3 AWS ip reputation List
        const awsIPRepList: CfnWebACL.RuleProperty = {
            name: 'awsIPReputation',
            priority: 3,
            overrideAction: { none: {} },
            statement: {
                managedRuleGroupStatement: {
                    name: 'AWSManagedRulesAmazonIpReputationList',
                    vendorName: 'AWS',
                    excludedRules: [],
                },
            },
            visibilityConfig: {
                cloudWatchMetricsEnabled: true,
                metricName: 'awsReputation',
                sampledRequestsEnabled: true,
            },
        };

        wafRules.push(awsIPRepList);

        // Create our Web ACL
        let webACL = new CfnWebACL(this, 'KendraApiWebACL', {
            defaultAction: {
                allow: {},
            },
            scope: 'REGIONAL',
            visibilityConfig: {
                cloudWatchMetricsEnabled: true,
                metricName: 'KendraApiWebACL',
                sampledRequestsEnabled: true,
            },
            rules: wafRules,
        });

        new CfnWebACLAssociation(this, 'KendraApiWebACLAssociation', {
            webAclArn: webACL.attrArn,
            resourceArn: `arn:aws:apigateway:${cdk.Stack.of(this).region}::/restapis/${
                this.apiGateway.restApiId
            }/stages/${this.apiGateway.deploymentStage.stageName}`,
        });
    }
}
