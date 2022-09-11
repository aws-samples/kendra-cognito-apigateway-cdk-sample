import { APIGatewayProxyEventBase, Context } from 'aws-lambda';
import { handler as postQueryHandler, presignDocumentURIs } from './postQuery';
import * as AWS from 'aws-sdk';
import { mockKendraResponse } from './_mockKendraResponse';
import { QueryResult } from 'aws-sdk/clients/kendra';

const mockFetchKendraResponse = jest.fn(() => {
    return mockKendraResponse;
});

const mockPresignUrl = jest.fn(() => {
    return 'MOCK_SIGNED_URL';
});

jest.mock('aws-sdk', () => ({
    ...jest.requireActual('aws-sdk'),
    Kendra: jest.fn(() => {
        return {
            query: jest.fn((queryParams) => {
                return {
                    promise: () => {
                        return mockFetchKendraResponse();
                    },
                };
            }),
        };
    }),
    S3: jest.fn(() => {
        return {
            getSignedUrl: jest.fn((objParams) => {
                return mockPresignUrl();
            }),
        };
    }),
}));

describe('POST queries handler lambda', () => {
    describe('when the event body is missing', () => {
        it('responds with 400', async () => {
            const response = await postQueryHandler(
                {} as APIGatewayProxyEventBase<any>,
                {} as Context
            );

            expect(response.body).toEqual(
                JSON.stringify({
                    message:
                        'Request body missing. Request body of type Kendra.QueryRequest is required.',
                })
            );
        });
    });

    describe('when the event body is present and well-formed', () => {
        it('responds with 200 and a kendra QueryResult', async () => {
            const requestBody = {
                'AttributeFilter': {
                    'AndAllFilters': [
                        {
                            'EqualsTo': {
                                'Key': '_language_code',
                                'Value': {
                                    'StringValue': 'en',
                                },
                            },
                        },
                    ],
                },
                'IndexId': '8c652a92-5c02-4a1b-9113-ce59c6eec5c5',
                'PageNumber': 1,
                'PageSize': 10,
                'QueryText': 'test query',
            };

            const kendraSpy = jest.spyOn(AWS, 'Kendra');

            const response = await postQueryHandler(
                { body: JSON.stringify(requestBody) } as APIGatewayProxyEventBase<any>,
                {} as Context
            );

            // Kendra is "called" twice,
            // first to initialize/construct the client
            // and again to retrieve the query
            expect(kendraSpy).toHaveBeenCalledTimes(2);
            expect(mockFetchKendraResponse).toHaveBeenCalledTimes(1);

            const data = JSON.parse(response.body) as QueryResult;
            expect(data.ResultItems?.length).toEqual(8);
        });
    });

    describe('S3 pre-signer', () => {
        it('replaces document URIs with signed URLs', () => {
            const kendraSpy = jest.spyOn(AWS, 'S3');

            const result = presignDocumentURIs(mockKendraResponse);

            expect(result.ResultItems![0].DocumentURI).toEqual('MOCK_SIGNED_URL');
        });

        it('correctly caches documentURIs in the same result', () => {
            const kendraSpy = jest.spyOn(AWS, 'S3');

            const result = presignDocumentURIs(mockKendraResponse);

            // 8 total results, but only 6 calls to S3.getSignedUrl
            expect(mockPresignUrl).toHaveBeenCalledTimes(6);
        });
    });
});
