import t from "../components/templates";
import { LifeCategory, InteractionFrequency } from "./contents";

export default {

    1: {
        title: "List 3-15 potential Board members who can positively impact different areas of your life.",
        type: t.struct({
          id:t.String,
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
        title: "Make a list (up to 10) of any current or potential support groups and meetups, formal or informal,  that are a source of positive energy for you, in one or more domains of life.",
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
              auto: 'placeholders',
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