// @flow
import { Platform } from 'react-native'
import types, { answerTypes } from 'react-native-forms/forms/types'
import type { Form } from 'react-native-forms/types/formTypes'
import { CommonGoalOutcomesArray } from './content'

export const FORM_KEYS = {
  form_12_major_life_events: 'form_12_major_life_events',
  form_12_major_life_events_influence: 'form_12_major_life_events_influence',
}

export const CHILDREN_KEYS = {
  form_12_major_life_events: {
    event: `${FORM_KEYS.form_12_major_life_events}.event`,
  },
}

const form: Form = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
    0: {
      type: types.list,
      key: `${FORM_KEYS.form_12_major_life_events}`,
      content: {
        text:
          'What are 5 of your Major Life Events (MLEs) from the past 5 years',
        smallKey: 'MLEs',
        listText: 'Major Life Events',
      },
      options: {
        required: true,
        childTypes: {
          0: {
            type: types.string,
            key: `${CHILDREN_KEYS.form_12_major_life_events.event}`,
            options: {
              placeHolder: 'Graduated from college . . .',
              default: '',
              required: true,
            },
          },
        },
        constraints: {
          min: 3,
          max: 10,
          errors: {
            min: 'Please list at least 3 MLEs',
            max: 'The max input for this exercise is 10 MLEs',
          },
        },
      },
    },
    1: {
      type: types.string,
      key: `${FORM_KEYS.form_12_major_life_events_influence}`,
      content: {
        text:
          'How did those MLEs influence - positively and negatively - your goals and time over the past 5 years?',
        smallKey: 'MLEs influence',
      },
      options: {
        placeHolder:
          'My character and peace of mind were strengthened after each MLE. . .',
        default: '',
        multiline: true,
        required: true,
        numberOfLines: 8,
        style: {
          textInputContainerStyle: Platform.select({
            android: {},
            ios: {},
          }),
          textInputStyle: Platform.select({
            android: {},
            ios: {
              minHeight: 100,
            },
          }),
        },
      },
    },
  },
}

export default form
