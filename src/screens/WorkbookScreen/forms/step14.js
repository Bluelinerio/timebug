import t from "../components/templates";

import {
  WhereStandToday,
  Emotion,
  CreditScore,
  ChangeKind,
  EffortEvaluation,
  SatisfactionFromCurrentResult,
  CreditScoreChange,
  OneToTenScale
} from "./contents";

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      emotion: t.list(Emotion),
    }),
    options: {
      label: "Financial Assessment",
      fields: {
        id: {
          hidden: true
        },
        emotion: {
          label: "What emotions pop up when you think about your relationship with money? ",
          //error: 'Emotions are hard for some and easy for others. Just pick the first thing that comes to mind.'          
        }
      }
    },
    value: {
      fields: {
        id: 'step14+v0.0.0.1',
        othersView: true,
      }
    }
  },
  2: {
    type: t.struct({
      selfView: t.String,
      othersView: t.maybe(t.Boolean)
    }),
    options: {
      label: "In one or two sentences, describe your attitude towards money today",
      fields: {
        selfView: {
          auto: "none",
          multiline: true
        },
        othersView: {
          label: "Knowing how others perceive your relationship with money could be helpful. Would you like to try engage someone to find out?",
        }
      }
    }
  },
  3: {
    type: t.struct({
      today: CreditScore,
      creditScoreChange: CreditScoreChange,
      aYearAgo: CreditScore,
      aYearFromNow: CreditScore,
      change: ChangeKind,
      effort: EffortEvaluation
    }),
    options: {
      label: "Credit score",
      fields: {
        today: {
          label: "What is your credit score?"
        },
        creditScoreChange: {
          label: "Has your credit score changed over the past year?"
        },
        aYearAgo: {
          label: "What was your credit score one year ago today?",
          error: 'Choose one'
        }
      }
    }
  },
  4: {
    type: t.struct({
      bestAchievement: t.String,
      biggestDissapointment: t.String
    }),
    options: {
      label: "Financial Achievements",
      fields: {
        bestAchievement: {
          label: "What was your biggest financial achievement over the past 5 years?",
          //error: 'Write a sentence or two describing your biggest success'
        },
        biggestDissapointment: {
          label: "What was your biggest dissapointment over the past 5 years?",
          //error: 'Can you sum it up in a word or two?'
        }
      }
    }
  },
  5: {
    type: t.struct({
      whereStandToday: WhereStandToday,
      profitLossFeelings: t.maybe(OneToTenScale),
      balanceSheetChange: CreditScoreChange
    }),

    options: {
      label: "Where do you stand today?",
      fields: {
        whereStandToday: {
          label: 'Where do you stand today compared to what you had envisioned for yourself?'
        },
        profitLossFeelings: {
          label: "Do you have a Profit and Loss Statement? If so, how do you feel about it?",
          help: '1=Not at all happy, 10=Extremely happy'
        },
        balanceSheetChange: {
          label: "How does it compare to a balance sheet from previous years?"
        }
      }
    }
  }


};
