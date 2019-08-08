// @flow
import React from 'react'
import GoalSubstep from '../components/GoalSubstepComponent'
import { Substep } from '../../types'

type Props = {
    substep: Substep
}

const GoalSubstepContainer = (props: Props) => {
    const { substep } = props
    return <GoalSubstep substep={substep} />
}

export default GoalSubstepContainer