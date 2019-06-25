import { Platform } from 'react-native'
import moment from 'moment'
import ReactMoE from 'react-native-moengage'
import RNAmplitude from 'react-native-amplitude-analytics'
import { AMPLITUDE_KEY } from '2020_constants/constants'
import DeviceInfo from 'react-native-device-info'
import tron from 'reactotron-react-native'

const platform = Platform.OS === 'ios' ? 'IOS' : 'ANDROID'

const version = DeviceInfo.getVersion()

const APP_PREFIX = `2020_LIFEVISION_${platform}:`

const PREFIX = 'MOENGAGE'

class MoengageService {
  _defaultParams = {
    version,
  }

  constructor(name = `${PREFIX}`, log = true) {
    this.log(`${name} has been started`)
    ReactMoE.isExistingUser(true);
  }

  setUser(userId: string, email: string, name: string) {
    ReactMoE.setUserUniqueID(userId);
    ReactMoE.setUserEmailID(email);
    ReactMoE.setUserAttribute('FacebookName', name)
  }

  unsetUser() {
      ReactMoE.logout()
  }
  
  log = (message: string) => {
    tron.log(`${PREFIX}: ${message}`)
  }

  display = (value: any, event: string) => {
    tron.display({
      value,
      title: `${PREFIX}: ${event}`,
      preview: `${PREFIX}: ${event}`,
    })
  }

  logEvent = (event: string, data = {}) => {
    const timestamp = moment().valueOf()
    const dataToLog = {
      ...this._defaultParams,
      ...data,
      timestamp,
    }
    this.display(dataToLog, event)
    ReactMoE.trackEvent(event, dataToLog)
  }
}

const instance = new MoengageService()

export const log = (event: string, data?) => {
  instance.logEvent(event, data)
}

export default instance
