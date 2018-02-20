import t from "../components/templates";
import { OneToTenScale } from "./contents";


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
          label:'What activity and hobby goals will you achieve 5 years from now?',
            item: {         
            fields: {
              goals: {
                label: 'Goal'
              },
              importanceLevel: {
             label: 'Prioritize the items of the list using 1 = the most important, 2 = second most important etc.',          
              },
              timeSpent: {
                label: 'How many hours per month do you plan to spend, on average, on this activity?'
              }
            }
          }
        }
      },
    }
  },
  3: {
    type: t.String,
    options: {
      label: 'Which areas in your personal time will you cut down on or out completely?'
    }
  },
  4: {
    type: t.String,
    options: {
      label: 'Who you want to see enjoy more time for themselves, doing the things that you know would make them happy?'
    }
  },
  5: {
    type: t.String,
    options: {
      label: 'How will you help them attain those personal goals 5 years from now?',
      multiline: true
    }
  },
  6: {
    type: t.String,
    options :{
      label: "What's one wish that you have for the world or a particular sector of the world relating to personal aims and hobbies?"
    }
  },
  7: {
    type: t.String,
    options: {
      label: 'What advice would you give people who are on board with your wish- how can we all work together towards this aim in our personal lives?',
      error: 'Please fill out this field.'
    }
  },
  8: {
    type: t.String,
    options: {
      label: 'How can you help encourage others to help actualize this world goal?'
    }
  },
  9: {
    type: t.String,
    options: {
      label: 'How can you help, be it in any small way, to see this goal be achieved?'
    }
  }
};
