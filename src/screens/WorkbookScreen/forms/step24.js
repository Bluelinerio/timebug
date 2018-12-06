import t from '../../../forms/components';
import { Emotion } from './contents';

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      step24CheckIn: t.struct({
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
        step24CheckIn: {
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
        id: 'step24+v0.0.0.1',
      },
    },
  },
  2: {
    type: t.struct({ money: t.String }),
    options: {
      label: 'Five years from now, how much money will you have in the bank?',
      fields: {
        moneyWillHave: {
          auto: 'none',
        },
      },
    },
  },
  3: {
    type: t.struct({
      financeTeam: t.list(t.String),
    }),
    options: {
      label:
        'Who is your “finance team” that helped you not only to attain but also manage your financial success?',
      fields: {
        financeTeam: {
          auto: 'none',
          item: {
            auto: 'none',
            label: 'Person',
          },
        },
      },
    },
  },
  4: {
    type: t.struct({
      moneyDreams: t.struct({
        moneyPlans: t.String,
        lifeDiffer: t.String,
        workMoreOrLess: t.String,
        vacationDays: t.String,
        materialThings: t.String,
      }),
    }),
    options: {
      fields: {
        moneyDreams: {
          label: 'Vision Creation: Finance',
          fields: {
            moneyPlans: {
              label:
                'What do you plan to do with any excess money that you come into over the next 5 years?',
            },
            lifeDiffer: {
              label:
                'How will your life differ 5 years from now due to your  money BHAG acheivements?',
            },
            workMoreOrLess: {
              label: 'How much more or less will you work as a result?',
            },
            vacationDays: {
              label: 'How many days a year will you take off for vacation?',
            },
            materialThings: {
              label:
                'What additional material things will you have or have access to that you now don’t?',
            },
          },
        },
      },
    },
  },
  5: {
    type: t.struct({
      financialEmotionsWillFeel: t.list(Emotion),
    }),
    options: {
      label: "What emotions will you feel as a result that you don't feel now?",
      fields: {
        financialEmotionsWillFeel: {
          auto: 'none',
          item: {
            auto: 'none',
          },
        },
      },
    },
  },
  6: {
    type: t.struct({
      personToHelpFinancially: t.struct({
        whoChangeRelationship: t.String,
        whoChangeFinancialFortunes: t.String,
        howHelp: t.String,
        oneWish: t.String,
        whoCanHelp: t.String,
        howYouHelp: t.String,
      }),
    }),
    options: {
      fields: {
        personToHelpFinancially: {
          label: 'Vision Creation: Finance',
          fields: {
            whoChangeRelationship: {
              label:
                'Who do you want to succeed with or change his / her relationship to money?',
            },
            whoChangeFinancialFortunes: {
              label:
                'How do you want them change his/her financial fortunes in 5 years?',
            },
            howHelp: {
              label: 'How can you help him/her achieve this goal? ',
            },
            oneWish: {
              label:
                'What one wish do you have for the world or a particular sector of the world relating to money?',
            },
            whoCanHelp: {
              label:
                'What group of people or country can be most influential in helping this goal be attained?',
            },
            howYouHelp: {
              label:
                'How can you help, be it in any small way, to see this goal achieved?',
            },
          },
        },
      },
    },
  },
};
