// @flow
import { connect } from 'react-redux'
import { compose, mapProps } from 'recompose'
import selectors from '../../../redux/selectors'
import { userRequired, withNavigationAndStep } from '../../../HOC'
import type { Step } from '../../../services/cms'
import { restartStepAction, reset } from '../../../redux/actions/nav.actions'
import WorkbookDoneScreen from '../components/WorkbookDoneScreen'
import type { Props } from '../components/WorkbookDoneScreen'
import getInsight, { dummyFormValue } from './../../../static/insights'
import { suggestNextStep, Screens, NextStepSuggestion } from './suggestions'

const merge = ({
  steps,
  step,
  completedStepIdsChronologically,
  isSynchingFormData,
  dispatch
}: {
  step: Step,
  steps: Array<Step>,
  isSynchingFormData: boolean,
  dispatch: () => void
}): Props => {
  const insightText = getInsight(step.stepId, dummyFormValue)
  const backgroundColor = step.color

  const {
    data: { suggestedStepId, texts }
  }: NextStepSuggestion = suggestNextStep(completedStepIdsChronologically)

  const nextStepMotivationText: string = texts[Screens.DONE_SCREEN]
  const nextStep: string = steps[suggestedStepId]

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
      },
      isSynchingFormData
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
    },
    isSynchingFormData
  }
}

const WorkbookDoneScreenContainer = compose(
  userRequired,
  withNavigationAndStep,
  connect(state => ({
    completedStepIdsChronologically: selectors
      .completedFormsChronologically(state)
      .map(f => f.stepId)
      .map(stepId => stepId.toString()),
    isSynchingFormData:
      selectors.isSynchingFormData(state) || selectors.loadingFormData(state)
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
