// @flow
import React, { useContext, useCallback } from 'react'
import GoalButton from '../components/GoalButton'
import { ScreenContext, screens } from '../../context/ScreenContext'
import { GoalContext } from '../../context/GoalContext'

const GoalButtonContainer = (props: Props) => {
  const { goal } = props
  const {
    screen,
    openBacklogGoalDetails,
    openDeletedBacklogGoalDetails,
  } = useContext(ScreenContext)
  const { setGoal } = useContext(GoalContext)

  const onPress = useCallback(
    () => {
      setGoal(goal)
      if (screen === screens.BACKLOG) openBacklogGoalDetails()
      else openDeletedBacklogGoalDetails()
    },
    [screen]
  )
  return <GoalButton onPress={onPress} goal={goal}/>
}

export default GoalButtonContainer
