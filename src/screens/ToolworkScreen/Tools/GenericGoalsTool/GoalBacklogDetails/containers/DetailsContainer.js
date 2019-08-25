import React, { useContext, useCallback } from 'react'
import Details from '../components/Details'
import { GoalContext } from '../../context/GoalContext'
import { ScreenContext } from '../../context/ScreenContext'
import { useGoalModifiers } from '../../hooks/GoalHooks'
import { StyleContext } from '../../context/StyleContext'

const DetailsContainer = () => {
  const { goal, unsetGoal } = useContext(GoalContext)
  const { screen, openBacklog } = useContext(ScreenContext)
  const { color, containerBackgroundColor, textContrastColor } = useContext(
    StyleContext
  )

  const {
    outcome,
    storeOutcome,
    toggleGoalCompletion,
    completedAt,
  } = useGoalModifiers(goal)

  const onReopen = useCallback(() => {
    unsetGoal()
    toggleGoalCompletion()
    openBacklog()
  }, [])

  return (
    <Details
      goal={goal}
      screen={screen}
      outcome={outcome}
      storeOutcome={storeOutcome}
      onReopen={onReopen}
      completedAt={completedAt}
      color={color}
      containerBackgroundColor={containerBackgroundColor}
      textContrastColor={textContrastColor}
    />
  )
}

export default DetailsContainer
