// @flow
import { Platform }                                      from 'react-native'
import types, { answerTypes }                            from 'react-native-forms/forms/types'
import type { Form }                                     from 'react-native-forms/types/formTypes'
import { DISABLE }                                       from 'react-native-forms/forms/constants'
import { Emotions, YesNo, HoursPerMonth, AloneOrOthers } from './content'

export const FORM_KEYS = {
  form_15_typical_activities: 'form_15_typical_activities',
  form_15_time_spent: 'form_15_time_spent',
  form_15_activities_feelings: 'form_15_activities_feelings',
  form_15_alone_or_with_others: 'form_15_alone_or_with_others',
}

export const CHILDREN_KEYS = {
  form_15_typical_activities: {
    activity: `${FORM_KEYS.form_15_typical_activities}.activity`,
    willing_to_give: `${FORM_KEYS.form_15_typical_activities}.willing_to_give`,
  },
  form_15_time_spent: {
    time: `${FORM_KEYS.form_15_achievements_dissappointments}.time`,
  },
  form_15_activities_feelings: {
    feeling: `${FORM_KEYS.form_15_activities_feelings}.feeling`,
  },
  form_15_alone_or_with_others: {
    alone_or_with_others: `${
      FORM_KEYS.form_15_alone_or_with_others
    }.alone_or_with_others`,
  },
}

const form: Form = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
    0: {
      type: types.list,
      key: `${FORM_KEYS.form_15_typical_activities}`,
      content: {
        text: `What are some of the activities & hobbies that you typically engage in each month?`,
        smallKey: 'Typical activities',
        listText: 'Typical activities',
      },
      options: {
        required: true,
        childTypes: {
          0: {
            type: types.string,
            key: `${CHILDREN_KEYS.form_15_typical_activities.activity}`,
            content: {
              smallKey: 'Activity',
            },
            options: {
              required: true,
              placeHolder: 'e.g. Playing the piano',
              default: '',
              multiline: true,
              numberOfLines: 3,
              style: {
                textInputContainerStyle: Platform.select({
                  android: {},
                  ios: {
                    marginBottom: 20,
                  }, //Fill with what's needed
                }),
                textInputStyle: Platform.select({
                  android: {},
                  ios: {
                    minHeight: 30,
                  }, //Fill with what's needed
                }),
              },
            },
          },
          1: {
            type: types.select,
            key: `${CHILDREN_KEYS.form_15_typical_activities.willing_to_give}`,
            content: {
              smallKey: 'Willing to give up',
              items: YesNo.map(opt => {
                return {
                  value: opt,
                  text: opt,
                }
              }),
            },
            options: {
              default: YesNo[0],
              label: 'Would you be willing to give this activity up?',
            },
          },
          2: { 
                  type: types.select,
                  key: `${
                    CHILDREN_KEYS.form_15_alone_or_with_others.alone_or_with_others
                  }`,
                  content: {
                    smallKey: 'Alone or with others',
                    items: AloneOrOthers.map(opt => ({
                      value: opt,
                      text: opt,
                    })),
                  },
                  options: {
                    default: AloneOrOthers[0],
                    label: 'Do you do this activity alone or with others?',
                  },
                },
              },
            },
        constraints: {
          min: 1,
          max: 10,
          errors: {
            min: 'Please list at least 1 activity',
            max: 'The max input for this exercise is 10 activities',
          },
        },
      },
    1: {
      type: types.connected,
      key: `${FORM_KEYS.form_15_time_spent}`,
      content: {
        text:
          'How much time do you spend (in hours) on each activity every month?',
        smallKey: 'Time spent',
      },
      options: {
        connect: {
          withElements: {
            text: 'Activity',
            key: `${FORM_KEYS.form_15_typical_activities}`,
            childrenKeys: [
              `${CHILDREN_KEYS.form_15_typical_activities.activity}`,
            ],
          },
          using: {
            type: types.select,
            key: `${CHILDREN_KEYS.form_15_time_spent.time}`,
            content: {
              smallKey: 'time',
              items: HoursPerMonth.map(time => ({
                value: time,
                text: time,
              })),
            },
            options: {
              default: HoursPerMonth[0],
            },
          },
        },
        default: [],
        required: true,
      },
    },
    2: {
      type: types.list,
      key: `${FORM_KEYS.form_15_activities_feelings}`,
      content: {
        text: `What do these activities make me feel`,
        smallKey: 'Activity Feelings',
        listText: 'Activity Feelings',
      },
      options: {
        required: true,
        childTypes: {
          0: {
            type: types.select,
            key: `${CHILDREN_KEYS.form_15_activities_feelings.feeling}`,
            content: {
              smallKey: 'Feeling',
              items: Emotions.map(feeling => ({
                value: feeling,
                text: feeling,
              })),
            },
            options: {
              default: Emotions[0],
              repeats: DISABLE,
            },
          },
        },
        constraints: {
          min: 1,
          max: 10,
          errors: {
            min: 'Please list at least 1 feeling',
            max: 'The max input for this exercise is 10 feelings',
          },
        },
      },
    },
  },
}

export default form
