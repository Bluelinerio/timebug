import React          from 'react';
import t              from 'tcomb-form-native';
import { customList } from "./templates/index";


export default {
  1: {
    1: {
      title: 'Personal Information',
      type: t.struct({
        name: t.String,
        age: t.Number,
        date: t.Date
      }),
      options: {},
    },
    2: {
      title: 'Write down your best life memories (up to 3)',
      type: t.struct({
        field: t.list(
          t.struct({
            value: t.maybe(t.String)
          })
        )
      }),
      options: {
        fields: {
          field: {
            auto: 'none',
            disableOrder: true,
            maxLines: 3,
            template: customList,
            config: {
              maxLines: 3
            }
          }
        }
      },
    },
    3: {
      title: 'What are some of your regrets? (up to 3)',
      type: t.struct({
        field: t.list(
          t.struct({
            value: t.maybe(t.String)
          })
        )
      }),
      options: {
        fields: {
          field: {
            auto: 'none',
            disableOrder: true,
            maxLines: 3,
            template: customList,
            config: {
              maxLines: 3
            }
          }
        }
      },
    },
  },
  2: {
    1: {
      title: 'Hello world step 2',
      type: t.struct({
        name: t.String,              // a required string
        surname: t.maybe(t.String),  // an optional string
        age: t.Number,               // a required number
      }),
      options: {},
    },
  },
}