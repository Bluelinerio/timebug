// @flow
import { Platform }                        from 'react-native'
import types, { answerTypes } from 'react-native-forms/forms/types'
import type { Form }                       from 'react-native-forms/types/formTypes'


export const FORM_KEYS = {
  form_23_new_job: 'form_23_new_job',
  form_23_skills: 'form_23_skills'

}

export const CHILDREN_KEYS = {

    form_23_skills: {
        skill: `${FORM_KEYS.form_23_skills}.skill`,
        plan: `${FORM_KEYS.form_23_skills}.plan`,
      },
  }

const form: Form = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
    0: {
        type: types.string,
        key: `${FORM_KEYS.form_23_new_job}`,
        content: {
          text: ` If you could change jobs and do something totally new, what would you do?`,
          smallKey: 'New Job',
        },
        options: {
          required: false,
        },
      },
    1: {
        type: types.list,
        key: `${FORM_KEYS.form_23_skills}`,
        content: {
          text: ` What skills would you need to develop and how would you?`,
          smallKey: 'Skills',
          listText: 'Skills',
        },
        options: {
          required: false,
          childTypes: {
            0: {
              type: types.string,
              key: `${CHILDREN_KEYS.form_23_skills.skill}`,
              content: {
                smallKey: 'Skill',
              },
              options: {
                placeHolder: 'Skill',
                required: false
              },
            },
            1: {
                type: types.string,
                key: `${CHILDREN_KEYS.form_23_skills.plan}`,
                content: {
                  smallKey: 'Plan',
                },
                options: {
                  placeHolder: 'Plan',
                  required: false,
                  multiline:true,
                  numberOfLines:3
                },
              },
          },
        },
      },
  },
}

export default form
