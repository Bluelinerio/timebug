//@flow
import {
  SUBMIT_AWARD_VALUE,
  RESET_AWARD_VALUE,
  SUBMIT_AWARD_VALUE_EXTENDED,
  EVALUATE_AWARD_DATA_EXTENDED
} from '../actionTypes'

export type SubmitAwardValuePayload = {
  stepId: string,
  element: {
    key: string,
    value: any,
    formIndex: any,
    type: any
  }
}

export type SumbitAwardValueAction = {
  type: SUBMIT_AWARD_VALUE,
  payload: SubmitAwardValuePayload
}

export type ExtendedSubmitAwardAnswerPayload = {
  stepId: string,
  element: {
    awardKey: string,
    value: any,
    model: any,
    meta? : any,
    fieldKey: any,
    type: any
  }
}

export type ExtendedSubmitAwardAnswerAction = {
  type: SUBMIT_AWARD_VALUE_EXTENDED,
  payload: SubmitAwardValuePayload
}

export const submitAwardAnswers = (
  payload: SubmitAwardValuePayload
): SumbitAwardValueAction => ({
  type: SUBMIT_AWARD_VALUE,
  payload
})

export const extendedSubmitAwardAnswers = (
  payload: ExtendedSubmitAwardAnswerPayload
): ExtendedSubmitAwardAnswerAction => ({
  type: SUBMIT_AWARD_VALUE_EXTENDED,
  payload
})

export const resetAward = () => ({
  type: RESET_AWARD_VALUE
})

export const evaluateExtendedAward = (
  payload: ExtendedSubmitAwardAnswerPayload
): ExtendedSubmitAwardAnswerAction => ({
  type: EVALUATE_AWARD_DATA_EXTENDED,
  payload
})
