import { Capture, Match, Template } from 'aws-cdk-lib/assertions';
import * as cdk from 'aws-cdk-lib';
import { KendraRestApiStack } from '../lib/kendra-restapi-stack';
import { inspectObject } from './testHelpers';

const app = new cdk.App({
    context: {
        'kendraIndexArns': ['arn:aws:kendra:test-region:1234567890:index/kendra1'],
        's3DataSourceBuckets': ['test-bucket-1'],
        'cognitoDomainPrefix': 'test-prefix',
    },
});

const testStack = new KendraRestApiStack(app, 'KendraRestApiStack');
const template = Template.fromStack(testStack);

describe('KendraRestApiStack', () => {
    describe('Cognito User Pool', () => {
        it('exists with the correct attributes', () => {
            template.hasResourceProperties('AWS::Cognito::UserPool', {
                AdminCreateUserConfig: {
                    AllowAdminCreateUserOnly: true,
                },
                AliasAttributes: ['email'],
                AutoVerifiedAttributes: ['email'],
            });

            template.hasResourceProperties('AWS::Cognito::UserPoolDomain', {
                Domain: 'test-prefix',
            });

            template.hasResourceProperties('AWS::Cognito::UserPoolClient', {
                'ExplicitAuthFlows': [
                    'ALLOW_USER_PASSWORD_AUTH',
                    'ALLOW_ADMIN_USER_PASSWORD_AUTH',
                    'ALLOW_CUSTOM_AUTH',
                    'ALLOW_USER_SRP_AUTH',
                    'ALLOW_REFRESH_TOKEN_AUTH',
                ],
                'GenerateSecret': false,
                'SupportedIdentityProviders': ['COGNITO'],
            });
        });
    });

    describe('POST /queries Lambda handler', () => {
        const serviceRoleCapture = new Capture();
        const activeCapture = new Capture();

        template.hasResourceProperties('AWS::Lambda::Function', {
            Handler: 'index.handler',
            Runtime: 'nodejs16.x',
            Role: {
                'Fn::GetAtt': [serviceRoleCapture, 'Arn'],
            },
            TracingConfig: Match.objectLike({
                Mode: activeCapture,
            }),
        });

        it('has the correct service role', () => {
            expect(serviceRoleCapture.asString()).toEqual(
                expect.stringMatching(/^KendraQueriesPostRequestHandlerServiceRole/)
            );
        });

        it('has Xray tracing active', () => {
            expect(activeCapture.asString()).toEqual('Active');
        });

        describe('permissions', () => {
            it('has the correct policy statements attached to the role', () => {
                // const policies = template.findResources('AWS::IAM::Policy');
                // console.log(policies);

                // for (const policyKey in policies) {
                //     console.log(policies[policyKey].Properties.PolicyDocument.Statement);
                //     console.log(policies[policyKey].Properties.Roles);
                // }

                const attachedToRoleCapture = new Capture();

                template.hasResourceProperties('AWS::IAM::Policy', {
                    PolicyDocument: {
                        Statement: [
                            {
                                Action: ['xray:PutTraceSegments', 'xray:PutTelemetryRecords'],
                                Effect: 'Allow',
                                Resource: '*',
                            },
                            {
                                Action: 'kendra:Query',
                                Effect: 'Allow',
                                Resource: 'arn:aws:kendra:test-region:1234567890:index/kendra1',
                            },
                            {
                                Action: ['s3:GetObject', 's3:GetObjectVersion'],
                                Effect: 'Allow',
                                Resource: 'arn:aws:s3:::test-bucket-1/*',
                            },
                        ],
                    },
                    Roles: [{ Ref: attachedToRoleCapture }],
                });

                expect(attachedToRoleCapture.asString()).toEqual(
                    expect.stringMatching(/^KendraQueriesPostRequestHandlerServiceRole/)
                );
            });
        });
    });

    describe('API gateway', () => {
        it('exists with the correct properties', () => {
            template.hasResourceProperties('AWS::ApiGateway::RestApi', {
                Name: 'KendraApiGateway',
            });
        });

        describe('authorizer', () => {
            it('exists with the correct userPool provider', () => {
                //console.log(inspectObject(template.findResources('AWS::ApiGateway::Authorizer')));

                const restApiIdCapture = new Capture();
                const userPoolIdCapture = new Capture();

                template.hasResourceProperties('AWS::ApiGateway::Authorizer', {
                    Name: 'KendraApiAuthorizer',
                    RestApiId: { Ref: restApiIdCapture },
                    Type: 'COGNITO_USER_POOLS',
                    IdentitySource: 'method.request.header.Authorization',
                    ProviderARNs: [{ 'Fn::GetAtt': [userPoolIdCapture, 'Arn'] }],
                });

                expect(restApiIdCapture.asString()).toEqual(
                    expect.stringMatching(/^KendraApiGateway/)
                );

                expect(userPoolIdCapture.asString()).toEqual(
                    expect.stringMatching(/^KendraAPIUserPool/)
                );
            });
        });

        describe('resources', () => {
            describe('/queries', () => {
                it('exists', () => {
                    const rootResourceIdCapture = new Capture();

                    template.hasResourceProperties('AWS::ApiGateway::Resource', {
                        ParentId: {
                            'Fn::GetAtt': [rootResourceIdCapture, 'RootResourceId'],
                        },
                        PathPart: 'queries',
                    });

                    expect(rootResourceIdCapture.asString()).toEqual(
                        expect.stringMatching(/^KendraApiGateway/)
                    );
                });

                describe('methods', () => {
                    describe('POST', () => {
                        it('exists with the correct authorization type', () => {
                            const resourceIdCapture = new Capture();
                            const authorizerIdCapture = new Capture();

                            template.hasResourceProperties('AWS::ApiGateway::Method', {
                                HttpMethod: 'POST',
                                ResourceId: { Ref: resourceIdCapture },
                                AuthorizationType: 'COGNITO_USER_POOLS',
                                AuthorizerId: { Ref: authorizerIdCapture },
                                Integration: Match.objectLike({
                                    IntegrationHttpMethod: 'POST',
                                    Type: 'AWS_PROXY',
                                }),
                            });

                            expect(resourceIdCapture.asString()).toEqual(
                                expect.stringMatching(/^KendraApiGatewayqueries/)
                            );

                            expect(authorizerIdCapture.asString()).toEqual(
                                expect.stringMatching(/^KendraApiAuthorizer/)
                            );
                        });
                    });
                });
            });
        });
    });

    describe('AWS WAF', () => {
        it('exists with the correct rules', () => {
            template.hasResourceProperties('AWS::WAFv2::WebACL', {
                DefaultAction: { Allow: {} },
                Scope: 'REGIONAL',
                VisibilityConfig: {
                    CloudWatchMetricsEnabled: true,
                    MetricName: 'KendraApiWebACL',
                    SampledRequestsEnabled: true,
                },
                Rules: [
                    {
                        Name: 'AWS-AWSManagedRulesCommonRuleSet',
                        OverrideAction: { None: {} },
                        Priority: 1,
                        Statement: {
                            ManagedRuleGroupStatement: {
                                ExcludedRules: [{ Name: 'SizeRestrictions_BODY' }],
                                Name: 'AWSManagedRulesCommonRuleSet',
                                VendorName: 'AWS',
                            },
                        },
                        VisibilityConfig: {
                            CloudWatchMetricsEnabled: true,
                            MetricName: 'awsCommonRules',
                            SampledRequestsEnabled: true,
                        },
                    },
                    {
                        Name: 'awsAnonymousIP',
                        OverrideAction: { None: {} },
                        Priority: 2,
                        Statement: {
                            ManagedRuleGroupStatement: {
                                ExcludedRules: [],
                                Name: 'AWSManagedRulesAnonymousIpList',
                                VendorName: 'AWS',
                            },
                        },
                        VisibilityConfig: {
                            CloudWatchMetricsEnabled: true,
                            MetricName: 'awsAnonymous',
                            SampledRequestsEnabled: true,
                        },
                    },
                    {
                        Name: 'awsIPReputation',
                        OverrideAction: { None: {} },
                        Priority: 3,
                        Statement: {
                            ManagedRuleGroupStatement: {
                                ExcludedRules: [],
                                Name: 'AWSManagedRulesAmazonIpReputationList',
                                VendorName: 'AWS',
                            },
                        },
                        VisibilityConfig: {
                            CloudWatchMetricsEnabled: true,
                            MetricName: 'awsReputation',
                            SampledRequestsEnabled: true,
                        },
                    },
                ],
            });
        });

        it('is associated with the API gateway', () => {
            const apiGatewayIdCapture = new Capture();
            const deploymentIdCapture = new Capture();

            template.hasResourceProperties('AWS::WAFv2::WebACLAssociation', {
                ResourceArn: {
                    'Fn::Join': [
                        '',
                        [
                            'arn:aws:apigateway:',
                            { Ref: 'AWS::Region' },
                            '::/restapis/',
                            { Ref: apiGatewayIdCapture },
                            '/stages/',
                            { Ref: deploymentIdCapture },
                        ],
                    ],
                },
                WebACLArn: { 'Fn::GetAtt': ['KendraApiWebACL', 'Arn'] },
            });

            expect(apiGatewayIdCapture.asString()).toEqual(
                expect.stringMatching(/^KendraApiGateway/)
            );

            expect(deploymentIdCapture.asString()).toEqual(
                expect.stringMatching(/^KendraApiGatewayDeploymentStageprod/)
            );
        });
    });
});
