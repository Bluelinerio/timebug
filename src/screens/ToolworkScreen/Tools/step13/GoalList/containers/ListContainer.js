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

const dummyGoals = [
  {
    name: 'dummyGoal1',
    id: 1,
  },
  {
    name: 'dummyGoal2',
    id: 2,
  },
  {
    name: 'dummyGoal3dummyGoal3dummyGoal3dummyGoal3dummyGoal3',
    id: 3,
  },
]

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

const parseValueAsGoals = (category: string) => (value: Array<any>) => {
  if (!value) return []

  const actualValue = value.filter(val => {
    const categoryKey = val[FORM_KEYS.career_goals_form_career].value
    return categoryKey === category
  })

  const goals = actualValue.map(val => {
    const id = val._id
    const name = val[FORM_KEYS.career_goals_form_goal].value
    const categoryKey = val[FORM_KEYS.career_goals_form_career].value
    const howLongKey = val[FORM_KEYS.career_goals_form_how_long].value
    const stepsRaw = val[FORM_KEYS.career_goals_form_steps].value

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
    }
  })

  return goals
}

const ListContainer = () => {
  const { category } = useContext(CategoryContext)
  const { data } = useContext(ToolDataContext)

  const value = data ? data.value : []

  const goals = parseValueAsGoals(category)(value)

  return <List category={category} goals={goals} />
}

export default ListContainer
