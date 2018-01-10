import t from "../components/templates";



export default {
  1: { 
    type: t.struct({
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
        id: 'step25+v0.0.0.1'
      }
    }
  },
  2: {
    type: t.struct({
      aims: t.String,
      abletoAttain: t.String
    }),
    options: {

      auto:'none',
      label: "The Year is 2020. Reflect on Day 15's assignment (Q3), and the Personal Aims that you were not able to achieve.",
      fields: {
        aims: {
          label: 'Were those Aims on your 2020 Bucket List?'
        },
        abletoAttain: {
          label: 'Why were you able to attain those goals and make time for those hobbies?'
        }
      }
    }
  },
  3: {
    type: t.struct({
      field: t.list(
        t.struct({
          goal: t.String
        })
      ),
    }),
    options: {
      fields: {
        field: {
          label: 'List any other new goals for your 2020 List',
          item: {
            fields: {
              goal: {
                placeholder: 'Goal'
              }
            }
          }
        }
      },
    }
  },
  4: {
    type: t.struct({
      field: t.list(
        t.struct({
          bucketListPriorty: t.String,
          importanceLevel: t.Number,
          timeSpent: t.String
        })
      ),
    }),
    options: {
      fields: {
        field: {
          label: 'Prioritize the items of the list using 1 = the most important, 2 = second most important etc.',          
          auto: "placeholders"
        }
      },
    }
  },
  5: {
    type: t.String,
    options: {
      label: 'Looking back from 2020 to 2016, which areas in your personal time have you cut down on or out completely?',
    }
  },
  6: {
    type: t.String,
    options: {
      label: 'Think about one other person in your life, who you want to see enjoy more time for themselves, doing the things that you know would make them happy. Who is it?',
    }
  },
  7: {
    type: t.String,
    options: {
      label: 'How do you want to see them attain those personal goals, making it happen by 2020?',
    }
  },
  8: {
    type: t.String,
    options: {
      label: 'How can you help him/her achieve his/her personal goals?',
    }
  },
  9: {
    type: t.String,
    options :{
      label: 'List one wish that you have for the world or a particular sector of the world when it comes to personal aims and hobbies.',
    }
  },
  10: {
    type: t.String,
    options: {
      label: 'What advice would you give people who are on board with your wish- how can we all work together towards this aim in our personal lives?',
    }
  },
  11: {
    type: t.String,
    options: {
      label: 'How can you help, be it in any small way, to see this goal be achieved?',
    }
  }
};