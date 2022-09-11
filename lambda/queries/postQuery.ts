import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { Kendra, S3 } from 'aws-sdk';
import { QueryRequest, QueryResult } from 'aws-sdk/clients/kendra';
import { parse as pathParse } from 'path';

const presignDocumentURIs = (kendraResult: QueryResult): QueryResult => {
    if (kendraResult.ResultItems) {
        const s3 = new S3();

        const URIcache = {} as { [k: string]: string };

        kendraResult.ResultItems.forEach((item) => {
            if (item.DocumentURI && item.DocumentURI !== '') {
                const s3URIMatches = item.DocumentURI.match(/^http(s):\/\/s3/);
                if (s3URIMatches && s3URIMatches.length > 0) {
                    // this is an s3 URI, let's try to sign it

                    // first, check the local cache to see if the key is there
                    // so we can re-use signed URLs in the same request)
                    const cacheHit = URIcache[item.DocumentURI];

                    if (!cacheHit) {
                        const keyPath = pathParse(item.DocumentURI);
                        const bucketPath = pathParse(keyPath.dir);
                        const key = keyPath.base;
                        const bucket = bucketPath.base;

                        const params = { Bucket: bucket, Key: key, Expires: 3600 };
                        const signedUrl = s3.getSignedUrl('getObject', params);

                        URIcache[item.DocumentURI] = signedUrl;

                        item.DocumentURI = signedUrl;
                    } else {
                        item.DocumentURI = URIcache[item.DocumentURI];
                    }
                }
            }
        });
    }

    return kendraResult;
};

const handler = async (
    event: APIGatewayEvent,
    context: Context
): Promise<APIGatewayProxyResult> => {
    let response: APIGatewayProxyResult = {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
    };

    const kendraClient = new Kendra();

    if (!event.body) {
        response = {
            statusCode: 400,
            body: JSON.stringify({
                message:
                    'Request body missing. Request body of type Kendra.QueryRequest is required.',
            }),
        };

        return response;
    }

    const queryParams: QueryRequest = JSON.parse(event.body);

    try {
        let queryResult: QueryResult = await kendraClient.query(queryParams).promise();
        queryResult = presignDocumentURIs(queryResult);
        response.body = JSON.stringify(queryResult);
    } catch (err) {
        console.log(err);
        response = {
            statusCode: 400,
            body: JSON.stringify({ message: 'Something went wrong' }),
        };
    }

    return response;
};

export { handler, presignDocumentURIs };
