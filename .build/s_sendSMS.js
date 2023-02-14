
var serverlessSDK = require('./serverless_sdk/index.js');
serverlessSDK = new serverlessSDK({
  orgId: 'tigeryant',
  applicationName: 'sp-app',
  appUid: 'mNc2vbRfCKXlcLXbll',
  orgUid: 'ebdce8cd-62f2-4c01-af90-bd412d08f4e1',
  deploymentUid: 'aec8a8a5-18a6-4db3-b742-ee04f1c33964',
  serviceName: 'spService',
  shouldLogMeta: true,
  shouldCompressLogs: true,
  disableAwsSpans: false,
  disableHttpSpans: false,
  stageName: 'dev',
  serverlessPlatformStage: 'prod',
  devModeEnabled: false,
  accessKey: null,
  pluginVersion: '6.2.3',
  disableFrameworksInstrumentation: false
});

const handlerWrapperArgs = { functionName: 'spService-dev-sendSMS', timeout: 6 };

try {
  const userHandler = require('./handler.js');
  module.exports.handler = serverlessSDK.handler(userHandler.sendSMS, handlerWrapperArgs);
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs);
}