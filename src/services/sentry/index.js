import { Sentry } from 'react-native-sentry';
import CodePush from 'react-native-code-push';

// Sentry will log all error, including errors while debugging on simulator.
//if(!DeviceInfo.isEmulator) {
Sentry.config(
  'https://0de59c73057340d789df292efcbba25b:cbb27d7602214baa88ace02da408939a@sentry.io/293417'
).install();

CodePush.getUpdateMetadata().then(update => {
  if (update) {
    Sentry.setVersion(update.appVersion + '-codepush:' + update.label);
  }
});

//}
