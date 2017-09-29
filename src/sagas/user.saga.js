// @flow

import { put, takeLatest, select, } from 'redux-saga/effects';
import {
  GET_ABOUT_INFO_FROM_CMS, GET_TOKEN_FROM_STORAGE,
  GET_USER_PROGRESS, ON_APP_LOADED,
  PENDING_END,
  PENDING_START,
  SUCCEEDED,
} from '../constants/actionTypes';
import networkState        from '../utils/networkState';
import { AsyncStorage }    from "react-native";

function* getUserProgress(action) {
  try {
    yield put({ type: PENDING_START });
    yield networkState.haveConnection();


    yield put({
      type: GET_USER_PROGRESS + SUCCEEDED,
      userID: action.userID,
      progress: {
        step: 'step_1',
        formStep: 1,
      },
    });

    yield put({ type: PENDING_END });
  } catch (e) {
    yield put({ type: PENDING_END });
  }
}

function* onAppLoaded() {
  try {
    yield put({ type: PENDING_START });
    yield networkState.haveConnection();


    let userID = yield AsyncStorage.getItem('@2020:userId');

    if (!userID) {
      yield put({ type: GET_ABOUT_INFO_FROM_CMS });
    } else {
      yield put({type: GET_TOKEN_FROM_STORAGE + SUCCEEDED});
      yield put({type: GET_USER_PROGRESS, userID});
    }

    yield put({ type: PENDING_END });
  } catch (e) {
    yield put({ type: PENDING_END });
  }
}


export function* userProgressSaga() {
  yield takeLatest(GET_USER_PROGRESS, getUserProgress);
}

export function* onAppLoadedSaga() {
  yield takeLatest(ON_APP_LOADED, onAppLoaded);
}

