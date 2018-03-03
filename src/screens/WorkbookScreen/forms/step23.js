import t from '../components/templates';
import { OneToTenScale, TimeSpent } from './contents';

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      mantraAnswer: t.Boolean,
      exerciseAnswer: t.Boolean,
      meditateAnswer: t.Boolean
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
          label: 'Did you exercise and meditate yet today(assigned on Day 8)?'
        },
        meditateAnswer: {
          label: 'Did you MEDITATE yet today(assigned on Day 8)?'
        }
      }
    },
    value: {
      fields: {
        id: 'step23+v0.0.0.1'
      }
    }
  },
  2: {
    type: t.struct({
      changeJobs: t.String,
      changesNeeded: t.String
    }),
    options: {
      label:
        'If you could change jobs, and do something totally new, what would it be?',
      auto: 'none',
      fields: {
        changesNeeded: {
          label:
            'Reflecting back on exercise 13, what changes would you need to make in your career to increase your fulfillment and motivation levels to 10 (Extremely fufilled/motivated)?',
          multiline: true
        }
      }
    }
  },
  3: {
    type: t.struct({
      BHAGS: t.list(t.String)
    }),
    options: {
      label:
        'Back on Step 21, you were asked to list your Big Hairy Audacious Goals (BHAGs). Focusing on Career only now, take that a step further by adding 3-5 more Career BHAGs.'
    }
  },
  4: {
    type: t.struct({
      id: t.maybe(t.String),
      field: t.list(
        t.struct({
          skill: t.String,
          whatWillYouDo: t.String,
          timePerWeek: TimeSpent
        })
      )
    }),
    options: {
      label:
        'Also on Step 21, you thought about the specific skills that you are looking to build over the next 5 years. Go deeper now, with a career focus, what 3-5 career specific skills do you plan to develop?',

      fields: {
        id: {
          hidden: true
        },
        field: {
          item: {
            fields: {
              skill: {
                label: 'Skill'
              },
              whatWillYouDo: {
                label: 'What will you do this year to develop this skill?'
              },
              timePerWeek: {
                label: 'How much time per week will you dedicate to this?'
              }
            }
          }
        }
      }
    }
  },
  5: {
    type: t.struct({ hours: t.Number }),
    options: {
      label:
        'The average worker spends 40 hrs * 50 weeks working = 2,000 hours. How many hours will you spend working this year? #Workbug'
    }
  }
};
