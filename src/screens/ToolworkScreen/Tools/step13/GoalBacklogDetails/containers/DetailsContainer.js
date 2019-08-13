import React, { useContext } from 'react'
import Details from '../components/Details'
import { GoalContext } from '../../context/GoalContext'
import { ScreenContext } from '../../context/ScreenContext'

const DetailsContainer = () => {
  const { goal } = useContext(GoalContext)
  const { screen } = useContext(ScreenContext)

  return <Details goal={goal} screen={screen} />
}

export default DetailsContainer
