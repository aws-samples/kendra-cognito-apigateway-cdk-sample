import { Capture, Match, Template } from 'aws-cdk-lib/assertions';
import * as cdk from 'aws-cdk-lib';
import { KendraRestApiStack } from '../lib/kendra-restapi-stack';

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
    it('constructs a Cognito User Pool with the correct attributes', () => {
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

    it('has a Lambda handler for POST requests for queries', () => {
        template.hasResourceProperties('AWS::Lambda::Function', {
            Handler: 'index.handler',
            Runtime: 'nodejs16.x',
        });
    });
});
