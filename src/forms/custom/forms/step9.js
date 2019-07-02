// @flow
import { Platform }            from 'react-native'
import types, { answerTypes }  from './types'
import { LifeCategoriesArray } from './content'
import type { Form }           from '../types/formTypes'

export const FORM_KEYS = {
  form_9_role_models: 'form_9_role_models',
}

export const FORM_CHILDREN_KEYS = {
  [FORM_KEYS.form_9_role_models]: {
    model: `${FORM_KEYS.form_9_role_models}.model`,
    category: `${FORM_KEYS.form_9_role_models}.life_category`,
    how_well_known: `${FORM_KEYS.form_9_role_models}.how_well_known`,
  },
}

const form: Form = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
    0: {
      type: types.list,
      key: FORM_KEYS.form_9_role_models,
      content: {
        text:
          'List up to 10 people that are your role models. What life category does she or he primarily influence?',
        smallKey: 'Role Models',
        listText: 'Role Models ',
      },
      options: {
        childTypes: {
          0: {
            type: types.string,
            key: FORM_CHILDREN_KEYS.form_9_role_models.model,
            options: {
              placeHolder: 'Role Model',
              default: '',
            },
          },
          1: {
            type: types.select,
            key: FORM_CHILDREN_KEYS.form_9_role_models.category,
            content: {
              smallKey: 'category',
              items: LifeCategoriesArray.map(category => {
                return {
                  value: category.key,
                  text: category.text,
                }
              }),
            },
            options: {
              default: LifeCategoriesArray[0].key,
            },
          },
          2: {
            // TODO: Turn into yes/no input
            type: types.switch,
            key: FORM_CHILDREN_KEYS.form_9_role_models.how_well_known,
            options: {
              default: false,
              label: 'Do you know this role model personally?',
              listText: 'Personally known:',
            },
          },
        },
        default: [],
        required: true,
        constraints: {
          min: 1,
          max: 10,
          errors: {
            min: 'Please list at least 1 role models',
            max: 'The max input for this exercise is 10 role models',
          },
        },
      },
    },
  },
}

export default form
