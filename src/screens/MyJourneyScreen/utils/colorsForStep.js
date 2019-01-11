//@ flow
import {
  PHASE_1_NOT_COMPLETED_KEY,
  PHASE_2_NOT_COMPLETED_KEY,
  PHASE_3_NOT_COMPLETED_KEY,
} from '../../../services/dummyCms'
import {
  phaseForStepAtIndex,
  MEDITATION,
  SELF_ASSESSMENT,
  VISION_CREATION,
} from '../../../services/cms'
import styles from '../styles/ToolStyles'

export const isStepIndexCompleted = (stepIndex: string, user: any) => {
  const { forms } = user
  return forms && forms.find(form => form.stepId === stepIndex + 1)
    ? true
    : false
}

const mapPhaseAndCompletionToKey = (phase: string) => {
  switch (phase) {
  case MEDITATION:
    return PHASE_1_NOT_COMPLETED_KEY
  case SELF_ASSESSMENT:
    return PHASE_2_NOT_COMPLETED_KEY
  case VISION_CREATION:
    return PHASE_3_NOT_COMPLETED_KEY
  }
}

export const getColorForStepAtIndex = (stepIndex: string, user: any) => {
  return mapPhaseAndCompletionToKey(
    phaseForStepAtIndex(stepIndex),
    isStepIndexCompleted(stepIndex, user)
  )
}

export const getTextColorForStepAtIndex = (stepIndex: string) => {
  const incompleteStyles = {
    [MEDITATION]: styles.phase1Incomplete,
    [SELF_ASSESSMENT]: styles.phase2Incomplete,
    [VISION_CREATION]: styles.phase3Incomplete,
  }
  const phase = phaseForStepAtIndex(stepIndex)
  return incompleteStyles[phase]
}
