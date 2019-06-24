//@flow
import { connect } from 'react-redux'
import { connectContext } from 'react-connect-context'
import { compose } from 'recompose'
import selectors from '../../../redux/selectors'
import PhaseProgressComponent, {
  PhaseProgressComponentProps,
} from '../components/Tools/PhaseProgressComponent'
import {
  phaseForUserForm,
  phaseNumberForPhase,
  phaseForStep,
  MEDITATION,
  SELF_ASSESSMENT,
  VISION_CREATION,
} from '../../../services/cms'
import { progressFillColor } from '../styles'
import { PhaseConsumer } from '../context/PhaseContext'
import { getAmountOfTools, getUnlockedTools } from '2020_services/tools'

const [meditation, self_assessment, vision_creation] = getAmountOfTools()

const amountOfTools = {
  [MEDITATION]: meditation,
  [SELF_ASSESSMENT]: self_assessment,
  [VISION_CREATION]: vision_creation,
}

/**
 * UI reducer param key
 */
export const PhaseProgressElementKey = 'PhaseProgress'

type PhaseProgressState = {
  sortedStepsWithForms: Array<any>,
  user: any,
  isLoggedIn: boolean,
  colors: {
    original: any,
    override?: any,
  },
  allTools: Array<any>,
}

type PhaseProgressContainerProps = {
  phase: string,
}

type PhaseProgressDispatchProps = {}

const mapPhaseToName = ({ phase }: { phase: string }) => {
  switch (phase) {
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

  const completedSteps = selectors.getCompletedSteps(state)

  const allTools = getUnlockedTools(completedSteps)

  return {
    sortedStepsWithForms,
    user,
    isLoggedIn,
    colors: {
      original: originalColors,
      override: newColors,
    },
    allTools,
  }
}

const mergeProps = (
  stateProps: PhaseProgressState,
  dispatchProps: PhaseProgressDispatchProps,
  ownProps: PhaseProgressContainerProps
): PhaseProgressComponentProps => {
  const { sortedStepsWithForms, user, isLoggedIn, colors, allTools } = stateProps
  const { phase, selectPhase, selectedPhase } = ownProps

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
    incomplete: formsForPhase.length - userFormsForPhase,
  }

  const onPhasePress = () => selectPhase(phase)

  const fillColor = progressFillColor

  const unfilledColor =
    colors && colors.override
      ? colors.override[phase].incomplete
      : colors.original[phase]

  const phaseColor =
    colors && colors.override
      ? colors.override[phase].complete
      : colors.original[phase]

  const amountOfToolsForPhase = amountOfTools[phase]

  const unlockedToolsForPhase = allTools.filter(tool => tool.phase === phase).length

  return {
    phase: mapPhaseToName({ phase }),
    phaseNumber,
    phaseColor,
    fill: fillColor,
    unfilledColor,
    onPhasePress,
    isSelected: selectedPhase === phase,
    amountOfToolsForPhase,
    unlockedToolsForPhase,
    ...stepsData,
  }
}

export default compose(
  connectContext(PhaseConsumer),
  connect(mapStateToProps, null, mergeProps)
)(PhaseProgressComponent)
