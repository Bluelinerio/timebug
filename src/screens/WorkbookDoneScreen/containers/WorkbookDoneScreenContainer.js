// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { compose, mapProps } from 'recompose'
import selectors from '../../../redux/selectors'
import { userRequired, withNavigationAndStep } from '../../../HOC'
import type { Step } from '../../../services/cms'
import { restartStepAction, reset } from '../../../redux/actions/nav.actions'
import WorkbookDoneScreen from '../components/WorkbookDoneScreen'
import type { Props } from '../components/WorkbookDoneScreen'
import getInsight, { dummyFormValue } from './insights'
import { suggestNextStep, Screens } from './suggestions'


const merge = ({
  steps,
  step,
  completedStepIdsChronologically,
  dispatch
}: {
  step: Step,
  steps: Array<Step>,
  dispatch: () => void
}): Props => {
  const insightText = getInsight(step.stepId, dummyFormValue)
  const backgroundColor = step.color

  const { data: { suggestedStepId, texts } } = suggestNextStep(
    completedStepIdsChronologically
  )

  // Check to see if this is the last actual step, turn the start next step button to a reset button, replace nextStepMotivation with final text  
  const nextStepMotivationText = texts[Screens.DONE_SCREEN]
  const nextStep = steps[suggestedStepId]

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
  connect(state => ({
    completedStepIdsChronologically: selectors
      .completedFormsChronologically(state)
      .map(f => f.stepId)
      .map(stepId => stepId.toString())
  })),
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
//const formData = completedForms[step.toString()]
//const numberOfSteps = Object.values(steps).length
