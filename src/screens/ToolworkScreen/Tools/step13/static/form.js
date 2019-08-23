// @flow
import types, { answerTypes } from 'react-native-forms/forms/types'
import type { Form }                       from 'react-native-forms/types/formTypes'
import { timeToCompleteGoal }    from '2020_forms/forms/content'
import { categoriesWithName } from '../context/CategoryContext'

// TODO: Rename second key from career to category
export const FORM_KEYS = {
  career_goals_form_goal: 'career_goals_form_goal',
  career_goals_form_category: 'career_goals_form_category',
  career_goals_form_how_long: 'career_goals_form_how_long',
  career_goals_form_steps: 'career_goals_form_steps',
}

export const CHILDREN_KEYS = {
  career_goals_form_steps: {
    step_to_life_goal: `${FORM_KEYS.career_goals_form_steps}.step_to_life_goal`,
  },
}

const form: Form = {
  type: types.form,
  answer: answerTypes.multiple,
  fields: {
    0: {
      type: types.string,
      key: FORM_KEYS.career_goals_form_goal,
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
      type: types.select,
      key: FORM_KEYS.career_goals_form_category,
      content: {
        text: "Select this goal's category",
        smallKey: 'Type of goal',
        listText: 'Type of goal',
        items: categoriesWithName.map(categories => ({
          value: categories.key,
          text: categories.name,
        })),
      },
      options: {
        default: categoriesWithName[0].key,
        required: true,
      },
    },
    2: {
      type: types.select,
      key: FORM_KEYS.career_goals_form_how_long,
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
      key: FORM_KEYS.career_goals_form_steps,
      content: {
        text: 'What are some steps you need to do to complete this goal?',
        listText: 'Steps',
        smallKey: 'Steps',
      },
      options: {
        childTypes: {
          0: {
            type: types.string,
            key: CHILDREN_KEYS.career_goals_form_steps.step_to_life_goal,
            options: {
              placeHolder: 'Step',
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
