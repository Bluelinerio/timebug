// @flow
import { action }          from '../utils/actions';
import {
  REQUEST,
  SUCCESS,
  FAILURE,
  GET_ABOUT_INFO_FROM_CMS,
  GET_TOKEN_FROM_STORAGE,
}                          from '../constants/actionTypes';

export const getAboutInfoFromCMS = {
  request: () => action(GET_ABOUT_INFO_FROM_CMS[REQUEST]),
  success: (about: string) => action(GET_ABOUT_INFO_FROM_CMS[SUCCESS], { about }),
  failure: (message: string) => action(GET_ABOUT_INFO_FROM_CMS[FAILURE], { message }),
}

export const getTokenFromStorage = (userID: number) => action(GET_TOKEN_FROM_STORAGE[SUCCESS], { userID });
