import t from "../components/templates";
import { LifeCategory, InteractionFrequency } from "./contents";

export default {
      1: {
        type: t.struct({
          id:t.maybe(t.String),
            field: t.list(
                t.struct({
                    roleModel: t.String,
                    lifeCategory: LifeCategory,
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
              label: "Make a list of 2-10 role models and note their influencial life category, the degree to which you know/interact with them personally and the reason for why you look up to them.",
              
              item:{
                fields:{
                  roleModel: {
                    auto:'labels',
                    error:'Please enter the name of a Role Model.'
                  },
                  lifeCategory:{
                    auto:'labels',
                    error: 'Please select a Life Category.'
                  },
                  interactionFrequency:{
                    auto:'labels',
                    error: 'How often do you interact with this person?'
                  },
                  why: {
                    label:'Why?'
                    error:'Why would this person make a good role model for you?'
                  }
                }
              },
                
              auto: 'labels',
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