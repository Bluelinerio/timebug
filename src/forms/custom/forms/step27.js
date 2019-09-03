// @flow
import { Platform }                        from 'react-native'
import types, { answerTypes } from 'react-native-forms/forms/types'
import type { Form }                       from 'react-native-forms/types/formTypes'
import { Emotions }                 from './content'
import { DISABLE }                    from 'react-native-forms/forms/constants'


export const FORM_KEYS = {
    form_27_relationship_to_self: 'form_27_relationship_to_self',
    form_27_emotions: 'form_27_emotions',
    form_27_give_to_others: 'form_27_give_to_others',
    form_27_receive_from_others: 'form_27_receive_from_others',
}

export const CHILDREN_KEYS = {
    form_27_emotions: {
      emotion: `${FORM_KEYS.form_27_emotions}.emotion`,
    },
    form_27_give_to_others: {
        person: `${FORM_KEYS.form_27_give_to_others}.person`,
        thing: `${FORM_KEYS.form_27_give_to_others}.thing`,
      },
      form_27_receive_from_others: {
        person: `${FORM_KEYS.form_27_receive_from_others}.person`,
        thing: `${FORM_KEYS.form_27_receive_from_others}.thing`,
      },
  }


const form: Form = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
    0: {
        type: types.string,
        key: `${FORM_KEYS.form_27_relationship_to_self}`,
        content: {
          text: `What do you want for your relationship to self in 5 years?`,
          smallKey: 'Health Improvements'
        },
        options: {
          required: true,
          multiline: true,
          numberOfLines: 4,
          placeHolder:'I would like to adopt more compassion towards others, and myself, and really understand the boundaries between the two...'  
        },
      },
    1: {
        type: types.list,
        key: `${FORM_KEYS.form_27_emotions}`,
        content: {
          text: `What emotions pop up when you think about your relationship to self over the next 5 years?`,
          smallKey: 'Emotions',
          listText: 'Emotions'
        },
        options: {
          required: true,
          childTypes: {
              0 :{
                  type: types.select,
                  key: `${CHILDREN_KEYS.form_27_emotions.emotion}`,
                  content: {
                    smallKey: 'Emotion',
                    items: Emotions.map(emotion => {
                      return {
                        value: emotion,
                        text: emotion,
                      }
                    }),
                  },
                  options: {
                    default: Emotions[0],
                    repeats: DISABLE,
                  },
              },
          },
        },
      },
      2: {
        type: types.list,
        key: `${FORM_KEYS.form_27_give_to_others}`,
        content: {
          text: `What do you want to give to others?`,
          smallKey: 'Give',
          listText: 'What I want to give:'
        },
        options: {
          required: true,
          childTypes: {
              0:{
                  type: types.string,
                  key: `${CHILDREN_KEYS.form_27_give_to_others.person}`,
                  content: {
                    smallKey: 'Person',
                    label: 'Person'
                  },
                  options: {
                    required:true,
                    placeHolder: 'My mother'

                  },
              },
              1:{
                type: types.string,
                key: `${CHILDREN_KEYS.form_27_give_to_others.thing}`,
                content: {
                  smallKey: 'To Give',
                  label: 'What do you want to give?'
                },
                options: {
                  required:true,
                  placeHolder: 'More emotional support'
                },
            },
          },
        },
      },
      3: {
        type: types.list,
        key: `${FORM_KEYS.form_27_receive_from_others}`,
        content: {
          text: `What do you want to give receive from others?`,
          smallKey: 'Give',
          listText: 'What I want to receive:'
        },
        options: {
          required: true,
          childTypes: {
              0:{
                  type: types.string,
                  key: `${CHILDREN_KEYS.form_27_receive_from_others.person}`,
                  content: {
                    smallKey: 'Person',
                    label: 'Person'
                  },
                  options: {
                    required:true,
                    placeHolder:'My sister'
                  },
              },
              1:{
                type: types.string,
                key: `${CHILDREN_KEYS.form_27_receive_from_others.thing}`,
                content: {
                  smallKey: 'To Receive',
                  label: 'What do you want to receive?'
                },
                options: {
                  required:true,
                  placeHolder: 'More personal space'
                },
            },
          },
        },
      },
  },
}

export default form
