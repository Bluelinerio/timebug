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
      label:'What major P&E goals [BHAGs] do you envision or yourself by 2020?',
      item: {
        fields: {
          goal: {
            error:'Please fill out this field'
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
      label:'Your Bucket List can include simple goals as well – not everything has to be a monumental BHAG List out up to 10 items for your 2020 PE Bucket List',
      item:{
        fields:{
          bucketPEBHAG:{
            label:'Bucket PE BHAG',
            error:'Please fill out this field'
          },
          priority:{
            label:'Prioritize your BHAG with 1= most important, 2= second most important',
            error:'Please fill out this field'
          },
          timeSpent:{
            label:'Estimate how much time per year (2016-2020) you plan to spend on avg working toward this BHAG',
            error:'Please fill out this field'
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
      label:'Think about one other person in your life, who you want to see enjoy a major transformation in their PE surroundings.',
      fields:{
        who:{
          label:'Who?',
          error:'Please fill out this field'
        },
        howAttain:{
          label:'How do you want to see them attain those PE goals, making it happen by 2020?',
          error:'Please fill out this field'
        },
        howHelp:{
          label:'How can you help them achieve their PE goals?',
          error:'Please fill out this field'
        }
      }
    }
  },
  5:{
    type:t.String,
    options:{
      label:'What have you done by 2020 to heal and repair the relationships that you noted have regressed in the Day 17 Assignment?',
      auto:'none',
      error:'Please fill out this field'
    }
  },
  6:{
    type:t.String,
    options:{
      label:'List one wish that you have for the world or a particular sector of the world when it comes to personal aims and hobbies.',
      auto:'none',
      error:'Please fill out this field'
    }
  },
  7:{
    type:t.String,
    options:{
      label:'What advice would you give people who are on board with your wish – how can we all work together towards this aim in our personal lives?',
      auto:'none',
      error:'Please fill out this field'
    }
  },
  8:{
    type:t.String,
    options:{
      label:'How can you help, be it in any small way, to see this goal be achieved?',
      auto:'none',
      error:'Please fill out this field'
    }
  }
};