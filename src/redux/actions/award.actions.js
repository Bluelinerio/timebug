//@flow
import {
  SUBMIT_AWARD_VALUE,
  RESET_AWARD_VALUE,
  SUBMIT_AWARD_VALUE_EXTENDED,
  EVALUATE_AWARD_DATA_EXTENDED,
  INCREMENT_TOOL_DATA_QUEUE,
  DECREMENT_TOOL_DATA_QUEUE,
  RESTORE_TOOL_DATA,
  EXECUTE_TOOL_SYNC,
} from '../actionTypes'
import type { Operation } from '../types/toolData.types'

export type SubmitAwardValuePayload = {
  element: {
    key: string,
    value: any,
    tool?: any,
  },
}

export type SumbitAwardValueAction = {
  type: SUBMIT_AWARD_VALUE,
  payload: SubmitAwardValuePayload,
}

export type ExtendedSubmitAwardAnswerPayload = {
  stepId: string,
  element: {
    awardKey: string,
    value: any,
    model: any,
    meta?: any,
    fieldKey: any,
    type: any,
  },
}

export type ExtendedSubmitAwardAnswerAction = {
  type: SUBMIT_AWARD_VALUE_EXTENDED,
  payload: SubmitAwardValuePayload,
}

export type ExecuteToolSyncPayload = {
  operations: Array<Operation>,
}

export const submitAwardAnswers = (
  payload: SubmitAwardValuePayload
): SumbitAwardValueAction => ({
  type: SUBMIT_AWARD_VALUE,
  payload,
})

export const extendedSubmitAwardAnswers = (
  payload: ExtendedSubmitAwardAnswerPayload
): ExtendedSubmitAwardAnswerAction => ({
  type: SUBMIT_AWARD_VALUE_EXTENDED,
  payload,
})

export const resetAward = () => ({
  type: RESET_AWARD_VALUE,
})

export const evaluateExtendedAward = (
  payload: ExtendedSubmitAwardAnswerPayload
): ExtendedSubmitAwardAnswerAction => ({
  type: EVALUATE_AWARD_DATA_EXTENDED,
  payload,
})

export const incrementToolDataQueue = () => ({
  type: INCREMENT_TOOL_DATA_QUEUE,
})

export const decrementToolDataQueue = () => ({
  type: DECREMENT_TOOL_DATA_QUEUE,
})

export const restoreToolData = () => ({
  type: RESTORE_TOOL_DATA,
})

export const executeToolSync = (payload: ExecuteToolSyncPayload) => ({
  type: EXECUTE_TOOL_SYNC,
  payload,
})
