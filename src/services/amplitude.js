import { Platform } from 'react-native'
import moment from 'moment'
import RNAmplitude from 'react-native-amplitude-analytics'
import { AMPLITUDE_KEY } from '2020_constants/constants'
import DeviceInfo from 'react-native-device-info'
import tron from 'reactotron-react-native'

const PREFIX = 'AMPLITUDE'

const platform = Platform.OS === 'ios' ? 'IOS' : 'ANDROID'

const version = DeviceInfo.getVersion()

const APP_PREFIX = `2020_LIFEVISION_${platform}:`

class AmplitudeService {
  _name = null
  _shouldLog = false
  _amplitude
  _defaultParams = {
    version,
  }

  constructor(key: string, name = 'Amplitude Service', log = true) {
    this._shouldLog = log
    this._name = 'name'
    this._amplitude = new RNAmplitude(key, true, APP_PREFIX)
    this.log(`${name} has been started`)
  }

  addDefaultParam(key: string, prop:any) {
    this._defaultParams = {
      ...this._defaultParams,
      [key]: prop,
    }
  }
  
  removeParam(key: string) {
    delete this._defaultParams[key]
  }
  
  setUser(userId: string) {
    this._amplitude.setUserId(userId)
  }

  log = (message: string) => {
    tron.log(`${PREFIX}: ${message}`)
  }

  display = (value: any, event: string) => {
    tron.display({
      value,
      title: `AMP:${PREFIX}: ${event}`,
      preview: event,
    })
  }

  logEvent = (event: string, data = {}) => {
    const timestamp = moment().valueOf()
    const dataToLog = {
      ...this._defaultParams,
      ...data,
    }
    this._amplitude.logEventWithTimestamp(event, timestamp, dataToLog)
    this.display(dataToLog, event)
  }
}

const instance = new AmplitudeService(AMPLITUDE_KEY)

export const log = (event: string, data?) => {
  instance.log(`LOGGING:${event}`)
  instance.logEvent(event, data)
}

export default instance
