import t from '../../../forms/components';

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      step28CheckIn: t.struct({
        mantraAnswer: t.Boolean,
        exerciseAnswer: t.Boolean,
        meditateAnswer: t.Boolean,
      }),
    }),
    options: {
      fields: {
        id: {
          hidden: true,
        },
        step28CheckIn: {
          label: '20/20 Life Vision Check-in',
          fields: {
            mantraAnswer: {
              label: 'Did you do your mantra today (assigned on Day 21)?',
            },
            exerciseAnswer: {
              label: 'Did you exercise yet today(assigned on Day 8)?',
            },
            meditateAnswer: {
              label: 'Did you meditate yet today(assigned on Day 8)?',
            },
          },
        },
      },
    },
    value: {
      fields: {
        id: 'step28+v0.0.0.1',
      },
    },
  },
  2: {
    type: t.struct({
      environmentBHAG: t.list(t.String),
    }),
    options: {
      label:
        'What major goals [BHAGs] pertaining to your Environment do you envision for yourself 5 years from now?',
      fields: {
        environmentBHAG: {
          auto: 'none',
          item: {
            label: 'Environment BHAG',
          },
        },
      },
    },
  },
  3: {
    type: t.struct({
      environmentVisionCreationForOthers: t.struct({
        who: t.String,
        howAttain: t.String,
        howHelp: t.String,
      }),
    }),
    options: {
      fields: {
        environmentVisionCreationForOthers: {
          label: 'Vision Creation: Environment',
          fields: {
            who: {
              label:
                'Who in your life do you want to enjoy a major transformation in their place and environment surroundings?',
            },
            howAttain: {
              label: 'What do you want them to accomplish 5 years from now?',
            },
            howHelp: {
              label: 'How will you help them make it happen by Year 5?',
            },
          },
        },
      },
    },
  },
  4: {
    type: t.struct({
      environmentVisionCreationForWorld: t.struct({
        oneWish: t.String,
        howHelp: t.String,
      }),
    }),
    options: {
      fields: {
        environmentVisionCreationForWorld: {
          label: 'Vision Creation: Environment',
          fields: {
            oneWish: {
              label:
                'What’s your place and environment wish for the world or a particular sector of the world?',
            },
            howHelp: {
              label:
                'How can you help, be it in any small way, accomplish this goal?',
            },
          },
        },
      },
    },
  },
};
