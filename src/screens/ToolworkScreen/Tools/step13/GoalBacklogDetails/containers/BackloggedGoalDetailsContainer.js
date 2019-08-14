import React, { useContext } from 'react'
import BackloggedGoalDetails from '../components/BackloggedGoalDetails'
import { GoalContext } from '../../context/GoalContext'

const BackloggedGoalDetailsContainer = () => {
  const { goal } = useContext(GoalContext)

  return <BackloggedGoalDetails goal={goal} />
}

export default BackloggedGoalDetailsContainer
