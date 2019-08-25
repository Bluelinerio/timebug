// @flow
import {
  MEDITATION,
  SELF_ASSESSMENT,
  VISION_CREATION,
  COMPLETE,
} from '2020_services/cms'
import {
  svgStyles,
  barColors,
  textColors,
  phaseColors,
  phaseTextAndButtonColors,
  buttonStyles,
  formElementBackgroundStyles,
} from '2020_styles/forms'

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

export const mapPhaseToTextAndButtonColor = (phase: string) => {
  switch (phase) {
  case MEDITATION:
    return phaseTextAndButtonColors.phase1
  case SELF_ASSESSMENT:
    return phaseTextAndButtonColors.phase2
  case VISION_CREATION:
    return phaseTextAndButtonColors.phase3
  case COMPLETE:
    return phaseTextAndButtonColors.phase1
  }
}

export const mapPhaseToButtonStyles = (phase: string) => {
  switch (phase) {
  case MEDITATION:
    return buttonStyles.phase1
  case SELF_ASSESSMENT:
    return buttonStyles.phase2
  case VISION_CREATION:
    return buttonStyles.phase3
  case COMPLETE:
    return buttonStyles.phase1
  }
}

export const mapPhaseToElementBackground = (phase: string) => {
  switch (phase) {
  case MEDITATION:
    return formElementBackgroundStyles.phase1
  case SELF_ASSESSMENT:
    return formElementBackgroundStyles.phase2
  case VISION_CREATION:
    return formElementBackgroundStyles.phase3
  case COMPLETE:
    return formElementBackgroundStyles.phase1
  }
}