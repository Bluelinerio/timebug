import {
  PHASE_1_COMPLETE,
  PHASE_2_COMPLETE,
  PHASE_3_COMPLETE,
  PHASE_1_INCOMPLETE,
  PHASE_2_INCOMPLETE,
  PHASE_3_INCOMPLETE
} from '../constants/colors'

export const PHASE_1_COMPLETED_KEY = 'PHASE1COMPLETE'
export const PHASE_2_COMPLETED_KEY = 'PHASE2COMPLETE'
export const PHASE_3_COMPLETED_KEY = 'PHASE3COMPLETE'

export const PHASE_1_NOT_COMPLETED_KEY = 'PHASE1INCOMPLETE'
export const PHASE_2_NOT_COMPLETED_KEY = 'PHASE2INCOMPLETE'
export const PHASE_3_NOT_COMPLETED_KEY = 'PHASE3INCOMPLETE'

export const getStepColors = state => {
  return {
      [PHASE_1_COMPLETED_KEY]: PHASE_1_COMPLETE,
      [PHASE_2_COMPLETED_KEY]: PHASE_2_COMPLETE,
      [PHASE_3_COMPLETED_KEY]: PHASE_3_COMPLETE,
      [PHASE_1_NOT_COMPLETED_KEY]: PHASE_1_INCOMPLETE,
      [PHASE_2_NOT_COMPLETED_KEY]: PHASE_2_INCOMPLETE,
      [PHASE_3_NOT_COMPLETED_KEY]: PHASE_3_INCOMPLETE
  }
}
