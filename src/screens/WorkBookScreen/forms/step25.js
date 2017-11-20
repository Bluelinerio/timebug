import t from "../components/templates";



export default {
  1: {
    title: 'Did you do your MANTRA today(assigned on Day 21)?',
    type: t.struct({
      id:t.maybe(t.String),
      yes: t.Boolean,
      no: t.Boolean
    }),
    options: {
      fields: {
        id: {
          hidden: true
        }
      },
      auto: 'labels'
    },
    value: {
      fields: {
        id:'step25+v0.0.0.1'
      }
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
    title: "The Year is 2020. Reflect on Day 15's assignment (Q3), and the Personal Aims that you were not able to achieve.",
    type: t.struct({
      aims: t.String,
      abletoAttain: t.String
    }),
    options: {
      fields: {
        aim: {
          label: 'Were those Aims on your 2020 Bucket List?'
        },
        abletoAttain: {
          label: 'Why were you able to attain those goals and make time for those hobbies?'
        }
      }
    }
  },
  5: {
    title: 'List any other new goals for your 2020 List',
    type: t.list(
      t.struct({
        goal: t.String
      })

    ),
    options: {
      item: {
        fields: {
          goal: {

            placeholder: 'Goal'
          }
        }


      }
    }
  },
  6: {
    title: 'Prioritize the items of the list using 1= the most important, 2= second most important etc.',
    type: t.list(
      t.struct({
        bucketListPriorty: t.String,
        importanceLevel: t.String,
        timeSpent: t.String
      })
    ),
    options: {
      auto: "placeholders"
    }
  },
  7: {
    title: 'Looking back from 2020 to 2016, which areas in your personal time have you cut down on or out completely?',
    type: t.String
  },
  8: {
    title: 'Think about one other person in your life, who you want to see enjoy more time for themselves, doing the things that you know would make them happy. Who is it?',
    type: t.String
  },
  9: {
    title: 'How do you want to see them attain those personal goals, making it happen by 2020?',
    type: t.String
  },
  10: {
    title: 'How can you help him/her achieve his/her personal goals?',
    type: t.String
  },
  11: {
    title: 'List one wish that you have for the world or a particular sector of the world when it comes to personal aims and hobbies.',
    type: t.String
  },
  12: {
    title: 'What advice would you give people who are on board with your wish- how can we all work together towards this aim in our personal lives.',
    type: t.String
  },
  13: {
    title: 'How can you help, be it in any small way, to see this goal be achieved?',
    type: t.String
  }
};