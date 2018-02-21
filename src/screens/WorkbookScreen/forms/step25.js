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
      label: '20/20 Life Vision Check-in',      
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
      goals: t.list(
        t.struct({
          goal: t.String,
          importanceLevel: t.Number,
          timeSpent: t.String
        })
      ),
    }),
    options: {
      label:'What activity and hobby goals will you achieve 5 years from now?',      
      fields: {
        goals: {
            item: {         
            fields: {
              goal: {
                label: 'Goal'
              },
              importanceLevel: {
             label: 'Prioritize the item',
             help:'1 = the most important, 2 = second most important etc.'        
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
    type: t.struct({
      areasCutDown:t.String,
      whoToHelp:t.String,
      howWillYouHelp:t.String
    }),
    options: {
      label:'Vision Creation:Aims and Hobbies',
      fields: {
        areasCutDown:{
      label: 'Which areas in your personal time will you cut down on or out completely?'
        },
        whoToHelp: {
          label: 'Who do you want to see enjoy more time for themselves, doing the things that you know would make them happy?'          
        },
        howWillYouHelp: {
          label: 'How will you help them attain those personal goals 5 years from now?',
          multiline: true
        }
      }
    }
  },
  4: {
    type: t.struct({
      oneWish:t.String,
      whatAdvice:t.String,
      howHelpWorld:t.String,
      howHelpOthers:t.String
    }),
    options:{
      label:'Vision Creation:Aims and Hobbies',
      fields: {
        oneWish: {
          label: "What's one wish that you have for the world or a particular sector of the world relating to personal aims and hobbies?"          
        },
        whatAdvice: {
          label: 'What advice would you give people who are on board with your wish- how can we all work together towards this aim in our personal lives?'          
        },
        howHelpWorld: {
          label: 'How can you help encourage others to help actualize this world goal?'          
        },
        howHelpOthers: {
          label: 'How can you help, be it in any small way, to see this goal be achieved?'          
        }
      }
    }
  }
};
