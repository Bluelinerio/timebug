import React, { useContext } from 'react'
import GoalBacklogList from '../components/GoalBacklogList'
import { ScreenContext, screens } from '../../context/ScreenContext'
import { useGoals } from '../../hooks/GoalHooks'

const GoalBacklogListContainer = () => {
  const { screen } = useContext(ScreenContext)
  const goals = useGoals(
    false,
    screen === screens.BACKLOG ? 'completed' : 'deleted'
  )

  return <GoalBacklogList goals={goals} />
}

export default GoalBacklogListContainer
