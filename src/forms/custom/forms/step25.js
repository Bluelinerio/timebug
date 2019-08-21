// @flow
import { Platform }                        from 'react-native'
import types, { answerTypes } from 'react-native-forms/forms/types'
import type { Form }                       from 'react-native-forms/types/formTypes'


export const FORM_KEYS = {
  form_25_hobbies_more: 'form_25_hobbies_more',
  form_25_hobbies_less: 'form_25_hobbies_less',
  form_25_future_goals:'form_25_future_goals'

}

export const CHILDREN_KEYS = {

    form_25_hobbies_more: {
        hobby: `${FORM_KEYS.form_25_hobbies_more}.hobby`,
      },
      form_25_hobbies_less: {
      hobby: `${FORM_KEYS.form_25_hobbies_less}.hobby`,
      },
  }

const form: Form = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
    0: {
        type: types.list,
        key: `${FORM_KEYS.form_25_hobbies_more}`,
        content: {
          text: `What personal hobbies and activities do you want to spend more time on?`,
          smallKey: 'Hobbies more',
        },
        options: {
          required: true,
          childTypes: {
            0: {
              type: types.string,
              key: `${CHILDREN_KEYS.form_25_hobbies_more.hobby}`,
              content: {
                smallKey: 'Hobby more',
              },
              options: {
                placeHolder: 'Photography',
                required: true
              },
            },
          },
        },
      },
    1: {
        type: types.list,
        key: `${FORM_KEYS.form_25_hobbies_less}`,
        content: {
          text: `What personal hobbies and activities do you want to spend less time on?`,
          smallKey: 'Hobbies less',
        },
        options: {
          required: true,
          childTypes: {
            0: {
              type: types.string,
              key: `${CHILDREN_KEYS.form_25_hobbies_less.hobby}`,
              content: {
                smallKey: 'Hobby less',
              },
              options: {
                placeHolder: 'Reality television',
                required: true
              },
            },
          },
        },
      },
      2:{
          type: types.string,
          key: `${FORM_KEYS.form_25_future_goals}`,
          content: {
            text: `What new goals are on your bucket list for the future? How will you achieve these goals? How much time will it take?`,
            smallKey: 'Future Goals',
          },
          options: {
            required: true,
            placeHolder: `I've been playing guitar for 2 years now, I'd like to do a small concert...`,
            multiline: true,
            numberOfLines: 4,
          },
      },
  },
}

export default form
