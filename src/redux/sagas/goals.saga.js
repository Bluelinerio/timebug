import { takeLatest, fork } from 'redux-saga/effects'
import { SYNC_GOAL_STEPS }  from '../actionTypes'

function* _handleGoalsSync() {
  yield
}

function* watchForGoalsSyncSaga() {
  yield takeLatest(SYNC_GOAL_STEPS, _handleGoalsSync)
}

export function* watchForGoalsSaga() {
  yield fork(watchForGoalsSyncSaga)
}
