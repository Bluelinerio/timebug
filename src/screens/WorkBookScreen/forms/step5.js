import t from "../components/templates";
import { GoalTypes } from "./contents";

export default {

    1: {
        title: "Make a list of 10 recent goals and classify them according to the 7 Goal Types",
        type: t.struct({
            field: t.list(
                t.struct({
                    goal: t.String,
                    goalTypes: GoalTypes
                 })
              )
        }),
        options: {
          fields: {
            field: {
              auto:'placeholders',
              disableOrder: true,
              maxLines: 10,
              config: {
                maxLines: 10,
              },
            },
          }
        }
      }
};