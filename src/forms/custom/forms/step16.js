// @flow
import { Platform }                                   from 'react-native'
import types, { answerTypes }                         from 'react-native-forms/forms/types'
import type { Form }                                  from 'react-native-forms/types/formTypes'
import { DietTypes, OneToTenScale, HoursOfSleep  } from './content'

export const FORM_KEYS = {
  form_16_sleep_hours: 'form_16_sleep_hours',
  form_16_stress_levels: 'form_16_stress_levels',
  form_16_health_priority_level: 'form_16_health_priority_level',
  form_16_typical_diet: 'form_16_typical_diet',
}

export const CHILDREN_KEYS = {
  form_16_typical_diet: {
    morning: `${FORM_KEYS.form_16_typical_diet}.morning`,
    afternoon: `${FORM_KEYS.form_16_typical_diet}.afternoon`,
    evening: `${FORM_KEYS.form_16_typical_diet}.evening`,
  },
}

const form: Form = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
    0: {
      type: types.select,
      key: `${FORM_KEYS.form_16_sleep_hours}`,
      content: {
        text: `How many hours do you typically sleep a night?`,
        smallKey: 'Hours of Sleep',
        items: HoursOfSleep.map(hrs => ({
          text: hrs,
          value: hrs,
        })),
      },
      options: {
        required: true,
        default: HoursOfSleep[0],
      },
    },
    1: {
      type: types.select,
      key: `${FORM_KEYS.form_16_stress_levels}`,
      content: {
        text: 'On a scale of 1-10, what is your typical stress level during the week?',
        smallKey: 'Stress levels',
        items: OneToTenScale.map(level => ({
          text: level,
          value: level,
        })),
      },
      options: {
        default: OneToTenScale[0],
        required: true,
      },
    },
    2: {
      type: types.select,
      key: `${FORM_KEYS.form_16_health_priority_level}`,
      content: {
        text: `On a scale of 1-10, how much of a priority has your health been over the past 5 years?`,
        smallKey: 'Health priority',
        items: OneToTenScale.map(hp => ({
          text: hp,
          value: hp,
        })),
      },
      options: {
        required: true,
        default: OneToTenScale[0],
      },
    },
    3: {
      type: types.select,
      key: `${FORM_KEYS.form_16_typical_diet}`,
      content: {
        text: 'What does your typical diet look like?',
        smallKey: 'Typical diet',
        items: DietTypes.map(dietType => ({
          text: dietType,
          value: dietType,
        })),
      },
      options: {
        required: true,
        default: DietTypes[0],
      },
    },
  },
}

export default form
