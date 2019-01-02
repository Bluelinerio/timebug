import types, { answerTypes } from './types'
import { AreaOfLife } from './content'

const form1 = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
    0: {
      type: types.list,
      key: 'form_1_more_time_activities',
      content: {
        text: 'List 3 activities you would like to spend more time doing',
        smallKey: 'Activities',
        listText: 'Activities',
      },
      options: {
        childTypes: {
          0: {
            type: types.string,
            key: 'form_1_more_time_activities.activities',
            options: {
              placeHolder: '',
              multiline: true,
              default: '',
            },
          },
          1: {
            type: types.select,
            key: 'form_1_more_time_activities.area_of_life',
            content: {
              smallKey: 'area',
              items: AreaOfLife.map(area => ({
                value: area,
                text: area,
              })),
            },
            options: {
              default: AreaOfLife[0],
            },
          },
        },
        default: [],
        required: true,
        constraints: {
          min: 3,
          max: 3,
          errors: {
            min: 'You need at least 3 activities',
            max: 'You only need 3 activities',
          },
        },
      },
    },
    1: {
      type: types.list,
      key: 'form_1_less_time_activities',
      content: {
        text: 'List 3 activities you would like to spend less time doing',
        smallKey: 'Activities',
        listText: 'Activities',
      },
      options: {
        childTypes: {
          0: {
            type: types.string,
            key: 'form_1_less_time_activities.activities',
            options: {
              placeHolder: '',
              multiline: true,
              default: '',
            },
          },
          1: {
            type: types.select,
            key: 'form_1_less_time_activities.area_of_life',
            content: {
              smallKey: 'area',
              items: AreaOfLife.map(area => ({
                value: area,
                text: area,
              })),
            },
            options: {
              default: AreaOfLife[0],
            },
          },
        },
        default: [],
        required: true,
        constraints: {
          min: 3,
          max: 3,
          errors: {
            min: 'You need at least 3 activities',
            max: 'You only need 3 activities',
          },
        },
      },
    },
  },
}

export default form1
