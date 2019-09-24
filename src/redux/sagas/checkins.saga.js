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
} from 'redux-saga/effects'
import { delay } from 'redux-saga'
import moment from 'moment'
import { updateCheckin } from '../actions/checkin.actions'
import {
  CHANGE_CHECKIN,
  BUILD_NOTIFICATION_SET,
  REMOVE_CHECKIN,
  TOGGLE_CHECKIN,
  CHECKIN_NOTIFICATION,
  EDIT_CHECKIN,
  UPDATE_OR_CREATE_CHECKIN,
} from '../actionTypes'
import { GET_USER } from '../actions/user.actions'
import { FETCH_CMS } from '../actions/cms.actions'
import { calculateNextCheckin } from '../../services/checkins'
import {
  createNotification,
  removeNotification,
} from '../actions/notifications.actions'
import {
  changeCheckin,
  deleteCheckin,
  removeCheckin,
  editCheckin,
} from '../actions/checkin.actions'
import type {
  DeleteCheckinPayload,
  CheckinChangePayload,
  ToggleCheckinPayload,
  CheckinNotificationPayload,
  EditCheckinPayload,
  NotificationUpdateOrCreatePayload,
} from '../actions/checkin.actions'
import { linkNavigation } from '../actions/nav.actions'
import selectors from '../selectors'
import { isStepCompleted } from '../../services/cms'
import { timeoutNoError as timeout } from '../utils/sagaHelpers'
import { notificationTypes } from '2020_services/notifications'
import { toHashCode } from '2020_utils/hashing'
import R from 'ramda'

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
  const {
    step,
    frequency,
    message,
    toolKey,
    action,
    notificationSchedule,
    ...rest
  } = payload
  const hourlyNotificationEnabled = notificationSchedule
    ? notificationSchedule.enabled
    : false
  const [notificationTime, repeatTime] = yield call(
    calculateNextCheckin,
    frequency,
    hourlyNotificationEnabled
      ? notificationSchedule.value
        ? notificationSchedule.value
        : notificationSchedule.default
      : null
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
      notificationSchedule,
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
        ...rest,
        frequency,
        nextCheckin: notificationTime,
        id,
        message,
        toolKey,
        action,
        notificationSchedule,
      },
    })
  )
}

function* _handleCheckinNotificationUpdateOrCreate({
  payload,
}: NotificationUpdateOrCreatePayload) {
  const { step, toolKey, action, ...rest } = payload

  const checkins = yield select(selectors.getCheckins)
  const currentCheckin = checkins[`${step}`][`${toolKey}`]

  const notificationId = `${toHashCode(toolKey)}`
  const notifications = yield select(selectors.notifications)

  const notification = notifications.find(n => n.id === notificationId)

  if (notification) {
    delete currentCheckin.id
    delete currentCheckin.nextCheckin
    yield put(
      editCheckin({
        number: step,
        checkin: {
          ...currentCheckin,
          ...rest,
        },
        notification,
      })
    )
  } else
    yield put(
      changeCheckin({
        step,
        toolKey,
        action,
        ...rest,
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
    yield put(changeCheckin({ ...checkin, step: step }))
  }
}

function* _handleCheckinEdition({ payload }: { payload: EditCheckinPayload }) {
  const { checkin, number, notification } = payload
  const {
    toolKey,
    message,
    action,
    frequency,
    notificationSchedule,
    ...rest
  } = checkin


  const hourlyNotificationEnabled = notificationSchedule
    ? notificationSchedule.enabled
    : false

  let notificationTime = notification ? notification.scheduledDate : null
  const id = `${toHashCode(toolKey)}`

  const oldFrequency = notification
    ? R.view(
        R.lensPath(['data', 'additionalProps', 'data', 'frequency']),
        notification
      )
    : null

  const oldNotificationSchedule =
    notification && hourlyNotificationEnabled
      ? R.view(
          R.lensPath([
            'data',
            'additionalProps',
            'data',
            'notificationSchedule',
          ]),
          notification
        )
      : {}

  const oldRepeatTime = notification
    ? R.view(R.lensPath(['data', 'repeatTime']), notification)
    : null

  let repeatTime = oldRepeatTime

  if (
    (hourlyNotificationEnabled &&
      oldNotificationSchedule.value !== notificationSchedule.value) ||
    (!notification || frequency !== oldFrequency)
  ) {
    /* eslint-disable-next-line no-unused-vars */
    const [time, newRepeatTime] = yield call(
      calculateNextCheckin,
      frequency,
      hourlyNotificationEnabled
        ? notificationSchedule.value
          ? notificationSchedule.value
          : notificationSchedule.default
        : null
    )

    repeatTime = newRepeatTime
    notificationTime = time
  }
  const additionalProps = {
    type: notificationTypes.CHECKIN_NOTIFICATION,
    data: {
      step: number,
      id,
      toolKey,
      action,
      frequency,
      notificationSchedule,
    },
  }

  yield put(removeCheckin({ step: number, tool: toolKey }))
  yield delay(10)

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
      step: number,
      checkin: {
        frequency,
        nextCheckin: notificationTime,
        id,
        message,
        toolKey,
        action,
        notificationSchedule,
        ...rest,
      },
    })
  )
}

const isCheckinInStore = (step: any, checkin: any, checkins: any) =>
  checkins[step.number] && checkins[step.number][checkin.toolKey]

// TODO: If checkins have been completely deleted from a step in the CMS, the checkins remain locally
// due to the return on type not being array.

function* _setInitialNotifications() {
  const steps = yield select(selectors.steps)
  const user = yield select(selectors.user)
  const checkins = yield select(selectors.getCheckins)
  const notifications = yield select(selectors.notifications)
  if (user) {
    yield race({
      request: call(_watchForInitialNotificationsHold),
      timeout: call(timeout, 5000),
    })
    const stepsWithUnsetNotifications: StepsWithNotificationUpdates = Object.values(
      steps
    ).reduce((allSteps, step) => {
      const stepCheckins = step.checkin
      const { __meta = { revisionId: -1 } } = step
      const { revisionId } = __meta
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
                checkin: {
                  ...checkin,
                  revisionId,
                },
                number: step.number,
                __action__: 'change',
              },
            ]
          }
          return checkinsToBeChanged
        },
        []
      )

      const checkinsToUpdate = Object.keys(checkinsForStepInState).reduce(
        (checkinsToChange, key) => {
          const checkin = checkinsForStepInState[key]
          const checkinInCms = stepCheckins.find(
            cmsCheckin => cmsCheckin.toolKey && cmsCheckin.toolKey === key
          )
          if (!checkinInCms)
            return [
              ...checkinsToChange,
              {
                checkin,
                number: step.number,
                __action__: 'remove',
              },
            ]
          else {
            const shouldUpdate =
              (!checkin.revisionId && revisionId !== -1) ||
              checkin.revisionId < revisionId
            if (shouldUpdate) {
              const notification =
                notifications
                  .filter(n => n.type === CHECKIN_NOTIFICATION)
                  .find(n => {
                    const key = R.view(
                      R.lensPath([
                        'data',
                        'additionalProps',
                        'data',
                        'toolKey',
                      ]),
                      n
                    )
                    return key && key === checkin.toolKey
                  }) || null
              return [
                ...checkinsToChange,
                {
                  checkin: {
                    ...checkinInCms,
                    revisionId,
                  },
                  notification,
                  number: step.number,
                  __action__: 'update',
                },
              ]
            }
          }
          return checkinsToChange
        },
        []
      )

      return [...allSteps, ...checkinActions, ...checkinsToUpdate]
    }, [])

    for (const step of stepsWithUnsetNotifications) {
      const { checkin, notification = null, number, __action__ } = step
      if (__action__ === 'change')
        yield put(changeCheckin({ ...checkin, step: number }))
      else if (__action__ === 'remove')
        yield put(removeCheckin({ step: number, tool: checkin.toolKey }))
      else if (__action__ === 'update')
        yield put(editCheckin({ number, checkin, notification }))
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

function* watchForCheckinsUpdateOrCreate() {
  const channel = yield actionChannel(UPDATE_OR_CREATE_CHECKIN)
  while (true) {
    const action: { payload: NotificationUpdateOrCreatePayload } = yield take(
      channel
    )
    yield call(_handleCheckinNotificationUpdateOrCreate, action)
  }
}

export function* _handleCheckinNotification({
  payload,
}: CheckinNotificationPayload) {
  const { step, toolKey, action, frequency, notificationSchedule } = payload
  const lastCheckin = moment()

  const hourlyNotificationEnabled = notificationSchedule
    ? notificationSchedule.enabled
    : false

  const [nextCheckin] = yield call(
    calculateNextCheckin,
    frequency,
    hourlyNotificationEnabled
      ? notificationSchedule.value
        ? notificationSchedule.value
        : notificationSchedule.default
      : null
  )

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

function* watchForCheckinEdition() {
  const channel = yield actionChannel(EDIT_CHECKIN)
  while (true) {
    const action: { payload: EditCheckinPayload } = yield take(channel)
    yield fork(_handleCheckinEdition, action)
  }
}

export function* watchForCheckinsSaga() {
  // TODO: Set up permissions for IOS? it would probably be good to do it here
  yield fork(watchForCheckinsUpdate)
  yield fork(watchForCheckinsDeletion)
  yield fork(watchForCheckinEdition)
  yield fork(watchForNotificationToggling)
  yield fork(watchForInitialNotifications)
  yield fork(watchForCheckinNotifications)
  yield fork(watchForCheckinsUpdateOrCreate)
}
