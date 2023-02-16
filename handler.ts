import * as AWS from "aws-sdk"
import { SQSEvent } from "aws-lambda"

interface Params {
    Message: string
    PhoneNumber: string
}

export async function sendSMS(event: SQSEvent) {
    try {
        const body = JSON.parse(event.Records[0].body)
        const payload = JSON.parse(body.Message)

        const params: Params = {
            Message: payload.text, 
            PhoneNumber: payload.phone
        }

        if (!validateParams(params)) {
            return {
                message: 'One or both of the input parameters were not valid',
                input: event
            } 
        }
        const sns = new AWS.SNS({region: 'eu-west-2'})

        // push SMS message using phone number and text provided
        const pushSucceeded = await sns.publish({
            // params
            // temporary hardcoded message and topic
            Message: params.Message,
            TargetArn: 'arn:aws:sns:eu-west-2:322928185466:sendSMS1'
        }).promise().then((data) => {
            console.log('SNS push succeeded: ', data)
            return true
        }).catch((err) => {
            console.error('Error: ', err)
            return false
        })
        
        if (pushSucceeded) {
            return {
                message: 'SMS push was successful!',
                input: event
            }
        } else {
            return {
                message: 'SMS push failed!',
                input: event
            }
        }
    } catch (error) {
        console.log('error: ', error)
        console.log('event: ', event)
        return {
            message: error,
            input: event
        }
    }
}

function validateParams(params: Params) {
    // check that Message is not an empty string or only whitespaces
    if (params.Message.trim() === '') {
        return false
    }
    // check that PhoneNumber follows the E164 international phone number format
    const phoneRegEx = /^\+[1-9]\d{10,14}$/
    if (!phoneRegEx.test(params.PhoneNumber)) {
        return false
    }
    return true
}