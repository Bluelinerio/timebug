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

export const timeToCompleteGoal = [
  '1 day',
  '3 days',
  '1 week',
  '1 month',
  '2 months',
  '3 months',
  '6 months',
  'Less than 1 year',
  'More than 1 year'
]

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
        text: 'What is one of your recent life goals?'
      },
      options: {
        placeHolder: 'Input a recent life goal',
        multiline: true
      }
    },
    2: {
      type: types.select,
      key: 'areaOfLife',
      content: {
        text: 'Classify this goal according to one of the 7 goal types',
        items: GoalType.map(goal => ({
          value: goal,
          text: goal
        }))
      }
    },
    3: {
      type: types.select,
      key: 'areaOfLife',
      content: {
        text: 'How long do you think it will take to complete this goal?',
        items: timeToCompleteGoal.map(time => ({
          value: time,
          text: time
        }))
      }
    },
    4: {
      type: types.select,
      key: 'areaOfLife',
      content: {
        text: 'How often would you like to be reminded about this goal?',
        items: Object.keys(frequencies).map(key => ({
          value: key,
          text: frequencies[key]
        }))
      }
    },
    5: {
      type: types.list,
      content: {
        text: 'What are some steps you need to do to complete this goal?',
        listText: 'GoalStep: '
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
        }
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
