// @flow
import { MEDITATION, stepEnum } from '2020_services/cms'
import {
  buttonStyles,
  phaseColors,
  buttonTextStyles,
  phaseTextAndButtonColors,
  formElementBackgroundStyles,
} from '2020_styles/components/global'
import types, { setTypes, answerTypes } from '2020_forms/forms/types'
import { EnergyLevels } from '2020_forms/forms/content'

export const key = 'energy_levels_tracker_tool'

export const FORM_KEYS = {
  energy_levels_tracker_tool_energy_levels:
    'energy_levels_tracker_tool_energy_levels',
}

export const CHILDREN_KEYS = {
  energy_levels_tracker_tool_energy_levels: {
    PhysicalEnergy: `${
      FORM_KEYS.energy_levels_tracker_tool_energy_levels
    }.PhysicalEnergy`,
    EmotionalEnergy: `${
      FORM_KEYS.energy_levels_tracker_tool_energy_levels
    }.EmotionalEnergy`,
    SpiritualEnergy: `${
      FORM_KEYS.energy_levels_tracker_tool_energy_levels
    }.SpiritualEnergy`,
  },
}

const form = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
    0: {
      type: types.set,
      key: FORM_KEYS.energy_levels_tracker_tool_energy_levels,
      content: {
        text: 'How are your energy levels right now?',
        smallKey: 'Energy levels',
      },
      options: {
        default: {},
        subtype: {
          type: setTypes.slider,
        },
        subtypeOptions: {
          min: 0,
          max: 10,
          step: 1,
        },
        children: Object.keys(EnergyLevels).reduce(
          (children, contentKey, index) => {
            const energyLevel = EnergyLevels[contentKey]
            return {
              ...children,
              [index]: {
                contentKey,
                key: `${
                  FORM_KEYS.energy_levels_tracker_tool_energy_levels
                }.${contentKey}`,
                content: {
                  text: energyLevel.title,
                  subtitle: energyLevel.subtitle,
                },
              },
            }
          },
          {}
        ),
      },
    },
  },
}

export default {
  key,
  number: 8,
  phase: MEDITATION,
  title: 'Energy levels tracker',
  subtitle: 'Check your energy levels through the day',
  content:
    'Use this tool to keep track of how you feel through the day. Log your energy levels and make sure that you are making the progress you want to make',
  form,
  config: {},
  formStyles: {
    headerTextStyle: {
      color: phaseTextAndButtonColors.phase1,
    },
    textStyle: {
      color: phaseTextAndButtonColors.phase1,
    },
    elementContainerStyle: formElementBackgroundStyles.phase1,
    buttonContainerStyle: buttonStyles.phase1,
    buttonTextStyle: buttonTextStyles.phase1,
    accentColor: phaseColors.phase1,
  },
  require: {
    steps: [stepEnum.STEP_8],
  },
}