import {
  PHASE_1_COMPLETED_KEY,
  PHASE_2_COMPLETED_KEY,
  PHASE_3_COMPLETED_KEY,
  PHASE_1_NOT_COMPLETED_KEY,
  PHASE_2_NOT_COMPLETED_KEY,
  PHASE_3_NOT_COMPLETED_KEY
}             from '../../../services/dummyCms'
import {
  phaseForStepAtIndex,
  MEDITATION,
  SELF_ASSESSMENT,
  VISION_CREATION
}             from '../../../services/cms'
import styles from '../styles'

export const isStepIndexCompleted = (stepIndex, user) => {
  const { forms } = user
  return forms && forms.find(form => form.stepId === stepIndex + 1)
    ? true
    : false
}

const mapPhaseAndCompletionToKey = (phase, completed) => {
  switch (phase) {
    case MEDITATION:
      return completed ? PHASE_1_COMPLETED_KEY : PHASE_1_NOT_COMPLETED_KEY
    case SELF_ASSESSMENT:
      return completed ? PHASE_2_COMPLETED_KEY : PHASE_2_NOT_COMPLETED_KEY
    case VISION_CREATION:
      return completed ? PHASE_3_COMPLETED_KEY : PHASE_3_NOT_COMPLETED_KEY
  }
}

export const getColorForStepAtIndex = (stepIndex, user) => {
  return mapPhaseAndCompletionToKey(
    phaseForStepAtIndex(stepIndex),
    isStepIndexCompleted(stepIndex, user)
  )
}

export const getTextColorForStepAtIndex = (stepIndex, user, styles) => {
  const incompleteStyles = {
    [MEDITATION]: styles.phase1Incomplete,
    [SELF_ASSESSMENT]: styles.phase2Incomplete,
    [VISION_CREATION]: styles.phase3Incomplete
  }
  const phase = phaseForStepAtIndex(stepIndex)
  return isStepIndexCompleted(stepIndex, user) ? {} : incompleteStyles[phase]
}

export const mapPhaseAndCompletionToStylesHelper = (
  phase,
  completed = false
) => {
  switch (phase) {
    case MEDITATION:
      return completed
        ? {
            container: styles.iconContainerPhase1Complete,
            icon: styles.iconPhase1
          }
        : {
            container: styles.iconContainerPhase1Incomplete,
            icon: styles.iconPhase1
          }
    case SELF_ASSESSMENT:
      return completed
        ? {
            container: styles.iconContainerPhase2Complete,
            icon: styles.iconPhase2
          }
        : {
            container: styles.iconContainerPhase2Incomplete,
            icon: styles.iconPhase2
          }
    case VISION_CREATION:
      return completed
        ? {
            container: styles.iconContainerPhase3Complete,
            icon: styles.iconPhase3
          }
        : {
            container: styles.iconContainerPhase3Incomplete,
            icon: styles.iconPhase3
          }
  }
}
