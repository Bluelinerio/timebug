import { Platform, Linking } from 'react-native'
import Permissions from 'react-native-permissions'
import { NativeModules } from 'react-native'

const url = 'app-settings'

export const openSettings = () => {
  return Platform.OS === 'ios'
    ? Permissions.canOpenSettings()
      .then(canOpen => {
        if (!canOpen)
          return Linking.canOpenURL(url).then(supported => {
            if (supported) return Linking.openURL(url)
          })
        else return Permissions.openSettings()
      })
      .catch(() => {})
    : new Promise((resolve, reject) => {
      NativeModules.OpenSettings.openNetworkSettings(data => {
        if (data === true) resolve(true)
        else reject(new Error('Something bad happened'))
      })
    })
}
