// @flow
import {
  PHASE_1_COMPLETE,
  PHASE_2_COMPLETE,
  PHASE_3_COMPLETE,
  PHASE_1_INCOMPLETE,
  PHASE_2_INCOMPLETE,
  PHASE_3_INCOMPLETE
}                                                       from '../constants/colors'
import { MEDITATION, SELF_ASSESSMENT, VISION_CREATION } from './cms'

export const PHASE_1_COMPLETED_KEY = 'PHASE1COMPLETE'
export const PHASE_2_COMPLETED_KEY = 'PHASE2COMPLETE'
export const PHASE_3_COMPLETED_KEY = 'PHASE3COMPLETE'

export const PHASE_1_NOT_COMPLETED_KEY = 'PHASE1INCOMPLETE'
export const PHASE_2_NOT_COMPLETED_KEY = 'PHASE2INCOMPLETE'
export const PHASE_3_NOT_COMPLETED_KEY = 'PHASE3INCOMPLETE'

const phaseStepColors = {
  [PHASE_1_COMPLETED_KEY]: PHASE_1_COMPLETE,
  [PHASE_2_COMPLETED_KEY]: PHASE_2_COMPLETE,
  [PHASE_3_COMPLETED_KEY]: PHASE_3_COMPLETE,
  [PHASE_1_NOT_COMPLETED_KEY]: PHASE_1_INCOMPLETE,
  [PHASE_2_NOT_COMPLETED_KEY]: PHASE_2_INCOMPLETE,
  [PHASE_3_NOT_COMPLETED_KEY]: PHASE_3_INCOMPLETE
}

const phaseColors = {
  [MEDITATION]: {
    complete: PHASE_1_COMPLETE,
    incomplete: PHASE_1_INCOMPLETE
  },
  [SELF_ASSESSMENT]: {
    complete: PHASE_2_COMPLETE,
    incomplete: PHASE_2_INCOMPLETE
  },
  [VISION_CREATION]: {
    complete: PHASE_3_COMPLETE,
    incomplete: PHASE_3_INCOMPLETE
  }
}

export const getStepColors = () => {
  return phaseStepColors
}

export const getPhaseColors = () => {
  return phaseColors
}
