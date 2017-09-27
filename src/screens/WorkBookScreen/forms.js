import React from 'react';
import t     from 'tcomb-form-native';

export default {
  'step_1': {
    1: {
      title: 'Hello world step 1',
      type: t.struct({
        name: t.String,              // a required string
        surname: t.maybe(t.String),  // an optional string
        age: t.Number,               // a required number
        rememberMe: t.Boolean        // a boolean
      }),
      options: {},
    },
    2: {
      title: 'Hello world step 1 from 2',
      type: t.struct({
        name: t.list(
          t.struct({
            value: t.maybe(t.String)
          })
        )
      }),
      options: {},
    },
  },
  'step_2': {
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