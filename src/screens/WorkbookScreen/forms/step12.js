import t from "../components/templates";
import { MajorLifeEvents, TimeShift, IncreaseDecrease } from "./contents";

export default {

  1: {
    type: t.struct({
      id:t.maybe(t.String),
      field: t.list(
        t.struct({
          majorLifeEvent: MajorLifeEvents,
          postiveOrNegative: t.String,
          increaseDecrease:IncreaseDecrease
        })
      )
    }),
    options: {
     fields: {
        id: {
          hidden:true
        },
        field: {
          label: "What MLEs happened to you over the past 5 years?",          
          item: {
            fields: {

              postiveOrNegative: {
                label:'How did those MLEs factor in – positively and negatively – to your goals over the past 5 years?'
              },
              majorLifeEvent: {
                label: 'Major Life Event'
                //error:'Please select a Major Life Event'
              },
              increaseDecrease: {
                label:'Did these MLEs increase, decrease or do nothing to your Internal Energy Production?',
      
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
  }

};


