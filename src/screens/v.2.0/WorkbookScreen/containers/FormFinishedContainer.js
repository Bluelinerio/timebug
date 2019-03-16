// @flow
import { compose, mapProps }            from 'recompose'
import { connect }                      from 'react-redux'
import selectors                        from '2020_redux/selectors'
import { linkNavigation }               from '2020_redux/actions/nav.actions'
import type { LinkedNavigationPayload } from '2020_redux/actions/nav.actions'
import type { Step }                    from '2020_services/cms'
import FormFinishedContent              from '2020_static/workbookDone/index'
import FormFinishedComponent            from '../components/FormFinishedComponent'
import { mapPhaseToTextAndButtonColor } from '../utils/colorsForStep'

type StateProps = {
  steps: Array<Step>,
}

type DispatchProps = {
  setupGoToTool: LinkedNavigationPayload => () => any,
}

type Props = StateProps &
  DispatchProps & {
    step: Step,
    phase: string,
    stepNumber: string,
    onSelectStep: Step => any,
  }

const mapStateToProps = (state: any): StateProps => {
  const steps = selectors.steps(state)
  return {
    steps,
  }
}

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  setupGoToTool: (params: LinkedNavigationPayload) => () =>
    dispatch(linkNavigation(params)),
})

const merge = (props: Props) => {
  const { step, steps, phase, stepNumber, onSelectStep, setupGoToTool } = props

  const totalSteps = Object.keys(steps).length
  const color = mapPhaseToTextAndButtonColor(phase)

  const {
    text = ` Step ${step.number}: ${step.title}`,
    title = 'Congratulations!',
    toolLink = null,
  } =
    FormFinishedContent[stepNumber] || {}

  const hasNext = step.number + 1 <= totalSteps
  const nextStep = hasNext ? steps[step.number + 1] : null
  const nextStepNumber = hasNext ? nextStep.number : 1

  const toolButton = toolLink
    ? {
      onPress: setupGoToTool({
        link: `tools/tool?key=${toolLink.tool}`,
      }),
      text: toolLink.text,
    }
    : null

  const onButtonPress = () => {
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
    toolButton,
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  mapProps(merge)
)(FormFinishedComponent)
