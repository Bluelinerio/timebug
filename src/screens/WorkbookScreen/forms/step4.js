import t from "../components/templates";
import { PillarsOfLife, InteractionFrequency } from "./contents";

export default {

    1: {
        type: t.struct({
          id:t.maybe(t.String),
          field: t.list(
            t.struct({
              boardMember: t.String,
              pillarsOfLife: PillarsOfLife,
              interactionFrequency: InteractionFrequency
             })
          )
        }),
        options: {
          fields: {
            id: {
              hidden: true
            },
            field: {
              label: "Who is on your Board of Advisors?",
              
              item: {
                fields:{
                  boardMember:{
                    auto:'placeholders',
                    //error: "Think about someone who's advice you would value regarding big decisions"
                  },
                  pillarsOfLife:{
                    auto:'labels',
                    //error: 'Assign this person to one of the 7 Timebug Life Categories'
                  },
                  interactionFrequency:{
                    auto:'labels',
                    //error: "How often do you interact with this person?"
                  }
                }

              },
              auto: 'placeholders',
              disableOrder: true,
              maxLines: 15,
              config: {
                maxLines: 15,
              },
            },
          }
        },
        value: {
          fields: {
            id:'step4+v0.0.0.1'
          }
        }
      },
      2: {
        type: t.struct({
          field: t.list(
            t.struct({
              supportGroup: t.String,
              pillarsOfLife: PillarsOfLife
             })
          )
        }),
        options: {
          fields: {
            field: {
              label: "List any current or potential support groups and meetups, formal or informal, that are a source of positive energy for you, in one or more domains of life.",        
              auto: 'placeholders',
              disableOrder: true,
              maxLines: 10,
              config: {
                maxLines: 10,
              },
              item: {
                fields: {
                  supportGroup: {
                    auto: 'placeholders'
                    //error: "Please enter the name of a support group"
                  },
                    pillarsOfLife:{
                      auto: 'labels'
                      //error: "Please select a Life Category."
                    }
                }
              }
            },
          }
        }
      }

};
