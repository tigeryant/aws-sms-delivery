"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSMS = void 0;
const AWS = __importStar(require("aws-sdk"));
async function sendSMS(event) {
    const body = JSON.parse(event.Records[0].body);
    const payload = JSON.parse(body.Message);
    const params = {
        Message: payload.text,
        PhoneNumber: payload.phone
    };
    if (!validateParams(params)) {
        return {
            message: 'One or both of the input parameters were not valid',
            input: event
        };
    }
    const sns = new AWS.SNS({ region: 'eu-west-2' });
    // push SMS message using phone number and text provided
    const pushSucceeded = await sns.publish({
        // params
        // temporary hardcoded message and topic
        Message: 'some cool message',
        TargetArn: 'arn:aws:sns:eu-west-2:322928185466:sendSMS1'
    }).promise().then((data) => {
        console.log('SNS push succeeded: ', data);
        return true;
    }).catch((err) => {
        console.error('Error: ', err);
        return false;
    });
    if (pushSucceeded) {
        return {
            message: 'SMS push was successful!',
            input: event
        };
    }
    else {
        return {
            message: 'SMS push failed!',
            input: event
        };
    }
}
exports.sendSMS = sendSMS;
function validateParams(params) {
    // check that Message is not an empty string or only whitespaces
    if (params.Message.trim() === '') {
        return false;
    }
    // check that PhoneNumber follows the E164 international phone number format
    const phoneRegEx = /^\+[1-9]\d{10,14}$/;
    if (!phoneRegEx.test(params.PhoneNumber)) {
        return false;
    }
    return true;
}
