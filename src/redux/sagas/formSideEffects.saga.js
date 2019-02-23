// @flow
import {
  actionChannel,
  fork,
  take,
  call,
  select,
  put,
}                                                from 'redux-saga/effects'
import { FORM_KEYS as goalFormKeys }             from '2020_forms/forms/goals'
import { timeToCompleteGoal }                    from '2020_forms/forms/content'
import { stepEnum }                              from '2020_services/cms'
import { TOOL_KEYS }                             from '2020_static/tools'
import { getDueDate }                            from '2020_utils/dateCalculationHelpers'
import { toHashCode }                            from '2020_utils/hashing'
import selectors                                 from '../selectors'
import { SUBMIT_FORM_VALUE, SUBMIT_AWARD_VALUE } from '../actionTypes'
import type { SubmitActionPayload }              from '../actions/formData.actions'
import type { GoalNotificationPayload }          from '../actions/goals.actions'
import type { SubmitAwardValuePayload }          from '../actions/award.actions'
import {
  createNotification,
  removeNotification,
}                                                from '../actions/notifications.actions'
import { notificationTypes }                     from '../../services/notifications'
import { calculateNextCheckin }                  from '../../services/checkins'

// TODO: Refactor into several sagas, extract constants to readable file

const toolKeysForStepIds = {
  [stepEnum.STEP_5]: TOOL_KEYS.GoalTrackerKey,
}

const CREATE = 'CREATE'
const DELETE = 'DELETE'

type FormValue = {
  value: any,
}

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

function* _syncGoalsNotifications(
  value: Array<FormValue>,
  awardData: Array<any> = []
) {
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
        },
      ]
    },
    []
  )

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
          goal,
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

  for (const action of goalActions) {
    const { _action, goal } = action
    if (_action === CREATE) {
      const { id, title, frequency, due, areasOfLife } = goal
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
    } else {
      const { notification } = goal
      yield put(removeNotification({ id: `${notification.id}` }))
    }
  }
}

function* _handleAwardEffects(action: {
  type: SUBMIT_AWARD_VALUE,
  payload: SubmitAwardValuePayload,
}) {
  const { payload } = action
  const { stepId, element } = payload
  const { value } = element
  const formData = yield select(selectors.formData)
  const formDataForStep = formData[`${stepId}`].value
  switch (stepId) {
  case stepEnum.STEP_5:
    yield call(_syncGoalsNotifications, formDataForStep, value)
    break
  default:
    yield
  }
}

function* _handleSideEffects(action: {
  type: SUBMIT_FORM_VALUE,
  payload: SubmitActionPayload,
}) {
  const { payload } = action
  const { stepId, value } = payload
  const getAwardDataForTool = yield select(selectors.awardDataForStepAndTool)
  const awardKey = toolKeysForStepIds[`${stepId}`]
  const awardDataForTool = awardKey
    ? yield call(getAwardDataForTool, {
      stepNumber: `${stepId}`,
      tool: { key: awardKey },
    })
    : null
  const awardDataValue =
    awardDataForTool && awardDataForTool.value
      ? awardDataForTool.value
      : undefined
  switch (stepId) {
  case stepEnum.STEP_5:
    yield call(_syncGoalsNotifications, value, awardDataValue)
    break
  default:
    yield
  }
}

function* _watchForAwardChanges() {
  const requestChan = yield actionChannel([SUBMIT_AWARD_VALUE])
  while (true) {
    const action = yield take(requestChan)
    yield fork(_handleAwardEffects, action)
  }
}

function* _watchForFormChanges() {
  const requestChan = yield actionChannel([SUBMIT_FORM_VALUE])
  while (true) {
    const action = yield take(requestChan)
    yield fork(_handleSideEffects, action)
  }
}

export function* watchForFormSideEffectsSaga() {
  yield fork(_watchForAwardChanges)
  yield fork(_watchForFormChanges)
}
