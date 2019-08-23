// @flow
import {
  actionChannel,
  fork,
  take,
  call,
  select,
  put,
  takeLatest,
} from 'redux-saga/effects'

import { TOOL_KEYS } from '2020_static/tools'
import { stepEnum } from '2020_services/cms'

import selectors from '../selectors'
import {
  SUBMIT_FORM_VALUE,
  SUBMIT_AWARD_VALUE,
  SYNC_SIDE_EFFECTS,
} from '../actionTypes'
import type { SubmitActionPayload } from '../actions/formData.actions'
import type { SubmitAwardValuePayload } from '../actions/award.actions'
import type { GoalSideEffectPayload } from '../actions/goals.actions'
import { goalSideEffect } from '../actions/goals.actions'
import { CareerGoalSideEffectPayload } from '../actions/careerGoals.actions'
import { careerGoalSideEffect } from '../actions/careerGoals.actions'

// TODO: Refactor into several sagas, extract constants to readable file

const toolKeysForStepIds = {
  [stepEnum.STEP_5]: TOOL_KEYS.GoalTrackerKey,
  [stepEnum.STEP_13]: TOOL_KEYS.CareerGoalsTrackerKey,
}

function* _callGoalsSideEffect(
  value: Array<any> = [],
  awardData: Array<any> = []
) {
  const payload: GoalSideEffectPayload = {
    value,
    awardData,
  }
  yield put(goalSideEffect(payload))
}

function* _callCareerGoalsSideEffect(
  value: any = [],
  awardData: Array<any> = null
) {
  const payload: CareerGoalSideEffectPayload = {
    value,
    awardData,
  }
  yield put(careerGoalSideEffect(payload))
}

function* _handleAwardEffects(action: {
  type: SUBMIT_AWARD_VALUE,
  payload: SubmitAwardValuePayload,
}) {
  const { payload } = action
  const { element } = payload
  const { value, tool } = element
  const { affectedSteps = [] } = tool
  if (affectedSteps && affectedSteps.length > 0) {
    const formData = yield select(selectors.formData)
    for (const step of affectedSteps) {
      const formDataForStep = formData[`${step}`]
      const formValueForStep = formDataForStep ? formDataForStep.value : null
      switch (`${step}`) {
        case stepEnum.STEP_5:
          yield fork(_callGoalsSideEffect, formValueForStep, value)
          break
        case stepEnum.STEP_13:
          yield fork(_callCareerGoalsSideEffect, formValueForStep, value)
          break
        default:
          yield
      }
    }
  }
  yield
}

function* _handleSideEffects(action: {
  type: SUBMIT_FORM_VALUE,
  payload: SubmitActionPayload,
}) {
  const { payload } = action
  const { stepId, value } = payload
  const getAwardDataForTool = yield select(selectors.awardDataForTool)
  const awardKey = toolKeysForStepIds[`${stepId}`]
  const awardDataForTool = awardKey
    ? yield call(getAwardDataForTool, {
        tool: { key: awardKey },
      })
    : null
  const awardDataValue =
    awardDataForTool && awardDataForTool.value
      ? awardDataForTool.value
      : undefined
  switch (stepId) {
    case stepEnum.STEP_5:
      yield call(_callGoalsSideEffect, value, awardDataValue)
      break
    case stepEnum.STEP_13:
      yield fork(_callCareerGoalsSideEffect, value, awardDataValue)
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

function* _handleSyncSideEffects() {
  for (const step in toolKeysForStepIds) {
    const formData = yield select(selectors.formData)
    const formDataForStep = formData
      ? formData[`${step}`] ? formData[`${step}`].value : undefined
      : undefined
    if (!formDataForStep) continue
    const toolKey = toolKeysForStepIds[step]
    const getAwardDataForTool = yield select(selectors.awardDataForTool)
    const awardDataForTool = yield call(getAwardDataForTool, {
      tool: { key: toolKey },
    })
    const awardDataValue =
      awardDataForTool && awardDataForTool.value
        ? awardDataForTool.value
        : undefined
    switch (step) {
      case stepEnum.STEP_5:
        yield call(_callGoalsSideEffect, formDataForStep, awardDataValue)
        break
      case stepEnum.STEP_13:
        yield fork(_callCareerGoalsSideEffect, formDataForStep, awardDataValue)
        break
      default:
        yield
    }
  }
}

function* _watchForSyncronization() {
  yield takeLatest(SYNC_SIDE_EFFECTS, _handleSyncSideEffects)
}

export function* watchForFormSideEffectsSaga() {
  yield fork(_watchForAwardChanges)
  yield fork(_watchForFormChanges)
  yield fork(_watchForSyncronization)
}
