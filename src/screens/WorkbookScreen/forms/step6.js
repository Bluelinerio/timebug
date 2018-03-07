import t from '../components/templates';

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      goalsOfOthers: t.list(
        t.struct({
          significantOther: t.String,
          goals: t.String,
          supportPlan: t.String
        })
      )
    }),
    options: {
      label:
        "Who do you really care about (up to 3 people)?What are their goals (up to 5)? If you aren't sure, ask them.",
      fields: {
        id: {
          hidden: true
        },
        field: {
          disableOrder: true,
          maxLines: 5,
          config: {
            maxLines: 5
          },
          item: {
            fields: {
              significantOther: {
                /*error: 'Choose someone in your life who you want to, and are able to help.'*/
              },
              goals: {
                /*error:'Think about 3-5 goals you would like to help this person with.'*/
              },
              supportPlan: {
                label: 'How do you plan to support them?',
                multiline: true
              }
            }
          }
        }
      }
    },
    value: {
      id: 'step6+v0.0.0.1'
    }
  }
};
