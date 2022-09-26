# Amazon Kendra Web Service CDK Sample

Amazon Kendra has a robust JSON API for use with the AWS SDK (software development kit), but does not expose endpoints for quickly getting up and running with a custom client. The Amazon Kendra documentation has examples that provide some direction in developing a custom client, but there is no public information about the API layer necessary to close the gap and complete the example.

This pattern seeks to bridge this gap by providing a detailed overview of the considerations, concepts and steps to build and deploy a full-featured Amazon API Gateway layer that interfaces with Amazon Kendra in a secure manner that follows the AWS Well-Architected guidance framework.

### Start by studying and running the tests

This sample repository includes a full test suite that will help you better understand how to spec your own AWS CDK stacks and how to approach testing lambda functions locally. The best way to learn is by example! If you are somewhat new to CDK and AWS Lambda testing, studying the test suites in this repo will save you hours of research, trial and error.

Clone the repo and run `npm install && npm build && npm test` to get started.

Find the stack test in [`test/kendra-restapi.test.ts`](test/kendra-restapi.test.ts)

Find the Lambda test suites alongside the Lambda files in [`lambda`](lambda)

## Prerequisites

This pattern is intended to provide a REST API interface to an existing Amazon Kendra Index.

To fully implement this pattern you will need:

1. **Documents** for indexing and searching uploaded to an **S3 Bucket**
2. A fully-initialized **Kendra Index** with the above bucket as a **Kendra Data Source**
3. The account containing the Data Source and the Kendra Index requires **CDK setup/bootstrapping**
4. A **local CDK development environment** ready for `cdk deploy`

For instructions on setting up an Amazon Kendra Index, see https://docs.aws.amazon.com/kendra/latest/dg/create-index.html

For instructions on bootstrapping your account for CDK, see https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping.html

**Test your Kendra Index for pattern-readiness:**

1. Sign in to the AWS Management Console and open the Amazon Kendra console at https://console.aws.amazon.com/kendra/
2. Click on **Indexes** in the left-hand menu
3. Select the Index you would like to use for this pattern from the list
4. Click **Search Indexed Content** in the left-hand menu
5. In the resulting page, test your Kendra Index by entering a few search queries
6. If you can successfully obtain results from the instructions above, your Kendra Index is ready to interface with this pattern.

**Take note** of these key pieces of data, as you will need them to implement the pattern:

-   The ARN of your Kendra Index (found in Index Settings)
-   The names of the S3 bucket(s) used as the Kendra data source(s)

## Limitations

### Data Sources

Part of a successful pattern includes detailed information about how to authenticate/sign requests to view the origin documents that are indexed by Kendra. This pattern assumes Amazon S3 as the origin data source for the Kendra Index. However, Kendra supports many different types of Data Sources.

The pattern can be extended by creating authentication and/or request signing modules for accessing the origin documents for different data types.

For a full list of supported Kendra Data Sources, see https://docs.aws.amazon.com/kendra/latest/dg/hiw-data-source.html

### Authentication/Authorization

The AWS Cognito User Pool included in this pattern is setup as a basic example of providing token authorization to the queries REST endpoint to illustrate how to secure the API and prevent unauthenticated requests. The pattern can be extended to include Cognito Identity Pools for federated access and integrated role-based authentication with existing customer systems. In addition, Kendra can also support the filtering of indexed results based on user-context (ID, role, group, etc). However, integrating a fine-tuned user identity solution for both API authentication and custom filtering of results is beyond the scope of this pattern.

For more information about filtering results based on user context, see: https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html

## Target technology stack

-   **AWS CDK** (typescript) - for managing infrastructure with code in a straightforward manner
-   **AWS WAF** - adds an extra layer of protection to our API Gateway, offending requests are filtered before the traffic hits our gateway
-   **Amazon API Gateway**
-   **Amazon Cognito User Pool** - to create and authenticate API users
-   **API Gateway Token Authorizer** - to prevent unauthenticated requests to the API
-   **Amazon Lambda** - AWS Lambda function with API proxy integration for proxying JSON request bodies to the Kendra Index
-   **AWS IAM Policies** - Lambda execution role policies following the least-permissions tenet for Kendra and S3 access
-   **AWS X-Ray** - for viewing the segmented traces from our API Gateway endpoint to the Kendra index and back
-   **Amazon CloudWatch** - metrics and logs for monitoring WAF results and debugging the entire deployed stack

## Target Architecture

![Kendra REST API Reference Architecture][refarch]

[refarch]: assets/kendra_REST_API_ref_arch.png 'Kendra REST API Reference Architecture'

## Building the Stack

### Ensure that your system is ready for CDK Development

Visit the [prerequisites section of the CDK Getting Started documentation](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html#getting_started_prerequisites) for a full-walkthrough to get your system setup.

### Ensure that your AWS Account is bootstrapped for CDK Deployment

Visit the [Bootstrapping](https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping.html) documentation for full instructions on bootstrapping your Account.

### Setup your enviornment context

Check out the context JSON example in [`example.context.json`](example.context.json) for the current context schema.

Copy the example file into a local file named `cdk.context.json` and update it with the appropriate values for your account (from section "Prerequisites" above). These variables will be evaluated during CDK synthesis and used to deploy assets with the correct permissions to query Kendra and sign S3 URLs for viewing the original documents in the data sources.

### Synthesize the Kendra REST API Stack

Run `cdk synth` to ensure that everything is working correctly.

### Deploy the application

`cdk deploy`

## Setting Up For Initial Use

1. Create the first user in the deployed Cognito User Pool
2. Force-confirm the first user and set their password (AWS CLI)
3. Authenticate the first user and obtain an `IdToken` (AWS CLI)
4. Use the `IdToken` in the `Authorization` header of an HTTP Request to the API Gateway

### 1. Create the first user

Navigate to the Cognito User Pools dashboard in the AWS Console:

AWS Console > Search Cognito > Manage User Pools > KendraApiUserPoolXXXX-XXXXXXXX > Users (Tab) > Create User

-   Alias Attributes: User name, Email
-   Invitation: Don't send
-   User name: `{yourUsername}`
-   Email address: `{yourEmail}`
-   Phone number: `optional`
-   Password: Set a password that complies with the user pool requirements

Click "Create User". You will notice that this user is "Pending Confirmation" in the users dashabord. You will force-confirm this user in the next step.

### 2. Force-confirm the first user

Since the components/UI for authenticating users is currently under development, we can use the AWS cli to confirm the first user:

`aws cognito-idp admin-set-user-password --user-pool-id YOUR_USERPOOL_ID --username YOUR_USERNAME --password YOUR_NEW_PASSWORD --permanent`

You can find the user pool id for this call in the `outputs` section of the output/result from the `cdk deploy` call under the key `KendraRestApiStack.UserPoolId`. Replace the username and desired password and make the call. The first user should update in the dashboard to display "Confirmed" status.

### 3. Authenticate the first user

We can also use the cli to authenticate the user and obtain identity tokens:

`aws cognito-idp initiate-auth --auth-flow USER_PASSWORD_AUTH --auth -parameters USERNAME=YOUR_USERNAME,PASSWORD=YOUR_PASSWORD --client-id YOUR_CLIENT_ID`

You can find the user pool client id for this call in the `outputs` section of the output/result from the `cdk deploy` call under the key `KendraRestApiStack.UserPoolClientId`.

The result of this call, if successful, should be a collection of auth tokens for the user. The `IdToken` result of this call is the token used in the API Gateway authorization header.

**\*CAUTION**: When printed to the terminal, the token may contain wraps or spaces not present in the original token. Using the token with these hidden characters will cause authentication to fail. Format the token by pasting it into a code editor and removing whitespace from the string.\*

### 4. Test the API Authorizer using the credentials

You can find the URL of the API Gateway in the `outputs` section of the output/result from the `cdk deploy` call under the key `KendraRestApiStack.KendraApiGatewayEndpointXXXXXX`.

Use your favorite HTTP debugger/client to test a POST request to the path `/queries`.

## Useful commands

The `cdk.json` file tells the CDK Toolkit how to execute your app.

-   `cdk deploy` deploy this stack to your default AWS account/region
-   `cdk diff` compare deployed stack with current state
-   `cdk synth` emits the synthesized CloudFormation template
-   `npm run test` perform the jest unit tests

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
