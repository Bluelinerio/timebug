// @flow
import { getUser, authenticateFb } from '../actions/user.actions'
import {
  LOGOUT,
  LOGIN_WITH_FB_BUTTON_PRESSED,
  UPDATE_USER,
  RESET_USER_STEPS,
  SET_USER_STATE
} from '../actionTypes'
import type {
  LogoutAction,
  UserStateAction
} from '../actions'
import type { User, UserState } from '../../types'
import {
  ANONYMOUS,
  UNDETERMINED,
  AUTHENTICATING
} from '../../types'

export const userFromResponse = (response: any): User => response.data.User

export default function(state: UserState = UNDETERMINED, action: LogoutAction | UserStateAction) {
  switch (action.type) {
    case LOGIN_WITH_FB_BUTTON_PRESSED:
    case authenticateFb.STARTED:
    case getUser.STARTED:
      return AUTHENTICATING
    case LOGOUT:
      return ANONYMOUS
    case SET_USER_STATE:
    case getUser.SUCCEEDED:
      return action.payload
    case UPDATE_USER:
      return {
        ...state,
        ...action.payload
      }
    case RESET_USER_STEPS:
      return {
        ...state,
        forms: []
      }
    default:
      return state
  }
}
