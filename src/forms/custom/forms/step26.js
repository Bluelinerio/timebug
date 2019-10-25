// @flow
import { Platform }                        from 'react-native'
import types, { answerTypes } from 'react-native-forms/forms/types'
import type { Form }                       from 'react-native-forms/types/formTypes'


export const FORM_KEYS = {
  form_26_improvements: 'form_26_improvements',
  form_26_others: 'form_26_others',
}


const form: Form = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
    0: {
        type: types.string,
        key: `${FORM_KEYS.form_26_improvements}`,
        content: {
          text: `In 5 years, what improvements do you want to make to your physical health? How will you accomplish this?`,
          smallKey: 'Health Improvements'
        },
        options: {
          required: true,
          multiline: true,
          numberOfLines: 4,
          placeHolder:'I would like to be a certified yoga teacher...'  
        },
      },
    1: {
        type: types.string,
        key: `${FORM_KEYS.form_26_others}`,
        content: {
          text: `How can you help people that you value in your life to improve their health? How much time do you estimate this taking?`,
          smallKey: 'Health Others'
        },
        options: {
          required: true,
          multiline: true,
          numberOfLines: 4,
          placeHolder:'My partner wants to stop eating sugar. I will join him in this to offer support...'  
        },
      },
  },
}

export default form
