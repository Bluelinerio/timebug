// @flow
import React, { useCallback, useEffect } from 'react'
import GoalSubstep from '../components/GoalSubstepComponent'
import { Substep } from '../../types'
import { useGoalStepModifiers } from '../../hooks/GoalHooks'

type Props = {
  substep: Substep,
  goal: Goal,
  onSelectStep: Substep => void,
  selectedStep: Substep | null,
  onStepStore: Substep => void,
  dueValue: string,
}

const GoalSubstepContainer = (props: Props) => {
  const {
    substep,
    goal,
    onSelectStep,
    selectedStep,
    onStepStore,
    dueValue,
  } = props
  const {
    completed,
    storeStepCompletion,
    due,
    storeStepDue,
  } = useGoalStepModifiers(goal, substep)

  // TODO: Due refactor once I have a better idea of hooks
  useEffect(
    () => {
      if (selectedStep && selectedStep.id === substep.id) {
        if (dueValue) {
          storeStepDue(dueValue)
          onStepStore()
        }
      }
    },
    [selectedStep, dueValue]
  )

  const onPress = useCallback(
    () => {
      onSelectStep(substep)
    },
    [onSelectStep]
  )
  return (
    <GoalSubstep
      completed={completed}
      storeStepCompletion={storeStepCompletion}
      substep={substep}
      onPress={onPress}
      due={due}
    />
  )
}

export default React.memo(GoalSubstepContainer)
