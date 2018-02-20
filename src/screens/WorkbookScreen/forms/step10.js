import t from "../components/templates";
import { PillarsOfLife, InteractionFrequency,OneToTenScale } from "./contents";

export default {

  1: {
    type: t.struct({
      id: t.maybe(t.String),
      field: t.list(
        t.struct({
          i: t.String,
          strengthOfI: OneToTenScale,
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
          label:'What are 5-15 different Is that you feel are a part of yourself? (e.g., “Lazy I” could resemble “Procrastinating I”)',
          item: {
            fields: {
              i: {
                //label: 'Write down your \'I\'',
                help: 'e.g., “Lazy I”'
               // error: 'For example \'I procrastinate\'.'
              },
              strengthOfI: {
                label: 'How strong is each I (1 = Weakest and 10 = Strongest)?',
               // error: 'How strong is it for you?.'
              },
              whatIWouldSay: {
                help: 'e.g., Angry I – "LEAVE ME ALONE!! STOP BOTHERING ME!”',
                label:'What would this "I" say in a few words?'
              }
            },
          },
          auto: 'none',
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
                auto:'labels'
              },
              egoInfluence: {
                label:'How did a particular ego aspect help or hinder you in pursuit of this goal?'
              }
            }
          }
        },
      }
    }
  },


};


