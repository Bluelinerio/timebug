import t from "../components/templates";

import { 
  WhereStandToday, 
  Emotion, 
  CreditScore, 
  ChangeKind, 
  EffortEvaluation, 
  SatisfactionFromCurrentResult ,
  CreditScoreChange,
  OneToTenScale
} from "./contents";

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      emotion: t.list(Emotion),
      selfView: t.String,
      othersView: t.maybe(t.Boolean)
    }),
    options: {
      fields: {
        id: {
          hidden: true
        },
        emotion: {
          label: "What emotions pop up when you think about your relationship with money? ",
          //error: 'Emotions are hard for some and easy for others. Just pick the first thing that comes to mind.'          
        },
        selfView: {
          label: "In one or two sentences, describe your attitude towards money today",
          //error: 'One or two words will work too...'
        },
        othersView: {
          label: "Knowing how others perceive your relationship with money could be helpful. Would you like to try engage someone to find out?",
        }
      }
    },
    value : {
      fields: {
        id: 'step14+v0.0.0.1',
        othersView: true,
      }
    }
  },
  2: {
    type: t.struct({
      today: CreditScore,
      creditScoreChange:CreditScoreChange,
      aYearAgo: CreditScore,
      aYearFromNow: CreditScore,
      change: ChangeKind,
      effort: EffortEvaluation
    }),
    options: {
      fields: {
        today: {
          label: "What is your credit score?"
        },
        creditScoreChange: {
          label: "Has your credit score changed over the past year?"
        },
        aYearAgo: {
          label: "What was your credit score one year ago today?",
          error:'Choose one'
        }
      }
    }
  },
  3: {
    type: t.struct({
      bestAchievement: t.String,
      biggestDissapointment: t.String
    }),
    options: {
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
  4: {
    type: t.struct({
      compare1: WhereStandToday,
      profitLossFeelings: OneToTenScale,
      compare2: CreditScoreChange
    }),
    options: {
        compare1: {
          label: 'Where do you stand today compared to what you had envisioned for yourself?'
        },
        profitLossFeelings: {
          label: "Do you have a Profit and Loss Statement?",
          help:'1=Not at all happy, 10=Extremely happy'
        },
        compare2: {
          label: "How does it compare to a balance sheet from previous years?"
        }
      }
    }
  
  
};
