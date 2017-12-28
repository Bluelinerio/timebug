import t from "../components/templates";
import { WhereStandToday } from "./contents";

export default {
  1: {
    type: t.struct({
      id:t.maybe(t.String),
      selfView: t.String,
      othersView: t.String
    }),
    options: {
      label: "Please evaluate your relationship with money.",
      fields: {
        id: {
          hidden: true
        },
        selfView: {
          label: "How do you feel about your relationship with money today(emotionally and psychologically?)"
        },
        othersView: {
          label: "How do others perceive your relationship to money?(Ok to ask another person)"

        }
      }
    },
    value : {
      fields: {
        id: 'step14+v0.0.0.1'
      }
    }
  },
  2: {
    type: t.struct({
      dec15: t.Number,
      jan11: t.Number
    }),
    options: {
      label: "What is your credit score?",
      fields: {
        dec15: {
          label: "Dec '15"
        },
        jan11: {
          label: "Jan '11"
        }
      }
    }
  },
  3: {
    type: t.struct({
      whyChange: t.String,
      bestAchievement: t.String,
      biggestDissapointment: t.String
    }),
    options: {
      label: "", // TODO: Add label
      fields: {
        whyChange: {
          label: "Why did it change?"
        },
        bestAchievement: {
          label: "What is your best achievement in this area over the past 5 years?"
        },
        biggestDissapointment: {
          label: "What is your biggest dissapointment over the past 5 years?"
        }
      }
    }
  },
  4: {
    type: t.struct({
      reflection: t.String,
      compare1: t.String,
      compare2: WhereStandToday
    }),
    options: {
      label: "Create a quick personal Balance Sheet using the 20/20 Worksheet as a guide.",
      fields: {
        reflection: {
          label: "Reflecting on your Balance Sheet, how do you feel?(Use keywords or phrases)"
        },
        compare1: {
          label: "How does this picture compare to where you stood in 2011?"
        },
        compare2: {
          label:'Where do you stand today compared to what you had envisioned for yourself?',
        }
      }
    }

  },
  5: {
    type: t.struct({
      assets: t.struct({
        liquidAssets: t.list(
          t.struct({
            liquidAsset: t.String
          })
        ),
        properties: t.list(
          t.struct({
            property: t.String
          })
        ),
        totalAssets: t.Number
      }),
      liabilities: t.struct({
        shortTermDebts: t.list(
          t.struct({
            shortTermDebt: t.String
          })
        ),
        longTermDebts: t.list(
          t.struct({
            longTermDebt: t.String
          })
        ),
        totalLiabilities: t.Number
      }),
      totalPersonalEquity: t.Number,
      plSheetReflection: t.struct({
        reflection: t.String,
        compare1: t.String,
        compare2: WhereStandToday
      }),
      profitLossStatement: t.struct({
        income: t.struct({
          income2015: t.list(
            t.struct({
              income: t.String
            })
          ),
          savingsAndInvestments: t.list(
            t.struct({
              savingsOrInvestment: t.String
            })
          ),
          totalIncome: t.Number
        })
      }),
      expenses: t.struct({
        expensesNonDiscretionary: t.list(
          t.struct({
            expense: t.String
          })
        ),
        expensesDiscretionary: t.list(
          t.struct({
            expense: t.String
          })
        ),
        totalExpenses: t.Number
      }),
      net: t.maybe(t.Number)
    }),
    options: {
      label: "Create a quick personal Profit & Loss Statement using the 20/20 Worksheet as a guide. It is your choice as to whether to focus on your own individual P&L versus as a couple, if you are married.",
      fields : {
        plSheetReflection: {
          label:'Take some time to reflect on your P&L sheet',
          fields: {
            reflection: {
              label:'How do you feel?[Use a few keywords of phrases]'
              
            },
            compare1: {
              label:'How does this picture compare to where you stood in 2011?'

            },
            compare2: {
              label:'Where do you stand today compared to what you had envisioned for yourself?',

            }
            }
          }
        }
      }
    }
};
