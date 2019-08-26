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
      type: types.string,
      key: `${FORM_KEYS.form_24_five_year_amount}`,
      content: {
        smallKey: 'Amount',
        text: 'Five years from now, how much money do you want to have in the bank?',
      },
      options: {
        required: true,
        placeHolder: '$1,000,000'
      },
    },
            1: {
              type: types.string,
              key: `${FORM_KEYS.form_24_five_year_plan}`,
              content: {
              text: 'What steps are needed to get there?',
              smallKey: 'Plan',
              },
              options: {
                required: true,
                multiline: true,
                numberOfLines: 4,
                placeHolder: 'e.g. I will need to increase my salary by 20k annually, and invest the extra money wisely...'
              }
            },
      2: {
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
