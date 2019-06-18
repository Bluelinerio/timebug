import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withNavigation } from 'react-navigation'

import StepSideButton, {
  StepSideButtonProps,
} from '../components/StepSideButton'
import { goToAssignmentFlow } from '../../../redux/actions/nav.actions'
import selectors from '../../../redux/selectors'
import { mapPhaseAndCompletionToStylesHelper } from '../utils/colorsForStep'

type StateProps = {
  steps: any,
}

export type StepContentButtonContainerProps = {
  navigation: any,
  number: number,
  phase: string,
  complete: boolean,
}

const mapStateToProps = (state: any): StateProps => {
  const steps = selectors.steps(state)
  return {
    steps,
  }
}

const mergeProps = (
  stateProps: StateProps,
  _,
  ownProps: StepContentButtonContainerProps
): StepSideButtonProps => {
  const { steps } = stateProps
  const { navigation, number, phase, complete } = ownProps

  const step = steps[number]

  const {
    container: containerStyle,
    icon: iconStyle,
  } = mapPhaseAndCompletionToStylesHelper(phase, complete)

  const onPress = () => navigation.dispatch(goToAssignmentFlow({ step }))

  return {
    containerStyle,
    iconStyle,
    onPress,
    name: 'Book',
  }
}

export default compose(
  withNavigation,
  connect(mapStateToProps, null, mergeProps)
)(StepSideButton)
