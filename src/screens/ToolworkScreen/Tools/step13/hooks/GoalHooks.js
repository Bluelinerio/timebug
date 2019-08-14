// @flow
import moment from 'moment'
import { useContext, useCallback } from 'react'
import { ToolDataContext } from '../context/ToolDataProvider'
import { categoriesWithName } from '../context/CategoryContext'
import { timeToCompleteGoal } from '2020_forms/forms/content'
import { FORM_KEYS, CHILDREN_KEYS } from '../static/form'
import { GoalToolData, Goal, Substep } from '../types'

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
        const categoryKey = val[FORM_KEYS.career_goals_form_career].value
        return categoryKey === category
      })
    : value

  const goals = actualValue.map(val => {
    const id = val._id

    const toolDataForGoal = toolDataValue.find(t => t.goalId === id) || null

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

export const useStepTooldata = (goal: Goal, step: Substep) => {
  const { data } = useContext(ToolDataContext)

  const { id } = step
  const value = data ? data.value : {}
  const toolDataValue = value ? (value.toolData ? value.toolData : []) : []

  const toolDataForGoal = toolDataValue.find(t => t.goalId === goal.id) || null

  const toolDataForStep = toolDataForGoal ? toolDataForGoal.steps : []

  const substepToolData = toolDataForStep.find(s => s.substepId === id) || null

  const { completed = false } = substepToolData

  return { completed }
}

export const useGoals = (category?: string, filter: string = 'open') => {
  const { data } = useContext(ToolDataContext)

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

export const useFullToolData = (goal: Goal) => {
  const { storeAllData, data } = useContext(ToolDataContext)
  const { id } = goal
  const storedToolData = data && data.value ? data.value.toolData || [] : []
  const storedFormData = data && data.value ? data.value.form || [] : []

  const storeGoalData = useCallback(
    (formData, toolData) => {
      const filteredToolData = storedToolData.filter(td => {
        const { goalId } = td
        return goalId !== id
      })

      const filteredFormData = storedFormData.filter(td => {
        const { _id } = td
        return _id !== id
      })

      const newFormData = [...filteredFormData]

      const newToolData = [...filteredToolData]

      if (formData) newFormData.push(formData)
      if (toolData) newToolData.push(toolData)

      storeAllData(formData, toolData)
    },
    [id, storeAllData, storedToolData, storedFormData]
  )

  return storeGoalData
}

const useGoalStoreData = (goal: Goal) => {
  const { storeToolData, data } = useContext(ToolDataContext)
  const { id } = goal
  const storedToolData = data && data.value ? data.value.toolData || [] : []

  const currentToolDataForGoal = storedToolData.find(td => {
    const { goalId } = td
    return goalId === id
  })

  const storeGoalData = useCallback(
    data => {
      const filteredData = storedToolData.filter(td => {
        const { goalId } = td
        return goalId !== id
      })

      const newData = [...filteredData]

      if (data) newData.push(data)

      storeToolData(newData)
    },
    [id, storeToolData, storedToolData]
  )

  return [currentToolDataForGoal, storeGoalData]
}

const useFormDataForGoal = (goal: Goal) => {
  const { storeFormData, data } = useContext(ToolDataContext)
  const { id } = goal
  const storedFormData = data && data.value ? data.value.form || [] : []

  const currentFormDataForGoal = storedFormData.find(td => {
    const { goalId } = td
    return goalId === id
  })

  const storeGoalFormData = useCallback(
    data => {
      const filteredData = storedFormData.filter(td => {
        const { _id } = td
        return _id !== id
      })

      const newData = [...filteredData, data]

      storeFormData(newData)
    },
    [id, storeFormData, storedFormData]
  )

  const deleteGoal = useCallback(
    () => {
      const filteredData = storedFormData.filter(td => {
        const { _id } = td
        return _id !== id
      })

      const newData = [...filteredData]

      storeFormData(newData)
    },
    [id, storeFormData, storedFormData]
  )

  return { currentFormDataForGoal, storeGoalFormData, deleteGoal }
}

export const useGoalModifiers = (goal: Goal) => {
  if (!goal) return {}
  const { id } = goal
  const [currentToolDataForGoal, storeGoalData] = useGoalStoreData(goal)
  const { deleteGoal } = useFormDataForGoal(goal)

  const GoalToolData = currentToolDataForGoal
    ? currentToolDataForGoal
    : {
        goalId: id,
      }

  const {
    notes,
    completed,
    deleted,
    steps,
    outcome,
    deletedAt,
    completedAt,
  } = GoalToolData

  const storeNotes = useCallback(
    (newNotes: string) => {
      const data = {
        ...GoalToolData,
        notes: newNotes,
      }
      storeGoalData(data)
    },
    [id, storeGoalData, GoalToolData]
  )

  const toggleGoalCompletion = useCallback(
    (outcome?: string) => {
      const newCompleted = !completed
      const completedAt = newCompleted ? moment().format() : null
      const data = {
        ...GoalToolData,
        completed: newCompleted,
        completedAt,
        outcome: outcome ? outcome : null,
      }
      storeGoalData(data)
    },
    [id, storeGoalData, completed, GoalToolData]
  )

  const toggleGoalDeletion = useCallback(
    () => {
      const newDeleted = !deleted
      const deletedAt = newDeleted ? moment().format() : null
      const data = {
        ...GoalToolData,
        deleted: newDeleted,
        deletedAt,
      }
      storeGoalData(data)
    },
    [id, storeGoalData, deleted, GoalToolData]
  )

  const storeOutcome = useCallback(
    (outcome: string) => {
      const data = {
        ...GoalToolData,
        outcome,
      }
      storeGoalData(data)
    },
    [id, storeGoalData, storeOutcome, GoalToolData]
  )

  const hardDeleteGoal = useCallback(
    () => {
      storeGoalData()
      deleteGoal()
    },
    [id, storeGoalData, deleteGoal]
  )

  return {
    notes,
    storeNotes,
    completed,
    toggleGoalCompletion,
    deleted,
    toggleGoalDeletion,
    steps,
    outcome,
    storeOutcome,
    hardDeleteGoal,
    deletedAt,
    completedAt,
  }
}

export const useGoalStepModifiers = (goal: Goal, substep: Substep) => {
  const { id: goalId } = goal
  const { id } = substep
  const [currentToolDataForGoal, storeData] = useGoalStoreData(goal)

  const GoalToolData = currentToolDataForGoal
    ? currentToolDataForGoal
    : {
        goalId,
      }

  const steps = GoalToolData.steps ? GoalToolData.steps : []

  const currentToolDataForStep = steps.find(td => {
    const { substepId } = td
    return substepId === id
  }) || {
    substepId: id,
  }

  const storeStepData = useCallback(
    substepData => {
      const filteredData = steps.filter(td => {
        const { substepId } = td
        return id !== substepId
      })

      const newData = [...filteredData, substepData]

      const data = {
        ...GoalToolData,
        steps: newData,
      }

      storeData(data)
    },
    [id, goalId, storeData, currentToolDataForStep]
  )

  const { completed, due } = currentToolDataForStep

  const storeStepCompletion = useCallback(
    () => {
      const newCompleted = !completed
      const completedAt = newCompleted ? moment().format() : null
      const data = {
        ...currentToolDataForStep,
        completed: newCompleted,
        completedAt,
      }
      storeStepData(data)
    },
    [storeStepData, completed]
  )

  const storeStepDue = useCallback(
    (due: string) => {
      const data = {
        ...currentToolDataForStep,
        due,
      }
      storeStepData(data)
    },
    [storeStepData, due]
  )

  return { completed, storeStepCompletion, due, storeStepDue }
}
