// @flow
import { MEDITATION, SELF_ASSESSMENT, VISION_CREATION } from '2020_services/cms'
import {
  PHASE_1_COMPLETE,
  PHASE_1_INCOMPLETE,
  PHASE_2_COMPLETE,
  PHASE_3_COMPLETE,
  orange50,
  green50,
  paleBlue,
} from '2020_constants/colors'

export const mapPhaseToColor = (phase: string) => {
  switch (phase) {
  case MEDITATION:
    return {
      header: PHASE_1_COMPLETE,
      back: paleBlue,
    }
  case SELF_ASSESSMENT:
    return {
      header: PHASE_2_COMPLETE,
      back: orange50,
    }
  case VISION_CREATION:
    return {
      header: PHASE_3_COMPLETE,
      back: green50,
    }
  default:
    return {
      header: PHASE_1_COMPLETE,
      back: PHASE_1_INCOMPLETE,
    }
  }
}
