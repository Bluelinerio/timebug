// @flow
import { STEP_30_SIDE_EFFECT, STEP_2_SIDE_EFFECT } from '../actionTypes'

export type Payload = {
  formData: any,
}

export const step2SideEffect = (payload: Payload) => ({
  type: STEP_2_SIDE_EFFECT,
  payload,
})

export const step30SideEffect = (payload: Payload) => ({
  type: STEP_30_SIDE_EFFECT,
  payload,
})
