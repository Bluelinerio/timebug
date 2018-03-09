import t from '../components/templates';
import { PillarsOfLife, AreaOfLife, AssessmentTypes } from './contents';

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
        id: 'step30+v0.0.0.1'
      }
    }
  },
  2: {
    type: t.struct({ 
      career: t.Number,
      aimsAndHobbies: t.Number,
      finances:t.Number,
      environment:t.Number,
      healthAndWellness:t.Number,
      spirituality:t.Number,
      relationships:t.Number
     }),
    options: {
      label:
        'Map out the next year of your life - 8,760 hrs (365 days x 24 hrs) according to the 7 Pillars of Life. Take a cue from Step 2 if needed and multiply by 52 to get your Annual Plan.',
      auto: 'labels'
    }
  },
  3: {
      type: t.struct({ 
        career: t.String,
        aimsAndHobbies: t.String,
        finances:t.String,
        environment:t.String,
        healthAndWellness:t.String,
        spirituality:t.String,
        relationships:t.String
       }),
    options: {
      label:
        'What do you feel most excited about, in terms of what you can get done with that chunk of time?',
    }
  },
  4:{type: t.struct({ 
    career: t.String,
    aimsAndHobbies: t.String,
    finances:t.String,
    environment:t.String,
    healthAndWellness:t.String,
    spirituality:t.String,
    relationships:t.String
   }),
options: {
  label:
    'What do you most fear?',
}

  }
};
