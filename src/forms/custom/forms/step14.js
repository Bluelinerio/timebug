// @flow
import { Platform }                   from 'react-native'
import types, { answerTypes }         from 'react-native-forms/forms/types'
import type { Form }                  from 'react-native-forms/types/formTypes'
import { DISABLE }                    from 'react-native-forms/forms/constants'
import { Emotions, EmotionalChanges } from './content'

export const FORM_KEYS = {
  form_14_financial_emotions: 'form_14_financial_emotions',
  form_14_emotional_changes: 'form_14_emotional_changes',
  form_14_achievements_dissappointments:
    'form_14_achievements_dissappointments',
  form_14_seen: 'form_14_seen',
}

export const CHILDREN_KEYS = {
  form_14_financial_emotions: {
    emotion: `${FORM_KEYS.form_14_financial_emotions}.emotion`,
    emotionalChange: 'FORM_KEYS.form_14_emotional_changes',
  },
  form_14_achievements_dissappointments: {
    event: `${FORM_KEYS.form_14_achievements_dissappointments}.event`,
  },
}

const form: Form = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
    0: {
      type: types.list,
      key: `${FORM_KEYS.form_14_financial_emotions}`,
      content: {
        text: `What emotions pop up when you think about your relationship with money?`,
        smallKey: 'Financial emotions',
        listText: 'Financial emotions',
      },
      options: {
        required: true,
        childTypes: {
          0: {
            type: types.select,
            key: `${CHILDREN_KEYS.form_14_financial_emotions.emotion}`,
            content: {
              smallKey: 'Emotion',
              items: Emotions.map(emotion => {
                return {
                  value: emotion,
                  text: emotion,
                }
              }),
            },
            options: {
              default: Emotions[0],
              repeats: DISABLE,
            },
          },
        },
        constraints: {
          min: 1,
          max: 3,
          errors: {
            min: 'Please list at least 1 emotion',
            max: 'The max input for this exercise is 3 emotions',
          },
        },
      },
    },
    1: {
      type: types.select,
      key: `${FORM_KEYS.form_14_emotional_changes}`,
      content: {
        text: `How have your emotions towards money changed over the past 5 years?`,
        smallKey: 'Emotional changes',
        listText: 'Emotional changes',
        items: EmotionalChanges.map(emotionalChange => {
          return {
            value: emotionalChange,
            text: emotionalChange,
          }
        }),
      },
      options: {
        default: EmotionalChanges[0],
      },
    },
    2: {
      type: types.list,
      key: `${FORM_KEYS.form_14_achievements_dissappointments}`,
      content: {
        text: `What financial achievements and/or disappointments come to mind when you review the past 5 years?`,
        smallKey: 'Financial achievements/dissappointments',
        listText: 'Financial achievements/dissappointments',
      },
      options: {
        required: true,
        childTypes: {
          0: {
            type: types.string,
            key: `${CHILDREN_KEYS.form_14_achievements_dissappointments.event}`,
            content: {
              smallKey: 'Event',
            },
            options: {
              required: true,
              multiline: true,
              numberOfLines: 3,
              placeHolder: 'e.g. I was able to save x dollars',
              default: '',
            },
          },
        },
        constraints: {
          min: 1,
          max: 5,
          errors: {
            min: 'Please list at least 1 event',
            max: 'The max input for this exercise is 5 events',
          },
        },
      },
    },
    3: {
      type: types.string,
      key: `${FORM_KEYS.form_14_seen}`,
      content: {
        text: `Did you see any of these events comming?`,
        smallKey: 'Predictable events',
        listText: 'Predictable events',
      },
      options: {
        required: true,
        placeHolder: 'No I did not because. . .',
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
  },
}

export default form
