import t from "../components/templates";
import { LifeCategory, InteractionFrequency } from "./contents";

export default {

    1: {
        type: t.struct({
          id:t.maybe(t.String),
          field: t.list(
            t.struct({
              boardMember: t.String,
              lifeCategory: LifeCategory,
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
              label: "List 3-15 potential Board members who can positively impact different areas of your life.",
              
              item: {
                fields:{
                  boardMember:{
                    auto:'placeholders',
                    help: "Think about someone who's advice you would value regarding big decisions",
                    error:'Please fill out this field'
                  },
                  lifeCategory:{
                    auto:'labels',
                    help: 'Assign this person to one of the 7 Timebug Life Categories',
                    error:'Please select a Life Category'
                  },
                  interactionFrequency:{
                    auto:'labels',
                    help: "How often do you interact with this person?",
                    error:'Please select a value'
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
              lifeCategory: LifeCategory
             })
          )
        }),
        options: {
          fields: {
            field: {
              label: "Make a list (up to 10) of any current or potential support groups and meetups, formal or informal,  that are a source of positive energy for you, in one or more domains of life.",   
              
              auto: 'placeholders',
              disableOrder: true,
              maxLines: 10,
              config: {
                maxLines: 10,
              },
              item: {
                fields: {
                  supportGroup: {
                    error: "Please enter the name of a support group"
                  },
                    lifeCategory:{
                      error: "Please select a Life Category."
                    }
                }
              }
            },
          }
        }
      }

};