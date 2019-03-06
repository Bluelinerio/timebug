// @flow
import { compose, mapProps } from 'recompose'
import { connect }           from 'react-redux'
import selectors             from '../../../../redux/selectors'
import FormFinishedComponent from '../components/FormFinishedComponent'
import FormFinishedContent   from '../../../../static/workbookDone/index'
import { mapPhaseToTextAndButtonColor }   from '../utils/colorsForStep'
import type { Step }         from '../../../../services/cms'

const mapStateToProps = (state: any): StateProps => {
  const steps = selectors.steps(state)
  return {
    steps,
  }
}

type StateProps = {
  steps: Array<Step>,
}

type Props = {
  step: Step,
  phase: string,
  stepNumber: string,
  onSelectStep: Step => any,
  steps: Array<Step>,
}

const merge = (props: Props) => {
  const { step, steps, phase, stepNumber, onSelectStep } = props

  const totalSteps = Object.keys(steps).length
  const color = mapPhaseToTextAndButtonColor(phase)

  const {
    text = `Congratulations on completing Step ${step.number}: ${step.title}`,
    title = 'Congratulations!',
  } = FormFinishedContent[stepNumber] || {}

  const hasNext = step.number + 1 <= totalSteps
  const nextStep = hasNext ? steps[step.number + 1] : null
  const nextStepNumber = hasNext ? nextStep.number : 1
  const toolUnlockName = 'Tool ' + step.number

  const onButtonPress = () => {
    onSelectStep(nextStep)
  }

  const goToUnlockedTool = () => {
    onSelectStep(nextStep)
  }

  return {
    color,
    step,
    onButtonPress,
    text,
    title,
    hasNext,
    nextStepNumber,
  }
}

export default compose(connect(mapStateToProps), mapProps(merge))(
  FormFinishedComponent
)
