import { SQSEvent } from "aws-lambda";
import { sendSMS } from "../../handler";
import baseSQSEvent from "../../mockData/baseSQSEvent";
import messageAsEmptyString from "../../mockData/invalidValueEvents/message/messageAsEmptyString";
import messageAsWhiteSpace from "../../mockData/invalidValueEvents/message/messageAsWhiteSpace";
import phoneNoPlus from "../../mockData/invalidValueEvents/phone/phoneNoPlus";
import phoneTooShort from "../../mockData/invalidValueEvents/phone/phoneTooShort";
import phoneEmptyString from "../../mockData/invalidValueEvents/phone/phoneEmptyString";
import phoneWhiteSpace from "../../mockData/invalidValueEvents/phone/phoneWhiteSpace";
import phoneDash from "../../mockData/invalidValueEvents/phone/phoneDash";
import phoneBrackets from "../../mockData/invalidValueEvents/phone/phoneBrackets";

describe('Unit test for valid SQS event handling', function () {
    it('verifies successful response', async () => {
        const event: SQSEvent = baseSQSEvent as any
        const result = await sendSMS(event)

        expect(result.message).toEqual('SMS push was successful!')
    })
})

describe('Unit test for validity of Message and PhoneNumber parameter values', function () {
    describe('Tests for valid Message values', () => {
        it('verifies unsuccessful response when Message is an empty string', async () => {
            const event: SQSEvent = messageAsEmptyString as any
            const result = await sendSMS(event)

            expect(result.message).toEqual('One or both of the input parameters were not valid')
        })
        it('verifies unsuccessful response when Message consists only of whitespaces', async () => {
            const event: SQSEvent = messageAsWhiteSpace as any
            const result = await sendSMS(event)

            expect(result.message).toEqual('One or both of the input parameters were not valid')
        })
    })
    describe('Tests for valid PhoneNumber values', () => {
        it('verifies unsuccessful response when PhoneNumber does not contain a plus at the start of the string', async () => {
            const event: SQSEvent = phoneNoPlus as any
            const result = await sendSMS(event)

            expect(result.message).toEqual('One or both of the input parameters were not valid')
        })
        it('verifies unsuccessful response when PhoneNumber is too short', async () => {
            const event: SQSEvent = phoneTooShort as any
            const result = await sendSMS(event)

            expect(result.message).toEqual('One or both of the input parameters were not valid')
        })
        it('verifies unsuccessful response when PhoneNumber is an empty string', async () => {
            const event: SQSEvent = phoneEmptyString as any
            const result = await sendSMS(event)

            expect(result.message).toEqual('One or both of the input parameters were not valid')
        })
        it('verifies unsuccessful response when PhoneNumber contains only whitespace', async () => {
            const event: SQSEvent = phoneWhiteSpace as any
            const result = await sendSMS(event)

            expect(result.message).toEqual('One or both of the input parameters were not valid')
        })
        it('verifies unsuccessful response when PhoneNumber contains the \'-\' character', async () => {
            const event: SQSEvent = phoneDash as any
            const result = await sendSMS(event)

            expect(result.message).toEqual('One or both of the input parameters were not valid')
        })
        it('verifies unsuccessful response when PhoneNumber contains brackets', async () => {
            const event: SQSEvent = phoneBrackets as any
            const result = await sendSMS(event)

            expect(result.message).toEqual('One or both of the input parameters were not valid')
        })
    })
})