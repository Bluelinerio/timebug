import React, { useContext, useCallback } from 'react'
import Details from '../components/Details'
import { GoalContext } from '../../context/GoalContext'
import { ScreenContext } from '../../context/ScreenContext'
import { useGoalModifiers } from '../../hooks/GoalHooks'

const DetailsContainer = () => {
  const { goal, unsetGoal } = useContext(GoalContext)
  const { screen, openBacklog } = useContext(ScreenContext)
  const { outcome, storeOutcome, toggleGoalCompletion } = useGoalModifiers(goal)

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
    />
  )
}

export default DetailsContainer
