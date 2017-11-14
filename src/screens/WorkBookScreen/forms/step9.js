import t from "../components/templates";
import { LifeCategory, InteractionFrequency } from "./contents";

export default {

      1: {
        title: "Make a list of 2-10 role models and note their influencial life category, the degree to which you know/interact with them personally and the reason for why you look up to them.",
        type: t.struct({
            id: t.String,
            field: t.list(
                t.struct({
                    roleModel: t.String,
                    lifeCategory: LifeCategory,
                    interactionFrequency: InteractionFrequency,
                    why: t.maybe(t.String)
                 })
              )
        }),
        options: {
          fields: {
            id: {
              hidden: true
            },
              
            field: {
                
              auto: 'placeholders',
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