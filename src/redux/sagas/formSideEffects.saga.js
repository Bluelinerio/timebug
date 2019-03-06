// @flow
import {
  actionChannel,
  fork,
  take,
  call,
  select,
  put,
  takeLatest,
}                                       from 'redux-saga/effects'

import { TOOL_KEYS }                    from '2020_static/tools'
import { stepEnum }                     from '2020_services/cms'

import selectors                        from '../selectors'
import {
  SUBMIT_FORM_VALUE,
  SUBMIT_AWARD_VALUE,
  SYNC_SIDE_EFFECTS,
}                                       from '../actionTypes'
import type { SubmitActionPayload }     from '../actions/formData.actions'
import type { SubmitAwardValuePayload } from '../actions/award.actions'
import type { GoalSideEffectPayload }   from '../actions/goals.actions'
import { goalSideEffect }               from '../actions/goals.actions'

// TODO: Refactor into several sagas, extract constants to readable file

const toolKeysForStepIds = {
  [stepEnum.STEP_5]: TOOL_KEYS.GoalTrackerKey,
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
    yield call(_callGoalsSideEffect, formDataForStep, value)
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
    yield call(_callGoalsSideEffect, value, awardDataValue)
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
    const getAwardDataForTool = yield select(selectors.awardDataForStepAndTool)
    const awardDataForTool = yield call(getAwardDataForTool, {
      stepNumber: `${step}`,
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