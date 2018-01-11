import t from "../components/templates";
import { AssessmentTypes } from "./contents";

export default {
    1:{
      type: t.struct({
        id:t.maybe(t.String),
        topGoals:t.list(
          t.struct({
          goal: t.String,
          newInsights: t.String,
          specificChanges: t.String
          })
        )
      }),
      options: {
        label:'Reflect back on your Day 11 Worksheet (The 5-Year Life Report), and make refinements or additional notes, given what you have seen here. Be more technical than before, especially when it comes to how you spent your Time & Energy.',
        fields: {
          id: {
            hidden: true
          },
          topGoals: {
            label:'Review your goals, time spent, and key achievements listed on Day 11. What, if anything, has changed with your time and energy allotment?',            
            item: {
              fields: {
                goal: {
                  auto:'placerholders',
                  error:'Please fill out this field.'
                },
                newInsights: {
                  placeholder:'New insights(be as technical as you can)',
                  error:'Please fill out this field.',
                  auto:'none'
                },
                specificChanges: {
                  placeholder: 'Specific changes to make',
                  error:'Please fill out this field.',
                  auto:'none'
                }
              }
            }
          }
        }
      },
      value : {
        fields: {
          id: 'step20+v0.0.0.1'
        }
      }

    },
    2:{
      type: t.struct({
          lifeCategoryBreakdown: t.String,
          thingsDoLess: t.String,
          thingsDoMore: t.String
      }),
      options: {
        label:'Reflect back on your Day 2 Worksheet (More or Less Time), and make refinements or additional notes, in relation to how your time allocation has changed over the past 5 years; and how you ideally would like to make changes in the current breakdown across Life Categories.',
        fields: {
          lifeCategoryBreakdown: {
            label:'a)Has anything changed with your life category breakdown?',
            error: 'Please fill out this field.'
          },
          thingsDoLess: {
            label:'b)Has anything changed with your 3 things that you want to DO LESS of in general(i.e. "Watching TV")?',
            error: 'Please fill out this field.'
          },
          thingsDoMore: {
            label:'c)Has anything changed with your 3 things that you want to DO MORE of in general(i.e. "Exercising")?',
            error: 'Please fill out this field.'
          }
        }
      }

    },
    3: {
      type:t.struct({
        rank1:AssessmentTypes,
        rank2:AssessmentTypes,
        rank3:AssessmentTypes,
        rank4:AssessmentTypes,
        rank5:AssessmentTypes,
        rank6:AssessmentTypes,
        rank7:AssessmentTypes
      }),
      options:{
        label: 'Reflect back on your 7 Assessments [Days 13-19]',
        fields: {
        rank1:{
            label: 'Rank the 7 Areas in terms of the order of importance you gave them over the past 5 years.\nRank 1:',
            error: 'Please select a value'
            
        },
        rank2:{
          auto:'labels',
          error: 'Please select a value'
        },
        rank3:{
          auto:'labels',
          error: 'Please select a value'
        },
        rank4:{
          auto:'labels',
          error: 'Please select a value'
        },
        rank5:{
          auto:'labels',
          error: 'Please select a value'
        },
        rank6:{
          auto:'labels',
          error: 'Please select a value'
        },
        rank7:{
          auto:'labels',
          error: 'Please select a value'
        }
        }
          }
      },
      4 : {
        type:t.struct ({
          career: t.Number,
          personalityAndHobbies: t.Number,
          health: t.Number,
          relationship:t.Number,
          financial:t.Number,
          placeAndEnvironment:t.Number,
          spirituality:t.Number
        }),
        options: {
          career: {
            label: 'If the 7 areas were a pie, how would you slice up your energy and motivation level?(Total should = 100%)',
            placeholder:'Career',
            error: 'Please fill out this field.'
          },
          personalityAndHobbies:{
            auto:'placeholders',
            error: 'Please fill out this field.'
          },
          health:{
            auto:'placeholders',
            error: 'Please fill out this field.'
          },
          relationship:{
            auto:'placeholders',
            error: 'Please fill out this field.'
          },
          financial:{
            auto:'placeholders',
            error: 'Please fill out this field.'
          },
          placeAndEnvironment:{
            auto:'placeholders',
            error: 'Please fill out this field.'
          },
          spirituality:{
            auto:'placeholders',
            error: 'Please fill out this field.'
          }
        }

      },
      5: {
        type:t.struct({
          career2011:t.Number,
          personalityAndHobbies2011:t.Number,
          health2011:t.Number,
          relationship2011:t.Number,
          financial2011:t.Number,
          placeAndEnvironment2011:t.Number,
          spirituality2011:t.Number,
          career2012:t.Number,
          personalityAndHobbies2012:t.Number,
          health2012:t.Number,
          relationship2012:t.Number,
          financial2012:t.Number,
          placeAndEnvironment2012:t.Number,
          spirituality2012:t.Number,
          career2013:t.Number,
          personalityAndHobbies2013:t.Number,
          health2013:t.Number,
          relationship2013:t.Number,
          financial2013:t.Number,
          placeAndEnvironment2013:t.Number,
          spirituality2013:t.Number,
          career2014:t.Number,
          personalityAndHobbies2014:t.Number,
          health2014:t.Number,
          relationship2014:t.Number,
          financial2014:t.Number,
          placeAndEnvironment2014:t.Number,
          spirituality2014:t.Number,
          career2015:t.Number,
          personalityAndHobbies2015:t.Number,
          health2015:t.Number,
          relationship2015:t.Number,
          financial2015:t.Number,
          placeAndEnvironment2015:t.Number,
          spirituality2015:t.Number,
          careerOverall:t.Number,
          personalityAndHobbiesOverall:t.Number,
          healthOverall:t.Number,
          relationshipOverall:t.Number,
          financialOverall:t.Number,
          placeAndEnvironmentOverall:t.Number,
          spiritualityOverall:t.Number
         }),
         options: {
           label:'Give yourself a final evaluation for each of the past 5-years, as well as an overall 5-Year Score(1-10 score per year, for a total maximum high score of 50/50, per each of the 7 Areas that were assessed).',
           fields: {
             
             career2011:{
               label:'2011',
               placeholder:'Career 2011',
               error: 'Please fill out this field.'
             },
             personalityAndHobbies2011: {
               placeholder:'Personality/Hobbies 2011',
               auto:'none',
               error: 'Please fill out this field.'
             },
             health2011: {
             
               placeholder:'Health 2011',
               auto:'none',
               error: 'Please fill out this field.'
             },
             relationship2011: {
        
              placeholder:'Relationship 2011',
              auto:'none',
              error: 'Please fill out this field.'
            },
            financial2011: {
              
              placeholder:'Financial 2011',
              auto:'none',
              error: 'Please fill out this field.'
            },
            placeAndEnvironment2011: {
           
              placeholder:'P & E 2011',
              auto:'none',
              error: 'Please fill out this field.'
            },
            spirituality2011: {

              placeholder:'Spirituality 2011',
              auto:'none',
              error: 'Please fill out this field.'
            },
             career2012:{
              label:'2012',
              placeholder:'Career 2012',
              error: 'Please fill out this field.'
            },
            personalityAndHobbies2012: {
              placeholder:'Personality/Hobbies 2012',
              auto:'none',
              error: 'Please fill out this field.'
            },
            health2012: {
              placeholder:'Health 2012',
              auto:'none',
              error: 'Please fill out this field.'
            },
            relationship2012: {
              placeholder:'Relationship 2012',
              auto:'none',
              error: 'Please fill out this field.'
           },
           financial2012: {
            placeholder:'Financial 2012',
            auto:'none',
            error: 'Please fill out this field.'
           },
           placeAndEnvironment2012: {
            placeholder:'P & E 2012',
            auto:'none',
            error: 'Please fill out this field.'
           },
           spirituality2012: {
            placeholder:'Spirituality 2012',
            auto:'none',
            error: 'Please fill out this field.'
           },
            career2013:{
              label:'2013',
              placeholder:'Career 2013',
              error: 'Please fill out this field.'
            },
            personalityAndHobbies2013: {
             
              placeholder:'Personality/Hobbies 2013',
              auto:'none',
              error: 'Please fill out this field.'
            },
            health2013: {
     
              placeholder:'Health 2013',
              auto:'none',
              error: 'Please fill out this field.'
            },
            relationship2013: {
         
             placeholder:'Relationship 2013',
             auto:'none',
             error: 'Please fill out this field.'
           },
           financial2013: {
      
             placeholder: 'Financial 2013',
             auto:'none',
             error: 'Please fill out this field.'
           },
           placeAndEnvironment2013: {
             placeholder: 'P & E 2013',
             auto:'none'
             
           },
           spirituality2013: {
             placeholder: 'Spirituality 2013',
             auto:'none',
             error: 'Please fill out this field.'
           },
            career2014:{
              label:'2014',
              placeholder:'Career 2014',
              error: 'Please fill out this field.'
            },
            personalityAndHobbies2014: {
              placeholder:'Personality/Hobbies 2014',
              auto:'none',
              error: 'Please fill out this field.'
            },
            health2014: {
              placeholder:'Health 2014',
              auto:'none',
              error: 'Please fill out this field.'
            },
            relationship2014: {
              placeholder:'Relationship 2014',
              auto:'none',
              error: 'Please fill out this field.'
           },
           financial2014: {
            placeholder:'Financial 2014',
            auto:'none',
            error: 'Please fill out this field.'
           },
           placeAndEnvironment2014: {
            placeholder:'P & E 2014',
            auto:'none',
            error: 'Please fill out this field.'
           },
           spirituality2014: {
            placeholder:'Spirituality 2014',
            auto:'none',
            error: 'Please fill out this field.'
           },
            career2015:{
              label:'2015',
              placeholder:'Career 2015',
              error: 'Please fill out this field.'
            },
            personalityAndHobbies2015: {
              placeholder:'Personality/Hobbies 2015',
              auto:'none',
              error: 'Please fill out this field.'
            },
            health2015: {
              placeholder:'Health 2015',
              auto:'none',
              error: 'Please fill out this field.'
            },
            relationship2015: {
              placeholder:'Relationship 2015',
              auto:'none',
              error: 'Please fill out this field.'
           },
           financial2015: {
            placeholder:'Financial 2015',
            auto:'none',
            error: 'Please fill out this field.'
           },
           placeAndEnvironment2015: {
            placeholder:'P & E 2015',
            auto:'none',
            error: 'Please fill out this field.'
           },
           spirituality2015: {
            placeholder:'Spirituality 2015',
            auto:'none',
            error: 'Please fill out this field.'
           },
            careerOverall:{
              label:'Overall',
              placeholder:'Career Overall'
            },
            personalityAndHobbiesOverall:{
              placeholder:'Personality/Hobbies Overall',
              auto:'none',
              
            },
            healthOverall: {
              placeholder:'Health Overall',
              auto:'none'
            },
            relationshipOverall: {
              placeholder:'Relationship Overall',
              auto:'none'
            },
            financialOverall: {
              placeholder:'Financial Overall',
              auto:'none'
            },
            placeAndEnvironmentOverall: {
              placeholder:'P & E Overall',
              auto:'none'
            },
            spiritualityOverall: {
              placeholder:'Spirituality Overall',
              auto:'none'
            }

           }
         }

      },
      6:{
        type:t.struct({
          career2011:t.Number,
          personalityAndHobbies2011:t.Number,
          health2011:t.Number,
          relationship2011:t.Number,
          financial2011:t.Number,
          placeAndEnvironment2011:t.Number,
          spirituality2011:t.Number,
          career2012:t.Number,
          personalityAndHobbies2012:t.Number,
          health2012:t.Number,
          relationship2012:t.Number,
          financial2012:t.Number,
          placeAndEnvironment2012:t.Number,
          spirituality2012:t.Number,
          career2013:t.Number,
          personalityAndHobbies2013:t.Number,
          health2013:t.Number,
          relationship2013:t.Number,
          financial2013:t.Number,
          placeAndEnvironment2013:t.Number,
          spirituality2013:t.Number,
          career2014:t.Number,
          personalityAndHobbies2014:t.Number,
          health2014:t.Number,
          relationship2014:t.Number,
          financial2014:t.Number,
          placeAndEnvironment2014:t.Number,
          spirituality2014:t.Number,
          career2015:t.Number,
          personalityAndHobbies2015:t.Number,
          health2015:t.Number,
          relationship2015:t.Number,
          financial2015:t.Number,
          placeAndEnvironment2015:t.Number,
          spirituality2015:t.Number,
          careerOverall:t.Number,
          personalityAndHobbiesOverall:t.Number,
          healthOverall:t.Number,
          relationshipOverall:t.Number,
          financialOverall:t.Number,
          placeAndEnvironmentOverall:t.Number,
          spiritualityOverall:t.Number
         }),
         options: {
           label:'Have one other person(per Area) - be it a family member or friend, and preferably one of your CEO of Me Board Members - give you a Score for the past 5 years(on a 1-10 scale), and then multiply that number by 5, to arrive at your 3rd Party Rating(this number will be between 5-50; and you should have one for each of the 7 Assessment Areas).',
           fields: {
             
             career2011:{
               label:'2011',
               placeholder:'Career 2011',
               error: 'Please fill out this field.'
             },
             personalityAndHobbies2011: {
               placeholder:'Personality/Hobbies 2011',
               auto:'none',
               error: 'Please fill out this field.'
             },
             health2011: {
             
               placeholder:'Health 2011',
               auto:'none',
               error: 'Please fill out this field.'
             },
             relationship2011: {
        
              placeholder:'Relationship 2011',
              auto:'none',
              error: 'Please fill out this field.'
            },
            financial2011: {
              
              placeholder:'Financial 2011',
              auto:'none',
              error: 'Please fill out this field.'
            },
            placeAndEnvironment2011: {
           
              placeholder:'P & E 2011',
              auto:'none',
              error: 'Please fill out this field.'
            },
            spirituality2011: {

              placeholder:'Spirituality 2011',
              auto:'none',
              error: 'Please fill out this field.'
            },
             career2012:{
              label:'2012',
              placeholder:'Career 2012',
              error: 'Please fill out this field.'
            },
            personalityAndHobbies2012: {
              placeholder:'Personality/Hobbies 2012',
              error: 'Please fill out this field.',
              auto:'none'
            },
            health2012: {
              placeholder:'Health 2012',
              auto:'none',
              error: 'Please fill out this field.'
            },
            relationship2012: {
              placeholder:'Relationship 2012',
              auto:'none',
              error: 'Please fill out this field.'
           },
           financial2012: {
            placeholder:'Financial 2012',
            auto:'none',
            error: 'Please fill out this field.'
           },
           placeAndEnvironment2012: {
            placeholder:'P & E 2012',
            auto:'none',
            error: 'Please fill out this field.'
           },
           spirituality2012: {
            placeholder:'Spirituality 2012',
            auto:'none',
            error: 'Please fill out this field.'
           },
            career2013:{
              label:'2013',
              placeholder:'Career 2013',
              error: 'Please fill out this field.'
            },
            personalityAndHobbies2013: {
             
              placeholder:'Personality/Hobbies 2013',
              auto:'none',
              error: 'Please fill out this field.'
            },
            health2013: {
     
              placeholder:'Health 2013',
              auto:'none',
              error: 'Please fill out this field.'
            },
            relationship2013: {
         
             placeholder:'Relationship 2013',
             auto:'none',
             error: 'Please fill out this field.'
           },
           financial2013: {
      
             placeholder: 'Financial 2013',
             auto:'none',
             error: 'Please fill out this field.'
           },
           placeAndEnvironment2013: {
             placeholder: 'P & E 2013',
             auto:'none',
             error: 'Please fill out this field.'
             
           },
           spirituality2013: {
             placeholder: 'Spirituality 2013',
             auto:'none',
             error: 'Please fill out this field.'
           },
            career2014:{
              label:'2014',
              placeholder:'Career 2014',
              error: 'Please fill out this field.'
            },
            personalityAndHobbies2014: {
              placeholder:'Personality/Hobbies 2014',
              auto:'none',
              error: 'Please fill out this field.'
            },
            health2014: {
              placeholder:'Health 2014',
              auto:'none',
              error: 'Please fill out this field.'
            },
            relationship2014: {
              placeholder:'Relationship 2014',
              auto:'none',
              error: 'Please fill out this field.'
           },
           financial2014: {
            placeholder:'Financial 2014',
            auto:'none',
            error: 'Please fill out this field.'
           },
           placeAndEnvironment2014: {
            placeholder:'P & E 2014',
            auto:'none',
            error: 'Please fill out this field.'
           },
           spirituality2014: {
            placeholder:'Spirituality 2014',
            auto:'none',
            error: 'Please fill out this field.'
           },
            career2015:{
              label:'2015',
              placeholder:'Career 2015',
              error: 'Please fill out this field.'
            },
            personalityAndHobbies2015: {
              placeholder:'Personality/Hobbies 2015',
              auto:'none',
              error: 'Please fill out this field.'
            },
            health2015: {
              placeholder:'Health 2015',
              auto:'none',
              error: 'Please fill out this field.'
            },
            relationship2015: {
              placeholder:'Relationship 2015',
              auto:'none',
              error: 'Please fill out this field.'
           },
           financial2015: {
            placeholder:'Financial 2015',
            auto:'none',
            error: 'Please fill out this field.'
           },
           placeAndEnvironment2015: {
            placeholder:'P & E 2015',
            auto:'none',
            error: 'Please fill out this field.'
           },
           spirituality2015: {
            placeholder:'Spirituality 2015',
            auto:'none',
            error: 'Please fill out this field.'
           },
            careerOverall:{
              label:'Overall',
              placeholder:'Career Overall',
              error: 'Please fill out this field.'
            },
            personalityAndHobbiesOverall:{
              placeholder:'Personality/Hobbies Overall',
              auto:'none',
              error: 'Please fill out this field.'
            },
            healthOverall: {
              placeholder:'Health Overall',
              auto:'none',
              error: 'Please fill out this field.'
            },
            relationshipOverall: {
              placeholder:'Relationship Overall',
              auto:'none',
              error: 'Please fill out this field.'
            },
            financialOverall: {
              placeholder:'Financial Overall',
              auto:'none',
              error: 'Please fill out this field.'
            },
            placeAndEnvironmentOverall: {
              placeholder:'P & E Overall',
              auto:'none',
              error: 'Please fill out this field.'
            },
            spiritualityOverall: {
              placeholder:'Spirituality Overall',
              auto:'none',
              error: 'Please fill out this field.'
            }

           }
         }

      }
          
};
