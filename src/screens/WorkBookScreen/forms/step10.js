import t from "../components/templates";
import { LifeCategory, InteractionFrequency } from "./contents";

export default {

  1: {
    type: t.struct({
      id: t.maybe(t.String),
      field: t.list(
        t.struct({
          i: t.String,
          strengthOfI: t.enums.of([
            'Very Strong',
            'Strong',
            'Mid Line',
            'Weak',
            'Very Weak'
          ]),
          whatIWouldSay: t.maybe(t.String)
        })
      )
    }),
    options: {
      label: "Identify 5-10 different I's.\n How strong each I is for you?\n(on a scale from strongest to weakest). \nWhat I would say in a few words?",
      fields: {
        id: {
          hidden: true
        },
        field: {
          item: {
            fields: {
              i: {
                label: 'Write down your \'I\'',
                placeholder: 'procrastinate',
                error: 'For example \'I procrastinate\'.'
              },
              strengthOfI: {
                placeholder: 'Strength Of "I" (scale of 1-10)',
                error: 'How strong is it for you?.'
              },
              whatIWouldSay: {
                placeholder: 'What I would say',
                error:'Write a few words of reflection'
              }
            },
          },
          auto: 'none',
          label: "Different I's",
          disableOrder: true,
          maxLines: 10,
          config: {
            maxLines: 10,
          },
        },
      }
    },
    value: {
      fields: {
        id: 'step10+v0.0.0.1'
      }
    }
  },
  2: {
    type: t.struct({
      field: t.list(
        t.struct({
          goal: t.String,
          egoInfluence: t.String
        })
      )
    }),
    options: {
      fields: {
        label: "Reflecting back on the day 5 list of Goals, pick several and briefly note how your ego aspects either hindered or aided you.",
        field: {
          auto: 'placeholders',
          disableOrder: true,
          maxLines: 10,
          config: {
            maxLines: 10,
          },
          item: {
            fields: {
              goal: {
                error:'Please fill out this field.'
              },
              egoInfluence: {
                error:'Please fill out this field.'
              }
            }
          }
        },
      }
    }
  },


};


