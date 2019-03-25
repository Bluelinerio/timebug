// @flow
import { mapProps }        from 'recompose'
import BackloggedGoalsList from '../components/BackloggedGoalsList'

type Props = {
  goals: any,
}

const merge = (props: Props) => {
  const { goals } = props

  const filteredGoals =
    (goals && goals.filter(goal => goal.toolData && goal.toolData.deleted)) ||
    []

  return {
    ...props,
    goals: filteredGoals,
  }
}

export default mapProps(merge)(BackloggedGoalsList)
