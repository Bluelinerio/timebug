import t from '../components/templates'

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      step26CheckIn: t.struct({
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
        step26CheckIn: {
          label: '20/20 Life Vision Check-in',
          fields: {
            mantraAnswer: {
              label: 'Did you do your mantra today (assigned on Day 21)?'
            },
            exerciseAnswer: {
              label: 'Did you exercise yet today(assigned on Day 8)?'
            },
            meditateAnswer: {
              label: 'Did you meditate yet today(assigned on Day 8)?'
            }
          }
        }
      }
    },
    value: {
      fields: {
        id: 'step26+v0.0.0.1'
      }
    }
  },
  2: {
    type: t.struct({
      healthVisionCreation: t.struct({
        priorities: t.String,
        fitnessExercise: t.String,
        nutritionDiet: t.String,
        sleep: t.String,
        bodyCare: t.String,
        mentalEmotional: t.String
      })
    }),
    options: {
      fields: {
        healthVisionCreation: {
          label:
            'What changes and achievements will you make across the following areas?',
          fields: {
            priorities: {
              label: 'Prioritizing your Health Goals vs. other Areas',
              multiline: true
            },
            fitnessExercise: {
              label: 'Fitness & Exercise',
              multiline: true
            },
            nutritionDiet: {
              label: 'Nutrition & Diet',
              multiline: true
            },
            sleep: {
              label: 'Sleep',
              multiline: true
            },
            bodyCare: {
              label: 'Body Care',
              multiline: true
            },
            mentalEmotional: {
              label: 'Mental & Emotional Health',
              multiline: true
            }
          }
        }
      }
    }
  },
  3: {
    type: t.struct({
      healthVisionCreationForOthers: t.struct({
        who: t.String,
        howChange: t.String,
        howHelp: t.String
      })
    }),
    options: {
      fields: {
        healthVisionCreationForOthers: {
          label: 'Vision Creation: Health and Wellness',
          fields: {
            who: {
              label:
                'Who you want to make drastic improvements in their physical health?'
            },
            howChange: {
              label: 'How exactly do you want them to change?',
              multiline: true
            },
            howHelp: {
              label: 'How can you help them achieve this goal?',
              multiline: true
            }
          }
        }
      }
    }
  },
  4: {
    type: t.struct({
      healthAndWellnessHelpForWorld: t.struct({
        oneWish: t.String,
        whatGroup: t.String,
        howHelp: t.String
      })
    }),
    options: {
      fields: {
        healthAndWellnessHelpForWorld: {
          label: 'Vision Creation: Health and Wellness',
          fields: {
            oneWish: {
              label:
                'List one wish that you have for the world or a particular sector of the world when it comes to Health.',
              auto: 'none'
            },
            whatGroup: {
              label:
                'What group of people or country can be most influential in helping to attain this goal?'
            },
            howHelp: {
              label:
                'How can you help, even in a small way, to acheive this goal?'
            }
          }
        }
      }
    }
  }
}
