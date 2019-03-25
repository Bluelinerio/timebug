// @flow
import { mapProps }       from 'recompose'
import CompletedGoalsList from '../components/CompletedGoalsList'

type Props = {
  goals: any,
}

const merge = (props: Props) => {
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
