// @flow
import { 
  ON_APP_LOADED, 
  REFRESH_USER, 
  UPDATE_USER
} from '../actionTypes'
import { createRequest } from '../../Modules/redux-saga-request'
import type { Request } from '../../Modules/redux-saga-request'
import type { UserState } from '../../services/apollo/models'
import { action, runnableAction } from '../utils';

export const GET_USER: Request<any, any> = createRequest('GET_USER')
export const AUTHENTICATE_FB: Request<any, any> = createRequest('AUTHENTICATE_FB')
export const refreshUser = () => ({ type: REFRESH_USER });

//onAppLoaded
export const onAppLoaded = (request: any )=> action(ON_APP_LOADED, request)

export const updateUser = (payload: any) => action(UPDATE_USER, payload)
