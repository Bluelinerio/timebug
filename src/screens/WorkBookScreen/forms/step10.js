import t from "../components/templates";
import { LifeCategory, InteractionFrequency } from "./contents";

export default {

  1: {
    title: "Identify 5-10 different I's. Note how strong each I is for you(on a 1-10 scales with 1=weakest and 10=strongest), and what I would say in a few words.",
    type: t.struct({
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
        field: {
          item: {
            fields: {


              i: {

                placeholder: 'I'


              },
              strengthOfI: {

                placeholder: 'Strength Of "I"(scale of 1-10)'


              },
              whatIWouldSay: {

                placeholder: 'What I would say',
                type: 'textbox'

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
    }
  },
  2: {
    title: "Reflecting back on the day 5 list of Goals, pick several and briefly note how your ego aspects either hindered or aided you.",
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
          auto: 'placeholders',
          disableOrder: true,
          maxLines: 10,
          config: {
            maxLines: 10,
          },
        },
      }
    }
  },


};


