export const mockKendraResponse = {
    'QueryId': '2af5bd42-0ca9-4cf6-bafc-bb125fcf04c1',
    'ResultItems': [
        {
            'Id': '2af5bd42-0ca9-4cf6-bafc-bb125fcf04c1-028d35fb-0491-448c-b44a-a0fd195dfa86',
            'Type': 'ANSWER',
            'AdditionalAttributes': [
                {
                    'Key': 'AnswerText',
                    'ValueType': 'TEXT_WITH_HIGHLIGHTS_VALUE',
                    'Value': {
                        'TextWithHighlightsValue': {
                            'Text': 'Historically stocks have volatility, albeit we are seeing historic lows at the time I am \nwriting this. \n\n\nOptions can be used in conservative strategies to accomplish two beneficial things for \nyour portfolio: \n\n\nReduce the overall fluctuations in the value of your portfolio \n\n\nHelp you generate more income every year by employing a few strategies that will help \nyou juice gains from existing holdings. \n\n\nHow options can affect your overall holdings is a matter for each different type of \ninvestor.  If you are the type of investor who wants the maximum amount of return \nevery single year, there is a good chance options are not for you.',
                            'Highlights': [
                                {
                                    'BeginOffset': 13,
                                    'EndOffset': 19,
                                    'TopAnswer': false,
                                    'Type': 'STANDARD',
                                },
                                {
                                    'BeginOffset': 13,
                                    'EndOffset': 19,
                                    'TopAnswer': false,
                                    'Type': 'STANDARD',
                                },
                                {
                                    'BeginOffset': 107,
                                    'EndOffset': 114,
                                    'TopAnswer': false,
                                    'Type': 'STANDARD',
                                },
                                {
                                    'BeginOffset': 414,
                                    'EndOffset': 421,
                                    'TopAnswer': false,
                                    'Type': 'STANDARD',
                                },
                                {
                                    'BeginOffset': 620,
                                    'EndOffset': 627,
                                    'TopAnswer': false,
                                    'Type': 'STANDARD',
                                },
                            ],
                        },
                    },
                },
            ],
            'DocumentId': 's3://kendra-api-example/Options Trading For Newbies.pdf',
            'DocumentTitle': {
                'Text': 'Options Trading For Newbies',
                'Highlights': [
                    {
                        'BeginOffset': 0,
                        'EndOffset': 7,
                        'TopAnswer': false,
                        'Type': 'STANDARD',
                    },
                ],
            },
            'DocumentExcerpt': {
                'Text': 'Historically stocks have volatility, albeit we are seeing historic lows at the time I am \nwriting this. \n\n\nOptions can be used in conservative strategies to accomplish two beneficial things for \nyour portfolio: \n\n\nReduce the overall fluctuations in the value of your portfolio \n\n\nHelp you generate mo',
                'Highlights': [
                    {
                        'BeginOffset': 0,
                        'EndOffset': 300,
                        'TopAnswer': false,
                        'Type': 'STANDARD',
                    },
                ],
            },
            'DocumentURI':
                'https://s3.us-east-1.amazonaws.com/kendra-api-example/Options Trading For Newbies.pdf',
            'DocumentAttributes': [
                {
                    'Key': '_source_uri',
                    'Value': {
                        'StringValue':
                            'https://s3.us-east-1.amazonaws.com/kendra-api-example/Options Trading For Newbies.pdf',
                    },
                },
                {
                    'Key': '_excerpt_page_number',
                    'Value': {
                        'LongValue': 19,
                    },
                },
            ],
            'ScoreAttributes': {
                'ScoreConfidence': 'VERY_HIGH',
            },
            'FeedbackToken':
                'AYADeOR2xWYM7dlqFQeIrt3OUQsAXwABABVhd3MtY3J5cHRvLXB1YmxpYy1rZXkAREFpY1loSU5mc0g1WkdKSWF2Wkl6TE5KQ3gyQ29uUGhZb3VlLzB1aEkzNm16eHdvSWRtcHo1Mm1MaHhPMXM3eXZrdz09AAEAB2F3cy1rbXMAS2Fybjphd3M6a21zOnVzLWVhc3QtMTo3OTQyODk5MjcwNzA6a2V5LzA4YjVkYTRmLWQyOWEtNDU3Mi04OTAwLTRkZjMzN2VjYzljYwC4AQIBAHgooOi6yInIz2MNEHDdrAvnkUT4RDxeObjhZj0qNuvTbAE9FUFuW3DjgFL-YMZ9Bh1hAAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMiaBZ4yd1CQLGe7I3AgEQgDsNwsZ2h0Y2QrWAyfQr2javd0Yrf_DUIvQOJRuAmbXmxoeL3e1HG8kO42LhKbP4i0bYXRxmmErYtaLL7QIAAAAADAAAEAAAAAAAAAAAAAAAAAAhfIArrr7kKgn4aez8-x1c_____wAAAAEAAAAAAAAAAAAAAAEAAAF2W4G9nSwa9rb1tv6qvFiupDM40U0WuVKq2sAFeq9pHGslvr3a3Q5M__qh_TGgvRmDeisa4IThyLtGAZeReo4A8PU13L7zzvGwPIZ6weokdCv3FtFXbxb8d2Vfmz00GpYA0SHeQLzKn85VtcWXoUeP0_qPZJ2mqoZ-lxBLv80UATc0mhyelk5f8RT7fxO3yY3TxOIHUfrVjr9HdMrBXjrq1AV2WXVeND1qeYtIDEtDMZYRjDQlH78jF7dO6pP2ocbGxCEGFLFncFTZMxNYI-eLSTzVdptNEPeoM_PAgUu2UXPf33kG13-EvwgEGz4PTfjMmOhJtlpJi-msatYVB-hkJ_OyLv68K6cMetKlwqzfVCKu1r5D3n1X9mH9PvEzqAAAK_iY4AjC4KZ9-1I29JFg_vRua9gQSn0nV5LeHk4Za8wRnak5s48qi2atP7xEExJazk9tDCAc5gsxDLhJ9AG6vfIuUxbukUw2yeoRJFgKifyHxr6oY6P5OYdjDv31O_9sQhF1EY9bAGcwZQIwIZGOCV_JLm2_S4n4zx0F1uuA2GmbiZ6AoAQSIl3Sxwhz95TzKG6S1f9prfrZOR-IAjEAnQdmJMP2Q-shptWPct6WM9kVdGELv7y5A-Oa1_qPMSRYa0VQlvYQgR8GoXh4Ykjn.2af5bd42-0ca9-4cf6-bafc-bb125fcf04c1-028d35fb-0491-448c-b44a-a0fd195dfa86',
        },
        {
            'Id': '2af5bd42-0ca9-4cf6-bafc-bb125fcf04c1-d50e60ee-9844-4eb8-983e-181432b0287e',
            'Type': 'ANSWER',
            'AdditionalAttributes': [
                {
                    'Key': 'AnswerText',
                    'ValueType': 'TEXT_WITH_HIGHLIGHTS_VALUE',
                    'Value': {
                        'TextWithHighlightsValue': {
                            'Text': "Let's use a simple example on the next page to demonstrate how it works... (thanks to \ntastytrade) \n\n\nSo if we break this down: implied volatility is directly related to the price of an option.  \n\n\nOptions on stocks which possess high implied volatility ultimately have more premium \n(buyers pay more for the option and option sellers collect more premium when they \nsell the contract) than options on stocks with low implied volatility.  \n\n\nTherefore, sellers love when implied volatility is high because they get more premium/\ncredit and buyers enjoy lower implied volatility because they can buy the options for \ncheap.  \n\n\n!10\n\n\n\n\n\n\n\nThis concept is important to grasp, and but it is not as important as ranking IV \n(implied volatility).",
                            'Highlights': [
                                {
                                    'BeginOffset': 186,
                                    'EndOffset': 192,
                                    'TopAnswer': false,
                                    'Type': 'STANDARD',
                                },
                                {
                                    'BeginOffset': 198,
                                    'EndOffset': 205,
                                    'TopAnswer': false,
                                    'Type': 'STANDARD',
                                },
                                {
                                    'BeginOffset': 209,
                                    'EndOffset': 215,
                                    'TopAnswer': false,
                                    'Type': 'STANDARD',
                                },
                                {
                                    'BeginOffset': 309,
                                    'EndOffset': 315,
                                    'TopAnswer': false,
                                    'Type': 'STANDARD',
                                },
                                {
                                    'BeginOffset': 320,
                                    'EndOffset': 326,
                                    'TopAnswer': false,
                                    'Type': 'STANDARD',
                                },
                                {
                                    'BeginOffset': 391,
                                    'EndOffset': 398,
                                    'TopAnswer': false,
                                    'Type': 'STANDARD',
                                },
                                {
                                    'BeginOffset': 402,
                                    'EndOffset': 408,
                                    'TopAnswer': false,
                                    'Type': 'STANDARD',
                                },
                                {
                                    'BeginOffset': 603,
                                    'EndOffset': 610,
                                    'TopAnswer': false,
                                    'Type': 'STANDARD',
                                },
                            ],
                        },
                    },
                },
            ],
            'DocumentId': 's3://kendra-api-example/Options Trading For Newbies.pdf',
            'DocumentTitle': {
                'Text': 'Options Trading For Newbies',
                'Highlights': [
                    {
                        'BeginOffset': 0,
                        'EndOffset': 7,
                        'TopAnswer': false,
                        'Type': 'STANDARD',
                    },
                ],
            },
            'DocumentExcerpt': {
                'Text': "Let's use a simple example on the next page to demonstrate how it works... (thanks to \ntastytrade) \n\n\nSo if we break this down: implied volatility is directly related to the price of an option.  \n\n\nOptions on stocks which possess high implied volatility ultimately have more premium \n(buyers pay more",
                'Highlights': [
                    {
                        'BeginOffset': 0,
                        'EndOffset': 300,
                        'TopAnswer': false,
                        'Type': 'STANDARD',
                    },
                ],
            },
            'DocumentURI':
                'https://s3.us-east-1.amazonaws.com/kendra-api-example/Options Trading For Newbies.pdf',
            'DocumentAttributes': [
                {
                    'Key': '_source_uri',
                    'Value': {
                        'StringValue':
                            'https://s3.us-east-1.amazonaws.com/kendra-api-example/Options Trading For Newbies.pdf',
                    },
                },
                {
                    'Key': '_excerpt_page_number',
                    'Value': {
                        'LongValue': 10,
                    },
                },
            ],
            'ScoreAttributes': {
                'ScoreConfidence': 'HIGH',
            },
            'FeedbackToken':
                'AYADeOR2xWYM7dlqFQeIrt3OUQsAXwABABVhd3MtY3J5cHRvLXB1YmxpYy1rZXkAREFpY1loSU5mc0g1WkdKSWF2Wkl6TE5KQ3gyQ29uUGhZb3VlLzB1aEkzNm16eHdvSWRtcHo1Mm1MaHhPMXM3eXZrdz09AAEAB2F3cy1rbXMAS2Fybjphd3M6a21zOnVzLWVhc3QtMTo3OTQyODk5MjcwNzA6a2V5LzA4YjVkYTRmLWQyOWEtNDU3Mi04OTAwLTRkZjMzN2VjYzljYwC4AQIBAHgooOi6yInIz2MNEHDdrAvnkUT4RDxeObjhZj0qNuvTbAE9FUFuW3DjgFL-YMZ9Bh1hAAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMiaBZ4yd1CQLGe7I3AgEQgDsNwsZ2h0Y2QrWAyfQr2javd0Yrf_DUIvQOJRuAmbXmxoeL3e1HG8kO42LhKbP4i0bYXRxmmErYtaLL7QIAAAAADAAAEAAAAAAAAAAAAAAAAAAhfIArrr7kKgn4aez8-x1c_____wAAAAEAAAAAAAAAAAAAAAEAAAF2W4G9nSwa9rb1tv6qvFiupDM40U0WuVKq2sAFeq9pHGslvr3a3Q5M__qh_TGgvRmDeisa4IThyLtGAZeReo4A8PU13L7zzvGwPIZ6weokdCv3FtFXbxb8d2Vfmz00GpYA0SHeQLzKn85VtcWXoUeP0_qPZJ2mqoZ-lxBLv80UATc0mhyelk5f8RT7fxO3yY3TxOIHUfrVjr9HdMrBXjrq1AV2WXVeND1qeYtIDEtDMZYRjDQlH78jF7dO6pP2ocbGxCEGFLFncFTZMxNYI-eLSTzVdptNEPeoM_PAgUu2UXPf33kG13-EvwgEGz4PTfjMmOhJtlpJi-msatYVB-hkJ_OyLv68K6cMetKlwqzfVCKu1r5D3n1X9mH9PvEzqAAAK_iY4AjC4KZ9-1I29JFg_vRua9gQSn0nV5LeHk4Za8wRnak5s48qi2atP7xEExJazk9tDCAc5gsxDLhJ9AG6vfIuUxbukUw2yeoRJFgKifyHxr6oY6P5OYdjDv31O_9sQhF1EY9bAGcwZQIwIZGOCV_JLm2_S4n4zx0F1uuA2GmbiZ6AoAQSIl3Sxwhz95TzKG6S1f9prfrZOR-IAjEAnQdmJMP2Q-shptWPct6WM9kVdGELv7y5A-Oa1_qPMSRYa0VQlvYQgR8GoXh4Ykjn.2af5bd42-0ca9-4cf6-bafc-bb125fcf04c1-d50e60ee-9844-4eb8-983e-181432b0287e',
        },
        {
            'Id': '2af5bd42-0ca9-4cf6-bafc-bb125fcf04c1-d8fe9a71-4dfa-42d5-9ec9-6d53af903a76',
            'Type': 'DOCUMENT',
            'AdditionalAttributes': [],
            'DocumentId': 's3://kendra-api-example/Options Trading For Newbies.pdf',
            'DocumentTitle': {
                'Text': 'Options Trading For Newbies',
                'Highlights': [
                    {
                        'BeginOffset': 0,
                        'EndOffset': 7,
                        'TopAnswer': false,
                        'Type': 'STANDARD',
                    },
                ],
            },
            'DocumentExcerpt': {
                'Text': '...This gets into value vs cost. \n\n\nI hope this helps you choose the right broker for your situation. \n\n\n!16\n\n\n\n\n\n\n\nThe 5 Laws of Options Trading Everyone Should Obey \n\n\nMost new investors think the options market is a place to take small accounts and \nvirtually...',
                'Highlights': [
                    {
                        'BeginOffset': 24,
                        'EndOffset': 26,
                        'TopAnswer': false,
                        'Type': 'STANDARD',
                    },
                    {
                        'BeginOffset': 130,
                        'EndOffset': 137,
                        'TopAnswer': false,
                        'Type': 'STANDARD',
                    },
                    {
                        'BeginOffset': 199,
                        'EndOffset': 206,
                        'TopAnswer': false,
                        'Type': 'STANDARD',
                    },
                ],
            },
            'DocumentURI':
                'https://s3.us-east-1.amazonaws.com/kendra-api-example/Options Trading For Newbies.pdf',
            'DocumentAttributes': [
                {
                    'Key': '_source_uri',
                    'Value': {
                        'StringValue':
                            'https://s3.us-east-1.amazonaws.com/kendra-api-example/Options Trading For Newbies.pdf',
                    },
                },
                {
                    'Key': '_excerpt_page_number',
                    'Value': {
                        'LongValue': 16,
                    },
                },
            ],
            'ScoreAttributes': {
                'ScoreConfidence': 'HIGH',
            },
            'FeedbackToken':
                'AYADeOR2xWYM7dlqFQeIrt3OUQsAXwABABVhd3MtY3J5cHRvLXB1YmxpYy1rZXkAREFpY1loSU5mc0g1WkdKSWF2Wkl6TE5KQ3gyQ29uUGhZb3VlLzB1aEkzNm16eHdvSWRtcHo1Mm1MaHhPMXM3eXZrdz09AAEAB2F3cy1rbXMAS2Fybjphd3M6a21zOnVzLWVhc3QtMTo3OTQyODk5MjcwNzA6a2V5LzA4YjVkYTRmLWQyOWEtNDU3Mi04OTAwLTRkZjMzN2VjYzljYwC4AQIBAHgooOi6yInIz2MNEHDdrAvnkUT4RDxeObjhZj0qNuvTbAE9FUFuW3DjgFL-YMZ9Bh1hAAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMiaBZ4yd1CQLGe7I3AgEQgDsNwsZ2h0Y2QrWAyfQr2javd0Yrf_DUIvQOJRuAmbXmxoeL3e1HG8kO42LhKbP4i0bYXRxmmErYtaLL7QIAAAAADAAAEAAAAAAAAAAAAAAAAAAhfIArrr7kKgn4aez8-x1c_____wAAAAEAAAAAAAAAAAAAAAEAAAF2W4G9nSwa9rb1tv6qvFiupDM40U0WuVKq2sAFeq9pHGslvr3a3Q5M__qh_TGgvRmDeisa4IThyLtGAZeReo4A8PU13L7zzvGwPIZ6weokdCv3FtFXbxb8d2Vfmz00GpYA0SHeQLzKn85VtcWXoUeP0_qPZJ2mqoZ-lxBLv80UATc0mhyelk5f8RT7fxO3yY3TxOIHUfrVjr9HdMrBXjrq1AV2WXVeND1qeYtIDEtDMZYRjDQlH78jF7dO6pP2ocbGxCEGFLFncFTZMxNYI-eLSTzVdptNEPeoM_PAgUu2UXPf33kG13-EvwgEGz4PTfjMmOhJtlpJi-msatYVB-hkJ_OyLv68K6cMetKlwqzfVCKu1r5D3n1X9mH9PvEzqAAAK_iY4AjC4KZ9-1I29JFg_vRua9gQSn0nV5LeHk4Za8wRnak5s48qi2atP7xEExJazk9tDCAc5gsxDLhJ9AG6vfIuUxbukUw2yeoRJFgKifyHxr6oY6P5OYdjDv31O_9sQhF1EY9bAGcwZQIwIZGOCV_JLm2_S4n4zx0F1uuA2GmbiZ6AoAQSIl3Sxwhz95TzKG6S1f9prfrZOR-IAjEAnQdmJMP2Q-shptWPct6WM9kVdGELv7y5A-Oa1_qPMSRYa0VQlvYQgR8GoXh4Ykjn.2af5bd42-0ca9-4cf6-bafc-bb125fcf04c1-d8fe9a71-4dfa-42d5-9ec9-6d53af903a76',
        },
        {
            'Id': '2af5bd42-0ca9-4cf6-bafc-bb125fcf04c1-d355aeb9-ec61-4db5-99ff-90d254effdb8',
            'Type': 'DOCUMENT',
            'AdditionalAttributes': [],
            'DocumentId':
                's3://kendra-api-example/The Little Book That Beats the Market - Joel Greenblatt.pdf',
            'DocumentTitle': {
                'Text': 'The Little Book That Beats the Market - Joel Greenblatt',
                'Highlights': [],
            },
            'DocumentExcerpt': {
                'Text': '...flexibility, and breadth of\ndata sources. Most will generate a reasonable set of magic\nformula stocks if certain conditions are applied, which are\ndiscussed below.\n\n\nOne screening option was created specifically for this\nbook, magicformulainvesting.com...',
                'Highlights': [
                    {
                        'BeginOffset': 98,
                        'EndOffset': 104,
                        'TopAnswer': false,
                        'Type': 'STANDARD',
                    },
                    {
                        'BeginOffset': 183,
                        'EndOffset': 189,
                        'TopAnswer': false,
                        'Type': 'STANDARD',
                    },
                ],
            },
            'DocumentURI':
                'https://s3.us-east-1.amazonaws.com/kendra-api-example/The Little Book That Beats the Market - Joel Greenblatt.pdf',
            'DocumentAttributes': [
                {
                    'Key': '_source_uri',
                    'Value': {
                        'StringValue':
                            'https://s3.us-east-1.amazonaws.com/kendra-api-example/The Little Book That Beats the Market - Joel Greenblatt.pdf',
                    },
                },
                {
                    'Key': '_excerpt_page_number',
                    'Value': {
                        'LongValue': 156,
                    },
                },
            ],
            'ScoreAttributes': {
                'ScoreConfidence': 'MEDIUM',
            },
            'FeedbackToken':
                'AYADeOR2xWYM7dlqFQeIrt3OUQsAXwABABVhd3MtY3J5cHRvLXB1YmxpYy1rZXkAREFpY1loSU5mc0g1WkdKSWF2Wkl6TE5KQ3gyQ29uUGhZb3VlLzB1aEkzNm16eHdvSWRtcHo1Mm1MaHhPMXM3eXZrdz09AAEAB2F3cy1rbXMAS2Fybjphd3M6a21zOnVzLWVhc3QtMTo3OTQyODk5MjcwNzA6a2V5LzA4YjVkYTRmLWQyOWEtNDU3Mi04OTAwLTRkZjMzN2VjYzljYwC4AQIBAHgooOi6yInIz2MNEHDdrAvnkUT4RDxeObjhZj0qNuvTbAE9FUFuW3DjgFL-YMZ9Bh1hAAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMiaBZ4yd1CQLGe7I3AgEQgDsNwsZ2h0Y2QrWAyfQr2javd0Yrf_DUIvQOJRuAmbXmxoeL3e1HG8kO42LhKbP4i0bYXRxmmErYtaLL7QIAAAAADAAAEAAAAAAAAAAAAAAAAAAhfIArrr7kKgn4aez8-x1c_____wAAAAEAAAAAAAAAAAAAAAEAAAF2W4G9nSwa9rb1tv6qvFiupDM40U0WuVKq2sAFeq9pHGslvr3a3Q5M__qh_TGgvRmDeisa4IThyLtGAZeReo4A8PU13L7zzvGwPIZ6weokdCv3FtFXbxb8d2Vfmz00GpYA0SHeQLzKn85VtcWXoUeP0_qPZJ2mqoZ-lxBLv80UATc0mhyelk5f8RT7fxO3yY3TxOIHUfrVjr9HdMrBXjrq1AV2WXVeND1qeYtIDEtDMZYRjDQlH78jF7dO6pP2ocbGxCEGFLFncFTZMxNYI-eLSTzVdptNEPeoM_PAgUu2UXPf33kG13-EvwgEGz4PTfjMmOhJtlpJi-msatYVB-hkJ_OyLv68K6cMetKlwqzfVCKu1r5D3n1X9mH9PvEzqAAAK_iY4AjC4KZ9-1I29JFg_vRua9gQSn0nV5LeHk4Za8wRnak5s48qi2atP7xEExJazk9tDCAc5gsxDLhJ9AG6vfIuUxbukUw2yeoRJFgKifyHxr6oY6P5OYdjDv31O_9sQhF1EY9bAGcwZQIwIZGOCV_JLm2_S4n4zx0F1uuA2GmbiZ6AoAQSIl3Sxwhz95TzKG6S1f9prfrZOR-IAjEAnQdmJMP2Q-shptWPct6WM9kVdGELv7y5A-Oa1_qPMSRYa0VQlvYQgR8GoXh4Ykjn.2af5bd42-0ca9-4cf6-bafc-bb125fcf04c1-d355aeb9-ec61-4db5-99ff-90d254effdb8',
        },
        {
            'Id': '2af5bd42-0ca9-4cf6-bafc-bb125fcf04c1-f7912a73-86c1-404c-b8cc-29e9f2db74e9',
            'Type': 'DOCUMENT',
            'AdditionalAttributes': [],
            'DocumentId': 's3://kendra-api-example/Day Trading for Dummies.pdf',
            'DocumentTitle': {
                'Text': 'Day Trading for Dummies',
                'Highlights': [],
            },
            'DocumentExcerpt': {
                'Text': '...It’s “I’m smart enough to\nfigure out what the market is telling me” vs. “I’m smarter than the market.”\nThe difference is crucial to your success.\n\n\nRevising and troubleshooting \nyour trading plan\nStrong discipline is...',
                'Highlights': [
                    {
                        'BeginOffset': 71,
                        'EndOffset': 73,
                        'TopAnswer': false,
                        'Type': 'STANDARD',
                    },
                ],
            },
            'DocumentURI':
                'https://s3.us-east-1.amazonaws.com/kendra-api-example/Day Trading for Dummies.pdf',
            'DocumentAttributes': [
                {
                    'Key': '_source_uri',
                    'Value': {
                        'StringValue':
                            'https://s3.us-east-1.amazonaws.com/kendra-api-example/Day Trading for Dummies.pdf',
                    },
                },
                {
                    'Key': '_excerpt_page_number',
                    'Value': {
                        'LongValue': 159,
                    },
                },
            ],
            'ScoreAttributes': {
                'ScoreConfidence': 'MEDIUM',
            },
            'FeedbackToken':
                'AYADeOR2xWYM7dlqFQeIrt3OUQsAXwABABVhd3MtY3J5cHRvLXB1YmxpYy1rZXkAREFpY1loSU5mc0g1WkdKSWF2Wkl6TE5KQ3gyQ29uUGhZb3VlLzB1aEkzNm16eHdvSWRtcHo1Mm1MaHhPMXM3eXZrdz09AAEAB2F3cy1rbXMAS2Fybjphd3M6a21zOnVzLWVhc3QtMTo3OTQyODk5MjcwNzA6a2V5LzA4YjVkYTRmLWQyOWEtNDU3Mi04OTAwLTRkZjMzN2VjYzljYwC4AQIBAHgooOi6yInIz2MNEHDdrAvnkUT4RDxeObjhZj0qNuvTbAE9FUFuW3DjgFL-YMZ9Bh1hAAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMiaBZ4yd1CQLGe7I3AgEQgDsNwsZ2h0Y2QrWAyfQr2javd0Yrf_DUIvQOJRuAmbXmxoeL3e1HG8kO42LhKbP4i0bYXRxmmErYtaLL7QIAAAAADAAAEAAAAAAAAAAAAAAAAAAhfIArrr7kKgn4aez8-x1c_____wAAAAEAAAAAAAAAAAAAAAEAAAF2W4G9nSwa9rb1tv6qvFiupDM40U0WuVKq2sAFeq9pHGslvr3a3Q5M__qh_TGgvRmDeisa4IThyLtGAZeReo4A8PU13L7zzvGwPIZ6weokdCv3FtFXbxb8d2Vfmz00GpYA0SHeQLzKn85VtcWXoUeP0_qPZJ2mqoZ-lxBLv80UATc0mhyelk5f8RT7fxO3yY3TxOIHUfrVjr9HdMrBXjrq1AV2WXVeND1qeYtIDEtDMZYRjDQlH78jF7dO6pP2ocbGxCEGFLFncFTZMxNYI-eLSTzVdptNEPeoM_PAgUu2UXPf33kG13-EvwgEGz4PTfjMmOhJtlpJi-msatYVB-hkJ_OyLv68K6cMetKlwqzfVCKu1r5D3n1X9mH9PvEzqAAAK_iY4AjC4KZ9-1I29JFg_vRua9gQSn0nV5LeHk4Za8wRnak5s48qi2atP7xEExJazk9tDCAc5gsxDLhJ9AG6vfIuUxbukUw2yeoRJFgKifyHxr6oY6P5OYdjDv31O_9sQhF1EY9bAGcwZQIwIZGOCV_JLm2_S4n4zx0F1uuA2GmbiZ6AoAQSIl3Sxwhz95TzKG6S1f9prfrZOR-IAjEAnQdmJMP2Q-shptWPct6WM9kVdGELv7y5A-Oa1_qPMSRYa0VQlvYQgR8GoXh4Ykjn.2af5bd42-0ca9-4cf6-bafc-bb125fcf04c1-f7912a73-86c1-404c-b8cc-29e9f2db74e9',
        },
        {
            'Id': '2af5bd42-0ca9-4cf6-bafc-bb125fcf04c1-56c21955-e768-46c2-b5a5-15f1e8b8494e',
            'Type': 'DOCUMENT',
            'AdditionalAttributes': [],
            'DocumentId': 's3://kendra-api-example/Quantitative Trading.pdf',
            'DocumentTitle': {
                'Text': 'Quantitative Trading',
                'Highlights': [],
            },
            'DocumentExcerpt': {
                'Text': '...the underlying stock prices themselves. While such predictions of\nvolatility regime switches can be of great value to options traders,\nthey are unfortunately of no help to stock traders...',
                'Highlights': [
                    {
                        'BeginOffset': 18,
                        'EndOffset': 23,
                        'TopAnswer': false,
                        'Type': 'STANDARD',
                    },
                    {
                        'BeginOffset': 121,
                        'EndOffset': 128,
                        'TopAnswer': false,
                        'Type': 'STANDARD',
                    },
                    {
                        'BeginOffset': 175,
                        'EndOffset': 180,
                        'TopAnswer': false,
                        'Type': 'STANDARD',
                    },
                ],
            },
            'DocumentURI':
                'https://s3.us-east-1.amazonaws.com/kendra-api-example/Quantitative Trading.pdf',
            'DocumentAttributes': [
                {
                    'Key': '_source_uri',
                    'Value': {
                        'StringValue':
                            'https://s3.us-east-1.amazonaws.com/kendra-api-example/Quantitative Trading.pdf',
                    },
                },
                {
                    'Key': '_excerpt_page_number',
                    'Value': {
                        'LongValue': 142,
                    },
                },
            ],
            'ScoreAttributes': {
                'ScoreConfidence': 'MEDIUM',
            },
            'FeedbackToken':
                'AYADeOR2xWYM7dlqFQeIrt3OUQsAXwABABVhd3MtY3J5cHRvLXB1YmxpYy1rZXkAREFpY1loSU5mc0g1WkdKSWF2Wkl6TE5KQ3gyQ29uUGhZb3VlLzB1aEkzNm16eHdvSWRtcHo1Mm1MaHhPMXM3eXZrdz09AAEAB2F3cy1rbXMAS2Fybjphd3M6a21zOnVzLWVhc3QtMTo3OTQyODk5MjcwNzA6a2V5LzA4YjVkYTRmLWQyOWEtNDU3Mi04OTAwLTRkZjMzN2VjYzljYwC4AQIBAHgooOi6yInIz2MNEHDdrAvnkUT4RDxeObjhZj0qNuvTbAE9FUFuW3DjgFL-YMZ9Bh1hAAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMiaBZ4yd1CQLGe7I3AgEQgDsNwsZ2h0Y2QrWAyfQr2javd0Yrf_DUIvQOJRuAmbXmxoeL3e1HG8kO42LhKbP4i0bYXRxmmErYtaLL7QIAAAAADAAAEAAAAAAAAAAAAAAAAAAhfIArrr7kKgn4aez8-x1c_____wAAAAEAAAAAAAAAAAAAAAEAAAF2W4G9nSwa9rb1tv6qvFiupDM40U0WuVKq2sAFeq9pHGslvr3a3Q5M__qh_TGgvRmDeisa4IThyLtGAZeReo4A8PU13L7zzvGwPIZ6weokdCv3FtFXbxb8d2Vfmz00GpYA0SHeQLzKn85VtcWXoUeP0_qPZJ2mqoZ-lxBLv80UATc0mhyelk5f8RT7fxO3yY3TxOIHUfrVjr9HdMrBXjrq1AV2WXVeND1qeYtIDEtDMZYRjDQlH78jF7dO6pP2ocbGxCEGFLFncFTZMxNYI-eLSTzVdptNEPeoM_PAgUu2UXPf33kG13-EvwgEGz4PTfjMmOhJtlpJi-msatYVB-hkJ_OyLv68K6cMetKlwqzfVCKu1r5D3n1X9mH9PvEzqAAAK_iY4AjC4KZ9-1I29JFg_vRua9gQSn0nV5LeHk4Za8wRnak5s48qi2atP7xEExJazk9tDCAc5gsxDLhJ9AG6vfIuUxbukUw2yeoRJFgKifyHxr6oY6P5OYdjDv31O_9sQhF1EY9bAGcwZQIwIZGOCV_JLm2_S4n4zx0F1uuA2GmbiZ6AoAQSIl3Sxwhz95TzKG6S1f9prfrZOR-IAjEAnQdmJMP2Q-shptWPct6WM9kVdGELv7y5A-Oa1_qPMSRYa0VQlvYQgR8GoXh4Ykjn.2af5bd42-0ca9-4cf6-bafc-bb125fcf04c1-56c21955-e768-46c2-b5a5-15f1e8b8494e',
        },
        {
            'Id': '2af5bd42-0ca9-4cf6-bafc-bb125fcf04c1-a53b396f-69d0-43d1-9a6b-c39785d17680',
            'Type': 'DOCUMENT',
            'AdditionalAttributes': [],
            'DocumentId':
                "s3://kendra-api-example/Day Trading vs. Swing Trading_ What's the Difference_.html",
            'DocumentTitle': {
                'Highlights': [],
            },
            'DocumentExcerpt': {
                'Text': "...Swing Trading\n\n\n\n\t\n\nKey Differences\n\n\n\n\t\n\nFAQs\n\n\n\n\t\n\nThe Bottom Line\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n Trading Strategies\n \n\n\n Day Trading\n\n\n\n\nDay Trading vs. Swing Trading: What's the Difference?\n\n\n\n\n\n\n\nBy\n\nChristina Majaski\n\n\n\n\n\n\n\n\n\n\n \n\nFull Bio\n\n\t\n \n\n\nLinkedIn\n \n\t\n \n\n\nTwitter\n \n\n\n\n\nChristina Majaski...",
                'Highlights': [
                    {
                        'BeginOffset': 142,
                        'EndOffset': 144,
                        'TopAnswer': false,
                        'Type': 'STANDARD',
                    },
                ],
            },
            'DocumentURI':
                "https://s3.us-east-1.amazonaws.com/kendra-api-example/Day Trading vs. Swing Trading_ What's the Difference_.html",
            'DocumentAttributes': [
                {
                    'Key': '_source_uri',
                    'Value': {
                        'StringValue':
                            "https://s3.us-east-1.amazonaws.com/kendra-api-example/Day Trading vs. Swing Trading_ What's the Difference_.html",
                    },
                },
            ],
            'ScoreAttributes': {
                'ScoreConfidence': 'MEDIUM',
            },
            'FeedbackToken':
                'AYADeOR2xWYM7dlqFQeIrt3OUQsAXwABABVhd3MtY3J5cHRvLXB1YmxpYy1rZXkAREFpY1loSU5mc0g1WkdKSWF2Wkl6TE5KQ3gyQ29uUGhZb3VlLzB1aEkzNm16eHdvSWRtcHo1Mm1MaHhPMXM3eXZrdz09AAEAB2F3cy1rbXMAS2Fybjphd3M6a21zOnVzLWVhc3QtMTo3OTQyODk5MjcwNzA6a2V5LzA4YjVkYTRmLWQyOWEtNDU3Mi04OTAwLTRkZjMzN2VjYzljYwC4AQIBAHgooOi6yInIz2MNEHDdrAvnkUT4RDxeObjhZj0qNuvTbAE9FUFuW3DjgFL-YMZ9Bh1hAAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMiaBZ4yd1CQLGe7I3AgEQgDsNwsZ2h0Y2QrWAyfQr2javd0Yrf_DUIvQOJRuAmbXmxoeL3e1HG8kO42LhKbP4i0bYXRxmmErYtaLL7QIAAAAADAAAEAAAAAAAAAAAAAAAAAAhfIArrr7kKgn4aez8-x1c_____wAAAAEAAAAAAAAAAAAAAAEAAAF2W4G9nSwa9rb1tv6qvFiupDM40U0WuVKq2sAFeq9pHGslvr3a3Q5M__qh_TGgvRmDeisa4IThyLtGAZeReo4A8PU13L7zzvGwPIZ6weokdCv3FtFXbxb8d2Vfmz00GpYA0SHeQLzKn85VtcWXoUeP0_qPZJ2mqoZ-lxBLv80UATc0mhyelk5f8RT7fxO3yY3TxOIHUfrVjr9HdMrBXjrq1AV2WXVeND1qeYtIDEtDMZYRjDQlH78jF7dO6pP2ocbGxCEGFLFncFTZMxNYI-eLSTzVdptNEPeoM_PAgUu2UXPf33kG13-EvwgEGz4PTfjMmOhJtlpJi-msatYVB-hkJ_OyLv68K6cMetKlwqzfVCKu1r5D3n1X9mH9PvEzqAAAK_iY4AjC4KZ9-1I29JFg_vRua9gQSn0nV5LeHk4Za8wRnak5s48qi2atP7xEExJazk9tDCAc5gsxDLhJ9AG6vfIuUxbukUw2yeoRJFgKifyHxr6oY6P5OYdjDv31O_9sQhF1EY9bAGcwZQIwIZGOCV_JLm2_S4n4zx0F1uuA2GmbiZ6AoAQSIl3Sxwhz95TzKG6S1f9prfrZOR-IAjEAnQdmJMP2Q-shptWPct6WM9kVdGELv7y5A-Oa1_qPMSRYa0VQlvYQgR8GoXh4Ykjn.2af5bd42-0ca9-4cf6-bafc-bb125fcf04c1-a53b396f-69d0-43d1-9a6b-c39785d17680',
        },
        {
            'Id': '2af5bd42-0ca9-4cf6-bafc-bb125fcf04c1-bcc76283-558a-4d3c-aab0-294166af7328',
            'Type': 'DOCUMENT',
            'AdditionalAttributes': [],
            'DocumentId': 's3://kendra-api-example/Intra-Day Trading Strategies  (2003).pdf',
            'DocumentTitle': {
                'Text': 'Intra-Day Trading Strategies  (2003)',
                'Highlights': [],
            },
            'DocumentExcerpt': {
                'Text': '...ImClone Systems Inc. - Weekly\nAugust 5, 2001 thru January 25, 2002\n\n\nA - 3\n\n\n\n\n\n\n\nCOH - Coach Inc. – Daily\nMarch 21, 2003 thru April 28, 2003\n\n\nStocks play out in the \nThrees.  When a new 3-\n\n\nday high is made the \nfirst 2 period Pullback \nsets-up a good Risk-\nto-Reward entry if the \nImpulse is...',
                'Highlights': [
                    {
                        'BeginOffset': 147,
                        'EndOffset': 153,
                        'TopAnswer': false,
                        'Type': 'STANDARD',
                    },
                ],
            },
            'DocumentURI':
                'https://s3.us-east-1.amazonaws.com/kendra-api-example/Intra-Day Trading Strategies  (2003).pdf',
            'DocumentAttributes': [
                {
                    'Key': '_source_uri',
                    'Value': {
                        'StringValue':
                            'https://s3.us-east-1.amazonaws.com/kendra-api-example/Intra-Day Trading Strategies  (2003).pdf',
                    },
                },
                {
                    'Key': '_excerpt_page_number',
                    'Value': {
                        'LongValue': 2,
                    },
                },
            ],
            'ScoreAttributes': {
                'ScoreConfidence': 'MEDIUM',
            },
            'FeedbackToken':
                'AYADeOR2xWYM7dlqFQeIrt3OUQsAXwABABVhd3MtY3J5cHRvLXB1YmxpYy1rZXkAREFpY1loSU5mc0g1WkdKSWF2Wkl6TE5KQ3gyQ29uUGhZb3VlLzB1aEkzNm16eHdvSWRtcHo1Mm1MaHhPMXM3eXZrdz09AAEAB2F3cy1rbXMAS2Fybjphd3M6a21zOnVzLWVhc3QtMTo3OTQyODk5MjcwNzA6a2V5LzA4YjVkYTRmLWQyOWEtNDU3Mi04OTAwLTRkZjMzN2VjYzljYwC4AQIBAHgooOi6yInIz2MNEHDdrAvnkUT4RDxeObjhZj0qNuvTbAE9FUFuW3DjgFL-YMZ9Bh1hAAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMiaBZ4yd1CQLGe7I3AgEQgDsNwsZ2h0Y2QrWAyfQr2javd0Yrf_DUIvQOJRuAmbXmxoeL3e1HG8kO42LhKbP4i0bYXRxmmErYtaLL7QIAAAAADAAAEAAAAAAAAAAAAAAAAAAhfIArrr7kKgn4aez8-x1c_____wAAAAEAAAAAAAAAAAAAAAEAAAF2W4G9nSwa9rb1tv6qvFiupDM40U0WuVKq2sAFeq9pHGslvr3a3Q5M__qh_TGgvRmDeisa4IThyLtGAZeReo4A8PU13L7zzvGwPIZ6weokdCv3FtFXbxb8d2Vfmz00GpYA0SHeQLzKn85VtcWXoUeP0_qPZJ2mqoZ-lxBLv80UATc0mhyelk5f8RT7fxO3yY3TxOIHUfrVjr9HdMrBXjrq1AV2WXVeND1qeYtIDEtDMZYRjDQlH78jF7dO6pP2ocbGxCEGFLFncFTZMxNYI-eLSTzVdptNEPeoM_PAgUu2UXPf33kG13-EvwgEGz4PTfjMmOhJtlpJi-msatYVB-hkJ_OyLv68K6cMetKlwqzfVCKu1r5D3n1X9mH9PvEzqAAAK_iY4AjC4KZ9-1I29JFg_vRua9gQSn0nV5LeHk4Za8wRnak5s48qi2atP7xEExJazk9tDCAc5gsxDLhJ9AG6vfIuUxbukUw2yeoRJFgKifyHxr6oY6P5OYdjDv31O_9sQhF1EY9bAGcwZQIwIZGOCV_JLm2_S4n4zx0F1uuA2GmbiZ6AoAQSIl3Sxwhz95TzKG6S1f9prfrZOR-IAjEAnQdmJMP2Q-shptWPct6WM9kVdGELv7y5A-Oa1_qPMSRYa0VQlvYQgR8GoXh4Ykjn.2af5bd42-0ca9-4cf6-bafc-bb125fcf04c1-bcc76283-558a-4d3c-aab0-294166af7328',
        },
    ],
    'FacetResults': [
        {
            'DocumentAttributeKey': '_file_type',
            'DocumentAttributeValueType': 'STRING_VALUE',
            'DocumentAttributeValueCountPairs': [
                {
                    'DocumentAttributeValue': {
                        'StringValue': 'PDF',
                    },
                    'Count': 5,
                },
                {
                    'DocumentAttributeValue': {
                        'StringValue': 'HTML',
                    },
                    'Count': 1,
                },
            ],
        },
    ],
    'TotalNumberOfResults': 8,
};
