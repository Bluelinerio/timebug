// @flow
import {
  PHASE_1_COMPLETE,
  PHASE_2_COMPLETE,
  PHASE_3_COMPLETE,
  white2,
} from '2020_constants/colors'
import { MEDITATION, SELF_ASSESSMENT, VISION_CREATION } from '2020_services/cms'

export const mapPhaseToColor = (phase: string) => {
  switch (phase) {
    case MEDITATION:
      return PHASE_1_COMPLETE
    case SELF_ASSESSMENT:
      return PHASE_2_COMPLETE
    case VISION_CREATION:
      return PHASE_3_COMPLETE
  }
}

export const mapPhaseToContrastColor = (phase: string) => {
  switch (phase) {
    case MEDITATION:
      return white2
    case SELF_ASSESSMENT:
      return white2
    case VISION_CREATION:
      return white2
  }
}
