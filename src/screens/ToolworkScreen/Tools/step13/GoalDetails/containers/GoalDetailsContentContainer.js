import React, { useContext } from 'react'
import { GoalContext } from '../../context/GoalContext'
import { useGoalModifiers } from '../../hooks'
import GoalDetailsContent from '../components/GoalDetailsContent'

const GoalDetailsContentContainer = () => {
  const { goal } = useContext(GoalContext)
  const { storeNotes } = useGoalModifiers()
  return <GoalDetailsContent storeNotes={storeNotes} goal={goal} />
}

export default GoalDetailsContentContainer
