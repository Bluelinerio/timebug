import { action }      from '../utils/actions';
import {
  REQUEST,
  SUCCESS,
  FAILURE,
  LOGIN_WITH_FACEBOOK,
}                      from '../constants/actionTypes';

export const loginWithFB = {
  request: () => action(LOGIN_WITH_FACEBOOK[REQUEST]),
  success: () => action(LOGIN_WITH_FACEBOOK[SUCCESS]),
  failure: (message: string) => action(LOGIN_WITH_FACEBOOK[FAILURE], { message }),
}
