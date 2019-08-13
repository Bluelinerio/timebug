import React, { useContext, useCallback } from 'react'
import { GoalContext } from '../../context/GoalContext'
import { useGoalModifiers } from '../../hooks/GoalHooks'
import GoalDetailsContent from '../components/GoalDetailsContent'
import { ScreenContext } from '../../context/ScreenContext'

const GoalDetailsContentContainer = () => {
  const { goal, unsetGoal } = useContext(GoalContext)
  const {
    storeNotes,
    notes,
    completed,
    toggleGoalCompletion,
    toggleGoalDeletion,
    steps,
  } = useGoalModifiers(goal)

  const { openGoalList } = useContext(ScreenContext)

  const onCompletePress = useCallback(
    () => {
      toggleGoalCompletion()
      openGoalList()
      unsetGoal()
    },
    [openGoalList, unsetGoal, toggleGoalCompletion]
  )

  const onDeletePress = useCallback(
    () => {
      toggleGoalDeletion()
      openGoalList()
      unsetGoal()
    },
    [openGoalList, unsetGoal, toggleGoalDeletion]
  )

  return (
    <GoalDetailsContent
      onCompletePress={onCompletePress}
      onDeletePress={onDeletePress}
      notes={notes}
      storeNotes={storeNotes}
      goal={goal}
      completed={completed}
      steps={steps}
    />
  )
}

export default GoalDetailsContentContainer
