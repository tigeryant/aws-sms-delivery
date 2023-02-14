# SMS delivery - serverless AWS demo
## Overview
This repo contains the source code of a serverless AWS SMS delivery system. The steps to send an SMS message are as follows:
1. The user makes an HTTP POST request to an endpoint, passing a request body (payload) in the following format:
```
{
	"text": "My message",
	"phone": "+449999999999"
}
```
Note that the value of the 'phone' property must adhere to the E164 international phone number format, and neither the 'text' nor 'phone' properties can be empty strings, or only whitespace.

2. The payload is then published to an SNS topic using the AWS integration type.
3. The SNS topic passes this message onto a subscriber, an SQS queue.
4. The message is pulled from the SQS queue by a Lambda function.
5. Assuming that the payload was passed in a valid format, the 'text' attribute is sent to the phone number defined in the 'phone' attribute via SNS.

## Architecture
Below is a diagram illustrating a conceptual overview of the architecture of this system.
<p align="center">
  <img src="https://i.imgur.com/1Hs9Mtw.png" height="440px"></img>
  <p>

## Deployment
The Serverless Framework was used to deploy the AWS lambda function in this stack.

## Testing
Jest was used to write unit tests for the Lambda function. The first test checks for an appropriate response when a valid SQS event object containing a valid payload is passed to the handler. The other tests check that the lambda fails gracefully in the case that the 'text' or 'phone' values are malformed. The tests are defined within the `./tests/unit` directory, and can be run by running `npm run test` from the root of the project directory.

## Stack
* AWS API Gateway
* AWS SNS
* AWS SQS
* AWS Lambda
* TypeScript
* Jest
* Serverless Framework
