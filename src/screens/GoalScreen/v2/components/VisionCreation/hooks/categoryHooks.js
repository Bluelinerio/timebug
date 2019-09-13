// @flow
import { categoriesWithName } from '../static/Categories'
import { timeToCompleteGoal } from '2020_forms/forms/content'
import {
  FORM_KEYS,
  CHILDREN_KEYS,
} from '../../../../../ToolworkScreen/Tools/step23/static/form'

export const useIcon = (category: string) => {
  const cat = categoriesWithName.find(c => c.key === category)

  return cat ? cat.icon : null
}

const _filterOpenGoals = (g: Goal) => {
  const hasTooLData = g.toolData
  if (!hasTooLData) return true
  const isDeleted = _isGoalDeleted(g)
  const isCompleted = _isGoalCompleted(g)
  return !isDeleted && !isCompleted
}

const _isGoalDeleted = (g: Goal) => {
  const toolData = g.toolData
  return toolData && toolData.deleted
}

const _isGoalCompleted = (g: Goal) => {
  const toolData = g.toolData
  return toolData && toolData.completed
}

const parseSteps = (steps: Array<any>, stepToolData: Array<any> = []) => {
  const parsedSteps = steps.map(s => {
    const id = s._id
    const name =
      s[CHILDREN_KEYS.career_goals_form_steps.step_to_life_goal].value
    const substepToolData = stepToolData.find(s => s.substepId === id) || null
    return {
      id,
      name,
      toolData: substepToolData,
    }
  })
  return parsedSteps
}

const parseValueAsGoals = (category?: string) => (
  value: Array<any>,
  toolDataValue: Array<GoalToolData> = []
) => {
  if (!value) return []

  const actualValue = category
    ? value.filter(val => {
        const categoryKey = val[FORM_KEYS.career_goals_form_category].value
        return categoryKey === category
      })
    : value

  const goals = actualValue.map(val => {
    const id = val._id

    const toolDataForGoal = toolDataValue.find(t => t.goalId === id) || null

    const name = val[FORM_KEYS.career_goals_form_goal].value
    const categoryKey = val[FORM_KEYS.career_goals_form_category].value
    const howLongKey = val[FORM_KEYS.career_goals_form_how_long].value
    const stepsRaw = val[FORM_KEYS.career_goals_form_steps].value
    const creation = val.created_at
    const category =
      categoriesWithName.find(cat => cat.key === categoryKey) ||
      categoriesWithName[0]

    const timeToComplete =
      timeToCompleteGoal[howLongKey] || timeToCompleteGoal.DAY

    const steps = parseSteps(
      stepsRaw,
      toolDataForGoal ? toolDataForGoal.steps : []
    )

    return {
      id,
      name,
      category,
      timeToComplete,
      steps,
      creation,
      created_at: val.created_at,
      toolData: toolDataForGoal,
    }
  })

  return goals
}

export const useGoals = (
  data: any,
  category?: string,
  filter: string = 'open'
) => {
  const value = data ? data.value : {}
  const formValue = value ? value.form : []
  const toolDataValue = value ? (value.toolData ? value.toolData : []) : []

  const goals = parseValueAsGoals(category)(formValue, toolDataValue)

  return goals.filter(
    filter === 'deleted'
      ? _isGoalDeleted
      : filter === 'completed' ? _isGoalCompleted : _filterOpenGoals
  )
}
