// @flow
import { Platform }           from 'react-native'
import types, { answerTypes } from './types'
import type { Form }          from '../types/formTypes'
import {
  CommonGoalOutcomesArray,
  SatisfactionLevels,
  OneToTenScale,
  GoalType,
  OneToTenScale,
}                             from './content'

export const FORM_KEYS = {
  form_11_goal: 'form_11_goal',
  form_11_goal_satisfaction: 'form_11_goal_satisfaction',
  form_11_goal_time: 'form_11_goal_time',
}

export const CHILDREN_KEYS = {
  form_11_goal: {
    goalName: `${FORM_KEYS.form_11_goal}.goalName`,
    goalType: `${FORM_KEYS.form_11_goal}.goalType`,
    type: `${FORM_KEYS.form_11_goal}.type`,
  },
  form_11_goal_satisfaction: {
    satisfaction: `${FORM_KEYS.form_11_goal_satisfaction}.satisfaction`,
  },
  form_11_goal_time: {
    time: `${FORM_KEYS.form_11_goal_time}.time`,
  },
}

const form: Form = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
    0: {
      type: types.list,
      key: `${FORM_KEYS.form_11_goal}`,
      content: {
        text: `What were some of your top goals over the past 5 years? For each goal note their outcome according to the 7 CGO's.`,
        smallKey: 'Past Goals',
        listText: 'Past Goals',
      },
      options: {
        required: true,
        childTypes: {
          0: {
            type: types.string,
            key: `${CHILDREN_KEYS.form_11_goal.goalName}`,
            options: {
              placeHolder: 'Goal',
              default: '',
              required: true,
            },
          },
          1: {
            type: types.select,
            key: `${CHILDREN_KEYS.form_11_goal.type}`,
            content: {
              smallKey: 'Goal type',
              items: GoalType.map(type => {
                return {
                  value: type,
                  text: type,
                }
              }),
            },
            options: {
              default: GoalType[0],
            },
          },
          2: {
            type: types.select,
            key: `${CHILDREN_KEYS.form_11_goal.goalType}`,
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
        constraints: {
          min: 1,
          max: 10,
          errors: {
            min: 'Please list at least 1 goal',
            max: 'The max input for this exercise is 10 goals',
          },
        },
      },
    },
    1: {
      type: types.connected,
      key: `${FORM_KEYS.form_11_goal_satisfaction}`,
      content: {
        text: 'How far did you get with these goals(as a percentage)?',
        smallKey: 'Percentage goals',
      },
      options: {
        connect: {
          withElements: {
            text: 'Completion',
            key: `${FORM_KEYS.form_11_goal}`,
            childrenKeys: [
              `${CHILDREN_KEYS.form_11_goal.goalName}`,
              `${CHILDREN_KEYS.form_11_goal.goalType}`,
            ],
          },
          using: {
            type: types.select,
            key: `${CHILDREN_KEYS.form_11_goal_satisfaction.satisfaction}`,
            content: {
              smallKey: 'satisfactionLevel',
              items: OneToTenScale.map(value => {
                return {
                  value: value,
                  text: value,
                }
              }),
            },
            options: {
              default: OneToTenScale[0],
            },
          },
        },
        default: [],
        required: true,
      },
    },
    2: {
      type: types.connected,
      key: `${FORM_KEYS.form_11_goal_time}`,
      content: {
        text:
          'On a scale of 1-10, how much time and effort did you invest in this goal?',
        smallKey: 'Time and effort',
      },
      options: {
        connect: {
          withElements: {
            text: 'Time and effort',
            key: `${FORM_KEYS.form_11_goal}`,
            childrenKeys: [
              `${CHILDREN_KEYS.form_11_goal.goalName}`,
              `${CHILDREN_KEYS.form_11_goal.goalType}`,
            ],
          },
          using: {
            type: types.select,
            key: `${CHILDREN_KEYS.form_11_goal_time.time}`,
            content: {
              smallKey: 'timeAndEffortInvested',
              items: OneToTenScale.map(value => ({
                value: value,
                text: value,
              })),
            },
            options: {
              default: OneToTenScale[0],
            },
          },
        },
        default: [],
        required: true,
      },
    },
  },
}

export default form
