// @flow
import React, { useContext, useCallback } from 'react'
import BackloggedGoalDetails from '../components/BackloggedGoalDetails'
import { GoalContext } from '../../context/GoalContext'
import { ScreenContext } from '../../context/ScreenContext'
import { useGoalModifiers } from '../../hooks/GoalHooks'
import { FormContext } from '../../context/FormContext'
import { CategoryContext } from '../../context/CategoryContext'

const BackloggedGoalDetailsContainer = () => {
  const { goal, unsetGoal } = useContext(GoalContext)
  const { screen, openDeletedBacklog, openForm } = useContext(ScreenContext)
  const {
    toggleGoalDeletion,
    hardDeleteGoal,
    deletedAt,
    clearGoalData,
  } = useGoalModifiers(goal)
  const { setFormEdition } = useContext(FormContext)
  const { setCategory } = useContext(CategoryContext)

  const onReopen = useCallback((reopen?: boolean) => {
    if (reopen) {
      setFormEdition(goal.id)
      setCategory(goal.category.key)
      clearGoalData()
      openForm()
    } else {
      toggleGoalDeletion()
      openDeletedBacklog()
      unsetGoal()
    }
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
