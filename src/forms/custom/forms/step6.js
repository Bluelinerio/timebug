import types, { answerTypes } from './types'

const form6 = {
  type: types.form,
  answer: answerTypes.multiple,
  fields: {
    0: {
      type: types.formElements,
      key: 'form_6_other_person_goal',
      content: {
        text: 'Write down the name of someone you care about, and a goal you would like to help them achieve',
        smallKey: "Person's Name",
      },
      options: {
        childTypes: {
          0: {
            type: types.string,
            key: 'form_6_other_person_goal.name',
            options: {
              placeHolder: "Person's name",
              default: '',
              required: true,
            },
          },
          1: {
            type: types.string,
            key: 'form_6_other_person_goal.goal',
            options: {
              placeHolder: 'Goal',
              default: '',
              multiline: true,
            },
          },
        },
        default: [],
        constraints: {
          min: 1,
          max: 1,
          errors: {
            min: 'You must add at least one (1)',
            max: 'You can only add one at a time',
          },
        },
      },
    },
  },
}

export default form6
