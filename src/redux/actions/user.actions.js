// @flow
import {
  LOGOUT,
  SET_USER_STATE,
  REFRESH_USER,
  UPDATE_USER,
  SUBMIT_CHECKIN,
  RESET_USER_STEPS,
  AUTHENTICATE_FB,
  GET_USER
} from '../actionTypes'
import { createRequest } from '../../Modules/redux-saga-request'
import { action } from '../utils'
import type { User, UserState } from '../../types'
import { ANONYMOUS } from '../../types'

export type LogoutAction = { type: LOGOUT }
export type UserStateAction = { type: SET_USER_STATE, payload: UserState }


export const resetUserSteps = () => ({
  type: RESET_USER_STEPS
})
export const getUser = createRequest(GET_USER)
export const authenticateFb = createRequest(AUTHENTICATE_FB)
export const refreshUser = () => action(REFRESH_USER)
export const updateUser = (payload: any) => action(UPDATE_USER, { payload })
export const submitCheckin = payload => action(SUBMIT_CHECKIN, { payload })
export const setUser = (user: User): UserStateAction => action(
  SET_USER_STATE,
  {
    payload: user
  }
)
export const setUserAnonymous = (): UserStateAction => setUser(ANONYMOUS)