import types, { actionTypes, answerTypes } from './types'

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
              numberOfLines: 3,
            },
          },
        },
      },
    },
    1: {
      type: types.formElements,
      key: 'form_6_plan_and_estimated_time',
      content: {
        text: 'Write down a detailed plan for how you will help this person, and when you would like it to be complete.',
        smallKey: 'Goal Plan',
      },
      options: {
        childTypes: {
          0: {
            type: types.string,
            key: 'form_6_plan_and_estimated_time.plan',
            options: {
              placeHolder: 'Plan',
              default: '',
              multiline: true,
              numberOfLines: 4,
            },
          },
          1: {
            type: types.string,
            key: 'form_6_plan_and_estimated_time.time',
            options: {
              placeHolder: 'Target completion date',
              default: '',
            },
          },
        },
      },
    },
    2: {
      type: types.button,
      content: {
        text: 'Do you wish to add more goals?',
      },
      actions: [
        {
          text: 'Yes',
          key: 'goal_yes',
          action: {
            type: actionTypes.GO_TO,
            payload: 0,
          },
        },
      ],
    },
  },
}

export default form6
