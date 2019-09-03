// @flow
import React, { useContext } from 'react'
import GoalComponent from '../components/GoalComponent'
import { GoalContext } from '../../context/GoalContext'
import { ToolDataContext } from '../../context/ToolDataProvider'
import { ScreenContext } from '../../context/ScreenContext'
import { Goal } from '../../types'

type Props = {
  goal: Goal,
}

const mapExtraDataTogoal = (goal: Goal, data: any) => {
  if (!data || !data.value) return goal
  return goal
}

const GoalContainer = (props: Props) => {

  const { goal } = props
  const { setGoal } = useContext(GoalContext)
  const { data } = useContext(ToolDataContext)
  const { openGoalDetail } = useContext(ScreenContext)
  const fullGoal = mapExtraDataTogoal(goal, data)
  const onPress = () => {
    setGoal(fullGoal)
    openGoalDetail()
  }
  return <GoalComponent goal={fullGoal} onPress={onPress} />

}

export default GoalContainer
