import types, { answerTypes } from './types'
import { Strengths, Weaknesses } from './content'
import { DISABLE } from './constants'

const form3 = {
  type: types.form,
  answerType: answerTypes.single,
  fields: {
    0: {
      type: types.list,
      key: 'form_3_strengths',
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
            key: 'form_3_strengths.strengths',
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
        constraints: {
          min: 3,
          max: 5,
          errors: {
            min: 'You need at least 3 Weaknesses',
            max: 'You only need 5 Weaknesses',
          },
        },
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
            key: 'form_3_weaknesses.weaknesses',
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
        constraints: {
          min: 3,
          max: 5,
          errors: {
            min: 'You need at least 3 Weaknesses',
            max: 'You only need 5 Weaknesses',
          },
        },
      },
    },
    2: {
      type: types.list,
      key: 'form_3_strengths_by_friend',
      content: {
        text:
          'Now, ask a close friend or family member to list 3-5 charachter strenghts they believe you to possess',
        smallKey: 'Strengths By Friend',
        listText: 'Strengths By Friend',
      },
      options: {
        childTypes: {
          0: {
            type: types.select,
            key: 'form_3_strengths_by_friend.strengths',
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
          1: {
            type: types.string,
            key: 'form_3_strengths_by_friend.friend_name',
            options: {
              placeHolder: "Friend's name",
              multiline: true,
              default: '',
              isIndependent: true,
            },
          },
        },
        default: [],
        required: true,
        constraints: {
          min: 3,
          max: 5,
          errors: {
            min: 'You need at least 3 activities',
            max: 'You only need 3 activities',
          },
        },
      },
    },
  },
}

export default form3
