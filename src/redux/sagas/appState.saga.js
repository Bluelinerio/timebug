/* eslint-disable */
import { takeEvery, put, select, call } from 'redux-saga/effects';
import {
  FOREGROUND,
  BACKGROUND,
  INACTIVE,
} from 'redux-enhancer-react-native-appstate';

import type { AppState } from '../reducers/appState.reducer';
import { initialState, UNDETERMINED } from '../reducers/appState.reducer';
import {
  getAppState
} from '../selectors/rootReducer.selectors';

export function* appStateSagaWatcher() {
  yield takeEvery(
    [FOREGROUND, BACKGROUND, INACTIVE],
    appStateBusinessLogicRoot
  );
}

function* appStateBusinessLogicRoot(action: {
  type: FOREGROUND | BACKGROUND | INACTIVE,
}) {
  const state = yield select(state => state);
  switch (action.type) {
    case FOREGROUND:
      yield call(foreground, state);
    case BACKGROUND:
      yield call(background, state);
    case INACTIVE:
      yield call(inactive, state);
    default:
      return;
  }
}

function* foreground() {}

function* background() {}

function* inactive() {}

import equal from 'deep-equal';
import isSameWeek from 'date-fns/is_same_week';
import isSameDay from 'date-fns/is_same_day';

const firstTimeBundle = ({
  firstTimeDate,
  firstTimeLaunchDate,
  now,
}: {
  firstTimeDate: number,
  firstTimeLaunchDate: number,
  now: number,
}) => ({
  isFirstWeek: isSameWeek(firstTimeDate, now),
  isFirstDay: isSameDay(firstTimeDate, now),
  isFirstTime: isSameDay(firstTimeDate, now),
  isFirstLaunch: isSameDay(firstTimeLaunchDate, now),
  firstTimeDate,
  firstTimeLaunchDate,
});