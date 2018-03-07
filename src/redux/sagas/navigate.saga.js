// @flow

import { put, select, takeLatest } from 'redux-saga/effects';
import { GO_TO_HOME_SCREEN, SAGA_NAVIGATE } from '../actionTypes';
import { NavigationActions } from 'react-navigation';
import type, { Assignment } from '../../services/cms';

type SelectForNavigation = (
  state: any
) => { action: any, params: any, routeName: string };

function* onNavigate(action) {
  try {
    const to = yield select(action.createNavigationAction);
    yield put(NavigationActions.navigate(to));
  } catch (error) {
    console.log(error);
  }
}

export function* watchForsagaNavigate() {
  yield takeLatest(SAGA_NAVIGATE, onNavigate);
}

const _goToHomeScreen = (action: { reset: boolean, number: number }) => {
  if (action.reset) {
    return NavigationActions.reset('HomeScreen', action);
  } else {
    return NavigationActions.navigate('HomeScreen', action);
  }
};

export function* goToHomeScreen() {
  yield takeLatest(GO_TO_HOME_SCREEN, _goToHomeScreen);
}
