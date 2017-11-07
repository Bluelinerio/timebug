import t from "../components/templates";


export default {

  1: {
    title: "Take some time to evaluate your salary and compensation over the past 5 years.",
    type: t.struct({
      salaryGrowth: t.struct({
          jan2011Salary: t.Number,
          Dec2015Salary: t.Number
        }),
        paidFairly: t.struct({
            beyondFair: t.maybe(t.Boolean),
            notFair: t.maybe(t.Boolean),
            justRight: t.maybe(t.Boolean)
          }),
          compensationGoals: t.struct({
            yes: t.maybe(t.Boolean),
            no: t.maybe(t.Boolean)
          }),
          hoursPerWeek: t.Number,
          hoursChanged: t.maybe(t.String)
    }),
    options: {
      fields: {
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
        salaryGrowth: {
            label:'How have your work week hours changed since 2011?',
            fields: {
            jan2011Salary: {
                placeholder: 'Jan 2011 salary',
                auto: 'none'
            },
            Dec2015Salary: {
                placeholder: 'Dec 2015 Salary',
                auto: 'none'
            }
            
          }

        }, 
         auto: 'none'
            },
          }
        },
  2: {
    title: "Take some time to evaluate your fulfillment with what you are doing in the workplace using a 10pt scale(1=hate it vs 10=love it, and 1=not motivated vs 10=highly motivated)",
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
      fields: {
        fulfillment: {
          auto:'none',
          label:'How fulfilling is your work?'
        },
        pastFiveYears: {
          auto:'none',
          label:'How did you feel about your work over the past 5 years?',
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
  }

};


