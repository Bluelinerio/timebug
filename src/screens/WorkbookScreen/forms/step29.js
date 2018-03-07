import t from '../components/templates';

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
        id: 'step29+v0.0.0.1'
      }
    }
  },
  2: {
    type: t.struct({
      spiritualTeammates: t.list(
        t.struct({
          teammate: t.String
        })
      )
    }),
    options: {
      label: 'Who are your spiritual “teammates” in 5 years from now? ',
      fields: {
        field: {
          item: {
            fields: {
              teammate: {
                label: 'Spiritual Teammate'
              }
            }
          }
        }
      }
    }
  },
  3: {
    type: t.struct({
      goals: t.list(
        t.struct({
          spiritualityBHAG: t.String,
          priority: t.Number,
          timeSpent: t.String
        })
      )
    }),
    options: {
      label: 'Vision Creation:Spirituality',
      fields: {
        goals: {
          item: {
            fields: {
              spiritualityBHAG: {
                label:
                  'What major Spirituality goals (BHAGs) do you envision for yourself by year 5?'
              },
              priority: {
                label:
                  'How will you prioritize your list items? (1= Low priority and 10= High priority)'
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
      egoAspects: t.list(
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
        egoAspects: {
          item: {
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
      whoHelp: t.String,
      howHelp: t.String,
      howFurtherSpirituality: t.String
    }),
    options: {
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
};
