// @flow

import {put, takeLatest} from 'redux-saga/effects';

import networkState from '../utils/networkState';

import {
  GET_USER_PROGRESS,
  PENDING_END,
  PENDING_START,
  SUCCEEDED
} from '../constants/actionTypes';

function* getUserProgress(action) {
  try {
    yield put({type: PENDING_START});
    yield networkState.haveConnection();


    yield put({
      type: GET_USER_PROGRESS + SUCCEEDED,
      userID: action.userID,
      progress: {
        step: 'step_1',
        formStep: 1,
      }
    });

    yield put({type: PENDING_END});
  } catch (e) {
    yield put({type: PENDING_END});
  }
}

export function* userProgressSaga() {
  yield takeLatest(GET_USER_PROGRESS, getUserProgress);
}

