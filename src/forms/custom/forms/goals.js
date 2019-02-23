import types, { actionTypes, answerTypes } from './types'
import {
  GoalType,
  timeToCompleteGoal,
}                                          from './content'

export const STATUS = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  ARCHIVED: 'ARCHIVED',
  DELETED: 'DELETED',
}

export const FORM_KEYS = {
  form_5_recent_life_goals: 'form_5_recent_life_goals',
  form_5_areas_of_life: 'form_5_areas_of_life',
  form_5_how_long: 'form_5_how_long',
  form_5_checkin: 'form_5_checkin',
  form_5_steps: 'form_5_steps',
}

export const CHILDREN_KEYS = {
  form_5_steps: {
    step_to_life_goal: `${FORM_KEYS.form_5_steps}.step_to_life_goal`,
  },
}

const form5 = {
  type: types.form,
  answer: answerTypes.multiple,
  fields: {
    0: {
      type: types.string,
      key: FORM_KEYS.form_5_recent_life_goals,
      content: {
        text: 'To get started, enter a goal that you are looking to achieve.',
        smallKey: 'Goal',
        primary: true,
      },
      options: {
        placeHolder: 'Goal',
        multiline: true,
        default: '',
      },
    },
    1: {
      type: types.multipleSelect,
      key: FORM_KEYS.form_5_areas_of_life,
      content: {
        text: 'Classify this goal according to the 7 goal types',
        smallKey: 'Type of goal',
        listText: 'Type of goal',
        items: GoalType.map(goal => ({
          value: goal,
          text: goal,
          id: `${FORM_KEYS.form_5_areas_of_life}_${goal}`,
        })),
      },
      options: {
        default: [],
      },
    },
    2: {
      type: types.select,
      key: FORM_KEYS.form_5_how_long,
      content: {
        text: 'How long do you think it will take to complete this goal?',
        smallKey: 'ETC',
        items: Object.keys(timeToCompleteGoal).map(key => ({
          value: key,
          text: timeToCompleteGoal[key].text,
        })),
      },
      options: {
        default: timeToCompleteGoal.DAY.key,
      },
    },
    3: {
      type: types.list,
      key: FORM_KEYS.form_5_steps,
      content: {
        text: 'What are some steps you need to do to complete this goal?',
        listText: 'Steps',
        smallKey: 'Steps',
      },
      options: {
        childTypes: {
          0: {
            type: types.string,
            key: CHILDREN_KEYS.form_5_steps.step_to_life_goal,
            options: {
              placeHolder: 'Step',
            },
          },
        },
        default: [],
        required: true,
      },
    },
    4: {
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
            payload: 0,
          },
        },
      ],
    },
  },
}

export default form5
