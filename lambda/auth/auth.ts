import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { parse as queryStringParse } from 'querystring';
import { AWSError, CognitoIdentityServiceProvider } from 'aws-sdk';
import { AdminInitiateAuthRequest } from 'aws-sdk/clients/cognitoidentityserviceprovider';

const handler = async (
    event: APIGatewayEvent,
    context: Context
): Promise<APIGatewayProxyResult> => {
    const response: APIGatewayProxyResult = {
        statusCode: 401,
        body: JSON.stringify({ message: 'Authorization Implementation Pending' }),
    };

    console.log(event);

    const rejectWithMalformedRequest = () => {
        response.body = JSON.stringify({ messsage: 'Malformed request' });
        return response;
    };

    if (!event.body) {
        rejectWithMalformedRequest();
    }

    const eventParams = queryStringParse(event.body!);

    if (!eventParams.username || !eventParams.password) {
        rejectWithMalformedRequest();
    }

    const cognito = new CognitoIdentityServiceProvider();

    const authParams: AdminInitiateAuthRequest = {
        AuthFlow: 'ADMIN_NO_SRP_AUTH',
        UserPoolId: process.env.USER_POOL_ID!,
        ClientId: process.env.USER_POOL_CLIENT_ID!,
        AuthParameters: {
            USERNAME: eventParams.username as string,
            PASSWORD: eventParams.password as string,
        },
    };

    // at this point we have a well-formed authentication request
    // attempt to authenticate the user

    try {
        const result = await cognito.adminInitiateAuth(authParams).promise();
        response.statusCode = 200;
        response.body = JSON.stringify(result);
    } catch (err) {
        const authError: AWSError = err as AWSError;
        console.log(authError);
        if (authError.code === 'NotAuthorizedException') {
            response.statusCode = 400;
            response.body = JSON.stringify({ message: 'Incorrect username or password' });
        }
    }

    return response;
};

export { handler };
