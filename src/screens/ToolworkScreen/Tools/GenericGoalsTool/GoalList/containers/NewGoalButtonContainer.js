import React, { useContext } from 'react'
import { ScreenContext } from '../../context/ScreenContext'
import NewGoalButton from '../components/NewGoalButton'

const NewGoalButtonContainer = () => {
  const { openGoalRecommendations } = useContext(ScreenContext)

  return <NewGoalButton openGoalRecommendations={openGoalRecommendations} />
}

export default NewGoalButtonContainer
