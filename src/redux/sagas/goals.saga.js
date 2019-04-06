// @flow
import { takeLatest, fork, put, select, call }  from 'redux-saga/effects'
import { delay }                                from 'redux-saga'
import moment                                   from 'moment'
import { stepEnum }                             from '2020_services/cms'
import { TOOL_KEYS }                            from '2020_static/tools'
import { notificationTypes }                    from '2020_services/notifications'
import { calculateNextCheckin }                 from '2020_services/checkins'
import { FORM_KEYS as goalFormKeys }            from '2020_forms/forms/goals'
import { timeToCompleteGoal }                   from '2020_forms/forms/content'
import { getDueDate }                           from '2020_utils/dateCalculationHelpers'
import { toHashCode }                           from '2020_utils/hashing'
import selectors                                from '../selectors'
import { GOAL_NOTIFICATION, GOALS_SIDE_EFFECT } from '../actionTypes'
import type {
  GoalNotificationPayload,
  GoalSideEffectPayload,
}                                               from '../actions/goals.actions'
import { linkNavigation }                       from '../actions/nav.actions'
import {
  createNotification,
  removeNotification,
}                                               from '../actions/notifications.actions'

const CREATE = 'CREATE'
const DELETE = 'DELETE'
const UPDATE = 'UPDATE'

type GoalStruct = {
  id: string,
  title: string,
  areasOfLife: Array<string>,
  award?: {
    completed?: boolean,
    deleted?: boolean,
  },
  isValid?: boolean,
  notification?: any,
  frequency: string,
  due: string,
}

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

// Added a delay to deal with race conditions
export function* _syncGoalsNotifications(action: {
  type: GOALS_SIDE_EFFECT,
  payload: GoalSideEffectPayload,
}) {
  yield delay(5000)
  const { payload = {} } = action
  const { value = [], awardData = [] } = payload
  const notifications = yield select(selectors.notifications)
  const mergedStep5Data: Array<GoalStruct> = value.reduce(
    (goalsData, goalFormData) => {
      const { _id } = goalFormData
      const dueDateKey = goalFormData[goalFormKeys.form_5_how_long].value
      const title = goalFormData[goalFormKeys.form_5_recent_life_goals].value
      const areasOfLife = goalFormData[goalFormKeys.form_5_areas_of_life].value
      const momentMods = timeToCompleteGoal[dueDateKey].moment
      const frequency = timeToCompleteGoal[dueDateKey].frequency
      const { hasNotHappened, due } = getDueDate(goalFormData, momentMods)
      const award = awardData ? awardData.find(g => g.goalId === _id) : null
      const nId = `${toHashCode(_id)}`
      const notification = notifications.find(n => n.id === nId)
      const version = goalFormData._meta ? goalFormData._meta.version : 1

      return [
        ...goalsData,
        {
          id: _id,
          title,
          areasOfLife,
          award,
          notification,
          isValid: hasNotHappened,
          frequency,
          due,
          version,
        },
      ]
    },
    []
  )

  const notificationsActions = notifications
    .filter(
      notification => notification.type === notificationTypes.GOAL_NOTIFICATION
    )
    .reduce((reducedActions, notification) => {
      const { data } = notification
      const {
        additionalProps: { data: { goalId, version: notificationVersion = 1 } },
      } = data
      const goal = value.find(goal => goal._id === goalId) || null
      const goalVersion = goal && goal._meta ? goal._meta.version : 1
      // If goal exists, and it's version is higher than the current version update
      // If it exists but the above is not true, do nothing
      // If it does not exist, delete
      if (goal && goal !== null && goalVersion > notificationVersion) {
        const { _id } = goal
        const dueDateKey = goal[goalFormKeys.form_5_how_long].value
        const title = goal[goalFormKeys.form_5_recent_life_goals].value
        const areasOfLife = goal[goalFormKeys.form_5_areas_of_life].value
        const momentMods = timeToCompleteGoal[dueDateKey].moment
        const frequency = timeToCompleteGoal[dueDateKey].frequency
        const { hasNotHappened, due } = getDueDate(goal, momentMods)
        return [
          ...reducedActions,
          {
            _action: UPDATE,
            notificationId: notification.id,
            goal: {
              id: _id,
              title,
              areasOfLife,
              isValid: hasNotHappened,
              frequency,
              due,
              version: goalVersion,
            },
          },
        ]
      } else if (goal) return reducedActions
      else
        return [
          ...reducedActions,
          {
            _action: DELETE,
            notificationId: notification.id,
          },
        ]
    }, [])

  const goalActions = mergedStep5Data.reduce((actions, goal) => {
    const hasNotification = !!goal.notification
    const hasFulfilledConditions = goal.award
      ? goal.award.completed || goal.award.deleted
      : false
    const { isValid } = goal
    if (hasNotification && (hasFulfilledConditions || !isValid))
      return [
        ...actions,
        {
          _action: DELETE,
          notificationId: goal.notification.id,
        },
      ]
    else if (!hasNotification && !hasFulfilledConditions && isValid)
      return [
        ...actions,
        {
          _action: CREATE,
          goal,
        },
      ]
    return actions
  }, [])

  const actions = [...goalActions, ...notificationsActions]

  for (const action of actions) {
    const { _action } = action
    if (_action === CREATE) {
      const { goal } = action
      const { id, title, frequency, due, areasOfLife, version } = goal
      const notificationId = `${toHashCode(id)}`

      const [notificationTime, notificationInterval] = yield call(
        calculateNextCheckin,
        frequency
      )

      const additionalProps: { type: string, data: GoalNotificationPayload } = {
        type: notificationTypes.GOAL_NOTIFICATION,
        data: {
          goalId: id,
          due,
          areasOfLife,
          frequency,
          notificationId,
          notificationInterval,
          version,
        },
      }

      yield put(
        createNotification({
          message: `It's time to check up on your goal: ${title}`,
          id: notificationId,
          notificationTime,
          repeatTime: notificationInterval,
          additionalProps,
        })
      )
    } else if (_action === DELETE) {
      const { notificationId } = action
      yield put(removeNotification({ id: `${notificationId}` }))
    } else if (_action === UPDATE) {
      const { notificationId, goal } = action

      yield put(removeNotification({ id: `${notificationId}` }))

      const { id, title, frequency, due, areasOfLife, version } = goal

      const [notificationTime, notificationInterval] = yield call(
        calculateNextCheckin,
        frequency
      )

      const additionalProps: { type: string, data: GoalNotificationPayload } = {
        type: notificationTypes.GOAL_NOTIFICATION,
        data: {
          goalId: id,
          due,
          areasOfLife,
          frequency,
          notificationId,
          notificationInterval,
          version,
        },
      }

      yield put(
        createNotification({
          message: `It's time to check up on your goal: ${title}`,
          id: notificationId,
          notificationTime,
          repeatTime: notificationInterval,
          additionalProps,
        })
      )
    }
  }
}

function* watchForGoalNotificationsSaga() {
  yield takeLatest(GOAL_NOTIFICATION, _handleGoalNotification)
}

function* watchForStepSideEffect() {
  yield takeLatest(GOALS_SIDE_EFFECT, _syncGoalsNotifications)
}
export function* watchForGoalsSaga() {
  yield fork(watchForGoalNotificationsSaga)
  yield fork(watchForStepSideEffect)
}
