import { connect } from 'react-redux'
import selectors from '../../../redux/selectors'
import PhaseProgressComponent from '../components/PhaseProgressComponent'
import {
  phaseForUserForm,
  phaseNumberForPhase,
  phaseForStep,
  MEDITATION,
  SELF_ASSESSMENT,
  VISION_CREATION
} from '../../../services/cms'
import { progressFillColor } from '../styles'

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

const mapPhaseToName = ({ phase }: { phase: string}) => {
  switch(phase){
    case MEDITATION:
      return 'MEDITATION'
    case SELF_ASSESSMENT:
      return 'SELF-ASSESSMENT'
    case VISION_CREATION:
      return 'VISION CREATION'
    default:
      return ''
  }
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

  const unfilledColor =
    colors && colors.override
      ? colors.override[phase].incomplete
      : colors.original[phase]

  const phaseColor =
    colors && colors.override
      ? colors.override[phase].complete
      : colors.original[phase]
    
  return {
    phase: mapPhaseToName({phase}),
    phaseNumber,
    phaseColor,
    fill: fillColor,
    unfilledColor,
    ...stepsData
  }
}

export default connect(mapStateToProps, null, mergeProps)(
  PhaseProgressComponent
)
