import types, { actionTypes } from './types'
import { frequencies } from '../../../services/checkins'

export const AreaOfLife = [
  'Finances',
  'Environment',
  'Aims & Hobbies',
  'Career',
  'Relationships',
  'Health & Wellness',
  'Spirituality'
]

export const GoalType = [
  'Energy & Time',
  'Achievement & Skills',
  'Health Indicators',
  'Internal Qualities',
  'Environment',
  'Material Outcomes',
  'Relationship Quality'
]

export const translateFrequencies = (frequency: string) => frequencies[frequency]

export const timeToCompleteGoal = [
  'A day',
  'A week',
  'A month',
  '6 months',
  'A year'
]

export const STATUS = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  ARCHIVED: 'ARCHIVED',
  DELETED: 'DELETED'
}

const form5 = {
  type: types.form,
  fields: {
    0: {
      type: types.label,
      key: 'goalTitle',
      content: {
        text: `Let's set up some goals`
      },
      options: {}
    },
    1: {
      type: types.string,
      key: 'recentLifeGoals',
      content: {
        text: 'What is one of your recent life goals?',
        smallKey: 'Goal',
        primary: true
      },
      options: {
        placeHolder: 'Input a recent life goal',
        multiline: true,
        default: ''
      }
    },
    2: {
      type: types.select,
      key: 'areaOfLife',
      content: {
        text: 'Classify this goal according to one of the 7 goal types',
        smallKey: 'Type of goal',
        items: GoalType.map(goal => ({
          value: goal,
          text: goal
        }))
      },
      options: {
        default: GoalType[0]
      }
    },
    3: {
      type: types.select,
      key: 'areaOfLife',
      content: {
        text: 'How long do you think it will take to complete this goal?',
        smallKey: 'ETA',
        items: timeToCompleteGoal.map(time => ({
          value: time,
          text: time
        }))
      },
      options: {
        default: timeToCompleteGoal[0]
      }
    },
    4: {
      type: types.select,
      key: 'areaOfLife',
      content: {
        text: 'How often would you like to be reminded about this goal?',
        smallKey: 'Check-in',
        items: Object.keys(frequencies).map(key => ({
          value: key,
          text: frequencies[key]
        })),
        translation: translateFrequencies
      },
      options: {
        default: Object.keys(frequencies)[0]
      }
    },
    5: {
      type: types.list,
      content: {
        text: 'What are some steps you need to do to complete this goal?',
        listText: 'Steps',
        smallKey: 'Steps'
      },
      options: {
        childTypes: {
          0: {
            type: types.string,
            key: 'stepToLifeGoal',
            options: {
              placeHolder: 'Step'
            }
          }
        },
        default: []
      }
    },
    6: {
      type: types.button,
      content: {
        text: 'Do you wish to add more goals?'
      },
      actions: [
        {
          text: 'Yes',
          key: 'goal_yes',
          action: {
            type: actionTypes.GO_TO,
            payload: 1
          }
        }
      ]
    }
  }
}

export default form5
