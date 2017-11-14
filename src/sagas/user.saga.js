// @flow

import { put, takeLatest, cancelled, } from 'redux-saga/effects';
import { AsyncStorage }                from 'react-native';

import {
  REQUEST,
  GET_USER_PROGRESS,
  ON_APP_LOADED,
}                                      from '../constants/actionTypes';
import {
  incrementRequestCount,
  decrementRequestCount
}                                      from '../actions/network';
import {
  getAboutInfoFromCMS,
  getTokenFromStorage
}                                      from '../actions/login';
import { getUserProgress }             from '../actions/user';
import { getStepFromCMSByStep }        from '../actions/steps';
import networkState                    from '../utils/networkState';
import { client, getUser }             from '../clients/apollo'

function* getUserProgressWorker(action) {
  try {
    yield put(incrementRequestCount());
    yield networkState.haveConnection();

    let graphResponse = yield client.query({
      query: getUser,
      fetchPolicy: 'network-only',
      variables: {
        id: action.userID,
      },
    });

    let currentStep = 1;
    console.log(graphResponse)
    if (graphResponse.data.getUser.steps[ 0 ]) {
      currentStep = graphResponse.data.getUser.steps[ 0 ].stepId + 1;
    }

    if (action.loadSteps) {
      yield put(getStepFromCMSByStep.request(currentStep));
    }

    const progress = {
      step: currentStep,
      formStep: 1,
    };

    yield put(getUserProgress.success(progress));
    yield put(decrementRequestCount());
  } catch (e) {
    console.error(e);
    yield put(decrementRequestCount());
  } finally {
    if (yield cancelled())
      yield put(decrementRequestCount());
  }
}

function* onAppLoaded() {
  try {
    yield put(incrementRequestCount());
    yield networkState.haveConnection();

    let userID = yield AsyncStorage.getItem('@2020:userId');

    if (!userID) {
      yield put(getAboutInfoFromCMS.request());
    } else {
      yield put(getTokenFromStorage(userID));
      yield put(getUserProgress.request(userID, true));
    }

    yield put(decrementRequestCount());
  } catch (e) {
    console.error(e);
    yield put(decrementRequestCount());
  } finally {
    if (yield cancelled())
      yield put(decrementRequestCount());
  }
}


export function* userProgressSaga() {
  yield takeLatest(GET_USER_PROGRESS[REQUEST], getUserProgressWorker);
}

export function* onAppLoadedSaga() {
  yield takeLatest(ON_APP_LOADED, onAppLoaded);
}
