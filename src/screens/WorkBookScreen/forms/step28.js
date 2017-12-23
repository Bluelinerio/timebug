import t from "../components/templates";


export default {
  1: {
    type: t.struct({
      id:t.maybe(t.String),
      yes: t.Boolean,
      no: t.Boolean
    }),
    options: {
      label: 'Did you do your MANTRA today(assigned on Day 21)?',
      fields: {
        id: {
          hidden: true
        }
      },
      auto: 'labels'
    },
    value : {
      fields: {
        id: 'step28+v0.0.0.1'
      }
    }
  },
  2: {
    type: t.struct({
      yes: t.Boolean,
      no: t.Boolean
    }),
    options: {
      label: 'Did you EXERCISE and meditate yet today(assigned on Day 8)?',
      auto: 'labels'
    }
  },
  3: {
    type: t.struct({
      yes: t.Boolean,
      no: t.Boolean
    }),
    options: {
      label: 'Did you MEDITATE yet today(assigned on Day 8)?',
      auto: 'labels'
    }
  },
  4: {
    type:t.list(
      t.struct({
        goal:t.String
      })
    ),
    options: {
      label:'What major P&E goals [BHAGs] do you envision or yourself by 2020?',
    }
  },
  5:{
    type:t.list(
      t.struct({
        bucketPEBHAG:t.String,
        priority:t.Number,
        timeSpent:t.maybe(t.String)
      })
    ),
    options:{
      label:'Your Bucket List can include simple goals as well – not everything has to be a monumental BHAG List out up to 10 items for your 2020 PE Bucket List',
      item:{
        fields:{
          bucketPEBHAG:{
            label:'Bucket PE BHAGs'
          },
          priority:{
            label:'Prioritize your BHAG with 1= most important, 2= second most important'
          },
          timeSpent:{
            label:'Estimate how much time per year (2016-2020) you plan to spend on avg working toward this BHAG'
          }
        }
      }
    }
  },
  6:{
    type:t.struct({
      who:t.String,
      howAttain:t.String,
      howHelp:t.String
    }),
    options:{
      label:'Think about one other person in your life, who you want to see enjoy a major transformation in their PE surroundings.',
      fields:{
        who:{
          label:'Who?'
        },
        howAttain:{
          label:'How do you want to see them attain those PE goals, making it happen by 2020?'
        },
        howHelp:{
          label:'How can you help them achieve their PE goals?'
        }
      }
    }
  },
  7:{
    type:t.String,
    options:{
      label:'What have you done by 2020 to heal and repair the relationships that you noted have regressed in the Day 17 Assignment?',
      auto:'none'
    }
  },
  8:{
    type:t.String,
    options:{
      label:'List one wish that you have for the world or a particular sector of the world when it comes to personal aims and hobbies.',
      auto:'none'
    }
  },
  9:{
    type:t.String,
    options:{
      label:'What advice would you give people who are on board with your wish – how can we all work together towards this aim in our personal lives?',
      auto:'none'
    }
  },
  10:{
    type:t.String,
    options:{
      label:'How can you help, be it in any small way, to see this goal be achieved?',
      auto:'none'
    }
  }
};