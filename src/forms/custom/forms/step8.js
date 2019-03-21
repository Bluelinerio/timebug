// @flow
import types, { answerTypes, setTypes } from './types'
import type { Form } from '../types/formTypes'
import {
  EnergyLevels,
  ExerciseTypes,
  MeditationTypes,
  Frequency,
  AloneOrOthers,
} from './content'

export const FORM_KEYS = {
  form_8_energy_levels_weekday_morning: 'form_8_energy_levels_weekday_morning',
  form_8_energy_levels_weekday_afternoon:
    'form_8_energy_levels_weekday_afternoon',
  form_8_energy_levels_weekday_evening: 'form_8_energy_levels_weekday_evening',
  form_8_energy_levels_weekend_morning:
    'form_8_energy_levels_weekend_afternoon',
  form_8_energy_levels_weekend_afternoon:
    'form_8_energy_levels_weekend_afternoon',
  form_8_energy_levels_weekend_evening: 'form_8_energy_levels_weekend_evening',
  form_8_exercise_habits: 'form_8_exercise_habits',
  form_8_meditation_habits: 'form_8_meditation_habits',
}

export const CHILDREN_KEYS = {
  form_8_energy_levels_weekday_morning: {
    weekdayMorningPhysical: `${
      FORM_KEYS.form_8_energy_levels_weekday_morning
    }.weekdayMorningPhysical`,
    weekdayMorningEmotional: `${
      FORM_KEYS.form_8_energy_levels_weekday_morning
    }.weekdayMorningEmotional`,
    weekdayMorningSpiritual: `${
      FORM_KEYS.form_8_energy_levels_weekday_morning
    }.weekdayMorningSpiritual`,
  },
  form_8_energy_levels_weekday_afternoon: {
    weekdayAfternoonPhysical: `${
      FORM_KEYS.form_8_energy_levels_weekday_afternoon
    }.weekdayAfternoonPhysical`,
    weekdayAfternoonEmotional: `${
      FORM_KEYS.form_8_energy_levels_weekday_afternoon
    }.weekdayAfternoonEmotional`,
    weekdayAfternoonSpiritual: `${
      FORM_KEYS.form_8_energy_levels_weekday_afternoon
    }.weekdayAfternoonSpiritual`,
  },
  form_8_energy_levels_weekday_evening: {
    weekdayEveningPhysical: `${
      FORM_KEYS.form_8_energy_levels_weekday_evening
    }.weekdayEveningPhysical`,
    weekdayEveningEmotional: `${
      FORM_KEYS.form_8_energy_levels_weekday_evening
    }.weekdayEveningEmotional`,
    weekdayEveningSpiritual: `${
      FORM_KEYS.form_8_energy_levels_weekday_evening
    }.weekdayEveningSpiritual`,
  },
  form_8_energy_levels_weekend_morning: {
    weekendMorningPhysical: `${
      FORM_KEYS.form_8_energy_levels_weekend_morning
    }.weekendMorningPhysical`,
    weekendMorningEmotional: `${
      FORM_KEYS.form_8_energy_levels_weekend_morning
    }.weekendMorningEmotional`,
    weekendMorningSpiritual: `${
      FORM_KEYS.form_8_energy_levels_weekend_morning
    }.weekendMorningSpiritual`,
  },
  form_8_energy_levels_weekend_afternoon: {
    weekendAfternoonPhysical: `${
      FORM_KEYS.form_8_energy_levels_weekend_afternoon
    }.weekendAfternoonPhysical`,
    weekendAfternoonEmotional: `${
      FORM_KEYS.form_8_energy_levels_weekend_afternoon
    }.weekendAfternoonEmotional`,
    weekendAfternoonSpiritual: `${
      FORM_KEYS.form_8_energy_levels_weekend_afternoon
    }.weekendAfternoonSpiritual`,
  },
  form_8_energy_levels_weekend_evening: {
    weekendEveningPhysical: `${
      FORM_KEYS.form_8_energy_levels_weekend_evening
    }.weekendEveningPhysical`,
    weekendEveningEmotional: `${
      FORM_KEYS.form_8_energy_levels_weekend_evening
    }.weekendEveningEmotional`,
    weekendEveningSpiritual: `${
      FORM_KEYS.form_8_energy_levels_weekend_evening
    }.weekendEveningSpiritual`,
  },
  form_8_exercise_habits: {
    exerciseFrequency: `${FORM_KEYS.form_8_exercise_habits}.exerciseFrequency`,
    exerciseTypes: `${FORM_KEYS.form_8_exercise_habits}.exerciseTypes`,
    aloneOrOthers: `${FORM_KEYS.form_8_exercise_habits}.aloneOrOthers`,
  },
  form_8_meditation_habits: {
    meditationFrequency: `${
      FORM_KEYS.form_8_meditation_habits
    }.meditationFrequency`,
    meditationTypes: `${FORM_KEYS.form_8_meditation_habits}.meditationTypes`,
    aloneOrOthers: `${FORM_KEYS.form_8_meditation_habits}.aloneOrOthers`,
  },
}

const form: Form = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
    0: {
      type: types.set,
      key: FORM_KEYS.form_8_energy_levels_weekday_morning,
      content: {
        text: 'What are your typical energy levels on a weekday morning?',
        smallKey: 'Weekday Morning Energy Levels',
      },
      options: {
        default: {},
        displayGlobal: false,
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
                key: `form_8_energy_levels_weekday_morning.${contentKey}`,
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
    1: {
      type: types.set,
      key: FORM_KEYS.form_8_energy_levels_weekday_afternoon,
      content: {
        text: 'What are your typical energy levels on a weekday afternoon?',
        smallKey: 'Weekday Afternoon Energy Levels',
      },
      options: {
        default: {},
        displayGlobal: false,
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
                key: `form_8_energy_levels_weekday_afternoon.${contentKey}`,
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
    2: {
      type: types.set,
      key: FORM_KEYS.form_8_energy_levels_weekday_evening,
      content: {
        text: 'What are your typical energy levels on a weekday evening?',
        smallKey: 'Weekday Evening Energy Levels',
      },
      options: {
        default: {},
        displayGlobal: false,
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
                key: `form_8_energy_levels_weekday_evening.${contentKey}`,
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
    3: {
      type: types.set,
      key: FORM_KEYS.form_8_energy_levels_weekend_morning,
      content: {
        text: 'What are your typical energy levels on a weekend morning?',
        smallKey: 'Weekend Morning Energy Levels',
      },
      options: {
        default: {},
        displayGlobal: false,
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
                key: `form_8_energy_levels_weekend_morning.${contentKey}`,
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
    4: {
      type: types.set,
      key: FORM_KEYS.form_8_energy_levels_weekend_afternoon,
      content: {
        text: 'What are your typical energy levels on a weekend afternoon?',
        smallKey: 'Weekend Afternoon Energy Levels',
      },
      options: {
        default: {},
        displayGlobal: false,
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
                key: `form_8_energy_levels_weekend_afternoon.${contentKey}`,
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
    5: {
      type: types.set,
      key: FORM_KEYS.form_8_energy_levels_weekend_evening,
      content: {
        text: 'What are your typical energy levels on a weekend evening?',
        smallKey: 'Weekend Evening Energy Levels',
      },
      options: {
        default: {},
        displayGlobal: false,
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
                key: `form_8_energy_levels_weekend_evening.${contentKey}`,
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
    6: {
      type: types.formElements,
      key: FORM_KEYS.form_8_exerciseHabits,
      content: {
        text:
          'Please answer the following questions about your exercise habits.',
        smallKey: 'Exercise Habits',
      },
      options: {
        required: true,
        childTypes: {
          0: {
            type: types.select,
            key: `${CHILDREN_KEYS.form_8_exercise_habits.exerciseFrequency}`,
            content: {
              text: 'How often do you exercise?',
              smallKey: 'Exercise Frequency',
              items: Frequency.map(frequency => ({
                value: frequency,
                text: frequency,
              })),
            },
            options: {
              required: true,
              style: {
                formHeaderText: {
                  fontSize: 14,
                },
              },
            },
          },
          1: {
            type: types.select,
            key: `${CHILDREN_KEYS.form_8_exercise_habits.exerciseTypes}`,
            content: {
              text: 'What type of exercise do you do?',
              smallKey: 'Exercise Type',
              items: ExerciseTypes.map(exerciseTypes => ({
                value: exerciseTypes,
                text: exerciseTypes,
              })),
            },
            options: {
              required: true,
              style: {
                formHeaderText: {
                  fontSize: 14,
                },
              },
            },
          },
          2: {
            type: types.select,
            key: `${CHILDREN_KEYS.form_8_exercise_habits.aloneOrOthers}`,
            content: {
              text: 'Alone Or With Others?',
              smallKey: 'Alone Or Others',
              items: AloneOrOthers.map(aloneOrOthers => ({
                value: aloneOrOthers,
                text: aloneOrOthers,
              })),
            },
            options: {
              required: true,
              style: {
                formHeaderText: {
                  fontSize: 14,
                },
              },
            },
          },
        },
      },
    },
    7: {
      type: types.formElements,
      key: FORM_KEYS.form_8_meditationHabits,
      content: {
        text:
          'Please answer the following questions about your meditation habits.',
        smallKey: 'Meditation Habits',
      },
      options: {
        required: true,
        childTypes: {
          0: {
            type: types.select,
            key: `${CHILDREN_KEYS.form_8_exercise_habits.meditationFrequency}`,
            content: {
              text: 'How often do you meditate?',
              smallKey: 'Meditation Frequency',
              items: Frequency.map(frequency => ({
                value: frequency,
                text: frequency,
              })),
            },
            options: {
              required: true,
              style: {
                formHeaderText: {
                  fontSize: 14,
                },
              },
            },
          },
          1: {
            type: types.select,
            key: `${CHILDREN_KEYS.form_8_meditation_habits.meditationTypes}`,
            content: {
              text: 'What type of meditation do you do?',
              smallKey: 'Meditation Type',
              items: MeditationTypes.map(meditationTypes => ({
                value: meditationTypes,
                text: meditationTypes,
              })),
            },
            options: {
              required: true,
              style: {
                formHeaderText: {
                  fontSize: 14,
                },
              },
            },
          },
          2: {
            type: types.select,
            key: `${CHILDREN_KEYS.form_8_meditation_habits.aloneOrOthers}`,
            content: {
              text: 'Alone Or With Others?',
              smallKey: 'Alone Or Others',
              items: AloneOrOthers.map(aloneOrOthers => ({
                value: aloneOrOthers,
                text: aloneOrOthers,
              })),
            },
            options: {
              required: true,
              style: {
                formHeaderText: {
                  fontSize: 14,
                },
              },
            },
          },
        },
      },
    },
  },
}

export default form
