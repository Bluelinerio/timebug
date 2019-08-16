//@flow
import {
  CAREER_GOAL_NOTIFICATION,
  CAREER_GOALS_SIDE_EFFECT,
} from '../actionTypes'

export type CareerGoalNotificationPayload = {
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

export type CareerGoalSideEffectPayload = {
  value: Array<FormValue>,
  awardData: Array<any>,
}

export const careerGoalNotification = (payload: CareerGoalNotificationPayload) => ({
  type: CAREER_GOAL_NOTIFICATION,
  payload,
})

export const careerGoalSideEffect = (payload: CareerGoalSideEffectPayload) => ({
  type: CAREER_GOALS_SIDE_EFFECT,
  payload,
})
