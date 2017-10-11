import React from 'react';
import t     from "./templates";

export default {
  1: {
    1: {
      focusField: 'name',
      title: 'Personal Information',
      type: t.struct({
        name: t.String,
        age: t.Number,
        date: t.Date,
      }),
      options: {
        fields: {
          name: {
            auto: 'placeholders',
            error: 'Field this field'
          },
          age: {
            auto: 'placeholders',
            error: 'Field this field'

          },
        },
      },
    },
    2: {
      title: 'Write down your best life memories (up to 3)',
      type: t.struct({
        field: t.list(
          t.struct({
            value: t.maybe(t.String),
            number: t.maybe(t.Number),
            date: t.maybe(t.Date),
            enum: t.enums({
              M: 'Male',
              F: 'Female',
            }),
          }),
        ),
      }),
      options: {
        fields: {
          field: {
            auto: 'placeholders',
            disableOrder: true,
            maxLines: 3,
            config: {
              maxLines: 3,
            },
          },
        },
      },
    },
    3: {
      title: 'What are some of your regrets? (up to 3)',
      type: t.struct({
        field: t.list(
          t.struct({
            value: t.maybe(t.String),
          }),
        ),
      }),
      options: {
        fields: {
          field: {
            auto: 'placeholders',
            disableOrder: true,
            maxLines: 3,
            config: {
              maxLines: 3,
            },
          },
        },
      },
    },
  },
  2: {
    1: {
      focusField: 'name',
      title: 'Personal Information',
      type: t.struct({
        name: t.String,
        age: t.Number,
        date: t.Date,
      }),
      options: {
        fields: {
          name: {
            auto: 'placeholders',
            error: 'Field this field'
          },
          age: {
            auto: 'placeholders',
            error: 'Field this field'
          },
        },
      },
    },
  },
}