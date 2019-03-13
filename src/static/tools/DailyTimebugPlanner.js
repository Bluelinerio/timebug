// @flow

import {
  buttonStyles,
  phaseColors,
  buttonTextStyles,
  phaseTextAndButtonColors,
  formElementBackgroundStyles,
} from '2020_styles/components/global'
import types, { setTypes, answerTypes } from '2020_forms/forms/types'
import { LifeCategories } from '2020_forms/forms/content'
import { SHARED } from '2020_forms/forms/constants'

import {
  MEDITATION,
} from '2020_services/cms'

export const key = 'daily_timebug_planner_tool'

export const TOOL_FORM_KEYS = {
  daily_timebug_planner_tool_daily_time:
    'daily_timebug_planner_tool_daily_time',
}

const form = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
    0: {
      type: types.set,
      key: 'daily_timebug_planner_tool_daily_time',
      content: {
        text: 'Break down your day according to the 7 life categories',
        smallKey: 'Activities',
      },
      options: {
        default: {},
        subtype: {
          type: setTypes.slider,
        },
        subtypeOptions: {
          min: 0,
          max: 24,
          data: SHARED,
          step: 1,
          suffixOfValue: 'hrs',
        },
        children: Object.keys(LifeCategories).reduce(
          (children, contentKey, index) => {
            const category = LifeCategories[contentKey]
            return {
              ...children,
              [index]: {
                contentKey,
                key: `daily_timebug_planner_tool_daily_time.${contentKey}`,
                content: {
                  text: `How much time did you spend today on your ${
                    category.title
                  }?`,
                  subtitle: category.subtitle,
                },
                options: {
                  max: 12,
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
  number: 2,
  phase: MEDITATION,
  title: 'Timebug Planner (Daily)',
  subtitle: 'How do I want to spend my time?',
  content:
    'Use this tool to track how you are spending your time every day.',
  form: form,
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
}
