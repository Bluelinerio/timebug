
 // @flow
import { Platform }                        from 'react-native'
import types, { answerTypes } from 'react-native-forms/forms/types'
import type { Form }                       from 'react-native-forms/types/formTypes'
import { Priorities }                 from './content'
import { DISABLE }                    from 'react-native-forms/forms/constants'


export const FORM_KEYS = {
    form_29_goals: 'form_29_goals',
    form_29_world: 'form_29_world'
}

export const CHILDREN_KEYS = {
    form_29_goals: {
        thing: `${FORM_KEYS.form_29_goals}.goal`,
        priority: `${FORM_KEYS.form_29_goals}.priority`,
      },
  }


const form: Form = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
    0: {
        type: types.list,
        key: `${FORM_KEYS.form_29_world}`,
        content: {
          text: `What are your major spirituality goals over the next few years? How do you want to prioritize those items? `,
          smallKey: 'Spirituality Bucket',
          listText: 'Spirituality Goals'
        },
        options: {
          required: true,
          childTypes: {
            0:{
                type: types.string,
                key: `${CHILDREN_KEYS.form_29_goals.goal}`,
                content: {
                  smallKey: 'Goal',
                  label: 'Goal'
                },
                options: {
                  required:true,
                  placeHolder: 'Attend a weekend meditation retreat',
                  numberOfLines: 3,
                  multiline: true
                },
            },
            1:{
              type: types.select,
              key: `${CHILDREN_KEYS.form_29_goals.priority}`,
              content: {
                smallKey: 'Priority',
                label: 'How do you want to prioritize this item?',
                items: Priorities.map(priority => {
                    return {
                      value: priority,
                      text: priority,
                    }
                  }),
              },
              options: {
                required:true,
                  default:Priorities[1],
              },
            },
          },
        },
      },
    1: {
        type: types.string,
        key: `${FORM_KEYS.form_29_world}`,
        content: {
          text: `How do you want to help further spirituality in the world over the next 5 years?`,
          smallKey: 'Help world',
        },
        options: {
          required: true,
          multiline: true,
          numberOfLines: 4,
          style: {
            textInputContainerStyle: Platform.select({
              android: {},
              ios: {
                minHeight:80,
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
    },
}

export default form