// @flow
import { Platform }                        from 'react-native'
import types, { answerTypes } from 'react-native-forms/forms/types'
import type { Form }                       from 'react-native-forms/types/formTypes'


export const FORM_KEYS = {
  form_21_ownership: 'form_21_ownership',
  form_21_seeds: 'form_21_seeds'
}

export const CHILDREN_KEYS = {
    form_21_seeds: {
      seed: `${FORM_KEYS.form_21_seeds}.seed`,
      person: `${FORM_KEYS.form_21_seeds}.person`,
    },
  }

const form: Form = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
    0: {
        type: types.switch,
        key: `${FORM_KEYS.form_21_ownership}`,
        content: {
          text:
            'Are you committed to taking ownership of your life garden from this point onward?',
        smallKey: "ownership",
        },
        options: {
          required: true,
        },
      },
    1: {
        type: types.list,
        key: `${FORM_KEYS.form_21_seeds}`,
        content: {
          text: `Imagine different areas of your garden. Who planted most of the seeds. You or others?`,
          smallKey: 'Seeds',
          listText: 'Seeds',
        },
        options: {
          required: true,
          childTypes: {
            0: {
              type: types.string,
              key: `${CHILDREN_KEYS.form_21_seeds.seed}`,
              content: {
                smallKey: 'seed',
              },
              options: {
                placeHolder: 'e.g. My love of being in nature',
                multiline: true,
                numberOfLines: 2,
                required: true
              },
            },
            1: {
                type: types.string,
                key: `${CHILDREN_KEYS.form_21_seeds.person}`,
                content: {
                  smallKey: 'person',
                },
                options: {
                  placeHolder: 'e.g. My father',
                  required: true
                },
              },
          },
        },
      },
  },
}

export default form
