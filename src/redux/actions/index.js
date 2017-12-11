import type { User, UserState } from '../services/apollo/models';
import { ANONYMOUS, UNDETERMINED } from '../../services/apollo/models'
import { runnableAction } from '../utils'
import { createRequest } from '../../Modules/redux-saga-request'
import type { Request } from '../../Modules/redux-saga-request'

export const SET_USER_STATE = 'SET_USER_STATE'
export type UserStateAction = { type: SET_USER_STATE, state: UserState }
export const setUser = (user: User): UserStateAction => ({ type: SET_USER_STATE, state: { user } })
export const setUserAnonymous = (): UserStateAction => ({ type: SET_USER_STATE, state: ANONYMOUS })

export const LOGIN_WITH_FB_BUTTON_PRESSED = runnableAction('LOGIN_WITH_FB_BUTTON_PRESSED')

export const LOGIN_FB: Request<any, any> = createRequest('LOGIN_FB')
export const AUTHENTICATE_FB: Request<any, any> = createRequest('AUTHENTICATE_FB')