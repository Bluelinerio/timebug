// @flow
import { Platform }                                   from 'react-native'
import types, { answerTypes }                         from 'react-native-forms/forms/types'
import type { Form }                                  from 'react-native-forms/types/formTypes'
import { HoursOfSleep, StressLevels, HealthPriority } from './content'

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
        text: 'What is your typical stress level during the week?',
        smallKey: 'Stress levels',
        items: StressLevels.map(level => ({
          text: level,
          value: level,
        })),
      },
      options: {
        default: StressLevels[0],
        required: true,
      },
    },
    2: {
      type: types.select,
      key: `${FORM_KEYS.form_16_health_priority_level}`,
      content: {
        text: `Has you health been a priority for you over the past 5 years?`,
        smallKey: 'Health priority',
        items: HealthPriority.map(hp => ({
          text: hp,
          value: hp,
        })),
      },
      options: {
        required: true,
        default: HealthPriority[0],
      },
    },
    3: {
      type: types.formElements,
      key: `${FORM_KEYS.form_16_typical_diet}`,
      content: {
        text: 'What does your typical diet look like?',
        smallKey: 'Typical diet',
      },
      options: {
        required: true,
        childTypes: {
          0: {
            type: types.string,
            key: `${CHILDREN_KEYS.form_16_typical_diet.morning}`,
            options: {
              required: true,
              placeHolder: 'Protein bar with shake. . .',
              label: 'Breakfast',
              default: '',
              multiline: true,
              numberOfLines: 3,
              style: {
                textInputContainerStyle: Platform.select({
                  android: {},
                  ios: {
                    marginBottom: 20,
                  }, //Fill with what's needed
                }),
                textInputStyle: Platform.select({
                  android: {},
                  ios: {
                    minHeight: 30,
                  }, //Fill with what's needed
                }),
              },
            },
          },
          1: {
            type: types.string,
            key: `${CHILDREN_KEYS.form_16_typical_diet.afternoon}`,
            options: {
              required: true,
              placeHolder:
                'Steak, steamed vegetables and mashed potatoes . . .',
              default: '',
              label: 'Lunch',
              multiline: true,
              numberOfLines: 3,
              style: {
                textInputContainerStyle: Platform.select({
                  android: {},
                  ios: {
                    marginBottom: 20,
                  }, //Fill with what's needed
                }),
                textInputStyle: Platform.select({
                  android: {},
                  ios: {
                    minHeight: 30,
                  }, //Fill with what's needed
                }),
              },
            },
          },
          2: {
            type: types.string,
            key: `${CHILDREN_KEYS.form_16_typical_diet.evening}`,
            options: {
              required: true,
              placeHolder: 'French toasts. . .',
              label: 'Dinner',
              default: '',
              multiline: true,
              numberOfLines: 3,
              style: {
                textInputContainerStyle: Platform.select({
                  android: {},
                  ios: {
                    marginBottom: 20,
                  }, //Fill with what's needed
                }),
                textInputStyle: Platform.select({
                  android: {},
                  ios: {
                    minHeight: 30,
                  }, //Fill with what's needed
                }),
              },
            },
          },
        },
      },
    },
  },
}

export default form
