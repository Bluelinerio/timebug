// @flow
import { mapProps }       from 'recompose'
import CompletedGoalsList from '../components/CompletedGoalsList'
import type { GoalWithToolData } from '../../common/types'

type Props = {
  goals: Array<GoalWithToolData>,
}

const merge = (props: Props): Props => {
  const { goals } = props

  const filteredGoals =
    (goals && goals.filter(goal => goal.toolData && goal.toolData.completed)) ||
    []

  return {
    ...props,
    goals: filteredGoals,
  }
}

export default mapProps(merge)(CompletedGoalsList)
