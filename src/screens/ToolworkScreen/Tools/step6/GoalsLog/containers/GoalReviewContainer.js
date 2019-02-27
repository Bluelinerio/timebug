import { mapProps, compose }       from 'recompose'
import moment                      from 'moment'
import GoalReview                  from '../components/GoalReview'
import { extractGoalData }         from '../utils/extractGoalData'
import type { Goal, GoalToolData } from '../types'

type ToolData = {
  id: string,
  timestamp: number,
  tool: any,
  value: Array<GoalToolData>,
}

type MergeProps = {
  goal: Goal,
  storeToolData: (any, any) => any,
  tool: any,
  toolData: ToolData,
  unsetGoal: () => any,
}

const ACTIONS = {
  DELETE: 'DELETE',
  COMPLETE: 'COMPLETE',
}

const toggleGoalStatus = (
  goal: Goal,
  tool: { key: string },
  toolData: ToolData,
  storeAwardData = () => null,
  unsetGoal = () => null
) => {
  return (action: string) => {
    const { _id } = goal
    const value = toolData ? toolData.value || [] : []

    const oldData = value.find(
      goalAwardData => goalAwardData.goalId === _id
    ) || {
        createdAt: moment().format(),
        goalId: _id,
      }

    let newGoalAwardValue = {
      ...oldData,
      updatedAt: moment().format(),
    }

    if (action === ACTIONS.DELETE)
      newGoalAwardValue = {
        ...newGoalAwardValue,
        deleted: !oldData.deleted,
        deletionDate: !oldData.deleted === true ? moment().format() : null,
      }
    else if (action === ACTIONS.COMPLETE)
      newGoalAwardValue = {
        ...newGoalAwardValue,
        completed: !oldData.completed,
        completionDate: !oldData.completed === true ? moment().format() : null,
      }

    const newData = [
      ...value.filter(val => val.goalId !== _id),
      newGoalAwardValue,
    ]

    storeAwardData(newData, tool)
    unsetGoal()
  }
}

const merge = (props: MergeProps) => {
  const { goal, tool, storeToolData, toolData, unsetGoal } = props
  const { toolData: toolDataForGoal = {} } = goal

  const {
    name = '',
    goalName = '',
    estimate = '',
    completed = false,
    completedAt = '',
    plan = '',
  } = extractGoalData(goal, toolDataForGoal)

  const toggleGoalAction = toggleGoalStatus(
    goal,
    tool,
    toolData,
    storeToolData,
    unsetGoal
  )

  return {
    name,
    goalName,
    estimate,
    completed,
    completedAt,
    toggleGoalAction,
    plan,
    actions: ACTIONS,
  }
}

export default compose(mapProps(merge))(GoalReview)
