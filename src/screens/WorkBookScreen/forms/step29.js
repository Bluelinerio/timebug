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
        teammate:t.String,
        howConnect:t.String
      })
    ),
    options:{
      label:'List 3-10 Spiritual “teammates”,and write a few notes about how you plan to connect with them this coming year.',
      item:{
        fields:{
          teammate:{
            label:'Spiritual Teammate'
          },
          howConnect:{
            label:'How will you connect with him/her?'
          }
        }
      }
    }
  },
  5:{
    type:t.list(
      t.struct({
        goal:t.String
      })
    ),
    options: {
      label:'What major goals [BHAGs] do you envision for yourself by 2020? [i.e. doing a 10-day meditation retreat; fasting for 30 days; writing down your deepest feelings and thoughts in a journal every day for a whole year, etc.].',
    }
  },
  6:{
    type:t.list(
      t.struct({
        bucketPEBHAG:t.String,
        priority:t.Number,
        timeSpent:t.maybe(t.String)
      })
    ),
    options:{
      label:'List out up to 10 items for your 2020 Spirituality Bucket List [i.e. reading specific philosophy, self-help or religious books; visiting sacred sites; etc].',
      item:{
        fields:{
          bucketPEBHAG:{
            label:'Spirituality Bucket List'
          },
          priority:{
            label:'Prioritize your Spirituality BHAG with 1= most important, 2= second most important'
          },
          timeSpent:{
            label:'Estimate how much time per year (2016-2020) you plan to spend on avg working toward this BHAG'
          }
        }
      }
    }
  },
  7:{
    type:t.list(
      t.struct({
        i:t.String,
        willEvolve:t.String,
        saysNow:t.String,
        willSay:t.maybe(t.String)
      })
    ),
    options:{
      label:'List out up to 10 items for your 2020 Spirituality Bucket List [i.e. reading specific philosophy, self-help or religious books; visiting sacred sites; etc].',
      item:{
        fields:{
          i:{
            label:'I(ego Aspect)'
          },
          willEvolve:{
            label:'How will this I evolve in 2020?'
          },
          saysNow:{
            label:'What this I says now'
          },
          willSay:{
            label:'What this I will say in 2020'
          }
        }
      }
    }
  },
  8:{
    type:t.String,
    options:{
      label:'Think about one other person in your life, who you want to see enjoy a major transformation or sense of peace and internal happiness in their lives. Who is it?',
      auto:'none'
    }
  },
  9:{
    type:t.String,
    options:{
      label:'How do you want to see them attain those inner journey goals, making it happen by 2020?',
      auto:'none'
    }
  },
  10:{
    type:t.String,
    options:{
      label:'How can you help them achieve their Spiritual goals?',
      auto:'none'
    }
  },
  11:{
    type:t.String,
    options:{
      label:'List one wish that you have for the world or a particular sector of the world when it comes to Spirituality (i.e. World Inner Peace).',
      auto:'none'
    }
  },
  12:{
    type:t.String,
    options:{
      label:'How can you help, be it in any small way, to see this goal be achieved? (Hint: start with yourself and in  your own circle of family  and friends, with things that you have direct influence on).',
      auto:'none'
    }
  }
};