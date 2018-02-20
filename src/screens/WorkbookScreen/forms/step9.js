import t from "../components/templates";
import { PillarsOfLife, InteractionFrequency } from "./contents";

export default {
      1: {
        type: t.struct({
          id:t.maybe(t.String),
            field: t.list(
                t.struct({
                    roleModel: t.String,
                    pillarsOfLife: PillarsOfLife,
                    interactionFrequency: InteractionFrequency,
                    why: t.String
                 })
              )
        }),
        options: {
                    fields: {
            id: {
              hidden: true
            },
            
            field: {
              label: 'Who are your current role models?',
               item:{
                fields:{
                  roleModel: {
                    auto:'labels',
                  //  error:'Please enter the name of a Role Model.'
                  },
                  pillarsOfLife:{
                    label:'What Life Category does he/she primarily influence?',
                    //error: 'Please select a Life Category.'
                  },
                  interactionFrequency:{
                    label:'To what degree do you know and interact with this Advisor personally?',
                    //error: 'How often do you interact with this person?'
                  },
                  why: {
                    label:'Why do you look up to this Advisor? What do you want to learn from them?',
                    multiline:true
                    //error:'Why would this person make a good role model for you?'
                  }
                }
              },               
              disableOrder: true,
              maxLines: 10,
              config: {
                maxLines: 10,
              },
            },
          }
        },
        value : {
          fields: {
            id: 'step9+v0.0.0.1'
          }
        }
      }

};
