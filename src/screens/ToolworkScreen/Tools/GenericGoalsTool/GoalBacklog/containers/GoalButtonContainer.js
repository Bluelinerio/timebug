// @flow
import React, { useContext, useCallback } from 'react'
import GoalButton from '../components/GoalButton'
import { ScreenContext, screens } from '../../context/ScreenContext'
import { GoalContext } from '../../context/GoalContext'
import { useIcon } from '../../hooks/iconHooks'
import { StyleContext } from '../../context/StyleContext'

const GoalButtonContainer = (props: Props) => {
  const { goal } = props
  const {
    screen,
    openBacklogGoalDetails,
    openDeletedBacklogGoalDetails,
  } = useContext(ScreenContext)
  const { setGoal } = useContext(GoalContext)
  const { category } = goal
  const iconName = useIcon(category.key)
  const { iconStyle, color } = useContext(StyleContext)

  const onPress = useCallback(
    () => {
      setGoal(goal)
      if (screen === screens.BACKLOG) openBacklogGoalDetails()
      else openDeletedBacklogGoalDetails()
    },
    [screen]
  )
  return (
    <GoalButton
      onPress={onPress}
      goal={goal}
      iconName={iconName}
      iconStyle={iconStyle}
      color={color}
    />
  )
}

export default GoalButtonContainer
