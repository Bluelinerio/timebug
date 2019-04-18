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
    'form_8_energy_levels_weekend_morning',
  form_8_energy_levels_weekend_afternoon:
    'form_8_energy_levels_weekend_afternoon',
  form_8_energy_levels_weekend_evening: 'form_8_energy_levels_weekend_evening',
  form_8_exercise_habits: 'form_8_exercise_habits',
  form_8_meditation_habits: 'form_8_meditation_habits',
}

export const CHILDREN_KEYS = {
  form_8_energy_levels_weekday_morning: {
    PhysicalEnergy: `${
      FORM_KEYS.form_8_energy_levels_weekday_morning
    }.PhysicalEnergy`,
    EmotionalEnergy: `${
      FORM_KEYS.form_8_energy_levels_weekday_morning
    }.EmotionalEnergy`,
    SpiritualEnergy: `${
      FORM_KEYS.form_8_energy_levels_weekday_morning
    }.SpiritualEnergy`,
  },
  form_8_energy_levels_weekday_afternoon: {
    PhysicalEnergy: `${
      FORM_KEYS.form_8_energy_levels_weekday_afternoon
    }.PhysicalEnergy`,
    EmotionalEnergy: `${
      FORM_KEYS.form_8_energy_levels_weekday_afternoon
    }.EmotionalEnergy`,
    SpiritualEnergy: `${
      FORM_KEYS.form_8_energy_levels_weekday_afternoon
    }.SpiritualEnergy`,
  },
  form_8_energy_levels_weekday_evening: {
    PhysicalEnergy: `${
      FORM_KEYS.form_8_energy_levels_weekday_evening
    }.PhysicalEnergy`,
    EmotionalEnergy: `${
      FORM_KEYS.form_8_energy_levels_weekday_evening
    }.EmotionalEnergy`,
    SpiritualEnergy: `${
      FORM_KEYS.form_8_energy_levels_weekday_evening
    }.SpiritualEnergy`,
  },
  form_8_energy_levels_weekend_morning: {
    PhysicalEnergy: `${
      FORM_KEYS.form_8_energy_levels_weekend_morning
    }.PhysicalEnergy`,
    EmotionalEnergy: `${
      FORM_KEYS.form_8_energy_levels_weekend_morning
    }.EmotionalEnergy`,
    SpiritualEnergy: `${
      FORM_KEYS.form_8_energy_levels_weekend_morning
    }.SpiritualEnergy`,
  },
  form_8_energy_levels_weekend_afternoon: {
    PhysicalEnergy: `${
      FORM_KEYS.form_8_energy_levels_weekend_afternoon
    }.PhysicalEnergy`,
    EmotionalEnergy: `${
      FORM_KEYS.form_8_energy_levels_weekend_afternoon
    }.EmotionalEnergy`,
    SpiritualEnergy: `${
      FORM_KEYS.form_8_energy_levels_weekend_afternoon
    }.SpiritualEnergy`,
  },
  form_8_energy_levels_weekend_evening: {
    PhysicalEnergy: `${
      FORM_KEYS.form_8_energy_levels_weekend_evening
    }.PhysicalEnergy`,
    EmotionalEnergy: `${
      FORM_KEYS.form_8_energy_levels_weekend_evening
    }.EmotionalEnergy`,
    SpiritualEnergy: `${
      FORM_KEYS.form_8_energy_levels_weekend_evening
    }.SpiritualEnergy`,
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
      key: FORM_KEYS.form_8_exercise_habits,
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
              required: false,
              default: Frequency[0],
              style: {
                formHeaderText: {
                  marginTop: 16,
                  fontSize: 14,
                },
                pickerContentContainer: {
                  marginTop: 0,
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
              required: false,
              default: ExerciseTypes[0],
              style: {
                formHeaderText: {
                  marginTop: 16,
                  fontSize: 14,
                },
                pickerContentContainer: {
                  marginTop: 0,
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
              required: false,
              default: AloneOrOthers[0],
              style: {
                formHeaderText: {
                  marginTop: 16,
                  fontSize: 14,
                },
                pickerContentContainer: {
                  marginTop: 0,
                },
              },
            },
          },
        },
      },
    },
    7: {
      type: types.formElements,
      key: FORM_KEYS.form_8_meditation_habits,
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
            key: `${CHILDREN_KEYS.form_8_meditation_habits.meditationFrequency}`,
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
              default: Frequency[0],
              style: {
                formHeaderText: {
                  marginTop: 16,
                  fontSize: 14,
                },
                pickerContentContainer: {
                  marginTop: 0,
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
              default: MeditationTypes[0],
              style: {
                formHeaderText: {
                  marginTop: 16,
                  fontSize: 14,
                },
                pickerContentContainer: {
                  marginTop: 0,
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
              default: AloneOrOthers[0],
              style: {
                formHeaderText: {
                  marginTop: 16,
                  fontSize: 14,
                },
                pickerContentContainer: {
                  marginTop: 0,
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
