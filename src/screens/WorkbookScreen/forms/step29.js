import t from '../components/templates';

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      step29CheckIn: t.struct({
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
        step29CheckIn: {
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
        id: 'step29+v0.0.0.1'
      }
    }
  },
  2: {
    type: t.struct({
      spiritualTeammates: t.list(t.String)
    }),
    options: {
      label: 'Who are your spiritual “team-mates” in 5 years from now? ',
      fields: {
        spiritualTeammates: {
          auto: 'none',
          item: {
            auto: 'none'
          }
        }
      }
    }
  },
  3: {
    type: t.struct({
      spiritualtyBHAGS: t.list(
        t.struct({
          spiritualityBHAG: t.String,
          priority: t.Number,
          timeSpent: t.String
        })
      )
    }),
    options: {
      label: 'Vision Creation: Spirituality',
      fields: {
        spiritualtyBHAGS: {
          auto: 'none',
          item: {
            auto: 'none',
            fields: {
              spiritualityBHAG: {
                label:
                  'What major Spirituality goals (BHAGs) do you envision for yourself by year 5?'
              },
              priority: {
                label: 'How will you prioritize this list item?',
                placeholder: ' 1= Low priority and 10= High priority'
              },
              timeSpent: {
                label:
                  'How much time per week do you plan to spend on this spirituality BHAG per week?'
              }
            }
          }
        }
      }
    }
  },
  4: {
    type: t.struct({
      egoAspectsEvolve: t.list(
        t.struct({
          i: t.String,
          willEvolve: t.String,
          willSay: t.String
        })
      )
    }),
    options: {
      label:
        'Remember Step 10 ("Mapping Out Your Internal World")?How will each of your listed Is (ego aspects) evolve by Year 5?',
      fields: {
        egoAspectsEvolve: {
          auto: 'none',
          item: {
            auto: 'none',
            fields: {
              i: {
                label: 'I(ego Aspect)'
              },
              willEvolve: {
                label: "How will this 'I' evolve?"
              },
              willSay: {
                label:
                  "What is this 'I' saying in Year 5 that they it doesn't now?"
              }
            }
          }
        }
      }
    }
  },
  5: {
    type: t.struct({
      spiritualityVisionCreationForOthers: t.struct({
        whoHelp: t.String,
        howHelp: t.String,
        howFurtherSpirituality: t.String
      })
    }),
    options: {
      fields: {
        spiritualityVisionCreationForOthers: {
          label: 'Vision Creation: Spirituality',
          fields: {
            whoHelp: {
              label:
                'Who do you want to enjoy a major transformation or sense of peace and internal happiness in their lives? How will you help him/her? '
            },
            howHelp: {
              label:
                'How will you want help him/her attain those inner journey goals by Year 5?'
            },
            howFurtherSpirituality: {
              label:
                'How do you want to help further spirituality in the world 5 years from now?'
            }
          }
        }
      }
    }
  }
};
