// @flow
import { GET_USER_PROGRESS, } from '../constants/actionTypes';

export function getUserProgress(userID) {
  return {
    type: GET_USER_PROGRESS,
    userID
  }
}
