// @flow
import { GET_USER_PROGRESS, ON_APP_LOADED, REQUEST } from '../constants/actionTypes';

export function getUserProgress(userID) {
  return {
    type: GET_USER_PROGRESS[REQUEST],
    userID
  }
}

export function onAppLoaded(request) {
  return {
    type: ON_APP_LOADED,
    request
  }
}
