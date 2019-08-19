// @flow
import { Platform }                        from 'react-native'
import types, { actionTypes, answerTypes } from 'react-native-forms/forms/types'
import type { Form }                       from 'react-native-forms/types/formTypes'
import { SpiritualViews } from './content'

export const FORM_KEYS = {
  form_19_spirituality: 'form_19_spirituality',
  form_19_spirituality_change: 'form_19_spirituality_change',

}


const form: Form = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
    0: {
        type: types.select,
        key: `${FORM_KEYS.form_19_spirituality}`,
        content: {
            text: 'How would you describe your relationship to spirituality?',
            items: SpiritualViews.map(spiritualView => ({
                text: spiritualView,
                value: spiritualView,
              })),
        },
        options: {
          required: true,
          default: SpiritualViews[0],
        },
      },
    1: {
      type: types.string,
      key: `${FORM_KEYS.form_19_spirituality_change}`,
      content: {
        text: 'Has your relationship to spirituality changed over the past 5 years? Did you notice any difference in your internal qualities as a result?',
        smallKey: 'Spirituality Relationship',
      },
      options: {
        required: true,

            placeHolder: 'e.g. I am much more patient since I started meditating daily...',
            default: '',
            multiline: true,
            required: true,
            numberOfLines: 4,
            style: {
              textInputContainerStyle: Platform.select({
                android: {},
                ios: {
                }, //Fill with what's needed
              }),
              textInputStyle: Platform.select({
                android: {},
                ios: {  
                  minHeight:80,
                }, //Fill with what's needed
              }),
            },
      },
    },
  },
}

export default form
