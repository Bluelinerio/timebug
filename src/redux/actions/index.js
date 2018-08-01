import {
  LOGOUT,
  LOGIN_WITH_FB_BUTTON_PRESSED,
  REFRESH_CMS,
  RESET_ALL
} from '../actionTypes'
import { action } from './utils'

export const loginWithFbButtonPressed = () =>
  action(LOGIN_WITH_FB_BUTTON_PRESSED)
export const logoutButtonPressed = () => action(LOGOUT)
export const refreshCms = () => action(REFRESH_CMS)
export const resetStore = () => action(RESET_ALL)
