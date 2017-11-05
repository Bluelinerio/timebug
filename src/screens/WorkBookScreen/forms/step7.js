import t from "../components/templates";
import { CommonGoalOutcomes } from "./contents";

export default {

    1: {
        title: "Using the same Day 5 goals, make a list of 10-15 goals and classify them according to the 7 Outcomes.",
        type: t.struct({
            field: t.list(
                t.struct({
                    goal: t.String,
                    commonGoalOutcomes: CommonGoalOutcomes
                 })
              )
        }),
        options: {
          fields: {
            field: {
              auto:'placeholders',
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
        title:"Write down a few observations about any patterns that emerge, and what you believe is behind them.",
        type: t.struct({
                observations: t.String
                 
        }),
        options: {
          fields: {
            observations: {
                 type: 'textarea' 
            },
            field: {
              auto:'placeholders',
              disableOrder: true,
            },
          }
        }

      }  
};