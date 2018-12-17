// @flow
import { mapProps }          from 'recompose'
import FormFinishedComponent from '../components/FormFinishedComponent'
import FormFinishedContent   from '../../../../static/workbookDone/index'
import { mapPhaseToColor }   from '../utils/colorsForStep'
import type { Step }         from '../../../../services/cms'
//TODO:
type Props = {
  step: Step,
  phase: string,
  stepNumber: string,
  onSelectStep: Step => any,
}

const merge = (props: Props) => {
  const { step, phase, stepNumber, onSelectStep } = props

  const color = mapPhaseToColor(phase)

  const { text, next } = FormFinishedContent[stepNumber]

  //TODO
  const nextStep = next

  const onButtonPress = () => {
    onSelectStep(nextStep)
  }

  return {
    color,
    step,
    onButtonPress,
    text,
  }
}

export default mapProps(merge)(FormFinishedComponent)
