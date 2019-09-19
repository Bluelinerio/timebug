import React, { useContext } from 'react'
import { ScreenContext }     from '../../context/ScreenContext'
import { StyleContext }      from '../../context/StyleContext'
import NewGoalButton         from '../components/NewGoalButton'

const NewGoalButtonContainer = () => {
  const { openGoalRecommendations } = useContext(ScreenContext)
  const { color } = useContext(StyleContext)

  return (
    <NewGoalButton
      openGoalRecommendations={openGoalRecommendations}
      color={color}
    />
  )
}

export default NewGoalButtonContainer
