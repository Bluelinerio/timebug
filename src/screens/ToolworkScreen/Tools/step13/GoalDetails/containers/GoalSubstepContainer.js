// @flow
import React from 'react'
import GoalSubstep from '../components/GoalSubstepComponent'
import { Substep } from '../../types'
import { useGoalStepModifiers } from '../../hooks/GoalHooks'

type Props = {
    substep: Substep,
    goal: Goal
}

const GoalSubstepContainer = (props: Props) => {
    const { substep, goal } = props
    const { storeStepCompletion } = useGoalStepModifiers(goal, substep)
    return <GoalSubstep storeStepCompletion={storeStepCompletion} substep={substep} />
}

export default React.memo(GoalSubstepContainer)