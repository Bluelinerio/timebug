// @flow
import { Platform }                        from 'react-native'
import types, { actionTypes, answerTypes } from './types'
import type { Form }                       from '../types/formTypes'
import { CommonGoalOutcomes, CommonGoalOutcomesArray }    from './content'

export const FORM_KEYS = {
  form_7_goal: 'form_7_goal',
  form_7_goal_patterns: 'form_7_goal_patterns',
}

export const CHILDREN_KEYS = {
  form_7_goal: {
    goalName: `${FORM_KEYS.form_7_goal}.goalName`,
    goalType: `${FORM_KEYS.form_7_goal}.goalType`,
  },
}

const form: Form = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
    0: {
      type: types.list,
      key: `${FORM_KEYS.form_7_goal}`,
      content: {
        text:
          'What are 5 of your goals from the past 5 years? Classify what happened to them according to the 7 CGOs.',
        smallKey: "Past Goals",
        listText:"Past Goals",
      },
      options: {
        required: true,
        childTypes: {
          0: {
            type: types.string,
            key: `${CHILDREN_KEYS.form_7_goal.goalName}`,
            options: {
              placeHolder: "Goal",
              default: '',
              required: true,
            },
          },
          1: {
            type: types.select,
            key: `${CHILDREN_KEYS.form_7_goal.goalType}`,
            content: {
              smallKey: 'CGO',
              items: CommonGoalOutcomesArray.map(CommonGoalOutcomes => {
                return {
                  value: CommonGoalOutcomes.key,
                  text: CommonGoalOutcomes.text,
                }
              }),
            },
            options: {
              default: CommonGoalOutcomesArray[0].key,
            },
          },
        },
      },
    },
  },
}

export default form
