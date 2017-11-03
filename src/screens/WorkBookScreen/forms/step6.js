import t from "../components/templates";

export default {

    1: {
        title: "Choose 3-5 people who you really care about and write down 3-5 of their goals. Determine how you can support them and how much time you estimate it will require.",
        type: t.struct({
            field: t.list(
                t.struct({
                    significantOther: t.String,
                            goalOne:t.String,
                            goalOneSupportPlan: t.String,
                            goalOneTime: t.String,
                            goalTwo:t.String,
                            goalTwoSupportPlan: t.String,
                            goalTwoTime: t.String,
                            goalThree:t.String,
                            goalThreeSupportPlan: t.String,
                            goalThreeTime: t.String,
                            goalFour: t.maybe(t.String),
                            goalFourSupportPlan: t.maybe(t.String),
                            goalFourTime: t.maybe(t.String),
                            goalFive: t.maybe(t.String),
                            goalFiveSupportPlan: t.maybe(t.String),
                            goalFiveTime: t.maybe(t.String)
                           
                 })
              )

}),
        options: {
          fields: {
            field: {
              auto:'placeholders',
              disableOrder: true,
              maxLines: 5,
              config: {
                maxLines: 5,
              },
            },
          }
        }
      }
};