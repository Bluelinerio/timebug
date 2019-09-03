// @flow
import { MEDITATION, SELF_ASSESSMENT, VISION_CREATION } from '2020_services/cms'
import { phaseStyles } from '../styles'

export const getStyleForPhase = (phase: string) => {
  switch (phase) {
    case MEDITATION:
      return phaseStyles.p1
    case SELF_ASSESSMENT:
      return phaseStyles.p2
    case VISION_CREATION:
      return phaseStyles.p3
  }
}
