import { Sentry } from 'react-native-sentry'
import CodePush from 'react-native-code-push'

// Sentry will log all error, including errors while debugging on simulator.
//if(!DeviceInfo.isEmulator) {

const project = __DEV__
  ? 'https://a5b291a8f6844ae0a308b76e08df2a5e:cb9bd7bb795b46a7be2ae4d9e4c30934@sentry.io/1186093'
  : 'https://0de59c73057340d789df292efcbba25b:cbb27d7602214baa88ace02da408939a@sentry.io/293417'

Sentry.config(project).install()

CodePush.getUpdateMetadata().then(update => {
  if (update) {
    Sentry.setVersion(update.appVersion + '-codepush:' + update.label)
  }
})

//}
