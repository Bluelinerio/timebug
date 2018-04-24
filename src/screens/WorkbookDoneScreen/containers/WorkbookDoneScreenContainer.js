// @flow
import * as React                              from 'react'
import { compose, mapProps }                   from 'recompose'
import { withNavigation }                      from 'react-navigation'
import { userRequired, withNavigationAndStep } from '../../../HOC'
import type { Step }                           from '../../../services/cms'
import { restartStepAction, reset }            from '../../../redux/actions/nav.actions'
import WorkbookDoneScreen                      from '../components/WorkbookDoneScreen'
import type { Props }                          from '../components/WorkbookDoneScreen'

const getNextStep = (currentStep, steps) =>
  Object.values(steps).find(s => s.number === currentStep.number + 1)

const merge = ({ steps, step, dispatch }: { step: Step , steps:Array<Step>, dispatch: () => void }): Props => {
  const backgroundColor = step.color
  const nextStep = getNextStep(step, steps)

  if (nextStep) {
    // this is required in case we change how stepId work...
    const title = `Step ${step.number} is complete!`
    const buttonTitle = `Start Step ${nextStep.number}`.toUpperCase()
    const buttonOnPress = () => dispatch(restartStepAction(nextStep))

    const textColor = nextStep.color
    return {
      title,
      buttonTitle,
      backgroundColor,
      textColor,
      buttonOnPress
    }
  }

  const title = `This Step ${step.number} is complete!`
  const buttonTitle = `Done`.toUpperCase()
  const buttonOnPress = () => dispatch(reset())

  return {
    title,
    buttonTitle,
    steps,
    backgroundColor,
    textColor: backgroundColor,
    buttonOnPress
  }
}

const WorkbookDoneScreenContainer = compose(
  userRequired,
  withNavigation,
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
