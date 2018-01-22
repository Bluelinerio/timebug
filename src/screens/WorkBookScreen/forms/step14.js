import t from "../components/templates";
import { WhereStandToday, Emotion, CreditScore, ChangeKind, EffortEvaluation } from "./contents";

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      emotion: Emotion,
      selfView: t.String,
      othersView: t.maybe(t.Boolean)
    }),
    options: {
      label: "Let's do some work about your relationship with money...",
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
          label: "How do others perceive your relationship to money can be help you work through it. Would you like to try engage someone with that questions?",
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
          label: "What was your credit score same time last year?",
          error:'Choose one'
        },
        aYearFromNow: {
          label: "What credit would you like to have same time next year?",
          error:'Choose one'
        },
        change: {
          label: "What kind of change is required for the change you want to see in next year's score?",
          error:'Choose one'
        },
        effort: {
          label: "Estimate the kind of effort to make this change a reaclity",
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
          label: "🎊\n\nWhat is your biggest financial achievement the past 5 years?",
          error: 'Write a sentence or two describing your biggest success'
        },
        biggestDissapointment: {
          label: "💩\n\nWhat is your biggest dissapointment over the past 5 years?",
          error: 'Can you sum it up in a word or two?'
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
          label: "Reflecting on your Balance Sheet, how do you feel?(Use keywords or phrases)",
          error:'Please fill out this field.'
        },
        compare1: {
          label: "How does this picture compare to where you stood in 2011?",
          error:'Please fill out this field.'
        },
        compare2: {
          label:'Where do you stand today compared to what you had envisioned for yourself?',
          error:'Please fill out this field.'
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
      net: t.Number
    }),
    options: {
      label: "Create a quick personal Profit & Loss Statement using the 20/20 Worksheet as a guide. It is your choice as to whether to focus on your own individual P&L versus as a couple, if you are married.",
      error: "Please fill out all the fields.",
      fields : {
        plSheetReflection: {
          label:'Take some time to reflect on your P&L sheet',
          fields: {
            reflection: {
              label:'How do you feel?[Use a few keywords of phrases]',
              error:'Please fill out this field.'
              
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
                      error:'Please fill out this field.'
                    }
                  }
                }
              },
              expensesDiscretionary: {
                item: {
                  fields: {
                    expense: {
                      error:'Please fill out this field.'
                    }
                  }
                }
              }
        }
      },
      assets: {
        fields: {
          liquidAssets: {
            item: {
              fields: {
                liquidAsset: {
                  error:'Please fill out this field.'
                }
              }
            }
          },
          properties: {
            item: {
              fields: {
                property: {
                  error:'Please fill out this field.'
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
              error:'Please fill out this field.'
            }
          }
        }
      },
      longTermDebts: {
        item: {
          fields: {
            longTermDebt: {
              error:'Please fill out this field.'
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
            error:'Please fill out this field.'
          }
        }
      }
    },
    savingsAndInvestments: {
      item: {
        fields: {
          savingsOrInvestment: {
            error:'Please fill out this field.'
          }
        }
      }
    }
}
}
    }
  }
}
};
