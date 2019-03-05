// @flow
import types, { answerTypes, setTypes } from './types'
import { SHARED }                       from './constants'
import { AreaOfLife, LifeCategories }   from './content'
import type { Form }                    from '../types/formTypes'

export const FORM_KEYS = {
  form_2_current_week_time: 'form_2_current_week_time',
  form_2_ideal_week_time_: 'form_2_ideal_week_time_',
  form_2_more_time_activities: 'form_2_more_time_activities',
  form_2_less_time_activities: 'form_2_less_time_activities',
}

export const FORM_CHILDREN_KEYS = {
  form_2_more_time_activities: {
    activities: 'form_2_more_time_activities.activities',
    areaOfLife: 'form_2_more_time_activities.area_of_life',
  },
  form_2_less_time_activities: {
    activities: 'form_2_less_time_activities.activities',
    areaOfLife: 'form_2_less_time_activities.area_of_life',
  },
}
const form: Form = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
    0: {
      type: types.set,
      key: FORM_KEYS.form_2_current_week_time,
      content: {
        text:
          'Break down a typical 168 hour week according to the 7 life categories',
        smallKey: 'Activities',
      },
      options: {
        default: {},
        subtype: {
          type: setTypes.slider,
        },
        subtypeOptions: {
          min: 0,
          max: 168,
          data: SHARED,
          step: 1,
          suffixOfValue: 'hrs',
        },
        children: Object.keys(LifeCategories).reduce(
          (children, contentKey, index) => {
            const category = LifeCategories[contentKey]
            return {
              ...children,
              [index]: {
                contentKey,
                key: `form_2_current_week_time.${contentKey}`,
                content: {
                  text: category.title,
                  subtitle: category.subtitle,
                },
                options: {
                  max: 70,
                },
              },
            }
          },
          {}
        ),
      },
    },
    1: {
      type: types.connected,
      key: FORM_KEYS.form_2_ideal_week_time_,
      content: {
        text:
          'Now break down an ideal 168 hour week according to how you would LIKE to spend your time',
        smallKey: 'Activities',
      },
      options: {
        connect: {
          withElements: {
            text: 'Memory',
            key: 'form_2_current_week_time',
            childrenKeys: Object.keys(LifeCategories).map(category => ({
              key: `form_2_current_week_time.${category}`,
              contentKey: category,
            })),
          },
          using: {
            type: types.set,
            key: 'form_2_ideal_week_time',
            content: {
              smallKey: 'Activities',
            },
            options: {
              default: {},
              subtype: {
                type: setTypes.slider,
              },
              subtypeOptions: {
                min: 0,
                max: 168,
                data: SHARED,
                step: 1,
                suffixOfValue: 'hrs',
              },
              children: Object.keys(LifeCategories).reduce(
                (children, contentKey, index) => {
                  const category = LifeCategories[contentKey]
                  return {
                    ...children,
                    [index]: {
                      contentKey,
                      key: `form_2_ideal_week_time.${contentKey}`,
                      content: {
                        text: category.title,
                        subtitle: category.subtitle,
                      },
                      options: {
                        max: 70,
                      },
                    },
                  }
                },
                {}
              ),
            },
          },
        },
        default: [],
        required: true,
      },
    },
    2: {
      type: types.list,
      key: FORM_KEYS.form_2_more_time_activities,
      content: {
        text: 'List 3 activities you would like to spend more time doing',
        smallKey: 'Activities',
        listText: 'Activities',
      },
      options: {
        childTypes: {
          0: {
            type: types.string,
            key: FORM_CHILDREN_KEYS.form_2_more_time_activities.activities,
            options: {
              placeHolder: '',
              multiline: true,
              default: '',
            },
          },
          1: {
            type: types.select,
            key: FORM_CHILDREN_KEYS.form_2_more_time_activities.areaOfLife,
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
            min: 'Please list at least 3 activities',
            max: 'The max input for this exercise is 5 activities.',
          },
        },
      },
    },
    3: {
      type: types.list,
      key: FORM_KEYS.form_2_less_time_activities,
      content: {
        text: 'List 3 activities you would like to spend less time doing',
        smallKey: 'Activities',
        listText: 'Activities',
      },
      options: {
        childTypes: {
          0: {
            type: types.string,
            key: FORM_CHILDREN_KEYS.form_2_less_time_activities.activities,
            options: {
              placeHolder: '',
              multiline: true,
              default: '',
            },
          },
          1: {
            type: types.select,
            key: FORM_CHILDREN_KEYS.form_2_less_time_activities.areaOfLife,
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
            min: 'Please list at least 3 activities',
            max: 'The max input for this exercise is 5 activities.',
          },
        },
      },
    },
  },
}

export default form
