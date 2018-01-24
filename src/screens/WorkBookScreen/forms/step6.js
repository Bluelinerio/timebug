import t from "../components/templates";

export default {

    1: {
        type: t.struct({
          id:t.maybe(t.String),
            field: t.list(
              t.struct({
                significantOther: t.String,
                goals:t.String,
                supportPlan: t.String
              })
            )
        }),
        options: {
          fields: {
            id: {
              hidden: true
            },
            field: {
              label: "Choose 3-5 people who you really care about and write down 3-5 of their goals. Determine how you can support them and how much time you estimate it will require.",              
              auto:'placeholders',
              disableOrder: true,
              maxLines: 5,
              config: {
                maxLines: 5,
              },
              item: {
                fields: {
                  significantOther: {error: 'Choose someone in your life who you want to, and are able to help.'},
                  goals:{error:'Think about 3-5 goals you would like to help this person with.'},
                  supportPlan: {error:'How will you help with these goals, and how much time will it require?'}
                }
              }
            },
          }
        },
        value: {
          id:'step6+v0.0.0.1'
        }
      }
};