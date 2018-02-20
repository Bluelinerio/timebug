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
    value: {
      fields: {
        id: 'step29+v0.0.0.1'
      }
    }
  },
  2: {
    type: t.struct({
      field: t.list(
        t.struct({
          teammate: t.String
        })
      )
    }),
    options: {
      fields: {
        field: {
          label:'Who are your spiritual “teammates” in 5 years from now? ',          
          item: {
            fields: {
              teammate: {
                label: 'Spiritual Teammate',
              }
            }
          }
        }
      }

    }
  },
  3: {
    type: t.list(
      t.struct({
        bucketPEBHAG: t.String,
        priority: t.Number,
        timeSpent: t.String
      })
    ),
    options: {
      item: {
        fields: {
          bucketPEBHAG: {
            label: 'What major Spirituality goals (BHAGs) do you envision for yourself by year 5?'
          },
          priority: {
            label: 'How will you prioritize your list items? (1= Low priority and 10= High priority)'
          },
          timeSpent: {
            label: 'How much time per week do you plan to spend on this spirituality BHAG per week?'
          }
        }
      }
    }
  },
  4: {
    type: t.list(
      t.struct({
        i: t.String,
        willEvolve: t.String,
        willSay: t.String
      })
    ),
    options: {
      label: 'Remember Step 10 ("Mapping Out Your Internal World")?How will each of your listed Is (ego aspects) evolve by Year 5?',
      item: {
        fields: {
          i: {
            label: 'I(ego Aspect)'
          },
          willEvolve: {
            label: "How will this 'I' evolve?"
          },
          willSay: {
            label: "What is this 'I' saying in Year 5 that they it doesn't now?"
          }
        }
      }
    }
  },
  5: {
    type: t.String,
    options: {
      label: 'Who do you want to enjoy a major transformation or sense of peace and internal happiness in their lives? How will you help him/her? ',
      auto: 'none'
    }
  },
  6: {
    type: t.String,
    options: {
      label: 'How will you want help him/her attain those inner journey goals by Year 5?',
      auto: 'none'
    }
  },
  7: {
    type: t.String,
    options: {
      label: 'How do you want to help further spirituality in the world 5 years from now?',
      auto: 'none'
      error:'Please fill out this field'
    }
  }
};
