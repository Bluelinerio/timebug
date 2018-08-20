import { connect } from 'react-redux'
import selectors from '../../../redux/selectors'
import PhaseProgressComponent from '../components/PhaseProgressComponent'
import {
  phaseForUserForm,
  phaseNumberForPhase,
  phaseForStep
} from '../../../services/cms'
import { progressFillColor } from '../styles'
import tron from 'reactotron-react-native'
type PhaseProgressState = {
  sortedStepsWithForms: Array<any>,
  user: any,
  isLoggedIn: boolean,
  colors: {
    original: any,
    override?: any
  }
}

type PhaseProgressContainerProps = {
  phase: string
}

const mapStateToProps = (state: any): PhaseProgressState => {
  const { sortedStepsWithForms } = selectors.sortedStepsWithForms(state)
  const user = selectors.getUser(state)
  const isLoggedIn = selectors.isLoggedIn(state)
  const originalColors = selectors.phaseColors(state)
  const newColors = selectors.overridePhaseColors(state)
  return {
    sortedStepsWithForms,
    user,
    isLoggedIn,
    colors: {
      original: originalColors,
      override: newColors
    }
  }
}

const mergeProps = (
  stateProps: PhaseProgressState,
  _: any,
  ownProps: PhaseProgressContainerProps
) => {
  const { sortedStepsWithForms, user, isLoggedIn, colors } = stateProps
  tron.log(stateProps)
  tron.log(ownProps)
  const { phase } = ownProps
  const phaseNumber = phaseNumberForPhase({ phase })
  const formsForPhase = sortedStepsWithForms.filter(form => {
    const { step } = form
    return phaseForStep(step) === phase
  })
  const userFormsForPhase = isLoggedIn
    ? user.forms.filter(form => phaseForUserForm(form) === phase).length
    : 0
  const stepsData = {
    complete: userFormsForPhase,
    incomplete: formsForPhase.length - userFormsForPhase
  }

  const fillColor = progressFillColor

  const nonFillColor =
    colors && colors.override
      ? colors.override[phase].incomplete
      : colors.original[phase]

  const phaseColor =
    colors && colors.override
      ? colors.override[phase].complete
      : colors.original[phase]
      
  return {
    phase,
    phaseNumber,
    phaseColor,
    fill: fillColor,
    bar: nonFillColor,
    ...stepsData
  }
}

export default connect(mapStateToProps, null, mergeProps)(
  PhaseProgressComponent
)
