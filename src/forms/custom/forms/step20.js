// @flow
import { Platform }                        from 'react-native'
import types, { actionTypes, answerTypes } from 'react-native-forms/forms/types'
import type { Form }                       from 'react-native-forms/types/formTypes'
import { OneToTenScale }                   from './content'

export const FORM_KEYS = {
  form_20_evaluation: 'form_20_evaluation',
}

export const CHILDREN_KEYS = {
    form_20_evaluation: {
      career: `${FORM_KEYS.form_20_evaluation}.career`,
      finances: `${FORM_KEYS.form_20_evaluation}.finances`,
      aimsAndHobbies: `${FORM_KEYS.form_20_evaluation}.aimsAndHobbies`,
      health: `${FORM_KEYS.form_20_evaluation}.health`,  
      relationships: `${FORM_KEYS.form_20_evaluation}.relationships`,
      environment: `${FORM_KEYS.form_20_evaluation}.environment`,
      spirituality: `${FORM_KEYS.form_20_evaluation}.spirituality`,
    },
}


const form: Form = {
  type: types.form,
  answer: answerTypes.multiple,
  fields: {
    0: {
        type: types.formElements,
        key: `${FORM_KEYS.form_20_evaluation}`,
        content: {
          text:
            'What is your final evaluation for each of the past 5 Years? Give yourself a 5-Year Score',
        smallKey: "Evaluation",
        },
        options: {
          required: true,
          childTypes: {
            0: {
              type: types.select,
              key: `${CHILDREN_KEYS.form_20_evaluation.career}`,
              content: {
                items: OneToTenScale.map(num => ({
                    value: num,
                    text: num,
                  })),
                label: "Career",  
              },
              options: {

                default:OneToTenScale[0],
                required: true,
              },
            },
            1: {
                type: types.select,
                key: `${CHILDREN_KEYS.form_20_evaluation.finances}`,
                content: {
                  items: OneToTenScale.map(num => ({
                      value: num,
                      text: num,
                    })),
                },
                options: {
                  label: "Finances",
                  default:OneToTenScale[0],
                  required: true,
                },
              },
              2: {
                type: types.select,
                key: `${CHILDREN_KEYS.form_20_evaluation.aimsAndHobbies}`,
                content: {
                  items: OneToTenScale.map(num => ({
                      value: num,
                      text: num,
                    })),
                },
                options: {
                  label: "Aims and Hobbies",
                  default:OneToTenScale[0],
                  required: true,
                },
              },
              3: {
                type: types.select,
                key: `${CHILDREN_KEYS.form_20_evaluation.health}`,
                content: {
                  items: OneToTenScale.map(num => ({
                      value: num,
                      text: num,
                    })),
                },
                options: {
                  label: "Health",
                  default:OneToTenScale[0],
                  required: true,
                },
              },
              4: {
                type: types.select,
                key: `${CHILDREN_KEYS.form_20_evaluation.relationships}`,
                content: {
                  items: OneToTenScale.map(num => ({
                      value: num,
                      text: num,
                    })),
                },
                options: {
                  label: "Relationships",
                  default:OneToTenScale[0],
                  required: true,
                },
              },
              5: {
                type: types.select,
                key: `${CHILDREN_KEYS.form_20_evaluation.environment}`,
                content: {
                  items: OneToTenScale.map(num => ({
                      value: num,
                      text: num,
                    })),
                },
                options: {
                  label: "Environment",
                  default:OneToTenScale[0],
                  required: true,
                },
              },
              6: {
                type: types.select,
                key: `${CHILDREN_KEYS.form_20_evaluation.spirituality}`,
                content: {
                  items: OneToTenScale.map(num => ({
                      value: num,
                      text: num,
                    })),
                },
                options: {
                  label: "Spirituality",
                  default:OneToTenScale[0],
                  required: true,
                },
              },
          },
        },
      },
  },
}

export default form
