import types, { actionTypes, answerTypes } from './types'
import {                                   frequencies } from '../../../services/checkins'

export const AreaOfLife = [
  'Finances',
  'Environment',
  'Aims & Hobbies',
  'Career',
  'Relationships',
  'Health & Wellness',
  'Spirituality',
]

export const GoalType = [
  'Energy & Time',
  'Achievement & Skills',
  'Health Indicators',
  'Internal Qualities',
  'Environment',
  'Material Outcomes',
  'Relationship Quality',
]

export const translateFrequencies = (frequency: string) =>
  frequencies[frequency]

export const timeToCompleteGoal = [
  'A day',
  'A week',
  'A month',
  '6 months',
  'A year',
]

export const STATUS = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  ARCHIVED: 'ARCHIVED',
  DELETED: 'DELETED',
}

const form5 = {
  type: types.form,
  answer: answerTypes.multiple,
  fields: {
    0: {
      type: types.label,
      key: 'form_5_title',
      content: {
        text: `Let's set up some goals`,
      },
      options: {},
    },
    1: {
      type: types.string,
      key: 'form_5_recent_life_goals',
      content: {
        text: 'What is one of your recent life goals?',
        smallKey: 'Goal',
        primary: true,
      },
      options: {
        placeHolder: 'Input a recent life goal',
        multiline: true,
        default: '',
      },
    },
    2: {
      type: types.multipleSelect,
      key: 'form_5_areas_of_life',
      content: {
        text: 'Classify this goal according to the 7 goal types',
        smallKey: 'Type of goal',
        listText: 'Type of goal',
        items: GoalType.map((goal, index) => ({
          value: goal,
          text: goal,
          id: `form_5_areas_of_life${index}`,
        })),
      },
      options: {
        default: [],
      },
    },
    3: {
      type: types.select,
      key: 'form_5_how_long',
      content: {
        text: 'How long do you think it will take to complete this goal?',
        smallKey: 'ETA',
        items: timeToCompleteGoal.map(time => ({
          value: time,
          text: time,
        })),
      },
      options: {
        default: timeToCompleteGoal[0],
      },
    },
    4: {
      type: types.select,
      key: 'form_5_checkin',
      content: {
        text: 'How often would you like to be reminded about this goal?',
        smallKey: 'Check-in',
        items: Object.keys(frequencies).map(key => ({
          value: key,
          text: frequencies[key],
        })),
        translation: translateFrequencies,
      },
      options: {
        default: Object.keys(frequencies)[0],
      },
    },
    5: {
      type: types.list,
      key: 'form_5_steps',
      content: {
        text: 'What are some steps you need to do to complete this goal?',
        listText: 'Steps',
        smallKey: 'Steps',
      },
      options: {
        childTypes: {
          0: {
            type: types.string,
            key: 'form_5_steps.step_to_life_goal',
            options: {
              placeHolder: 'Step',
            },
          },
        },
        default: [],
      },
    },
    6: {
      type: types.button,
      content: {
        text: 'Do you wish to add more goals?',
      },
      actions: [
        {
          text: 'Yes',
          key: 'goal_yes',
          action: {
            type: actionTypes.GO_TO,
            payload: 1,
          },
        },
      ],
    },
  },
}

export default form5
