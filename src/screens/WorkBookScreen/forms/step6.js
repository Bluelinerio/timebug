import t from "../components/templates";

export default {

    1: {
        type: t.struct({
          id:t.maybe(t.String),
            field: t.list(
              t.struct({
                significantOther: t.String,
                goalOne:t.String,
                goalOneSupportPlan: t.String,
                goalOneTimeRequired: t.String,
                goalTwo:t.String,
                goalTwoSupportPlan: t.String,
                goalTwoTimeRequired: t.String,
                goalThree:t.String,
                goalThreeSupportPlan: t.String,
                goalThreeTimeRequired: t.String,
                goalFour: t.maybe(t.String),
                goalFourSupportPlan: t.maybe(t.String),
                goalFourTimeRequired: t.maybe(t.String),
                goalFive: t.maybe(t.String),
                goalFiveSupportPlan: t.maybe(t.String),
                goalFiveTimeRequired: t.maybe(t.String)
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
                  significantOther: {help: 'Choose someone in your life who you want to, and are able to help.', error: 'Please enter a name.'},
                  goalOne:{error: 'Please enter a goal.'},
                  goalOneSupportPlan: {help:'How will you help this goal to be achieved?', error: 'Please fill out this field.'},
                  goalOneTimeRequired: {help:'How much time will it require on your end?', error: 'Please fill out this field.'},
                  goalTwo:{error: 'Please enter a goal.'},
                  goalTwoSupportPlan: {help:'How will you help this goal to be achieved?',error: 'Please fill out this field.'},
                  goalTwoTimeRequired: {error: 'How much time will it require on your end?'},
                  goalThree:{error: 'Please enter a goal.'},
                  goalThreeSupportPlan: {help:'How will you help this goal to be achieved?',error: 'Please fill out this field.'},
                  goalThreeTimeRequired: {error: 'How much time will it require on your end?'}
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