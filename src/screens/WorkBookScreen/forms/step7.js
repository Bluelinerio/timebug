import t from "../components/templates";
import { CommonGoalOutcomes } from "./contents";

export default {
    1: {
        type: t.struct({
          id:t.maybe(t.String),
            field: t.list(
                t.struct({
                    goal: t.String,
                    commonGoalOutcomes: CommonGoalOutcomes
                 })
              )
        }),
        options: {
          fields: {
            id: {
              hidden: true
            },
            field: {
              label: "Using the same Day 5 goals, make a list of 10-15 goals and classify them according to the 7 Outcomes.",              
              auto:'placeholders',
              disableOrder: true,
              maxLines: 15,
              config: {
                maxLines: 15,
              },
              item: {
               fields: {
                 goal:{error: 'Please fill out this field.'},
                 commonGoalOutcomes:{error: 'Please select a value.'}
               } 
              }
            },
          }
        },
        value: {
          fields: {
            id:'step7+v0.0.0.1'
          }
        }
      },
    2: {
        type: t.struct({
                observations: t.String              
        }),
        options: {
          fields: {
            observations: {
              error: 'Please fill out this field.',
              label:"Write down a few observations about any patterns that emerge, and what you believe is behind them.",       
              auto:'placeholders',
              disableOrder: true
            },
          }
        }
      }  
};