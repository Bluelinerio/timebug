// @flow
import types, { answerTypes }  from './types'
import { LifeCategoriesArray } from './content'
import type { Form }           from '../types/formTypes'

export const FORM_KEYS = {
  form_4_board_of_advisors: 'form_4_board_of_advisors',
  form_4_support_groups: 'form_4_support_groups',
}

export const FORM_CHILDREN_KEYS = {
  [FORM_KEYS.form_4_board_of_advisors]: {
    advisor: `${FORM_KEYS.form_4_board_of_advisors}.advisor`,
    category: `${FORM_KEYS.form_4_board_of_advisors}.life_category`,
  },
  [FORM_KEYS.form_4_support_groups]: {
    group: `${FORM_KEYS.form_4_support_groups}.group`,
    category: `${FORM_KEYS.form_4_support_groups}.life_category`,
  },
}

const form: Form = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
    0: {
      type: types.list,
      key: FORM_KEYS.form_4_board_of_advisors,
      content: {
        text:
          'List up to 5 people for your Board of Advisors. What life category does she or he positively impact?',
        smallKey: 'Advisors',
        listText: 'Advisors',
      },
      options: {
        childTypes: {
          0: {
            type: types.string,
            key: FORM_CHILDREN_KEYS.form_4_board_of_advisors.advisor,
            options: {
              placeHolder: '',
              multiline: true,
              default: '',
            },
          },
          1: {
            type: types.select,
            key: FORM_CHILDREN_KEYS.form_4_board_of_advisors.category,
            content: {
              smallKey: 'category',
              items: LifeCategoriesArray.map(category => {
                return {
                  value: category,
                  text: category,
                }
              }),
            },
            options: {
              default: LifeCategoriesArray[0],
            },
          },
        },
        default: [],
        required: true,
        constraints: {
          min: 3,
          max: 10,
          errors: {
            min: 'Set up at least 3 advisors',
            max: 'A maximum of 10 advisors only, choose your team wisely!',
          },
        },
      },
    },
    1: {
      type: types.list,
      key: FORM_KEYS.form_4_support_groups,
      content: {
        text:
          'List any support groups or meetups that create positive energy for you, and which life category they belong to.',
        smallKey: 'Groups',
        listText: 'Groups',
      },
      options: {
        childTypes: {
          0: {
            type: types.string,
            key: FORM_CHILDREN_KEYS.form_4_support_groups.group,
            options: {
              placeHolder: '',
              multiline: true,
              default: '',
            },
          },
          1: {
            type: types.select,
            key: FORM_CHILDREN_KEYS.form_4_support_groups.category,
            content: {
              smallKey: 'category',
              items: LifeCategoriesArray.map(category => {
                return {
                  value: category,
                  text: category,
                }
              }),
            },
            options: {
              default: LifeCategoriesArray[0],
            },
          },
        },
        default: [],
        required: true,
        constraints: {
          min: 1,
          max: 3,
          errors: {
            min: 'Mention at least 1 group',
            max: 'Set up a maximum of 3 groups, choose the most relevant ones',
          },
        },
      },
    },
  },
}

export default form
