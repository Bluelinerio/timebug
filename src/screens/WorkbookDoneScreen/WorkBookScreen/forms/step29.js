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
          teammate: t.String,
          howConnect: t.String
        })
      )
    }),
    options: {
      fields: {
        field: {
          label:'List 3-10 Spiritual “teammates”,and write a few notes about how you plan to connect with them this coming year.',          
          item: {
            fields: {
              teammate: {
                label: 'Spiritual Teammate',
                error:'Please fill out this field'
              },
              howConnect: {
                label: 'How will you connect with him/her?',
                error:'Please fill out this field'
              }
            }
          }
        }
      }

    }
  },
  3: {
    type:
    t.struct({
      field: t.list(
        t.struct({
          goal: t.String
        })
      )
    }),
    options: {
      fields: {
        field: {
          label: 'What major goals [BHAGs] do you envision for yourself by 2020? [i.e. doing a 10-day meditation retreat; fasting for 30 days; writing down your deepest feelings and thoughts in a journal every day for a whole year, etc.].',   
          error:'Please fill out this field'       
        }
      }
    }
  },
  4: {
    type: t.list(
      t.struct({
        bucketPEBHAG: t.String,
        priority: t.Number,
        timeSpent: t.String
      })
    ),
    options: {
      label: 'List out up to 10 items for your 2020 Spirituality Bucket List [i.e. reading specific philosophy, self-help or religious books; visiting sacred sites; etc].',
      item: {
        fields: {
          bucketPEBHAG: {
            label: 'Spirituality Bucket List',
            error:'Please fill out this field'
          },
          priority: {
            label: 'Prioritize your Spirituality BHAG with 1= most important, 2= second most important',
            error:'Please fill out this field'
          },
          timeSpent: {
            label: 'Estimate how much time per year (2016-2020) you plan to spend on avg working toward this BHAG',
            error:'Please fill out this field'
          }
        }
      }
    }
  },
  5: {
    type: t.list(
      t.struct({
        i: t.String,
        willEvolve: t.String,
        saysNow: t.String,
        willSay: t.String
      })
    ),
    options: {
      label: 'List out up to 10 items for your 2020 Spirituality Bucket List [i.e. reading specific philosophy, self-help or religious books; visiting sacred sites; etc].',
      item: {
        fields: {
          i: {
            label: 'I(ego Aspect)',
            error:'Please fill out this field'
          },
          willEvolve: {
            label: 'How will this I evolve in 2020?',
            error:'Please fill out this field'
          },
          saysNow: {
            label: 'What this I says now',
            error:'Please fill out this field'
          },
          willSay: {
            label: 'What this I will say in 2020',
            error:'Please fill out this field'
          }
        }
      }
    }
  },
  6: {
    type: t.String,
    options: {
      label: 'Think about one other person in your life, who you want to see enjoy a major transformation or sense of peace and internal happiness in their lives. Who is it?',
      auto: 'none',
      error:'Please fill out this field'
    }
  },
  7: {
    type: t.String,
    options: {
      label: 'How do you want to see them attain those inner journey goals, making it happen by 2020?',
      auto: 'none',
      error:'Please fill out this field'
    }
  },
  8: {
    type: t.String,
    options: {
      label: 'How can you help them achieve their Spiritual goals?',
      auto: 'none',
      error:'Please fill out this field'
    }
  },
  9: {
    type: t.String,
    options: {
      label: 'List one wish that you have for the world or a particular sector of the world when it comes to Spirituality (i.e. World Inner Peace).',
      auto: 'none',
      error:'Please fill out this field'
    }
  },
  10: {
    type: t.String,
    options: {
      label: 'How can you help, be it in any small way, to see this goal be achieved? (Hint: start with yourself and in  your own circle of family  and friends, with things that you have direct influence on).',
      auto: 'none',
      error:'Please fill out this field'
    }
  }
};