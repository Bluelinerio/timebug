if (__DEV__) {
  if (typeof GLOBAL !== 'undefined') {
    // Route network requests through Chrome's native XMLHttpRequest
    GLOBAL.XMLHttpRequest =
      GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest

    // Use native Blob for native XMLHttpRequest set above
    GLOBAL.Blob = GLOBAL.originalBlob || GLOBAL.Blob

    // Use native FileReader to read native Blob set above
    GLOBAL.FileReader = GLOBAL.originalFileReader || GLOBAL.FileReader
  }
}

import './src/App'

import { Sentry } from 'react-native-sentry'

Sentry.config(
  'https://0de59c73057340d789df292efcbba25b:cbb27d7602214baa88ace02da408939a@sentry.io/293417'
).install()
