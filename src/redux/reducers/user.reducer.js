// @flow
import type { UserStateAction } from '../actions'
import { SET_USER_STATE } from '../actions'
import type { User, UserState } from '../../services/apollo/models'
import {
  ANONYMOUS,
  UNDETERMINED,
  AUTHENTICATING,
} from '../../services/apollo/models'
import {
  GET_USER,
  AUTHENTICATE_FB,
  AUTHENTICATE_GOOGLE,
} from '../actions/user.actions'
import {
  LOGOUT,
  LOGIN_WITH_FB_BUTTON_PRESSED,
  UPDATE_USER,
  RESET_USER_STEPS,
} from '../actionTypes'

export const userFromResponse = (response: any): User => response.data.User

type LogoutAction = { type: LOGOUT }

type Action = UserStateAction | LogoutAction

export default function(state: UserState = UNDETERMINED, action: Action) {
  switch (action.type) {
    case LOGIN_WITH_FB_BUTTON_PRESSED:
    case AUTHENTICATE_FB.STARTED:
    case AUTHENTICATE_GOOGLE.STARTED:
    case GET_USER.STARTED:
      return AUTHENTICATING
    case LOGOUT:
      return ANONYMOUS
    case SET_USER_STATE:
    case GET_USER.SUCCEEDED:
      return action.payload
    case UPDATE_USER:
      return {
        ...state,
        ...action.payload,
      }
    case RESET_USER_STEPS:
      return {
        ...state,
        forms: [],
      }
    default:
      return state
  }
}
