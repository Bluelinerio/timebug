// @flow
import {
  CAREER_DREAM_NOTIFICATION,
  CAREER_DREAM_SIDE_EFFECT,
} from '../actionTypes'

export type CareerDreamNotificationPayload = {
  goalId: string,
  due: string,
  areasOfLife: Array<string>,
  frequency: string,
  notificationId: string,
  notificationInterval: number,
}

type FormValue = {
  value: any,
}

type ToolData = {
  form: Array<FormValue>,
  toolData: Array<any>,
}

export type CareerDreamSideEffectPayload = {
  value: Array<FormValue>,
  awardData: Array<ToolData>,
}

export const careerDreamNotification = (
  payload: CareerGoalNotificationPayload
) => ({
  type: CAREER_DREAM_NOTIFICATION,
  payload,
})

export const careerDreamSideEffect = (
  payload: CareerGoalSideEffectPayload
) => ({
  type: CAREER_DREAM_SIDE_EFFECT,
  payload,
})
