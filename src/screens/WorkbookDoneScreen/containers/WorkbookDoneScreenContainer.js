// @flow
import * as React from 'react'
import { compose, mapProps } from 'recompose'
import { userRequired, withNavigationAndStep } from '../../../HOC'
import type { Step } from '../../../services/cms'
import { restartStepAction, reset } from '../../../redux/actions/nav.actions'
import WorkbookDoneScreen from '../components/WorkbookDoneScreen'
import type { Props } from '../components/WorkbookDoneScreen'
import getInsight, { dummyFormValue } from './insights'
import nextStepMotivation from './nextStepMotivation'

const suggestedNextStep = (currentStep, steps) =>
  Object.values(steps).find(s => s.number === currentStep.number + 1)

const merge = ({
  steps,
  step,
  dispatch
}: {
  step: Step,
  steps: Array<Step>,
  dispatch: () => void
}): Props => {
  const insightText = getInsight(step.stepId, dummyFormValue)
  const nextStepMotivationText = nextStepMotivation[step.stepId]
  const backgroundColor = step.color

  const nextStep = suggestedNextStep(step, steps)
  if (nextStep) {
    // this is required in case we change how stepId work...
    return {
      backgroundColor,
      insightText,
      nextStepMotivationText,
      title: `Step ${step.number} is complete!`,
      button: {
        text: `Start Step ${nextStep.number}`.toUpperCase(),
        onPress: () => dispatch(restartStepAction(nextStep)),
        textColor: nextStep.color
      }
    }
  }

  return {
    backgroundColor,
    insightText,
    nextStepMotivationText,
    title: `This Step ${step.number} is complete!`,
    button: {
      text: `Done`.toUpperCase(),
      onPress: () => dispatch(reset()),
      textColor: backgroundColor
    }
  }
}

const WorkbookDoneScreenContainer = compose(
  userRequired,
  withNavigationAndStep,
  mapProps(merge)
)(WorkbookDoneScreen)

export default WorkbookDoneScreenContainer

// type FormMetaData = {
//   uploading: boolean,
//   numberOfUpdates: number,
//   lastUpdate: number,
//   firstUpdate: number,
//   createAt: number
// }

// const completedForms = selectors.completedForms(state)
// const incompleteFormsData = selectors.incompleteFormsData(state)
//done: () => void,
//const formData = completedForms[step.stepId]
//const numberOfSteps = Object.values(steps).length
