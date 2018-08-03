//@flow
import { SUBMIT_AWARD_VALUE, RESET_AWARD_VALUE } from '../actionTypes'

export type SubmitAwardValuePayload = {
  stepId: string,
  element: {
    key: string,
    value: any,
    type: any
  }
}

export type SumbitAwardValueAction = {
  type: SUBMIT_AWARD_VALUE,
  payload: SubmitAwardValuePayload
}

export const submitAwardAnswers = (payload: any): SumbitAwardValueAction => ({
  type: SUBMIT_AWARD_VALUE,
  payload
})

export const resetAward = () => ({
  type: RESET_AWARD_VALUE
})
