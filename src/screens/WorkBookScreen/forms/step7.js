import t from "../components/templates";
import { CommonGoalOutcomes } from "./contents";

export default {

    1: {
        title: "Using the same Day 5 goals, make a list of 10-15 goals and classify them according to the 7 Outcomes.",
        type: t.struct({
          id: t.String,
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
              auto:'placeholders',
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
            id:'step7+v0.0.0.1'
          }
        }
      },
    2: {
        title:"Write down a few observations about any patterns that emerge, and what you believe is behind them.",
        type: t.struct({
                observations: t.String
                 
        }),
        options: {
          fields: {
            observations: {
           
                 type: 'textarea', 
              auto:'placeholders',
              disableOrder: true,
            },
          }
        }

      }  
};