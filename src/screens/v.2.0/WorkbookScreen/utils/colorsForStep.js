// @flow
import {
  MEDITATION,
  SELF_ASSESSMENT,
  VISION_CREATION,
  COMPLETE,
}                                                        from '../../../../services/cms'
import { svgStyles, barColors, textColors, phaseColors } from '../styles'

export const mapPhaseToStylesHelper = (phase: string) => {
  switch (phase) {
  case MEDITATION:
    return svgStyles.phase1
  case SELF_ASSESSMENT:
    return svgStyles.phase2
  case VISION_CREATION:
    return svgStyles.phase3
  case COMPLETE:
    return svgStyles.phase1
  }
}

export const mapBarStylesHelper = (phase: string) => {
  switch (phase) {
  case MEDITATION:
    return barColors.phase1
  case SELF_ASSESSMENT:
    return barColors.phase2
  case VISION_CREATION:
    return barColors.phase3
  case COMPLETE:
    return barColors.phase1
  }
}

export const mapPhaseToTextStyles = (phase: string) => {
  switch (phase) {
  case MEDITATION:
    return textColors.phase1
  case SELF_ASSESSMENT:
    return textColors.phase2
  case VISION_CREATION:
    return textColors.phase3
  case COMPLETE:
    return textColors.phase1
  }
}

export const mapPhaseToColor = (phase: string) => {
  switch (phase) {
  case MEDITATION:
    return phaseColors.phase1
  case SELF_ASSESSMENT:
    return phaseColors.phase2
  case VISION_CREATION:
    return phaseColors.phase3
  case COMPLETE:
    return phaseColors.phase1
  }
}
