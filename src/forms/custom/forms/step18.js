// @flow
import { Platform }                        from 'react-native'
import types, { actionTypes, answerTypes } from 'react-native-forms/forms/types'
import type { Form }                       from 'react-native-forms/types/formTypes'

export const FORM_KEYS = {
  form_18_environment_survey: 'form_18_environment_survey',
  form_18_place_and_environment_goals: 'form_18_place_and_environment_goals',
}

export const CHILDREN_KEYS = {
    form_18_environment_survey: {
    happy: `${FORM_KEYS.form_18_environment_survey}.happy`,
    connect: `${FORM_KEYS.form_18_environment_survey}.connect`,
    people: `${FORM_KEYS.form_18_environment_survey}.people`,
  },
}

const form: Form = {
  type: types.form,
  answer: answerTypes.multiple,
  fields: {
    0: {
      type: types.formElements,
      key: `${FORM_KEYS.form_6_other_person_goal}`,
      content: {
        text:
          'Please answer the following questions about your current environment.',
      },
      options: {
        required: true,
        childTypes: {
          0: {
            type: types.switch,
            key: `${CHILDREN_KEYS.form_18_environment_survey.happy}`,
            options: {
              required: true,
              label: 'Are you truly happy where you are currently situated?'
            },
          },
          1: {
            type: types.switch,
            key: `${CHILDREN_KEYS.form_18_environment_survey.connect}`,
            options: {
              required: true,
              label: 'Do you authentically connect with the culture of your town?'
            },
          },
          2: {
            type: types.switch,
            key: `${CHILDREN_KEYS.form_18_environment_survey.people}`,
            options: {
              required: true,
              label: 'Are you surrounded by like minded people?'
            },
          },
        },
      },
    },
    1: {
      type: types.string,
      key: `${FORM_KEYS.form_18_place_and_environment_goals}`,
      content: {
        text: 'What were some of your Environment goals of the past 5 years? Did you meet them?',
        smallKey: 'Env Goals',
      },
      options: {
        required: true,

            placeHolder: 'e.g. I wanted to move to a warmer climate...',
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
