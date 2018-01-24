import t from "../components/templates";
import { MajorLifeEvents, TimeShift } from "./contents";

export default {

  1: {
    type: t.struct({
      id:t.maybe(t.String),
      field: t.list(
        t.struct({
          majorLifeEvent: MajorLifeEvents,
          timeShift: TimeShift
        })
      )
    }),
    options: {
     fields: {
        id: {
          hidden:true
        },
        field: {
          label: "Specify what MLEs took placer over the past 5 years. Working with your Day 2 worksheet,specify how your time was generally shifted as a result.",          
          item: {
            fields: {

              timeShift: {
                error:'How did the event shift your time?'
              },
              majorLifeEvent: {
                label: 'Major Life Event',
                error:'Please select a Major Life Event'
              }


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
    },
    value : {
      fields: {
        id: 'step12+v0.0.0.1'
      }
    }
  },
  2: {
    type: t.struct({
      emotionalResponse: t.String,
      internalEnergyInfluence: t.String
    }),
    options: {
      label: "Building on or refining Question 1 form Day 11, how did those MLEs factor in - positively and negatively - to your goals over the past 5 years?",
      fields: {
        emotionalResponse: {
          auto:'none',
          label:'Emotional/Mental Response',
          error:'Please fill out this field.'
        },
        internalEnergyInfluence: {
          auto:'none',
          label:'Internal Energy Influence',
          error:'Please fill out this field.'
        },
      }
    }
  }

};


