// @flow
import types, { answerTypes } from 'react-native-forms/forms/types'
import type { Form }          from 'react-native-forms/types/formTypes'
import {
  OneToTenScale,
  ImprovementOrRegression,
  YesNo,
  RelationshipRating,
}                             from './content'

export const FORM_KEYS = {
  form_17_valued_relationships: 'form_17_valued_relationships',
  form_17_major_relationship: 'form_17_major_relationship',
  form_17_health_priority_level: 'form_17_health_priority_level',
  form_17_typical_diet: 'form_17_typical_diet',
}

export const CHILDREN_KEYS = {
  form_17_valued_relationships: {
    relation: `${FORM_KEYS.form_17_valued_relationships}.relation`,
    quality: `${FORM_KEYS.form_17_valued_relationships}.quality`,
    progress: `${FORM_KEYS.form_17_valued_relationships}.progress`,
  },
  form_17_major_relationship: {
    relation: `${FORM_KEYS.form_17_major_relationship}.relation`,
    relation_rating: `${FORM_KEYS.form_17_major_relationship}.relation_rating`,
  },
}

const form: Form = {
  type: types.form,
  answer: answerTypes.single,
  fields: {
    0: {
      type: types.list,
      key: `${FORM_KEYS.form_17_valued_relationships}`,
      content: {
        text: `Who do you truly value in your life?`,
        smallKey: 'Valued relationships',
        listText: 'Valued relationships',
      },
      options: {
        required: true,
        default: [],
        childTypes: {
          0: {
            type: types.string,
            key: `${CHILDREN_KEYS.form_17_valued_relationships.relation}`,
            content: {
              smallKey: 'Valued relationship',
            },
            options: {
              required: true,
              placeHolder: 'My sister',
            },
          },
          1: {
            type: types.select,
            key: `${CHILDREN_KEYS.form_17_valued_relationships.quality}`,
            content: {
              smallKey: 'Relationship quality',
              items: OneToTenScale.map(num => {
                return {
                  value: num,
                  text: num,
                }
              }),
            },
            options: {
              default: OneToTenScale[0],
              label: 'Rate the quality of your relationship on a scale of 1-10',
            },
          },
          2: {
            type: types.select,
            key: `${CHILDREN_KEYS.form_17_valued_relationships.progress}`,
            content: {
              smallKey: 'Relationship progress',
              items: ImprovementOrRegression.map(opt => {
                return {
                  value: opt,
                  text: opt,
                }
              }),
            },
            options: {
              default: ImprovementOrRegression[0],
              label:
                'Has this relationship improved or regressed in the last 5 years',
            },
          },
        },
        constraints: {
          min: 1,
          max: 10,
          errors: {
            min: 'Please list at least 1 relationship',
            max: 'The max input for this exercise is 10 relationship',
          },
        },
      },
    },
    1: {
      type: types.formElements,
      key: `${FORM_KEYS.form_17_major_relationship}`,
      content: {
        text:
          'Have you been in an intimate, committed relationship over the past 5 years?',
        smallKey: 'Intimate Relationship',
      },
      options: {
        required: true,
        childTypes: {
          0: {
            type: types.select,
            key: `${CHILDREN_KEYS.form_17_major_relationship.relation}`,
            content: {
              items: YesNo.map(opt => ({
                text: opt,
                value: opt,
              })),
            },
            options: {
              required: true,
              default: YesNo[0],
            },
          },
          1: {
            type: types.select,
            key: `${CHILDREN_KEYS.form_17_major_relationship.relation_rating}`,
            content: {
              items: RelationshipRating.map(opt => ({
                text: opt,
                value: opt,
              })),
            },
            options: {
              required: true,
              label:
                'How would you rate the connection as a whole (1 = a major struggle and 10 =the ultimate connection) Leave this blank if the previous answer was no.',
              default: RelationshipRating[0],
            },
          },
        },
      },
    },
  },
}

export default form
