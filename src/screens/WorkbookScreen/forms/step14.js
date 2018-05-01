import t from '../components/templates';

import {
  WhereStandToday,
  Emotion,
  CreditScore,
  ChangeKind,
  EffortEvaluation,
  SatisfactionFromCurrentResult,
  CreditScoreChange,
  OneToTenScale
} from './contents';

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      emotion: t.list(Emotion)
    }),
    options: {
      label: 'Financial Assessment',
      fields: {
        id: {
          hidden: true
        },
        emotion: {
          label:
            'What emotions pop up when you think about your relationship with money? ',
          item: {
            auto: 'none'
          }
          //error: 'Emotions are hard for some and easy for others. Just pick the first thing that comes to mind.'
        }
      }
    },
    value: {
      fields: {
        id: 'step14+v0.0.0.1',
        othersView: true
      }
    }
  },
  2: {
    type: t.struct({
      attitudeTowardsMoney: t.struct({
        selfView: t.String,
        othersView: t.Boolean
      })
    }),
    options: {
      fields: {
        attitudeTowardsMoney: {
          label: 'Financial Assessment',
          fields: {
            selfView: {
              label:
                'In one or two sentences, describe your attitude towards money today',
              multiline: true
            },
            othersView: {
              label:
                'Knowing how others perceive your relationship with money could be helpful. Would you like to try engage someone to find out?'
            }
          }
        }
      }
    }
  },
  3: {
    type: t.struct({
      creditScoreAssessment: t.struct({
        today: CreditScore,
        creditScoreChange: CreditScoreChange,
        aYearAgo: CreditScore,
        aYearFromNow: CreditScore,
        change: ChangeKind,
        effort: EffortEvaluation
      })
    }),
    options: {
      fields: {
        creditScoreAssessment: {
          label: 'Financial Assessment',
          fields: {
            today: {
              label: 'What is your credit score?'
            },
            creditScoreChange: {
              label: 'Has your credit score changed over the past year?'
            },
            aYearAgo: {
              label: 'What was your credit score one year ago today?',
              error: 'Choose one'
            },
            aYearFromNow: {
              label: 'What will your credit score be one year from now?'
            },
            change: { label: 'How would you describe this change?' },
            effort: { label: 'What kind of effort will this take?' }
          }
        }
      }
    }
  },
  4: {
    type: t.struct({
      financialAchievements: t.struct({
        bestAchievement: t.String,
        biggestDissapointment: t.String
      })
    }),
    options: {
      fields: {
        financialAchievements: {
          label: 'Financial Achievements',
          fields: {
            bestAchievement: {
              label:
                'What was your biggest financial achievement over the past 5 years?'
              //error: 'Write a sentence or two describing your biggest success'
            },
            biggestDissapointment: {
              label:
                'What was your biggest dissapointment over the past 5 years?'
              //error: 'Can you sum it up in a word or two?'
            }
          }
        }
      }
    }
  },
  5: {
    type: t.struct({
      currentFinancialStanding: t.struct({
        whereStandToday: WhereStandToday,
        profitLossFeelings: t.maybe(OneToTenScale),
        balanceSheetChange: CreditScoreChange
      })
    }),
    options: {
      fields: {
        currentFinancialStanding: {
          label: 'Where do you stand today?',

          fields: {
            whereStandToday: {
              label:
                'Where do you stand today compared to what you had envisioned for yourself?'
            },
            profitLossFeelings: {
              label:
                'Do you have a Profit and Loss Statement? If so, how do you feel about it?',
              help: '1=Not at all happy, 10=Extremely happy'
            },
            balanceSheetChange: {
              label:
                'How does it compare to a balance sheet from previous years?'
            }
          }
        }
      }
    }
  }
};
