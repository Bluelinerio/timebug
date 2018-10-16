//@flow
import {
  ADD_GOAL_STEP,
  REMOVE_GOAL_STEP,
  UPDATE_GOAL_STEP,
  SYNC_GOAL_STEPS
} from '../actionTypes'

export type GoalStepPayload = {
  goalId: string,
  formId: string,
  type: string,
  value?: any
}

export type AddGoalStepAction = {
  type: ADD_GOAL_STEP,
  payload: GoalStepPayload
}

export type RemoveGoalStepAction = {
  type: REMOVE_GOAL_STEP,
  payload: GoalStepPayload
}

export type UpdateGoalStepAction = {
  type: UPDATE_GOAL_STEP,
  payload: GoalStepPayload
}

export type SyncGoalStepsAction = {
  type: SYNC_GOAL_STEPS,
  payload: GoalStepPayload
}

export const AddGoalStep = (payload: GoalStepPayload): AddGoalStepAction => ({
  type: ADD_GOAL_STEP,
  payload
})

export const UpdateGoalStep = (
  payload: GoalStepPayload
): UpdateGoalStepAction => ({
  type: UPDATE_GOAL_STEP,
  payload
})

export const SyncGoalSteps = (payload: GoalStepPayload): SyncGoalStepsAction => ({
  type: SYNC_GOAL_STEPS,
  payload
})
