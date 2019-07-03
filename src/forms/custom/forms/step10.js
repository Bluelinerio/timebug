// @flow
import { Platform }            from 'react-native'
import types, { answerTypes }  from './types'
import { LifeCategoriesArray } from './content'
import type { Form }           from '../types/formTypes'

export const FORM_KEYS = {
  form_10_personal_is: 'form_10_personal_is',
}

export const FORM_CHILDREN_KEYS = {
  form_10_personal_is: {
    name: `${FORM_KEYS.form_10_personal_is}.i_name`,
    explanation: `${FORM_KEYS.form_10_personal_is}.i_explanation`,
    strength: `${FORM_KEYS.form_10_personal_is}.i_strength`,
  },
}

const strengthLevels = Array(10).fill(0).map((val, index) => `${index + 1}`)

const form: Form = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
    0: {
      type: types.list,
      key: FORM_KEYS.form_10_personal_is,
      content: {
        text:
          "Enter up to 10 different I's and rate them from 1 to 10 according to how strong they are. What does each 'I' say about you?",
        smallKey: 'I',
        listText: 'I',
      },
      options: {
        childTypes: {
          0: {
            type: types.string,
            key: FORM_CHILDREN_KEYS.form_10_personal_is.name,
            options: {
              placeHolder: 'I...',
              default: '',
            },
          },
          1: {
            type: types.string,
            key: FORM_CHILDREN_KEYS.form_10_personal_is.explanation,
            options: {
              placeHolder: 'What does this I say about yourself?',
              default: '',
              multiline: true,
              required: true,
              numberOfLines: 4,
              style: {
                textInputContainerStyle: Platform.select({
                  android: {},
                  ios: {
                  },
                }),
                textInputStyle: Platform.select({
                  android: {},
                  ios: {  
                    minHeight:80,
                  },
                }),
              },
            },
          },
          2: {
            type: types.select,
            key: FORM_CHILDREN_KEYS.form_10_personal_is.strength,
            content: {
              smallKey: 'stength',
              items: strengthLevels.map(strength => ({
                value: strength,
                text: strength,
              })),
            },
            options: {
              default: strengthLevels[0],
            },
          },
        },
        default: [],
        required: true,
        constraints: {
          min: 1,
          max: 10,
          errors: {
            min: "Please list at least 1 I",
            max: "The max input for this exercise is 10 I's",
          },
        },
      },
    },
  },
}

export default form
