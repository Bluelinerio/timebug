import React, { useContext } from 'react'
import { GoalContext } from '../../context/GoalContext'
import { useGoalModifiers } from '../../hooks'
import GoalDetailsContent from '../components/GoalDetailsContent'

const GoalDetailsContentContainer = () => {
  const { goal } = useContext(GoalContext)
  const { storeNotes, notes } = useGoalModifiers()
  return <GoalDetailsContent notes={notes} storeNotes={storeNotes} goal={goal} />
}

export default GoalDetailsContentContainer
