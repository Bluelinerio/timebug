// @flow
// TODO FLOW
import {
  takeLatest,
  take,
  fork,
  actionChannel,
  call,
  put,
  select
}                                                 from 'redux-saga/effects'
import { updateCheckin }                          from '../actions/checkin.actions'
import { CHANGE_CHECKIN, BUILD_NOTIFICATION_SET } from '../actionTypes'
import { calculateNextCheckin }                   from '../../services/checkins'
import { createNotification }                     from '../actions/notifications.actions'
import { changeCheckin }                          from '../actions/checkin.actions'
import selectors                                  from '../selectors'
import { isStepCompleted }                        from '../../services/cms'

function* setUpNotificationAndUpdateCheckin({ payload }) {
  const { step, frequency, message, ...rest } = payload
  const [nextCheckin, repeatTime] = yield call(calculateNextCheckin, frequency)
  const id = `${step}`
  yield put(createNotification({ message, id, nextCheckin, repeatTime }))
  yield put(updateCheckin({ step, checkin: { frequency, nextCheckin, id, message, ...rest } }))
}

function* _setInitialNotifications() {
  const steps = yield select(selectors.steps)
  const user = yield select(selectors.user)
  const checkins = yield select(selectors.getCheckins)
  if (user) {
    const stepsWithUnsetNotifications = Object.values(steps).filter(step => {
      const shouldSetNotification =
        step.checkin &&
        !checkins[step.number] &&
        isStepCompleted(step.number, user)
      return shouldSetNotification
    })
    for (const step of stepsWithUnsetNotifications) {
      const { checkin, number } = step
      yield put(changeCheckin({ ...checkin, step: number }))
    }
  }
}

function* watchForInitialNotifications() {
  yield takeLatest(BUILD_NOTIFICATION_SET, _setInitialNotifications)
}

function* watchForCheckinsUpdate() {
  const channel = yield actionChannel(CHANGE_CHECKIN)
  while (true) {
    const action = yield take(channel)
    yield call(setUpNotificationAndUpdateCheckin, action)
  }
}

export function* watchForCheckinsSaga() {
  yield fork(watchForCheckinsUpdate)
  yield fork(watchForInitialNotifications)
}
