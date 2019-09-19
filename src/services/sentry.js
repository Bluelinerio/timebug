// @flow
import * as Sentry from '@sentry/react-native'

class SentryService {
  setUser(id: string, email: String) {
    Sentry.setUser({ id: id, email: email })
  }
}

export default new SentryService()
