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
        displayGlobal: false,
        subtype: {
          type: setTypes.slider,
        },
        subtypeOptions: {
          min: 1,
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
  title: 'My Energy Levels',
  subtitle: 'How are you feeling right now?',
  content:
    'Take stock of your internal energy levels throughout the day, and observe the trends that develop over weeks and months.',
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
