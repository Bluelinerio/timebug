// @flow
import { Platform }                from 'react-native'
import types, { answerTypes, setTypes }      from './types'
import type { Form }               from '../types/formTypes'
import { EnergyLevels, ExerciseTypes,ExerciseFrequency,AloneOrOthers }   from './content'



export const FORM_KEYS = {
  form_8_energy_levels_weekday_morning: 'form_8_energy_levels_weekday_morning',
  form_8_energy_levels_weekday_afternoon: 'form_8_energy_levels_weekday_afternoon',
  form_8_energy_levels_weekday_evening: 'form_8_energy_levels_weekday_evening',
  form_8_energy_levels_weekend_morning: 'form_8_energy_levels_weekend_afternoon',
  form_8_energy_levels_weekend_afternoon: 'form_8_energy_levels_weekend_afternoon',
  form_8_energy_levels_weekend_evening: 'form_8_energy_levels_weekend_evening',
  form_8_exercise_habits: 'form_8_exercise_habits',

}

export const CHILDREN_KEYS = {
  form_8_energy_levels_weekday_morning: {
    weekdayMorningPhysical: `${FORM_KEYS.form_8_energy_levels_weekday_morning}.weekdayMorningPhysical`,
    weekdayMorningEmotional: `${FORM_KEYS.form_8_energy_levels_weekday_morning}.weekdayMorningEmotional`,
    weekdayMorningSpiritual: `${FORM_KEYS.form_8_energy_levels_weekday_morning}.weekdayMorningSpiritual`,
  },
  form_8_energy_levels_weekday_afternoon: {
    weekdayAfternoonPhysical: `${FORM_KEYS.form_8_energy_levels_weekday_afternoon}.weekdayAfternoonPhysical`,
    weekdayAfternoonEmotional: `${FORM_KEYS.form_8_energy_levels_weekday_afternoon}.weekdayAfternoonEmotional`,
    weekdayAfternoonSpiritual: `${FORM_KEYS.form_8_energy_levels_weekday_afternoon}.weekdayAfternoonSpiritual`,
  },
  form_8_energy_levels_weekday_evening: {
    weekdayEveningPhysical: `${FORM_KEYS.form_8_energy_levels_weekday_evening}.weekdayEveningPhysical`,
    weekdayEveningEmotional: `${FORM_KEYS.form_8_energy_levels_weekday_evening}.weekdayEveningEmotional`,
    weekdayEveningSpiritual: `${FORM_KEYS.form_8_energy_levels_weekday_evening}.weekdayEveningSpiritual`,
  },
  form_8_energy_levels_weekend_morning: {
    weekendMorningPhysical: `${FORM_KEYS.form_8_energy_levels_weekend_morning}.weekendMorningPhysical`,
    weekendMorningEmotional: `${FORM_KEYS.form_8_energy_levels_weekend_morning}.weekendMorningEmotional`,
    weekendMorningSpiritual: `${FORM_KEYS.form_8_energy_levels_weekend_morning}.weekendMorningSpiritual`,
  },
  form_8_energy_levels_weekend_afternoon: {
    weekendAfternoonPhysical: `${FORM_KEYS.form_8_energy_levels_weekend_afternoon}.weekendAfternoonPhysical`,
    weekendAfternoonEmotional: `${FORM_KEYS.form_8_energy_levels_weekend_afternoon}.weekendAfternoonEmotional`,
    weekendAfternoonSpiritual: `${FORM_KEYS.form_8_energy_levels_weekend_afternoon}.weekendAfternoonSpiritual`,
  },
  form_8_energy_levels_weekend_evening: {
    weekendEveningPhysical: `${FORM_KEYS.form_8_energy_levels_weekend_evening}.weekendEveningPhysical`,
    weekendEveningEmotional: `${FORM_KEYS.form_8_energy_levels_weekend_evening}.weekendEveningEmotional`,
    weekendEveningSpiritual: `${FORM_KEYS.form_8_energy_levels_weekend_evening}.weekendEveningSpiritual`,
  },
  form_8_exercise_habits: {
    exerciseFrequency: `${FORM_KEYS.form_8_exercise_habits}.exerciseFrequency`,
    exerciseTypes: `${FORM_KEYS.form_8_exercise_habits}.exerciseTypes`,
    soloOrGroup: `${FORM_KEYS.form_8_exercise_habits}.soloOrGroup`


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
          subtype: {
            type: setTypes.slider,
          },
          subtypeOptions: {
            min: 0,
            max: 10,
            step: 1
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
          subtype: {
            type: setTypes.slider,
          },
          subtypeOptions: {
            min: 0,
            max: 10,
            step: 1
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
          subtype: {
            type: setTypes.slider,
          },
          subtypeOptions: {
            min: 0,
            max: 10,
            step: 1
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
          subtype: {
            type: setTypes.slider,
          },
          subtypeOptions: {
            min: 0,
            max: 10,
            step: 1
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
          subtype: {
            type: setTypes.slider,
          },
          subtypeOptions: {
            min: 0,
            max: 10,
            step: 1
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
          subtype: {
            type: setTypes.slider,
          },
          subtypeOptions: {
            min: 0,
            max: 10,
            step: 1
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
          text: 'Please answer the following questions about your exercise habits.',
          smallKey: 'Exercise Habits',
        },
        options: {
          required: true,
          childTypes: {
            0: {
              type: types.select,
              key: `${CHILDREN_KEYS.form_8_exercise_habits.exerciseFrequency}`,
              title: 'How often do you exercise?',
              content: {
                smallKey: 'Exercise Frequency',
                items: ExerciseFrequency.map(exerciseFrequency => ({
                  value: exerciseFrequency,
                  text: exerciseFrequency,
                })),
              },
              options: {
                required: true,
              },
            },
            1: {
              type: types.select,
              key: `${CHILDREN_KEYS.form_8_exercise_habits.exerciseTypes}`,
              title: 'What type of exercise do you do?',
              content: {
                smallKey: 'Exercise Type',
                items: ExerciseTypes.map(exerciseTypes => ({
                  value: exerciseTypes,
                  text: exerciseTypes,
                })),
              },
              options: {
                required: true,
              },
            },
            2: {
              type: types.select,
              key: `${CHILDREN_KEYS.form_8_exercise_habits.aloneOrOthers}`,
              title: 'Alone Or With Others?',
              content: {
                smallKey: 'Alone Or Others',
                items: AloneOrOthers.map(aloneOrOthers => ({
                  value: aloneOrOthers,
                  text: aloneOrOthers,
                })),
              },
              options: {
                required: true,
              },
            },
          },
        },
        },
      }
  }

export default form
