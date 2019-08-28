// @flow
import { Platform }                        from 'react-native'
import types, { answerTypes } from 'react-native-forms/forms/types'
import type { Form }                       from 'react-native-forms/types/formTypes'
import { Priorities }                 from './content'
import { DISABLE }                    from 'react-native-forms/forms/constants'


export const FORM_KEYS = {
    form_28_pe_bucket_list: 'form_28_pe_bucket_list',
    form_28_help_others: 'form_28_help_others',
    form_27_give_to_others: 'form_27_give_to_others',
    form_27_receive_from_others: 'form_27_receive_from_others',
}

export const CHILDREN_KEYS = {

    form_28_pe_bucket_list: {
        thing: `${FORM_KEYS.form_28_pe_bucket_list}.thing`,
        priority: `${FORM_KEYS.form_28_pe_bucket_list}.person`,
      },
      form_28_help_others: {
        person: `${FORM_KEYS.form_28_help_others}.person`,
        peGoal: `${FORM_KEYS.form_28_help_others}.peGoal`,
        howToHelp: `${FORM_KEYS.form_28_help_others}.howToHelp`,
      },
  }


const form: Form = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
    0: {
        type: types.list,
        key: `${FORM_KEYS.form_28_pe_bucket_list}`,
        content: {
          text: `What's on your 'Place and Environment' bucket list? How do you want to prioritize those items? `,
          smallKey: 'PE Bucket',
          listText: 'P & E Bucket List'
        },
        options: {
          required: true,
          childTypes: {
            0:{
                type: types.string,
                key: `${CHILDREN_KEYS.form_28_pe_bucket_list.thing}`,
                content: {
                  smallKey: 'Thing',
                  label: 'P & E Goal'
                },
                options: {
                  required:true,
                  placeHolder: 'To purchase a beach house to summer with my family...',
                  numberOfLines: 3,
                  multiline: true
                },
            },
            1:{
              type: types.select,
              key: `${CHILDREN_KEYS.form_28_pe_bucket_list.priority}`,
              content: {
                smallKey: 'Priority',
                label: 'How do you want to prioritize this item?',
                items: Priorities.map(priority => {
                    return {
                      value: priority,
                      text: priority,
                    }
                  }),
              },
              options: {
                required:true,
                  default:Priorities[1],
              },
            },
          },
        },
      },
    1: {
        type: types.list,
        key: `${FORM_KEYS.peGoal}`,
        content: {
          text: `Who else in your life has place and environment goals? How will you help them make them happen over the coming years?`,
          smallKey: 'Help others',
          listText: 'P&E Help for others'
        },
        options: {
          required: true,
          childTypes: {
              0: {
                  type: types.string,
                  key: `${CHILDREN_KEYS.form_28_help_others.personToHelp}`,
                  content: {
                    smallKey: 'Person',
                  },
                  options: {
                    required: true,
                    placeHolder: 'My brother',
                    label: 'Person to help'

                  },
              },
              1: {
                type: types.string,
                key: `${CHILDREN_KEYS.form_28_help_others.peGoal}`,
                content: {
                  smallKey: 'P & E Goal',
                },
                options: {
                  required: true,
                  label: 'P & E Goal',
                  placeHolder: 'Figure out how to live closer to each other',
                  numberOfLines: 4,
                  multiline: true
                },
            },
            2: {
                type: types.string,
                key: `${CHILDREN_KEYS.form_28_help_others.howToHelp}`,
                content: {
                  smallKey: 'How to help',
                },
                options: {
                  required: true,
                  placeHolder: 'Initiate an honest conversation this week...',
                  label: 'How will you help?',
                  numberOfLines: 4,
                  multiline: true
                },
            },
          },
        },
      },
    },
}

export default form