// @flow
import moment from 'moment'
import { takeLatest, fork, select, call, put } from 'redux-saga/effects'
import {
  FORM_KEYS,
  CHILDREN_KEYS,
} from '../../screens/ToolworkScreen/Tools/step23/static/form'
import selectors from '../selectors'
import { notificationTypes } from '2020_services/notifications'
import {
  CAREER_DREAM_NOTIFICATION,
  CAREER_DREAM_SIDE_EFFECT,
} from '../actionTypes'
import type {
  CareerDreamNotificationPayload,
  CareerDreamSideEffectPayload,
} from '../actions/careerDreams.actions'
import { timeToCompleteGoal } from '2020_forms/forms/content'
import { calculateNextCheckin } from '2020_services/checkins'
import {
  createNotification,
  removeNotification,
} from '../actions/notifications.actions'
import { stepEnum } from '2020_services/cms'
import { TOOL_KEYS } from '2020_static/tools'
import { linkNavigation } from '../actions/nav.actions'

const CREATE = 'CREATE'
const DELETE = 'DELETE'
const UPDATE = 'UPDATE'

export const getDueDate = (
  goal: { creation: string },
  timeMeasure: Array<{ unit: string, value: number }>
) => {
  const { creation: created_at } = goal
  const creation = moment(created_at)
  const date = creation.clone()
  const due = timeMeasure.reduce(
    (dueMoment, momentModifier) =>
      dueMoment.add(momentModifier.value, momentModifier.unit),
    date
  )
  const dueString = due.format()
  const hasNotHappened = moment()
    .add(10, 'm')
    .isBefore(due)
  return {
    hasNotHappened,
    due: dueString,
  }
}

const generateId = (notifications: Array<id>) => {
  const notificationIds = notifications.map(n => n.id)
  let newId = null
  const filter = id => `${id}` === newId
  while (!newId) {
    newId = Math.floor(Math.random() * 100000000)
    const exists = notificationIds.find(filter)
    if (exists) newId = null
  }
  return `${newId}`
}

const parseSteps = (steps: Array<any>, stepToolData: Array<any> = []) => {
  const parsedSteps = steps.map(s => {
    const id = s._id
    const name =
      s[CHILDREN_KEYS.career_dreams_form_steps.step_to_life_goal].value
    const substepToolData = stepToolData.find(s => s.substepId === id) || null
    return {
      id,
      name,
      toolData: substepToolData,
    }
  })
  return parsedSteps
}

const parseGoals = (value: Array<any>) => {
  if (!value) return []

  const formValue = value ? value.form : []
  const toolDataValue = value ? (value.toolData ? value.toolData : []) : []

  const goals = formValue.map(val => {
    const id = val._id

    const toolDataForGoal = toolDataValue.find(t => t.goalId === id) || null

    const name = val[FORM_KEYS.career_dreams_form_goal].value
    const categoryKey = val[FORM_KEYS.career_dreams_form_category].value
    const howLongKey = val[FORM_KEYS.career_dreams_form_how_long].value
    const stepsRaw = val[FORM_KEYS.career_dreams_form_steps].value
    const creation = val.created_at

    const timeToComplete =
      timeToCompleteGoal[howLongKey] || timeToCompleteGoal.DAY

    const steps = parseSteps(
      stepsRaw,
      toolDataForGoal ? toolDataForGoal.steps : []
    )

    const meta = val._meta

    return {
      id,
      name,
      category: categoryKey,
      timeToComplete,
      steps,
      creation,
      created_at: val.created_at,
      toolData: toolDataForGoal,
      meta,
    }
  })

  return goals
}

function* _handleGoalNotification(action: {
  type: CAREER_DREAM_NOTIFICATION,
  payload: CareerDreamNotificationPayload,
}) {
  try {
    const { payload } = action
    const { due, notificationId, category, goalId } = payload
    const stepId = stepEnum.STEP_13

    const link = `tools/tool?step=${stepId}&key=${
      TOOL_KEYS.VisionCreationDreamsTrackerKey
    }&goalId=${goalId}&category=${category}`

    const dueMoment = moment(due).startOf('day')
    const today = moment().startOf('day')
    const hasPassed = today.add(15, 's').isAfter(dueMoment)
    if (hasPassed) yield put(removeNotification({ id: notificationId }))
    yield put(linkNavigation({ link }))
  } catch (err) {
    //fail Silently
  }
}

export function* _syncGoalsNotifications(action: {
  type: GOALS_SIDE_EFFECT,
  payload: CareerDreamSideEffectPayload,
}) {
  const { payload } = action
  const { awardData } = payload
  const goals = yield call(parseGoals, awardData)

  const notifications = yield select(selectors.notifications)

  const dreamNotifications = notifications.filter(
    n => n.type === notificationTypes.CAREER_DREAM_NOTIFICATION
  )

  const mergedGoalsData = goals.reduce((goalsData, goal) => {
    const { id } = goal
    const { timeToComplete } = goal
    const momentMods = timeToComplete.moment
    const { hasNotHappened, due } = getDueDate(goal, momentMods)
    const notification = dreamNotifications.find(n => {
      const { data } = n
      if (
        !data ||
        !data.additionalProps ||
        !data.additionalProps.data ||
        !data.additionalProps.data.goalId
      )
        return false
      return data.additionalProps.data.goalId === id
    })
    const version = goal.meta ? goal.meta.version : 1

    return [
      ...goalsData,
      {
        ...goal,
        notification,
        isValid: hasNotHappened,
        due,
        version,
      },
    ]
  }, [])

  const notificationsActions = dreamNotifications.reduce(
    (reducedActions, notification) => {
      const { data } = notification
      const {
        additionalProps: { data: { goalId, version: notificationVersion = 1 } },
      } = data
      const goal = mergedGoalsData.find(goal => goal.id === goalId) || null
      const goalVersion = goal && goal.meta ? goal.meta.version : 1
      // If goal exists, and it's version is higher than the current version update
      // If it exists but the above is not true, do nothing
      // If it does not exist, delete
      if (goal && goal !== null && goalVersion > notificationVersion) {
        return [
          ...reducedActions,
          {
            _action: UPDATE,
            notificationId: notification.id,
            goal: {
              ...goal,
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
    },
    []
  )

  const goalActions = mergedGoalsData.reduce((actions, goal) => {
    const hasNotification = !!goal.notification
    const hasFulfilledConditions = goal.toolData
      ? goal.toolData.completed || goal.toolData.deleted
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

  for (const goalAction of actions) {
    const { _action } = goalAction
    if (_action === CREATE) {
      const { goal } = goalAction
      const {
        id,
        name,
        timeToComplete,
        due,
        category,
        version,
        steps,
        toolData,
      } = goal
      const notificationId = generateId(notifications)

      const [notificationTime, notificationInterval] = yield call(
        calculateNextCheckin,
        timeToComplete.frequency
      )

      const additionalProps: {
        type: string,
        data: CareerDreamNotificationPayload,
      } = {
        type: notificationTypes.CAREER_DREAM_NOTIFICATION,
        data: {
          goalId: id,
          due,
          category,
          timeToComplete,
          notificationId,
          notificationInterval,
          version,
          steps,
          toolData,
        },
      }

      yield put(
        createNotification({
          message: `It's time to check up on your goal: ${name}`,
          id: notificationId,
          notificationTime,
          repeatTime: notificationInterval,
          additionalProps,
        })
      )
    } else if (_action === DELETE) {
      const { notificationId } = goalAction
      yield put(removeNotification({ id: `${notificationId}` }))
    } else if (_action === UPDATE) {
      const { notificationId, goal } = goalAction

      yield put(removeNotification({ id: `${notificationId}` }))

      const {
        id,
        name,
        timeToComplete,
        due,
        category,
        version,
        steps,
        toolData,
      } = goal

      const [notificationTime, notificationInterval] = yield call(
        calculateNextCheckin,
        timeToComplete.frequency
      )

      const additionalProps: {
        type: string,
        data: CareerDreamNotificationPayload,
      } = {
        type: notificationTypes.CAREER_DREAM_NOTIFICATION,
        data: {
          goalId: id,
          due,
          category,
          timeToComplete,
          notificationId,
          notificationInterval,
          version,
          steps,
          toolData,
        },
      }

      yield put(
        createNotification({
          message: `It's time to check up on your goal: ${name}`,
          id: notificationId,
          notificationTime,
          repeatTime: notificationInterval,
          additionalProps,
        })
      )
    }
  }

  yield
}

function* watchForCareerDreamsNotificationsSaga() {
  yield takeLatest(CAREER_DREAM_NOTIFICATION, _handleGoalNotification)
}

function* watchForCareerDreamsSideEffect() {
  yield takeLatest(CAREER_DREAM_SIDE_EFFECT, _syncGoalsNotifications)
}
export function* watchForCareerDreamsSaga() {
  yield fork(watchForCareerDreamsNotificationsSaga)
  yield fork(watchForCareerDreamsSideEffect)
}
