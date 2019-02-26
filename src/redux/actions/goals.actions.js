//@flow
import {
  ADD_GOAL_STEP,
  REMOVE_GOAL_STEP,
  UPDATE_GOAL_STEP,
  SYNC_GOAL_STEPS,
  UPDATE_GOAL_STEP_INNER,
  GOAL_NOTIFICATION,
  GOALS_SIDE_EFFECT,
} from '../actionTypes'

/**
 * DEPRECATED
 */
export type GoalStepPayload = {
  goalId: string,
  formId: string,
  type: string,
  value?: any,
}

export type AddGoalStepAction = {
  type: ADD_GOAL_STEP,
  payload: GoalStepPayload,
}

export type RemoveGoalStepAction = {
  type: REMOVE_GOAL_STEP,
  payload: GoalStepPayload,
}

export type UpdateGoalStepAction = {
  type: UPDATE_GOAL_STEP,
  payload: GoalStepPayload,
}

export type SyncGoalStepsAction = {
  type: SYNC_GOAL_STEPS,
  payload: GoalStepPayload,
}

export type InnerUpdatePayload = {
  goalId: string,
  formId: string,
  type: string,
  value?: any,
  id: string,
}

export type InnerUpdateAction = {
  type: UPDATE_GOAL_STEP_INNER,
  payload: InnerUpdatePayload,
}

export type GoalNotificationPayload = {
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

export type GoalSideEffectPayload = {
  value: Array<FormValue>,
  awardData: Array<any>,
}

export const AddGoalStep = (payload: GoalStepPayload): AddGoalStepAction => ({
  type: ADD_GOAL_STEP,
  payload,
})

export const UpdateGoalStep = (
  payload: GoalStepPayload
): UpdateGoalStepAction => ({
  type: UPDATE_GOAL_STEP,
  payload,
})

export const SyncGoalSteps = (
  payload: GoalStepPayload
): SyncGoalStepsAction => ({
  type: SYNC_GOAL_STEPS,
  payload,
})

export const updateGoalStepsInner = (
  payload: InnerUpdatePayload
): InnerUpdateAction => ({
  type: UPDATE_GOAL_STEP_INNER,
  payload,
})

/**
 * END DEPRECATED
 */

export const goalNotification = (payload: GoalNotificationPayload) => ({
  type: GOAL_NOTIFICATION,
  payload,
})

export const goalSideEffect = (payload: GoalSideEffectPayload) => ({
  type: GOALS_SIDE_EFFECT,
  payload,
})