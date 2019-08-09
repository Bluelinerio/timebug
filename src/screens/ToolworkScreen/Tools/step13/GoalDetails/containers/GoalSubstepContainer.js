// @flow
import React from 'react'
import GoalSubstep from '../components/GoalSubstepComponent'
import { Substep } from '../../types'

type Props = {
    substep: Substep,
    goal: Goal
}

const GoalSubstepContainer = (props: Props) => {
    const { substep, goal } = props
    return <GoalSubstep substep={substep} />
}

export default GoalSubstepContainer