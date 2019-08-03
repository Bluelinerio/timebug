// @flow
import React from 'react'
import GoalComponent from '../components/GoalComponent'
// import { GoalContext } from '../context/GoalContext'

// TODO
type Props = {
  goal: any,
}

const GoalContainer = (props: Props) => {
  const { goal } = props

  return <GoalComponent goal={goal} />
}

export default GoalContainer
