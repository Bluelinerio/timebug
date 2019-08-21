// @flow
import { Platform }                        from 'react-native'
import types, { answerTypes } from 'react-native-forms/forms/types'
import type { Form }                       from 'react-native-forms/types/formTypes'


export const FORM_KEYS = {
  form_24_five_year_plan: 'form_24_five_year_plan',
  form_24_difference: 'form_24_difference',
}

export const CHILDREN_KEYS = {

    form_24_five_year_plan: {
        amount: `${FORM_KEYS.form_24_five_year_plan}.amount`,
        plan: `${FORM_KEYS.form_24_five_year_plan}.plan`,
      },
  }
const form: Form = {
  type: types.form,
  answer: answerTypes.multiple,
  fields: {
     0: {
        type: types.formElements,
        key: `${FORM_KEYS.form_24_five_year_plan}`,
        content: {
          smallKey: 'Five year plan',
          text: 'Five years from now, how much money do you want to have in the bank? What do you need to do to make that happen?',
        },
        options: {
          required: true,
          childTypes: {
              0: {
                type: types.string,
                key: `${CHILDREN_KEYS.form_24_five_year_plan.amount}`,
                content: {
                  smallKey: 'Amount',
                },
                options: {
                    required: true,
                  placeHolder: '$1,000,000',
                },
              },
              1: {
                type: types.list,
                key: `${CHILDREN_KEYS.form_24_five_year_plan.plan}`,
                content: {
                label: 'What steps are needed to get there?',
                smallKey: 'Plan',
                listText: 'Plan',
                },
            options: {
                childTypes: {
                    0: {
                     type: types.string,
            options: {
              placeHolder: 'I will need to invest in...',
              required: true,
            },
          },
        },

      },
              },
          },
        },
      },
      1: {
        type: types.string,
        key: `${FORM_KEYS.form_24_difference}`,
        content: {
          smallKey: 'Difference',
          text: 'How will your life be different 5 years from now, as a result of the achievement of these money goals?',
        },
        options: {
          placeHolder: 'I will work for myself and thus experience a greater sense of freedom...',
          multiline: true,
          numberOfLines: 4,
          required: true
        },
      },
  },
}

export default form
