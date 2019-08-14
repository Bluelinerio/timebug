import React, { useContext, useCallback } from 'react'
import BackloggedGoalDetails from '../components/BackloggedGoalDetails'
import { GoalContext } from '../../context/GoalContext'
import { ScreenContext } from '../../context/ScreenContext'
import { useGoalModifiers } from '../../hooks/GoalHooks'

const BackloggedGoalDetailsContainer = () => {
  const { goal, unsetGoal } = useContext(GoalContext)
  const { screen, openDeletedBacklog } = useContext(ScreenContext)
  const { toggleGoalDeletion, hardDeleteGoal, deletedAt } = useGoalModifiers(
    goal
  )

  const onReopen = useCallback((reopen?: boolean) => {
    if (reopen) {
      toggleGoalDeletion()
      openDeletedBacklog()
    } else {
      toggleGoalDeletion()
      openDeletedBacklog()
    }
    unsetGoal()
  }, [])

  const onDelete = useCallback(() => {
    hardDeleteGoal()
    openDeletedBacklog()
    unsetGoal()
  }, [])

  return (
    <BackloggedGoalDetails
      goal={goal}
      screen={screen}
      onReopen={onReopen}
      onDelete={onDelete}
      deletedAt={deletedAt}
    />
  )
}

export default BackloggedGoalDetailsContainer
