// @flow
import React, { useContext } from 'react'
import {
  CategoryContext,
  categoriesWithName,
} from '../../context/CategoryContext'
import { ToolDataContext } from '../../context/ToolDataProvider'
import { timeToCompleteGoal } from '2020_forms/forms/content'
import { FORM_KEYS, CHILDREN_KEYS } from '../../static/form'
import List from '../components/ListComponent'
import { GoalToolData } from '../../types'

const parseSteps = (steps: Array<any>) => {
  const parsedSteps = steps.map(s => {
    const name =
      s[CHILDREN_KEYS.career_goals_form_steps.step_to_life_goal].value
    const id = s._id
    return {
      id,
      name,
    }
  })
  return parsedSteps
}

const parseValueAsGoals = (category: string) => (
  value: Array<any>,
  toolDataValue: Array<GoalToolData> = []
) => {
  if (!value) return []

  const actualValue = value.filter(val => {
    const categoryKey = val[FORM_KEYS.career_goals_form_career].value
    return categoryKey === category
  })

  const goals = actualValue.map(val => {
    const id = val._id

    const toolDataForGoal = toolDataValue.find(t => t.goalId === id)

    const name = val[FORM_KEYS.career_goals_form_goal].value
    const categoryKey = val[FORM_KEYS.career_goals_form_career].value
    const howLongKey = val[FORM_KEYS.career_goals_form_how_long].value
    const stepsRaw = val[FORM_KEYS.career_goals_form_steps].value
    const creation = val.created_at
    const category =
      categoriesWithName.find(cat => cat.key === categoryKey) ||
      categoriesWithName[0]

    const timeToComplete =
      timeToCompleteGoal[howLongKey] || timeToCompleteGoal.DAY

    const steps = parseSteps(stepsRaw)

    return {
      id,
      name,
      category,
      timeToComplete,
      steps,
      creation,
    }
  })

  return goals
}

const ListContainer = () => {
  const { category } = useContext(CategoryContext)
  const { data } = useContext(ToolDataContext)

  const value = data ? data.value : {}
  const formValue = value ? value.form : []
  const toolDataValue = value ? value.toolData : []

  const goals = parseValueAsGoals(category)(formValue, toolDataValue)

  return <List category={category} goals={goals} />
}

export default ListContainer
