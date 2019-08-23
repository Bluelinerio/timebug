import React, { useContext } from 'react'
import { ScreenContext, screens } from '../../context/ScreenContext'
import DetailsContainer from '../containers/DetailsContainer'
import BackloggedGoalDetails from '../containers/BackloggedGoalDetailsContainer'

const GoalDetailsSwitch = () => {
  const { screen } = useContext(ScreenContext)
  return screen === screens.BACKLOG_GOAL_DETAILS ? (
    <DetailsContainer />
  ) : (
    <BackloggedGoalDetails />
  )
}

export default GoalDetailsSwitch
