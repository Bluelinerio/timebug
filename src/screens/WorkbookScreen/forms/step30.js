import t from '../../../forms/components'

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      step30CheckIn: t.struct({
        mantraAnswer: t.Boolean,
        exerciseAnswer: t.Boolean,
        meditateAnswer: t.Boolean
      })
    }),
    options: {
      fields: {
        id: {
          hidden: true
        },
        step30CheckIn: {
          label: '20/20 Life Vision Check-in',
          fields: {
            mantraAnswer: {
              label: 'Did you do your mantra today (assigned on Day 21)?'
            },
            exerciseAnswer: {
              label:
                'Did you exercise and meditate yet today(assigned on Day 8)?'
            },
            meditateAnswer: {
              label: 'Did you MEDITATE yet today(assigned on Day 8)?'
            }
          }
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
      nextYearLifeMap: t.struct({
        career: t.Number,
        aimsAndHobbies: t.Number,
        finances: t.Number,
        environment: t.Number,
        healthAndWellness: t.Number,
        spirituality: t.Number,
        relationships: t.Number
      })
    }),
    options: {
      auto: 'labels',
      fields: {
        nextYearLifeMap: {
          label:
            'Map out the next year of your life - 8,760 hrs (365 days x 24 hrs) according to the 7 Pillars of Life. Take a cue from Step 2 if needed and multiply by 52 to get your Annual Plan.',
          fields: {
            auto: 'labels'
          }
        }
      }
    }
  },
  3: {
    type: t.struct({
      visionCreationExcitement: t.struct({
        career: t.String,
        aimsAndHobbies: t.String,
        finances: t.String,
        environment: t.String,
        healthAndWellness: t.String,
        spirituality: t.String,
        relationships: t.String
      })
    }),
    options: {
      fields: {
        visionCreationExcitement: {
          label:
            'What do you feel most excited about, in terms of what you can get done with that chunk of time?'
        }
      }
    }
  },
  4: {
    type: t.struct({
      visionCreationFears: t.struct({
        career: t.String,
        aimsAndHobbies: t.String,
        finances: t.String,
        environment: t.String,
        healthAndWellness: t.String,
        spirituality: t.String,
        relationships: t.String
      })
    }),
    options: {
      fields: {
        visionCreationFears: {
          label: 'What do you most fear?'
        }
      }
    }
  }
}
