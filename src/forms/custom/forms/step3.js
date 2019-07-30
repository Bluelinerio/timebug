// @flow
import types, { answerTypes }    from 'react-native-forms/forms/types'
import { DISABLE }               from 'react-native-forms/forms/constants'
import type { Form }             from 'react-native-forms/types/formTypes'
import { Strengths, Weaknesses } from './content'

const form: Form = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
    0: {
      type: types.list,
      key: 'form_3_strengths',
      content: {
        text:
          'List 3-5 character strengths that you believe yourself to possess',
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
            min: 'Please list at least 3 character strengths',
            max: 'The max input for this exercise is 5 character strengths',
          },
        },
      },
    },
    1: {
      type: types.list,
      key: 'form_3_weaknesses',
      content: {
        text:
          'List 3 - 5 character weaknesses that you believe yourself to possess',
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
            min: 'Please list at least 3 weaknesses',
            max: 'The max input for this exercise is 5 weaknesses',
          },
        },
      },
    },
    2: {
      type: types.string,
      key: 'form_3_strengths_friend_name',
      content: {
        text:
          'Now, ask a close friend or family member to list 3-5 character strengths and weaknesses they believe you to possess',
        smallKey: "Friend's name Strengths",
        listText: "Friend's name Strengths",
      },
      options: {
        placeHolder: "Friend's name",
        multiline: false,
        default: '',
        required: true,
      },
    },
    3: {
      type: types.list,
      key: 'form_3_strengths_by_friend',
      content: {
        text:
          'Now, ask a close friend or family member to list 3-5 character strengths they believe you to possess',
        smallKey: 'Strengths By Friend',
        listText: 'Strengths By Friend',
      },
      options: {
        referencedValue: {
          type: types.string,
          key: 'form_3_strengths_friend_name',
          text: "Friend's name",
          smallKey: "Friend's name",
        },
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
        },
        default: [],
        required: true,
        constraints: {
          min: 3,
          max: 5,
          errors: {
            min: 'Please list at least 3 character strengths',
            max: 'The max input for this exercise is 5 character strengths',
          },
        },
      },
    },
    4: {
      type: types.list,
      key: 'form_3_weaknesses_by_friend',
      content: {
        text:
          'Now, ask a close friend or family member to list 3-5 character weaknesses they believe you to possess',
        smallKey: 'Weaknesses By Friend',
        listText: 'Weaknesses By Friend',
      },
      options: {
        referencedValue: {
          type: types.string,
          key: 'form_3_strengths_friend_name',
          text: "Friend's name",
          smallKey: "Friend's name",
        },
        childTypes: {
          0: {
            type: types.select,
            key: 'form_3_weaknesses_by_friend.weaknesses',
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
            min: 'Please list at least 3 character weaknesses',
            max: 'The max input for this exercise is 5 character weaknesses',
          },
        },
      },
    },
  },
}

export default form
