// @flow
import {
  PHASE_1_COMPLETE,
  PHASE_2_COMPLETE,
  PHASE_3_COMPLETE,
  white2,
  gray400,
}                                                       from '2020_constants/colors'
import { MEDITATION, SELF_ASSESSMENT, VISION_CREATION } from '2020_services/cms'
import { baseIconStyle }                                from '../styles'

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

export const mapPhaseToSliderColor = (phase: string) => {
  switch (phase) {
    case MEDITATION:
      return {
        minimumTrackColor: PHASE_1_COMPLETE,
        maximumTrackColor: gray400,
      }
    case SELF_ASSESSMENT:
      return {
        minimumTrackColor: PHASE_2_COMPLETE,
        maximumTrackColor: gray400,
      }
    case VISION_CREATION:
      return {
        minimumTrackColor: PHASE_3_COMPLETE,
        maximumTrackColor: gray400,
      }
  }
}

export const mapPhaseToIconStyle = (phase: string) => {
  switch (phase) {
    case MEDITATION:
      return {
        ...baseIconStyle,
        fill: PHASE_1_COMPLETE,
      }
    case SELF_ASSESSMENT:
      return {
        ...baseIconStyle,
        fill: PHASE_2_COMPLETE,
      }
    case VISION_CREATION:
      return {
        ...baseIconStyle,
        fill: PHASE_3_COMPLETE,
      }
  }
}
