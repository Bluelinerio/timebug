//@flow
import {
  CREATE_ACHIEVEMENT,
  CREATE_ACHIEVEMENT_SUCCESS,
  CREATE_ACHIEVEMENT_FAILURE,
  DELETE_ACHIEVEMENT,
  DELETE_ACHIEVEMENT_SUCCESS,
  DELETE_ACHIEVEMENT_FAILURE,
} from '../actionTypes'

/**
 * Flow types
 */

export type CreateAchievementPayload = {
  tagName: string,
  userId: string,
}

export type CreateAchievementSuccessPayload = {
  achievements: any,
}

export type CreateAchievementErrorPayload = {
  error: any,
}

export type CreateAchievementAction = {
  type: CREATE_ACHIEVEMENT,
  payload: CreateAchievementPayload,
}

export type CreateAchievementSuccessAction = {
  type: CREATE_ACHIEVEMENT_SUCCESS,
  payload: CreateAchievementPayload,
}

export type CreateAchievementFailureAction = {
  type: CREATE_ACHIEVEMENT_FAILURE,
  payload: CreateAchievementPayload,
}

export type DeleteAchievementPayload = {
  achievementId: string,
}

export type DeleteAchievementSuccessPayload = {
  achievements: any,
}

export type DeleteAchievementErrorPayload = {
  error: any,
}

export type DeleteAchievementAction = {
  type: DELETE_ACHIEVEMENT,
  payload: DeleteAchievementPayload,
}

export type DeleteAchievementSuccessAction = {
  type: DELETE_ACHIEVEMENT_SUCCESS,
  payload: DeleteAchievementPayload,
}

export type DeleteAchievementFailureAction = {
  type: DELETE_ACHIEVEMENT_FAILURE,
  payload: DeleteAchievementPayload,
}

/**
 * End Flowtypes
 */

export const createAchievement = (
  payload: CreateAchievementPayload
): CreateAchievementAction => ({
  type: CREATE_ACHIEVEMENT,
  payload,
})

export const createAchievementSuccess = (
  payload: CreateAchievementSuccessPayload
): CreateAchievementSuccessAction => ({
  type: CREATE_ACHIEVEMENT_SUCCESS,
  payload,
})

export const createAchievementFailure = (
  payload: CreateAchievementErrorPayload
): CreateAchievementFailureAction => ({
  type: CREATE_ACHIEVEMENT_FAILURE,
  payload,
})

export const deleteAchievement = (
  payload: DeleteAchievementPayload
): DeleteAchievementAction => ({
  type: DELETE_ACHIEVEMENT,
  payload,
})

export const deleteAchievementSuccess = (
  payload: DeleteAchievementSuccessPayload
): DeleteAchievementSuccessAction => ({
  type: DELETE_ACHIEVEMENT_SUCCESS,
  payload,
})

export const deleteAchievementFailure = (
  payload: DeleteAchievementErrorPayload
): DeleteAchievementFailureAction => ({
  type: DELETE_ACHIEVEMENT_FAILURE,
  payload,
})
