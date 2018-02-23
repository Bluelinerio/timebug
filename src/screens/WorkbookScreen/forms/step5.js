import t from "../components/templates";
import { GoalTypes } from "./contents";

export default {

  1: {
    type: t.struct({
      id: t.maybe(t.String),
      goals: t.list(
        t.struct({
          goal: t.String,
          goalTypes: GoalTypes
        })
      )
    }),
    options: {
      label: "What are some of your recent goals? Classify them according to the 7 Goal Types.",
      fields: {
        id: {
          hidden: true
        },
        goals: {
          item: {
            fields: {
              goal: { auto: 'labels' }, //error:'Please enter a goal'},
              goalTypes: { auto: 'labels' } //error:'Please select a Goal Type'}
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
    value: {
      id: 'step5+v0.0.0.1'
    }
  }
};
