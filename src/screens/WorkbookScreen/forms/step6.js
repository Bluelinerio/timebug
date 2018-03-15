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
        "Goals of Others",
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
                label:'Who would you like to help in your life?'
                /*error: 'Choose someone in your life who you want to, and are able to help.'*/
              },
              goals: {
                label:'What are his/her goals?',
                multiline:true
                /*error:'Think about 3-5 goals you would like to help this person with.'*/
              },
              supportPlan: {
                label: 'How specifically do you plan to help him/her?',
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
