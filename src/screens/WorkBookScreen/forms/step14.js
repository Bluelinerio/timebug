import t from "../components/templates";
import { 
  WhereStandToday, 
  Emotion, 
  CreditScore, 
  ChangeKind, 
  EffortEvaluation, 
  SatiffactionFromCurrentResult 
} from "./contents";

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      emotion: Emotion,
      selfView: t.String,
      othersView: t.maybe(t.Boolean)
    }),
    options: {
      label: "💵\n\nLet's do some work about your relationship with money...",
      fields: {
        id: {
          hidden: true
        },
        emotion: {
          label: "What is the primatry emotion that comes up for you about money today?",
          error: 'Emotions are hard for some and easy for others. Just pick the first thing that comes to mind.'          
        },
        selfView: {
          label: "In one or two sentences, describe your attitude towards money today",
          error: 'Even one or two words will work...'
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
      aYearAgo: CreditScore,
      aYearFromNow: CreditScore,
      change: ChangeKind,
      effort: EffortEvaluation
    }),
    options: {
      label: "Credit scores \n💳",
      fields: {
        today: {
          label: "What is your credit score today?",
          error:'Choose one'
        },
        aYearAgo: {
          label: "What was your credit score one year ago today?",
          error:'Choose one'
        },
        aYearFromNow: {
          label: "What credit would you like to have one year in the future?",
          error:'Choose one'
        },
        change: {
          label: "What kind of change is required for the change you want to see in next year's score?",
          error:'Choose one'
        },
        effort: {
          label: "Estimate the kind of effort to make this change a reality",
          error:'Choose one'
        },
      }
    }
  },
  3: {
    type: t.struct({
      bestAchievement: t.String,
      biggestDissapointment: t.String
    }),
    options: {
      label: "The state of Successes 🎊 and Failures 💩 in my Financials",
      fields: {
        bestAchievement: {
          label: "🎊\n\nWhat was your biggest financial achievement the past 5 years?",
          error: 'Write a sentence or two describing your biggest success'
        },
        biggestDissapointment: {
          label: "💩\n\nWhat was your biggest dissapointment over the past 5 years?",
          error: 'Can you sum it up in a word or two?'
        }
      }
    }
  },
  4: {
    type: t.struct({
      reflection: Emotion,
      compare1: WhereStandToday,
      compare2: SatiffactionFromCurrentResult,
    }),
    options: {
      label: "📊\n\nLet's create a quick personal Balance Sheet",
      fields: {
        reflection: {
          label: "Reflecting on your Balance Sheet, how do you feel?",
          error:'Choose one'
        },
        compare1: {
          label: 'Where do you stand today compared to what you had envisioned for yourself?',
          error: 'Please fill out this field.'
        },
        compare2: {
          label: "How does this picture compares with where you stood 4 years ago?",
          error: 'Choose one'
        }
      }
    }

  },
  5: {
    type: t.struct({
      assets: t.struct({
        liquidAssets:t.list(
          t.String
        ),
        properties: t.list(
          t.struct({
            property: t.String
          })
        ),
        totalAssets: t.Number
      }),
      liabilities: t.struct({
        shortTermDebts: t.list(t.String),
        longTermDebts: t.list(t.String),
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
      net: t.Number
    }),
    options: {
      label: "📊\n\nLet's create a quick personal Profit & Loss Statement \nIt is your choice as to whether to focus on your own individual P&L versus as a couple, if you are married.",
      error: "Please fill out all the fields.",
      fields : {
        plSheetReflection: {
          label:'Take some time to reflect on your P&L sheet',
          fields: {
            reflection: {
              label:'\nUse a few keywords of phrases to describe how you feel',
              error:''
            },
            compare1: {
              label:'How does this picture compare to where you stood in 2011?',
              error:'Please fill out this field.'

            },
            compare2: {
              label:'Where do you stand today compared to what you had envisioned for yourself?',
              error:'Please fill out this field.'

            }
            }
          },
          expenses: {
            fields: {
              expensesNonDiscretionary: {
                item: {
                  fields: {
                    expense: {
                      error:'Please enter a non-discretionary expenses.'
                    }
                  }
                }
              },
              expensesDiscretionary: {
                item: {
                  fields: {
                    expense: {
                      error:'Please enter a discretionary expense'
                    }
                  }
                }
              }
        }
      },
      assets: {
        fields: {
          liquidAssets: {
            label: 'Add your Liquid Assets to this list',
            item: {
              fields: {
                liquidAsset: 'Please enter your liquid assets.'
                }
              }
            }
          },
          properties: {
            item: {
              fields: {
                property: {
                  error:'Please enter a property'
                }
              }
            }
          }
    }
  },
  liabilities: {
    fields: {
      shortTermDebts: {
        item: {
          fields: {
            shortTermDebt: {
              error:'Please enter a short term debt.'
            }
          }
        }
      },
      longTermDebts: {
        item: {
          fields: {
            longTermDebt: {
              error:'Please enter a long term debt.'
            }
          }
        }
      }
}
},
profitLossStatement: {
  fields: {
    income2015: {
      item: {
        fields: {
          income: {
            error:'Please enter an income.'
          }
        }
      }
    },
    savingsAndInvestments: {
      item: {
        fields: {
          savingsOrInvestment: {
            error:'Please enter a savings or investment.'
          }
        }
      }
    }
}
}
    }
  }
};
