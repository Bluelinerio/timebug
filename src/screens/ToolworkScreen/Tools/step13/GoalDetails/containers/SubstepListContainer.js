// @flow
import React, { useState, useCallback, useMemo } from 'react'
import SubstepListComponent from '../components/SubstepListComponent'
import { Substep } from '../../types'
import { useGoalStepModifiers } from '../../hooks/GoalHooks'

type Props = {
  goal: Goal,
}

const SubstepListContainer = (props: Props) => {
  const { goal } = props
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedStep, setSelectedStep] = useState(null)
  const [dueValue, setDueValue] = useState(null)

  const id = selectedStep ? selectedStep.id : null

  const onClose = useCallback(() => {
    setSelectedStep(null)
    setDialogOpen(false)
  }, [])

  const onSelectStep = useCallback((step: Substep) => {
    setSelectedStep(step)
    setDialogOpen(true)
  }, [])

  const onSelectDue = useCallback(({ value }) => {
    setDueValue(value)
    setDialogOpen(false)
  }, [id])

  const dialogElements = useMemo(
    () => {
      const { timeToComplete } = goal
      const estimate = timeToComplete.estimate || null
      if (!estimate) return null
      return estimate.map(e => ({
        text: e,
        key: e,
      }))
    },
    [goal.id]
  )

  const onStepStore = useCallback(() => {
    setSelectedStep(null)
    setDueValue(null)
  }, [selectedStep])

  return (
    <SubstepListComponent
      {...props}
      onClose={onClose}
      onSelectStep={onSelectStep}
      onSelectDue={onSelectDue}
      dialogOpen={dialogOpen}
      dialogElements={dialogElements}
      selectedStep={selectedStep}
      onStepStore={onStepStore}
      dueValue={dueValue}
    />
  )
}

export default SubstepListContainer
