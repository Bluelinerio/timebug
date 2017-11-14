import t from "../components/templates";


export default {
  1: {
    title: 'Did you do your MANTRA today(assigned on Day 21)?',
    type: t.struct({
      yes: t.Boolean,
      no: t.Boolean
    }),
    options: {
      auto: 'labels'
    }
  },
  2: {
    title: 'Did you EXERCISE and meditate yet today(assigned on Day 8)?',
    type: t.struct({
      yes: t.Boolean,
      no: t.Boolean
    }),
    options: {
      auto: 'labels'
    }
  },
  3: {
    title: 'Did you MEDITATE yet today(assigned on Day 8)?',
    type: t.struct({
      yes: t.Boolean,
      no: t.Boolean
    }),
    options: {
      auto: 'labels'
    }
  },
  4: {
    title:'What major P&E goals [BHAGs] do you envision or yourself by 2020?',
    type:t.list(
      t.struct({
        goal:t.String
      })
    )
  },
  5:{
    title:'Your Bucket List can include simple goals as well – not everything has to be a monumental BHAG List out up to 10 items for your 2020 PE Bucket List',
    type:t.list(
      t.struct({
        bucketPEBHAG:t.String,
        priority:t.Number,
        timeSpent:t.String
      })
    ),
    options:{
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
    title:'Think about one other person in your life, who you want to see enjoy a major transformation in their PE surroundings.',
    type:t.struct({
      who:t.String,
      howAttain:t.String,
      howHelp:t.String
    }),
    options:{
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
    title:'What have you done by 2020 to heal and repair the relationships that you noted have regressed in the Day 17 Assignment?',
    type:t.String,
    options:{
      auto:'none'
    }
  },
  8:{
    title:'List one wish that you have for the world or a particular sector of the world when it comes to personal aims and hobbies.',
    type:t.String,
    options:{
      auto:'none'
    }
  },
  9:{
    title:'What advice would you give people who are on board with your wish – how can we all work together towards this aim in our personal lives?',
    type:t.String,
    options:{
      auto:'none'
    }
  },
  10:{
    title:'How can you help, be it in any small way, to see this goal be achieved?',
    type:t.String,
    options:{
      auto:'none'
    }
  }
};