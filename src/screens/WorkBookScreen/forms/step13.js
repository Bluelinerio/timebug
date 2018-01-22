import t from "../components/templates";
import { PaidFairly,HoursChanged,HoursPerWeek,OneToTenScale,InternalExternal } from "./contents";


export default {

  1: {
    type: t.struct({
        id:t.maybe(t.String),
        salaryGrowth: t.struct({
          lastYearSalary: t.Number,
          currentSalary: t.Number
        }),
        paidFairly: PaidFairly,
        compensationGoals: t.Boolean,
        hoursPerWeek: HoursPerWeek,
        hoursChanged: HoursChanged
    }),
    options: {
      label: "Take some time to evaluate your salary and compensation.",
      fields: {
          id:{
              hidden: true
          },
        salaryGrowth: {
            label:'How has your salary grown(or not) over the past year?',
            fields: {
                lastYearSalary: {placeholder:"Last year's salary", error:'What was your salary one year ago today?'},
                currentSalary: {placeholder:"Current salary", error:'What is your current salary?'},
            }
        }, 
        paidFairly: {
            label:'Do you feel like you are being paid fairly for what you offer?',
            error:'Please select a value.'
        }, 
        compensationGoals: {
            label:'Did you meet whatever compensation goals you had set for this year, anytime in the last few years?'
        }, 
        hoursPerWeek: {
            label:'How many hours do you work on average per week?',
            error:'Please select how many hours per week.'
        }, 
        hoursChanged: {
            label:'How have your work week hours changed since last year?',
            error:'Please select how your work hours have changed.'

        }, 
         auto: 'none'
            },
          },
          value : {
            fields: {
              id: 'step13+v0.0.0.1'
            }
          }
        },
  2: {
    type: t.struct({
        fulfillment: OneToTenScale,
        pastFiveYears:
            t.struct({
                yearOne: OneToTenScale,
                yearTwo: OneToTenScale,
                yearThree: OneToTenScale,
                yearFour: OneToTenScale,
                yearFive: OneToTenScale
            }),
        motivationLevel: OneToTenScale,
        meaningfulAchievements: t.list(
            t.struct({
                meaningfulAchievement: t.String,
                internalExternal: InternalExternal,
                whatChanged: t.String
             })
        )
        
    }),
    options: {
      label: "Take some time to evaluate your fulfillment with what you are doing in the workplace using a 10pt scale(1=hate it vs 10=love it, and 1=not motivated vs 10=highly motivated)",
      fields: {
        fulfillment: {
          error:'Please select a value',
          label:'How fulfilling is your work on a scale of 1 to 10?'
        },
        pastFiveYears: {
          auto:'none',
          label:'On a scale of 1 to 10, how did you feel about your work over the past 5 years?',
          fields: {
          yearOne: {
              placeholder:'2013',
              error:'Please fill out this field.'
          },
          yearTwo: {
            placeholder:'2014',
            error:'Please fill out this field.'
          },
          yearThree: {
            placeholder:'2015',
            error:'Please fill out this field.'
          },
          yearFour: {
              placeholder:'2016',
              error:'Please fill out this field.'
          },
          yearFive: {
              placeholder:'2017',
              error:'Please fill out this field.'
          }
        }
        },
        motivationLevel: {
            label: 'What is your motivation level at work right now?(On a scale of 1 to 10).',
            error:'Please fill out this field.'
        },
        meaningfulAchievements : {
            label: 'List up to 5 meaningful achievements that you have had at work over the past 5 years',
            item: {
                fields: {
                    meaningfulAchievement: {
                        placeholder: 'Meaningful Achievement',
                        error:'Describe the achievement in a few words, not more'

                    },
                    whatChanged: {
                        placeholder: 'What Changed?',
                        error:'Describe the change in a sentence or two.'

                    },
                    internalExternal: {
                        label: 'How would you describe the change?',
                        error:'Please select a value.'

                    }

                }
            }
        }
    }
    }
  },
  3: {
    type: t.struct({
      whatBossSays: t.String,
      whatMentorSays: t.maybe(t.String),
      whatYouSay: t.String,
      whatPricePaid: t.String
    }),
    options: {
      label: "Take some time to evaluate your shortcomings at work",
      fields: {
        whatBossSays: {
          auto:'none',
          label:'What would your boss/peer say about your workplace performance?',
          error:'Please fill out this field.'
        },
        whatMentorSays: {
          auto:'none',
          error:'Please fill out this field.',
          label:'What does your work mentor(assuming it is not your boss, otherwise skip this question) think about your workplace performance?'
        },
        whatYouSay: {
            auto:'none',
            label: 'What do you say, now for yourself - what were your shortcomings over these 5 years?',
            error:'Please fill out this field.'
        },
        whatPricePaid: {
            auto:'none',
            error:'Please fill out this field.',
            label: 'What price did you pay for your self-recognized or boss/colleague-perceived weaknesses over the past 5 years? (can be from multiple jobs)'
        }
    }
    }
  }

};


