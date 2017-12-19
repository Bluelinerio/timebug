import t from "../components/templates";

export default {

    1: {
        title: "Choose 3-5 people who you really care about and write down 3-5 of their goals. Determine how you can support them and how much time you estimate it will require.",
        type: t.struct({
          id:t.maybe(t.String),
            field: t.list(
                t.struct({
                    significantOther: t.String,
                    goals: t.list(
                      t.struct({
                        goal: t.String,
                        supportPlan: t.String,
                        timeRequired: t.String
                      })
                    )
                            /*goalOne:t.String,
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
                            goalFiveTimeRequired: t.maybe(t.String)*/
                           
                 })
              )

}),
        options: {
          fields: {
            id: {
              hidden: true
            },
            field: {
              auto:'placeholders',
              disableOrder: true,
              maxLines: 5,
              config: {
                maxLines: 5,
              },
            },
          }
        },
        value: {
          id:'step6+v0.0.0.1'
        }
      }
};