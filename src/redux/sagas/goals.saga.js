// @flow
import { takeLatest, fork, put }        from 'redux-saga/effects'
import moment                           from 'moment'
import { stepEnum }                     from '2020_services/cms'
import { TOOL_KEYS }                    from '2020_static/tools'
import { GOAL_NOTIFICATION }            from '../actionTypes'
import type { GoalNotificationPayload } from '../actions/goals.actions'
import { removeNotification }           from '../actions/notifications.actions'
import { linkNavigation }               from '../actions/nav.actions'

function* _handleGoalNotification(action: {
  type: string,
  payload: GoalNotificationPayload,
}) {
  try {
    const { payload } = action
    const { due, notificationId, goalId } = payload
    const stepId = stepEnum.STEP_5
    const link = `tools/tool?step=${stepId}&key=${
      TOOL_KEYS.GoalTrackerKey
    }&goalId=${goalId}`

    const dueMoment = moment(due).startOf('day')
    const today = moment().startOf('day')
    const hasPassed = today.add(15, 's').isAfter(dueMoment)
    if (hasPassed) yield put(removeNotification({ id: notificationId }))
    yield put(linkNavigation({ link }))
  } catch (err) {
    //fail Silently
  }
}

function* watchForGoalNotificationsSaga() {
  yield takeLatest(GOAL_NOTIFICATION, _handleGoalNotification)
}

export function* watchForGoalsSaga() {
  yield fork(watchForGoalNotificationsSaga)
}
