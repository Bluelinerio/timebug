// @flow
import React, { useContext } from 'react'
import GoalComponent from '../components/GoalComponent'
import { GoalContext } from '../../context/GoalContext'
import { ToolDataContext } from '../../context/ToolDataProvider'
import { ScreenContext } from '../../context/ScreenContext'
import { StyleContext } from '../../context/StyleContext'
import { CategoryContext } from '../../context/CategoryContext'
import { useIcon } from '../../hooks/iconHooks'
import { Goal } from '../../types'

type Props = {
  goal: Goal,
}

const mapExtraDataTogoal = (goal: Goal, data: any) => {
  if (!data || !data.value) return goal
  return goal
}

const GoalContainer = (props: Props) => {
  const { category } = useContext(CategoryContext)
  const { goal } = props
  const { setGoal } = useContext(GoalContext)
  const { data } = useContext(ToolDataContext)
  const { openGoalDetail } = useContext(ScreenContext)
  const { color, iconStyle } = useContext(StyleContext)
  const fullGoal = mapExtraDataTogoal(goal, data)
  const iconName = useIcon(category)

  const onPress = () => {
    setGoal(fullGoal)
    openGoalDetail()
  }
  return (
    <GoalComponent
      goal={fullGoal}
      onPress={onPress}
      color={color}
      iconName={iconName}
      iconStyle={iconStyle}
    />
  )
}

export default GoalContainer
