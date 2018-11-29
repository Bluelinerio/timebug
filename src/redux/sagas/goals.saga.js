import { takeLatest, fork } from 'redux-saga/effects';
import { SYNC_GOAL_STEPS } from '../actionTypes';
import tron from 'reactotron-react-native';

function* _handleGoalsSync() {
  tron.log('Hey!');
  yield;
}

function* watchForGoalsSyncSaga() {
  yield takeLatest(SYNC_GOAL_STEPS, _handleGoalsSync);
}

export function* watchForGoalsSaga() {
  yield fork(watchForGoalsSyncSaga);
}
