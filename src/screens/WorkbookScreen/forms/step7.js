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
          label: "What are 5 of your goals from the past 5 years?",              
          auto:'placeholders',
          disableOrder: true,
          maxLines: 15,
          config: {
            maxLines: 15,
          },
          item: {
            fields: {
              //goal:{error: 'Please enter a goal.'},
              commonGoalOutcomes:{label: 'Classify this goal according to the 7 Common Goal Outcomes listed below.'}
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
      patterns: t.String
    }),
    options: {
      fields: {
        label:"Have you noticed any patterns? Have any guesses as to the reasons underlying such patterns?",
        multiline: true
      }
    }
  }  
};
