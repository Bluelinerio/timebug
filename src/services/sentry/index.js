import { Sentry } from 'react-native-sentry';
import CodePush frZom "react-native-code-push";

Sentry.config('https://0de59c73057340d789df292efcbba25b:cbb27d7602214baa88ace02da408939a@sentry.io/293417').install();

CodePush.getUpdateMetadata().then((update) => {
  if (update) {
    Sentry.setVersion(update.appVersion + '-codepush:' + update.label);
  }
});

