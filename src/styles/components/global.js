// @flow
import {
  MEDITATION,
  SELF_ASSESSMENT,
  VISION_CREATION,
  PHASE_1_COMPLETE,
  PHASE_2_COMPLETE,
  PHASE_3_COMPLETE,
  PHASE_1_INCOMPLETE,
  PHASE_2_INCOMPLETE,
  PHASE_3_INCOMPLETE,
  COMPLETE,
  white2,
  deepBlue
} from '../../constants/colors'
import { translateCMSPhaseToStandard, PHASES } from '../../services/cms'

export const phase_1_color = MEDITATION

export const phase_1_alt_color = PHASE_1_COMPLETE

export const phase_2_color = SELF_ASSESSMENT

export const phase_2_alt_color = PHASE_2_COMPLETE

export const phase_3_color = VISION_CREATION

export const phase_3_alt_color = PHASE_3_COMPLETE

export const stepTextColor = white2

const phase_1_incomplete_text_color = deepBlue

export const getColorFromStep = (type: string, alt: boolean = false) => {
  const phase = translateCMSPhaseToStandard(type)
  switch (phase) {
  case PHASES.MEDITATION:
    return alt ? phase_1_alt_color : phase_1_color
  case PHASES.SELF_ASSESSMENT:
    return alt ? phase_2_alt_color : phase_2_color
  case PHASES.VISION_CREATION:
    return alt ? phase_3_alt_color : phase_3_color
  default:
    return COMPLETE
  }
}

export const backgroundColorFromStep = (
  type: string,
  completed: boolean = false
) => {
  const phase = translateCMSPhaseToStandard(type)
  switch (phase) {
  case PHASES.MEDITATION:
    return completed ? phase_1_alt_color : PHASE_1_INCOMPLETE
  case PHASES.SELF_ASSESSMENT:
    return completed ? phase_2_alt_color : PHASE_2_INCOMPLETE
  case PHASES.VISION_CREATION:
    return completed ? phase_3_alt_color : PHASE_3_INCOMPLETE
  default:
    return COMPLETE
  }
}

export const getTextColorFromStep = (
  type: string,
  completed: boolean = false
) => {
  const phase = translateCMSPhaseToStandard(type)
  switch (phase) {
  case PHASES.MEDITATION:
    return completed ? stepTextColor : phase_1_incomplete_text_color
  case PHASES.SELF_ASSESSMENT:
    return stepTextColor
  case PHASES.VISION_CREATION:
    return stepTextColor
  default:
    return stepTextColor
  }
}
