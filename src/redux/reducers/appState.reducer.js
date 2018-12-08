// https://facebook.github.io/react-native/docs/appstate.html
// active - The app is running in the foreground
// background - The app is running in the background. The user is either in another app or on the home screen
// inactive - This is a state that occurs when transitioning between foreground & background, and during periods of inactivity such as entering the Multitasking view or in the event of an incoming call

// @flow
import {
  FOREGROUND,
  BACKGROUND,
  INACTIVE,
} from 'redux-enhancer-react-native-appstate'
import { VERSION } from '../actionTypes'
import { appVersions } from '../../constants'
export const UNDETERMINED = 'UNDETERMINED'

export type AppState = {
  appStatus: {
    status: UNDETERMINED | FOREGROUND | BACKGROUND | INACTIVE,
    foreground: number,
    backgound: number,
    invactive: number,
    last: string,
  },
  version: string,
}

export const initialState = {
  appStatus: {
    status: UNDETERMINED,
  },
  version: appVersions.one,
}

export default (
  state: AppState = initialState,
  action: { type: FOREGROUND | BACKGROUND | INACTIVE | VERSION }
) => {
  switch (action.type) {
  case FOREGROUND:
    return {
      ...state,
      appStatus: {
        ...(state.appStatus || {}),
        foreground: Date.now(),
        last: FOREGROUND,
      },
    }
  case BACKGROUND:
    return {
      ...state,
      appStatus: {
        ...(state.appStatus || {}),
        background: Date.now(),
        last: BACKGROUND,
      },
    }
  case INACTIVE:
    return {
      ...state,
      appStatus: {
        ...(state.appStatus || {}),
        inactive: Date.now(),
        last: INACTIVE,
      },
    }
  case VERSION:
    return {
      ...state,
      version: action.payload.version,
    }
  default:
    return state
  }
}
