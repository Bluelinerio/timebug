// @flow
import {
  takeLatest,
  take,
  fork,
  actionChannel,
  call,
  put,
  select,
  race,
}                                    from 'redux-saga/effects'
import { delay }                     from 'redux-saga'
import moment                        from 'moment'
import { updateCheckin }             from '../actions/checkin.actions'
import {
  CHANGE_CHECKIN,
  BUILD_NOTIFICATION_SET,
  REMOVE_CHECKIN,
  TOGGLE_CHECKIN,
  CHECKIN_NOTIFICATION,
}                                    from '../actionTypes'
import { GET_USER }                  from '../actions/user.actions'
import { FETCH_CMS }                 from '../actions/cms.actions'
import { calculateNextCheckin }      from '../../services/checkins'
import {
  createNotification,
  removeNotification,
}                                    from '../actions/notifications.actions'
import {
  changeCheckin,
  deleteCheckin,
  removeCheckin,
}                                    from '../actions/checkin.actions'
import type {
  DeleteCheckinPayload,
  CheckinChangePayload,
  ToggleCheckinPayload,
  CheckinNotificationPayload,
}                                    from '../actions/checkin.actions'
import { linkNavigation }            from '../actions/nav.actions'
import selectors                     from '../selectors'
import { isStepCompleted }           from '../../services/cms'
import { timeoutNoError as timeout } from '../utils/sagaHelpers'
import { notificationTypes }         from '2020_services/notifications'
import { toHashCode }                from '2020_utils/hashing'
import R                             from 'ramda'

type StepWithUpdate = {
  __action__: string,
  checkin: any,
  number: number,
}

type StepsWithNotificationUpdates = Array<StepWithUpdate>

function* _watchForInitialNotificationsHold() {
  yield take([GET_USER.SUCCEEDED, FETCH_CMS.SUCCEEDED])
}

function* setUpNotificationAndUpdateCheckin({
  payload,
}: {
  payload: CheckinChangePayload,
}) {
  const { step, frequency, message, toolKey, action, ...rest } = payload
  const [notificationTime, repeatTime] = yield call(
    calculateNextCheckin,
    frequency
  )
  const id = `${toHashCode(toolKey)}`
  const additionalProps = {
    type: notificationTypes.CHECKIN_NOTIFICATION,
    data: {
      step,
      id,
      toolKey,
      action,
      frequency,
    },
  }
  yield put(
    createNotification({
      message,
      id,
      notificationTime,
      repeatTime,
      additionalProps,
    })
  )
  yield put(
    updateCheckin({
      step,
      checkin: {
        frequency,
        nextCheckin: notificationTime,
        id,
        message,
        toolKey,
        action,
        ...rest,
      },
    })
  )
}

function* handleRemoveCheckin({ payload }: DeleteCheckinPayload) {
  const { tool } = payload
  const id = `${toHashCode(tool)}`
  yield put(deleteCheckin(payload))
  yield put(removeNotification({ id }))
}

function* toggleNotification({ payload }: ToggleCheckinPayload) {
  const { checkin, step } = payload
  const { toolKey } = checkin
  const checkins = yield select(selectors.getCheckins)
  const currentCheckin = checkins[`${step}`][`${toolKey}`]
  if (currentCheckin.id) {
    yield put(
      updateCheckin({
        step,
        checkin: { toolKey, nextCheckin: null, id: null },
      })
    )
    const id = `${toHashCode(toolKey)}`
    yield put(removeNotification({ id }))
  } else {
    yield put(changeCheckin({ ...checkin, step: `${step}` }))
  }
}

const isCheckinInStore = (step: any, checkin: any, checkins: any) =>
  checkins[step.number] && checkins[step.number][checkin.toolKey]

// TODO: If checkins have been completely deleted from a step in the CMS, the checkins remain locally
// due to the return on type not being array.

function* _setInitialNotifications() {
  const steps = yield select(selectors.steps)
  const user = yield select(selectors.user)
  const checkins = yield select(selectors.getCheckins)
  if (user) {
    yield race({
      request: call(_watchForInitialNotificationsHold),
      timeout: call(timeout, 5000),
    })
    const stepsWithUnsetNotifications: StepsWithNotificationUpdates = Object.values(
      steps
    ).reduce((allSteps, step) => {
      const stepCheckins = step.checkin
      const type = R.type(stepCheckins)
      if (type !== 'Array') return allSteps
      const checkinsForStepInState = (checkins && checkins[step.number]) || {}

      const checkinActions = stepCheckins.reduce(
        (checkinsToBeChanged, checkin) => {
          const shouldSetNotification =
            checkin &&
            isStepCompleted(step.number, user) &&
            checkin.toolKey &&
            !isCheckinInStore(step, checkin, checkins)
          if (shouldSetNotification) {
            return [
              ...checkinsToBeChanged,
              {
                checkin,
                number: step.number,
                __action__: 'change',
              },
            ]
          }
          return checkinsToBeChanged
        },
        []
      )

      const checkinsToRemove = Object.keys(checkinsForStepInState).reduce(
        (checkinsToChange, key) => {
          const checkin = checkinsForStepInState[key]
          const shouldNotRemove = stepCheckins.find(
            cmsCheckin => cmsCheckin.toolKey && cmsCheckin.toolKey === key
          )
          if (!shouldNotRemove)
            return [
              ...checkinsToChange,
              {
                checkin,
                number: step.number,
                __action__: 'remove',
              },
            ]
          return checkinsToChange
        },
        []
      )

      return [...allSteps, ...checkinActions, ...checkinsToRemove]
    }, [])

    for (const step of stepsWithUnsetNotifications) {
      const { checkin, number, __action__ } = step
      if (__action__ === 'change')
        yield put(changeCheckin({ ...checkin, step: number }))
      else if (__action__ === 'remove')
        yield put(removeCheckin({ step: number, tool: checkin.toolKey }))
    }
  }
}

function* watchForInitialNotifications() {
  yield takeLatest(BUILD_NOTIFICATION_SET, _setInitialNotifications)
}

function* watchForCheckinsUpdate() {
  const channel = yield actionChannel(CHANGE_CHECKIN)
  while (true) {
    const action: { payload: CheckinChangePayload } = yield take(channel)
    yield call(setUpNotificationAndUpdateCheckin, action)
  }
}

function* watchForCheckinsDeletion() {
  const channel = yield actionChannel(REMOVE_CHECKIN)
  while (true) {
    const action: { payload: DeleteCheckinPayload } = yield take(channel)
    yield call(handleRemoveCheckin, action)
  }
}

export function* _handleCheckinNotification({
  payload,
}: CheckinNotificationPayload) {
  const { step, toolKey, action, frequency } = payload
  const lastCheckin = moment()
  const [nextCheckin] = yield call(calculateNextCheckin, frequency)
  yield put(
    updateCheckin({ step, checkin: { lastCheckin, nextCheckin, toolKey } })
  )
  yield delay(1)
  if (action && action.type === 'link')
    yield put(linkNavigation({ link: action.payload.link }))
}

function* watchForCheckinNotifications() {
  const channel = yield actionChannel(CHECKIN_NOTIFICATION)
  while (true) {
    const action: { payload: CheckinNotificationPayload } = yield take(channel)
    yield call(_handleCheckinNotification, action)
  }
}

function* watchForNotificationToggling() {
  yield takeLatest(TOGGLE_CHECKIN, toggleNotification)
}

export function* watchForCheckinsSaga() {
  // TODO: Set up permissions for IOS? it would probably be good to do it here
  yield fork(watchForCheckinsUpdate)
  yield fork(watchForCheckinsDeletion)
  yield fork(watchForNotificationToggling)
  yield fork(watchForInitialNotifications)
  yield fork(watchForCheckinNotifications)
}
