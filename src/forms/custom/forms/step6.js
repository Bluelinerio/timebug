import types, { actionTypes, answerTypes } from './types'

export const FORM_KEYS = {
  form_6_other_person_goal: 'form_6_other_person_goal',
  form_6_plan_and_estimated_time: 'form_6_plan_and_estimated_time',
}

export const CHILDREN_KEYS = {
  form_6_other_person_goal: {
    name: `${FORM_KEYS.form_6_other_person_goal}.name`,
    goal: `${FORM_KEYS.form_6_other_person_goal}.goal`,
  },
  form_6_plan_and_estimated_time: {
    plan: `${FORM_KEYS.form_6_plan_and_estimated_time}.plan`,
    time: `${FORM_KEYS.form_6_plan_and_estimated_time}.time`,
  },
}

const form6 = {
  type: types.form,
  answer: answerTypes.multiple,
  fields: {
    0: {
      type: types.formElements,
      key: `${FORM_KEYS.form_6_other_person_goal}`,
      content: {
        text:
          'Write down the name of someone you care about, and a goal you would like to help them achieve',
        smallKey: "Person's Name",
      },
      options: {
        required: true,
        childTypes: {
          0: {
            type: types.string,
            key: `${CHILDREN_KEYS.form_6_other_person_goal.name}`,
            options: {
              placeHolder: "Person's name",
              default: '',
              required: true,
            },
          },
          1: {
            type: types.string,
            key: `${CHILDREN_KEYS.form_6_other_person_goal.goal}`,
            options: {
              required: true,
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
      key: `${FORM_KEYS.form_6_plan_and_estimated_time}`,
      content: {
        text:
          'Write down a detailed plan for how you will help this person, and when you would like it to be complete.',
        smallKey: 'Goal Plan',
      },
      options: {
        required: true,
        childTypes: {
          0: {
            type: types.string,
            key: `${CHILDREN_KEYS.form_6_plan_and_estimated_time.plan}`,
            options: {
              placeHolder: 'Plan',
              default: '',
              multiline: true,
              required: true,
              numberOfLines: 4,
            },
          },
          2: {
            type: types.string,
            key: `${CHILDREN_KEYS.form_6_plan_and_estimated_time.time}`,
            content: {
              text: 'When would you like to see this completed?',
              smallKey: 'ETC',
            },
            options: {
              placeHolder: 'Target completion date',
              default: '',
              multiline: true,
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
