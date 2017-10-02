// @flow
import { GET_USER_PROGRESS, ON_APP_LOADED } from '../constants/actionTypes';

export function getUserProgress(userID) {
  return {
    type: GET_USER_PROGRESS,
    userID
  }
}

export function onAppLoaded(request) {
  return {
    type: ON_APP_LOADED,
    request
  }
}
