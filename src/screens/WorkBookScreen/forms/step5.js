import t from "../components/templates";
import { GoalTypes } from "./contents";

export default {

    1: {
        type: t.struct({
          id:t.maybe(t.String),
            field: t.list(
                t.struct({
                    goal: t.String,
                    goalTypes: GoalTypes
                 })
              )
        }),
        options: {
          fields: {
            id: {
              hidden:true
            },
            field: {
              label: "Make a list of 10 recent goals and classify them according to the 7 Goal Types",              
              item:{
                goal:{auto:'labels', error:'Please fill out this field'},
                goalTypes:{auto:'labels', error:'Please select a Goal Type'}
              },
              auto:'placeholders',
              disableOrder: true,
              maxLines: 10,
              config: {
                maxLines: 10,
              },
            },
          }
        },
        value:{
          id:'step5+v0.0.0.1'
        }
      }
};