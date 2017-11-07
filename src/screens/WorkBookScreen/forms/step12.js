import t from "../components/templates";
import { MajorLifeEvents } from "./contents";

export default {

  1: {
    title: "Specify what MLEs took placer over the past 5 years. Working with your Day 2 worksheet,specify how your time was generally shifted as a result.",
    type: t.struct({
      field: t.list(
        t.struct({
          majorLifeEvent: MajorLifeEvents,
          timeShift: t.String
        })
      )
    }),
    options: {
      fields: {
        field: {
          item: {
            fields: {

              timeShift: {
                placeholder: 'How did this shift your time?'
              },
              majorLifeEvent: {
                label: 'Major Life Event'
              },


            },
          },
          auto: 'none',
          disableOrder: true,
          maxLines: 15,
          config: {
            maxLines: 15,
          },
        },
      }
    }
  },
  2: {
    title: "Building on or refining Question 1 form Day 11, how did those MLEs factor in - positively and negatively - to your goals over the past 5 years?",
    type: t.struct({
      emotionalResponse: t.String,
      internalEnergyInfluence: t.String
    }),
    options: {
      fields: {
        emotionalResponse: {
          auto:'none',
          label:'Emotional/Mental Response'
        },
        internalEnergyInfluence: {
          auto:'none',
          label:'Internal Energy Influence'
        },
    }
    }
  }

};


