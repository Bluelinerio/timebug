// @flow
import {
  ON_APP_LOADED,
  REFRESH_USER,
  UPDATE_USER,
  SUBMIT_CHECKIN,
  RESET_USER_STEPS,
} from '../actionTypes';
import { createRequest } from '../../Modules/redux-saga-request';
import type { Request } from '../../Modules/redux-saga-request';
import { action } from '../utils';

export const GET_USER: Request<any, any> = createRequest('GET_USER');
export const AUTHENTICATE_FB: Request<any, any> = createRequest(
  'AUTHENTICATE_FB'
);
export const refreshUser = () => ({ type: REFRESH_USER });

//onAppLoaded
export const onAppLoaded = (request: any) => action(ON_APP_LOADED, request);

export const resetUserSteps = () => ({ type: RESET_USER_STEPS });
export const updateUser = (payload: any) => ({
  type: UPDATE_USER,
  payload: payload,
});

export const submitCheckin = payload => ({
  type: SUBMIT_CHECKIN,
  payload,
});
