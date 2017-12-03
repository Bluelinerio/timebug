// @flow
import { action }    from '../utils/actions';
import {
  REQUEST,
  SUCCESS,
  FAILURE,
  GET_USER_PROGRESS,
  ON_APP_LOADED,
  USER_FINISHED
}                    from '../constants/actionTypes';
import { UserState } from '../reducers/user';

export const getUserProgress = {
  request: (userID: UserState.userID, loadSteps: boolean) => action(GET_USER_PROGRESS[REQUEST], { userID, loadSteps }),
  success: (progress: UserState.progress) => action(GET_USER_PROGRESS[SUCCESS], { progress }),
  failure: (message: string) => action(GET_USER_PROGRESS[FAILURE], { message }),
}

export const userFinished = {
  finish: () => action(USER_FINISHED)
}

export const onAppLoaded = (request) => action(ON_APP_LOADED, request);
