import React, { useContext } from 'react'
import { GoalContext } from '../../context/GoalContext'
import GoalDetailsContent from '../components/GoalDetailsContent'

const GoalDetailsContentContainer = () => {
    const { goal } = useContext(GoalContext)

    return <GoalDetailsContent goal={goal} />
}

export default GoalDetailsContentContainer
