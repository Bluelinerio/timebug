// @flow
import {
  takeLatest,
  take,
  fork,
  actionChannel,
  call,
  put,
  select
}                               from 'redux-saga/effects'
import { updateCheckin }        from '../actions/checkin.actions'
import {
  CHANGE_CHECKIN,
  BUILD_NOTIFICATION_SET,
  REMOVE_CHECKIN
}                               from '../actionTypes'
import { calculateNextCheckin } from '../../services/checkins'
import {
  createNotification,
  removeNotification
}                               from '../actions/notifications.actions'
import {
  changeCheckin,
  deleteCheckin,
  removeCheckin
}                               from '../actions/checkin.actions'
import type {
  DeleteCheckinPayload,
  CheckinChangePayload
}                               from '../actions/checkin.actions'
import selectors                from '../selectors'
import { isStepCompleted }      from '../../services/cms'

import tron from 'reactotron-react-native'

function* setUpNotificationAndUpdateCheckin({
  payload
}: {
  payload: CheckinChangePayload
}) {
  const { step, frequency, message, ...rest } = payload
  const [nextCheckin, repeatTime] = yield call(calculateNextCheckin, frequency)
  const id = `${step}`
  yield put(createNotification({ message, id, nextCheckin, repeatTime }))
  yield put(
    updateCheckin({
      step,
      checkin: { frequency, nextCheckin, id, message, ...rest }
    })
  )
}

function* handleRemoveCheckin({ payload }: DeleteCheckinPayload) {
  yield put(deleteCheckin(payload))
  yield put(removeNotification(payload))
}

function* _setInitialNotifications() {
  const steps = yield select(selectors.steps)
  const user = yield select(selectors.user)
  const checkins = yield select(selectors.getCheckins)
  if (user) {
    const stepsWithUnsetNotifications = Object.values(steps).reduce(
      (allSteps, step) => {
        const shouldSetNotification =
          step.checkin &&
          !checkins[step.number] &&
          isStepCompleted(step.number, user)
        if (shouldSetNotification) {
          return [
            ...allSteps,
            {
              ...step,
              __action__: 'change'
            }
          ]
        }
        const shouldBeRemoved = !step.checkin && checkins[step.number]
        if (shouldBeRemoved) {
          return [
            ...allSteps,
            {
              ...step,
              __action__: 'remove'
            }
          ]
        }
        return allSteps
      },
      []
    )
    tron.log(stepsWithUnsetNotifications)
    for (const step of stepsWithUnsetNotifications) {
      const { checkin, number, __action__ } = step
      if (__action__ === 'change')
        yield put(changeCheckin({ ...checkin, step: number }))
      else if (__action__ === 'remove')
        yield put(removeCheckin({ step: number }))
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

function* watchForCheckinsDeletion() {
  const channel = yield actionChannel(REMOVE_CHECKIN)
  while (true) {
    const action = yield take(channel)
    yield call(handleRemoveCheckin, action)
  }
}

export function* watchForCheckinsSaga() {
  // TODO: Set up permissions for IOS? it would probably be good to do it here
  // Disable both forks until the call to permissions is accepted
  yield fork(watchForCheckinsUpdate)
  yield fork(watchForCheckinsDeletion)
  yield fork(watchForInitialNotifications)
}
