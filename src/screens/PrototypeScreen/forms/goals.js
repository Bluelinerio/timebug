import types, { actionTypes } from './types'

export const AreaOfLife = [
  'Finances',
  'Environment',
  'Aims & Hobbies',
  'Career',
  'Relationships',
  'Health & Wellness',
  'Spirituality'
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
        text: 'What are some of your recent life goals?'
      },
      options: {
        placeHolder: 'Input your recent life goals',
        multiline: true
      }
    },
    2: {
      type: types.select,
      key: 'areaOfLife',
      content: {
        text: 'What are of life does this goal belong to ?',
        items: AreaOfLife.map(area => ({
          value: area,
          text: area
        }))
      },
      options: {
        placeHolder: 'Input your recent life goals',
        multiline: true
      }
    },
    3: {
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
