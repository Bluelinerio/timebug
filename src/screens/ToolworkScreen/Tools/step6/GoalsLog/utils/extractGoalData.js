// @flow
import { FORM_KEYS, CHILDREN_KEYS } from '2020_forms/forms/step6'
import type { Goal, GoalToolData }  from '../types'

export type GoalData = {
  name: string,
  goalName: string,
  estimate: string,
  complete: boolean,
  dueDate: string,
}

export const extractGoalData = (goal: Goal, toolData: GoalToolData = {}) => {
  const goalRelatedData = goal[FORM_KEYS.form_6_other_person_goal].value || null
  const planRelatedData =
    goal[FORM_KEYS.form_6_plan_and_estimated_time].value || null

  const name = goalRelatedData
    ? goalRelatedData[CHILDREN_KEYS.form_6_other_person_goal.name].value
    : null

  const goalName = goalRelatedData
    ? goalRelatedData[CHILDREN_KEYS.form_6_other_person_goal.goal].value
    : null

  const plan = planRelatedData
    ? planRelatedData[CHILDREN_KEYS.form_6_plan_and_estimated_time.plan].value
    : null

  const estimate = planRelatedData
    ? planRelatedData[CHILDREN_KEYS.form_6_plan_and_estimated_time.time].value
    : null

  const completed = !!toolData.completed

  const completedAt = toolData.completionDate || null

  const deleted = !!toolData.deleted

  const deletedAt = toolData.deletionDate || null

  return {
    name,
    goalName,
    estimate,
    completed,
    plan,
    completedAt,
    deleted,
    deletedAt,
  }
}
