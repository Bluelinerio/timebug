// @flow

import { put, takeLatest, cancelled, } from 'redux-saga/effects';
import {
  REQUEST,
  GET_ABOUT_INFO_FROM_CMS, GET_STEPS_FROM_CMS_BY_DAY, GET_TOKEN_FROM_STORAGE,
  GET_USER_PROGRESS, ON_APP_LOADED,
  PENDING_END,
  PENDING_START,
  SUCCESS,
}                                      from '../constants/actionTypes';
import networkState                    from '../utils/networkState';
import { AsyncStorage }                from "react-native";
import { client }                      from '../mutations/config'
import { getUser }                     from "../mutations/user";

function* getUserProgress(action) {
  try {
    yield put({ type: PENDING_START });
    yield networkState.haveConnection();

    let graphResponse = yield client.query({
      query: getUser,
      fetchPolicy: 'network-only',
      variables: {
        id: action.userID,
      },
    });

    let currentStep = 1;
    if (graphResponse.data.getUser.steps[ 0 ]) {
      currentStep = graphResponse.data.getUser.steps[ 0 ].stepId + 1;
    }

    if (action.loadSteps) {
      yield put({
        type: GET_STEPS_FROM_CMS_BY_DAY[REQUEST],
        day: currentStep,
      });
    }

    yield put({
      type: GET_USER_PROGRESS[SUCCESS],
      userID: action.userID,
      progress: {
        step: currentStep,
        formStep: 1,
      },
    });

    yield put({ type: PENDING_END });
  } catch (e) {
    console.error(e);
    yield put({ type: PENDING_END });
  } finally {
    if (yield cancelled())
      yield put({ type: PENDING_END });
  }
}

function* onAppLoaded() {
  try {
    yield put({ type: PENDING_START });
    yield networkState.haveConnection();

    let userID = yield AsyncStorage.getItem('@2020:userId');

    if (!userID) {
      yield put({ type: GET_ABOUT_INFO_FROM_CMS[SUCCESS] });
    } else {
      yield put({
        type: GET_TOKEN_FROM_STORAGE[SUCCESS],
        userID,
      });
      yield put({
        type: GET_USER_PROGRESS[REQUEST],
        userID,
        loadSteps: true,
      });
    }

    yield put({ type: PENDING_END });
  } catch (e) {
    console.error(e);
    yield put({ type: PENDING_END });
  } finally {
    if (yield cancelled())
      yield put({ type: PENDING_END });
  }
}


export function* userProgressSaga() {
  yield takeLatest(GET_USER_PROGRESS[REQUEST], getUserProgress);
}

export function* onAppLoadedSaga() {
  yield takeLatest(ON_APP_LOADED, onAppLoaded);
}

