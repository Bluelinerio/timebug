import t from "../components/templates";
import { PaidFairly } from "./contents";


export default {

  1: {
    type: t.struct({
        id:t.maybe(t.String),
        salaryGrowth: t.struct({
          jan2011Salary: t.Number,
          Dec2015Salary: t.Number
        }),
        paidFairly: PaidFairly,
        compensationGoals: t.Boolean,
        hoursPerWeek: t.Number,
        hoursChanged: t.maybe(t.String)
    }),
    options: {
      label: "Take some time to evaluate your salary and compensation over the past 5 years.",
      fields: {
          id:{
              hidden: true
          },
        salaryGrowth: {
            label:'How has your salary grown(or not) from 01/11 to 12/15(5 full years)?'
        }, 
        paidFairly: {
            label:'Do you feel like you are being paid fairly for what you offer?'
        }, 
        compensationGoals: {
            label:'Did you meet whatever compensation goals you had set for 2015, anytime in 2011-2014?'
        }, 
        hoursPerWeek: {
            label:'How many hours do you work on average per week?'
        }, 
        hoursChanged: {
            label:'How have your work week hours changed since 2011?',

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
        fulfillment: t.Number,
        pastFiveYears:
            t.struct({
                twentyEleven: t.Number,
                twentyTwelve: t.Number,
                twentyThirteen: t.Number,
                twentyFourteen: t.Number,
                twentyFifteen: t.Number
            }),
        motivationLevel: t.Number,
        meaningfulAchievements: t.list(
            t.struct({
                meaningfulAchievement: t.String,
                whatChanged: t.String
             })
        )
        
    }),
    options: {
      label: "Take some time to evaluate your fulfillment with what you are doing in the workplace using a 10pt scale(1=hate it vs 10=love it, and 1=not motivated vs 10=highly motivated)",
      fields: {
        fulfillment: {
          auto:'none',
          label:'How fulfilling is your work?'
        },
        pastFiveYears: {
          auto:'none',
          label:'How did you feel about your work over the past 5 years?',
          fields: {
          twentyEleven: {
              placeholder:'2011'
          },
          twentyTwelve: {
            placeholder:'2012'
          },
          twentyThirteen: {
            placeholder:'2013'
          },
          twentyFourteen: {
              placeholder:'2014'
          },
          twentyFifteen: {
              placeholder:'2015'
          }
        }
        },
        motivationLevel: {
            label: 'What is your motivation level at work right now?'
        },
        meaningfulAchievements : {
            label: 'List up to 5 meaningful achievements that you have had at work over the past 5 years',
            item: {
                fields: {
                    meaningfulAchievement: {
                        placeholder: 'Meaningful Achievement'

                    },
                    whatChanged: {
                        placeholder: 'What changed, if anything?'

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
          label:'What would your boss/peer say about your workplace performance?'
        },
        whatMentorSays: {
          auto:'none',
          label:'What does your work mentor(assuming it is not your boss, otherwise skip this question) think about your workplace performance?'
        },
        whatYouSay: {
            auto:'none',
            label: 'What do you say, now for yourself - what were your shortcomings over these 5 years?'
        },
        whatPricePaid: {
            auto:'none',
            label: 'What price did you pay for your self-recognized or boss/colleague-perceived weaknesses over the past 5 years? (can be from multiple jobs)'
        }
    }
    }
  }

};


