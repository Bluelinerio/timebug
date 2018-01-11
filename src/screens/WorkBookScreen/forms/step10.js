import t from "../components/templates";
import { LifeCategory, InteractionFrequency } from "./contents";

export default {

  1: {
    type: t.struct({
      id: t.maybe(t.String),
      field: t.list(
        t.struct({
          i: t.String,
          strengthOfI: t.Number,
          whatIWouldSay: t.String
        })
      )
    }),
    options: {
      fields: {
        id: {
          hidden: true
        },
        field: {
          label: "Identify 5-10 different I's. Note how strong each I is for you(on a 1-10 scales with 1=weakest and 10=strongest), and what I would say in a few words.",
          item: {
            fields: {
              i: {
                placeholder: 'I',
                error:'Please fill out this field.'
              },
              strengthOfI: {
                placeholder: 'Strength Of "I"(scale of 1-10)',
                error:'Please fill out this field.'
              },
              whatIWouldSay: {
                placeholder: 'What I would say',
                error:'Please fill out this field.'
              }
            },
          },
          auto: 'none',
          label: "5-10 Different I's",
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
        field: {
          label: "Reflecting back on the day 5 list of Goals, pick several and briefly note how your ego aspects either hindered or aided you.",
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


