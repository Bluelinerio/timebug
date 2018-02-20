import t from "../components/templates";


export default {
  1: { type: t.struct({
    id: t.maybe(t.String),
    mantraAnswer: t.Boolean,
    exerciseAnswer: t.Boolean,
    meditateAnswer: t.Boolean,
    }),
    options: {
      fields: {
        id: {
          hidden: true
        },
        mantraAnswer: {
          label: 'Did you do your mantra today (assigned on Day 21)?'
        },
        exerciseAnswer: {
          label: 'Did you exercise and meditate yet today(assigned on Day 8)?',
        },
        meditateAnswer: {
          label: 'Did you MEDITATE yet today(assigned on Day 8)?'
        }
      },
    },
    value : {
      fields: {
        id: 'step28+v0.0.0.1'
      }
    }
  },
  2: {
    type:t.list(
      t.struct({
        goal:t.String
      })
    ),
    options: {
      label:'What major goals [BHAGs] do you envision for yourself 5 years from now?',
      item: {
        fields: {
          goal: {
            auto:'Placeholders'
          }
        }
      }
    }
  },
  3:{
    type:t.list(
      t.struct({
        bucketPEBHAG:t.String,
        priority:t.Number,
        timeSpent:t.String
      })
    ),
    options:{
      label:"What's on your 2020 place and environment bucket list?",
      item:{
        fields:{
          bucketPEBHAG:{
            label:'Bucket PE BHAG'
          },
          priority:{
            label:'How do you rank each bucket list item in terms of priority (1= Low priority and 10= High priority)?'
          },
          timeSpent:{
            label:'How much time per year (for each of the next 5 years) will you spend, on average, working towards this goal?'
          }
        }
      }
    }
  },
  4:{
    type:t.struct({
      who:t.String,
      howAttain:t.String,
      howHelp:t.String
    }),
    options:{
      fields:{
        who:{
          label:'Who in your life do you want to enjoy a major transformation in their place and environment surroundings?'
        },
        howAttain:{
          label:'What do you want them to accomplish 5 years from now?'
        },
        howHelp:{
          label:'How will you help them make it happen by Year 5?'
        }
      }
    }
  },
  5:{
    type:t.String,
    options:{
      label:'What’s your place and environment wish for the world or a particular sector of the world?',
      auto:'none',

    }
  },
  6:{
    type:t.String,
    options:{
      label:'How can you help, be it in any small way, accomplish this goal?',
      auto:'none',
      multiline:true
    }
  }
};
