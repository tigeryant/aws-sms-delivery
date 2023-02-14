import baseSQSEvent from "../../baseSQSEvent";

const messageAsEmptyString = {
  ...baseSQSEvent,
  Records: [
    {
      messageId: "a55566f5-276d-47bc-9fde-47519670b368",
      receiptHandle:
        "AQEBvYEoTLMNiIRU4zhtrogYSxuCdWY9V82C1MsC7TnBin3huqoLBGjXMLOX4pKrZsEMtHL+3C/71M9vzVLN2B0hDFGq4uUyByVSZP6H0YJYH5xLVJWESJy+WFpBI80BmU8auvvaMrRt5BwD0sM4vndIa0W3o0P2NbLt6WyabAWZ7aRhHxsPkZJQ7QvCTjT7c+SDbn0ztpBeneIww3JE/TE4E48juTVPkrxLTq/adh/8Av1COo8BO4szI/6otNqfDICgUXZQjLEQebs7CpztFd5HoVXYnyQWFsXHKAGn0j3VAxo2iTObri34JBtEoxMkPi2icMaxKVNv0ZoZZwzdAhKIH3orbD3chhbh1qiwogE1azuZBEiH+aIGtZMPE0W1gJSDdyK55u51OKMW40obR2F5og==",
      body:
        "{\n" +
        '  "Type" : "Notification",\n' +
        '  "MessageId" : "619aae86-6ba5-5462-a676-f2e2d2006e59",\n' +
        '  "TopicArn" : "arn:aws:sns:eu-west-2:322928185466:ShieldpayTopic",\n' +
        '  "Message" : "{\\"text\\":\\"\\",\\"phone\\":\\"+447387407907\\"}",\n' +
        '  "Timestamp" : "2023-02-13T22:19:17.669Z",\n' +
        '  "SignatureVersion" : "1",\n' +
        '  "Signature" : "l5UE8qRcjHli60MPw6G/jZZLPQWkM7yHyRkDBMh+9nBdBwW1TgPP/QBiBrN3PeuKiKe1nhMm5B7uQ3X0G6xKVTEnccu8hwAI8jhvyrhClmqnhNHVfslcFMR650d5+dtqKJNyBUTXwCddnziHf1zc2/yXY0tsAtbWsmxGSZLAf601qlrf8yO7ofz+bryHYt2da/esGCXRWIhWCypu8tcrkDFhEvJSpHTR6UiVTENBOr+Q6/hLivUQ8dA9yO2ybKcmQ+2NmevDo18MyyRubmQoC3eP+zx5H/8a1XMX0CKdkW6+CDO4I15cxQD4S5619EdRCTMyeCTrfFhUi7DZ1aErCA==",\n' +
        '  "SigningCertURL" : "https://sns.eu-west-2.amazonaws.com/SimpleNotificationService-56e67fcb41f6fec09b0196692625d385.pem",\n' +
        '  "UnsubscribeURL" : "https://sns.eu-west-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:eu-west-2:322928185466:ShieldpayTopic:3f820a12-fb3d-4e2b-b22f-480fa02d92c3"\n' +
        "}",
      attributes: [Object],
      messageAttributes: {},
      md5OfBody: "98612588f9c8f2eab43d3618c23dd963",
      eventSource: "aws:sqs",
      eventSourceARN: "arn:aws:sqs:eu-west-2:322928185466:ShieldpayQueue",
      awsRegion: "eu-west-2",
    },
  ],
};

export default messageAsEmptyString;
