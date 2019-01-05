import types, { answerTypes } from './types'
import { Strengths, Weaknesses } from './content'
import { DISABLE } from './constants'

const form3 = {
  type: types.form,
  answerType: answerTypes.single,
  fields: {
    0: {
      type: types.list,
      key: 'form_3_strengths_and_weaknesses',
      content: {
        text:
          'List 3 - 5 charachter strengs that you believe yourself to possess',
        smallKey: 'Strengths',
        listText: 'Strengths',
      },
      options: {
        childTypes: {
          0: {
            type: types.select,
            key: 'form_3_strengths_and_weaknesses.strengths',
            content: {
              smallKey: 'Strengths',
              items: Strengths.map(strength => ({
                value: strength,
                text: strength,
              })),
            },
            options: {
              default: Strengths[0],
              repeats: DISABLE,
            },
          },
        },
        default: [],
        required: true,
      },
    },
    1: {
      type: types.list,
      key: 'form_3_weaknesses',
      content: {
        text:
          'List 3 - 5 charachter weaknesses that you believe yourself to possess',
        smallKey: 'Weaknesses',
        listText: 'Weaknesses',
      },
      options: {
        childTypes: {
          0: {
            type: types.select,
            key: 'form_3_strengths_and_weaknesses.weaknesses',
            content: {
              smallKey: 'Weaknesses',
              items: Weaknesses.map(weakness => ({
                value: weakness,
                text: weakness,
              })),
            },
            options: {
              default: Weaknesses[0],
              repeats: DISABLE,
            },
          },
        },
        default: [],
        required: true,
      },
    },
  },
}

export default form3
