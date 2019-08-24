// @flow
import { Platform }                        from 'react-native'
import types, { answerTypes } from 'react-native-forms/forms/types'
import type { Form }                       from 'react-native-forms/types/formTypes'


export const FORM_KEYS = {
  form_22_night_dreams: 'form_22_night_dreams',
  form_22_life__dreams: 'form_22_life_dreams'
}


const form: Form = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
     0: {
        type: types.string,
        key: `${FORM_KEYS.form_22_night_dreams}`,
        content: {
          smallKey: 'Night dream',
          text: 'What do you generally dream about? Do you notice any recurring themes?',

        },
        options: {
          placeHolder: 'I have a recurring dream in which I am unprepared for math class...',
          multiline: true,
          numberOfLines: 4,
          required: true
        },
      },
      1: {
        type: types.string,
        key: `${FORM_KEYS.form_22_life_dreams}`,
        content: {
          smallKey: 'Life dream',
        },
        options: {
          placeHolder: 'I dream about obtaining a PhD in physics...',
          multiline: true,
          numberOfLines: 4,
          required: true
        },
      },
  },
}

export default form
