import t from "../components/templates";
import { AssessmentTypes, TimeSpentProgress, OneToTenScale, OverallScore } from "./contents";

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
        fields: {
          id: {
            hidden: true
          },
          topGoals: {
            label:'Reflect on your Step 11 entry (The 5-Year Life Report) and make refinements or additional notes. Be more technical and detailed, especially about how you spent your Time & Energy.',            
            item: {
              fields: {
                goal: {
                  placeholder: 'Goal'
                },
                newInsights: {
                  placeholder:'New insights'
                },
                specificChanges: {
                  placeholder: 'Specific changes to make'
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
          pillarsOfLifeBreakdown: t.String,
          thingsDoLess: TimeSpentProgress,
          thingsDoMore: TimeSpentProgress
      }),
      options: {
        fields: {
          label:'Reflect back on your Step 2 entry (More or Less Time) and refine your vision on how you want to spend your time over the next 5 years.',         
          pillarsOfLifeBreakdown: {
            label:'Has anything changed with your life category breakdown?'
          },
          thingsDoLess: {
            label:'Has anything changed with your 3 things that you want to DO LESS of in general(i.e. "Watching TV")?'
          },
          thingsDoMore: {
            label:'c)Has anything changed with your 3 things that you want to DO MORE of in general(i.e. "Exercising")?'
          }
        }
      }

    },
    3: {

      type:t.struct({
        career:OneToTenScale,
        personalityAndHobbies:OneToTenScale,
        health:OneToTenScale,
        financial:OneToTenScale,
        relationship:OneToTenScale,
        placeAndEnvironment:OneToTenScale,
        spirituality:OneToTenScale
      }),
      options:{
        fields: {
          label: 'Rank each of the 7 Life Categories in order of importance to you over the past 5 years.',            
          
          career:{
          auto:'labels',
          help:'(10= Very Important and 1= Not important at all)'
        },
        personalityAndHobbies:{
          auto:'labels',
          help:'(10= Very Important and 1= Not important at all)'
        },
        health:{
          auto:'labels',
          help:'(10= Very Important and 1= Not important at all)'
        },
        financial:{
          auto:'labels',
          help:'(10= Very Important and 1= Not important at all)',
          relationship:{
          auto:'labels',
          help:'(10= Very Important and 1= Not important at all)'
        },
        placeAndEnvironment:{
          auto:'labels',
          help:'(10= Very Important and 1= Not important at all)'
        },
        spirituality:{
          auto:'labels',
          help:'(10= Very Important and 1= Not important at all)'
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
          fields: {
            label:"How would you divide your energy and motivation level as a percent of a pie for each Category?",
          career: {
            auto:'placeholders'
                    },
          personalityAndHobbies:{
            auto:'placeholders'
          },
          health:{
            auto:'placeholders'
          },
          relationship:{
            auto:'placeholders'
          },
          financial:{
            auto:'placeholders'
          },
          placeAndEnvironment:{
            auto:'placeholders'
          },
          spirituality:{
            auto:'placeholders'
          }
        }
        }

      },
      5: {
        type:t.struct({
          careerYear1:OneToTenScale,
          personalityAndHobbiesYear1:OneToTenScale,
          healthYear1:OneToTenScale, 
          relationshipYear1:OneToTenScale,
          financialYear1:OneToTenScale,
          placeAndEnvironmentYear1:OneToTenScale,
          spiritualityYear1:OneToTenScale,
          careerYear2:OneToTenScale,
          personalityAndHobbiesYear2:OneToTenScale,
          healthYear2:OneToTenScale,
          relationshipYear2:OneToTenScale,
          financialYear2:OneToTenScale,
          placeAndEnvironmentYear2:OneToTenScale,
          spiritualityYear2:OneToTenScale,
          careerYear3:OneToTenScale,
          personalityAndHobbiesYear3:OneToTenScale,
          healthYear3:OneToTenScale,
          relationshipYear3:OneToTenScale,
          financialYear3:OneToTenScale,
          placeAndEnvironmentYear3:OneToTenScale,
          spiritualityYear3:OneToTenScale,
          careerYear4:OneToTenScale,
          personalityAndHobbiesYear4:OneToTenScale,
          healthYear4:OneToTenScale,
          relationshipYear4:OneToTenScale,
          financialYear4:OneToTenScale,
          placeAndEnvironmentYear4:OneToTenScale,
          spiritualityYear4:OneToTenScale,
          careerYear5:OneToTenScale,
          personalityAndHobbiesYear5:OneToTenScale,
          healthYear5:OneToTenScale,
          relationshipYear5:OneToTenScale,
          financialYear5:OneToTenScale,
          placeAndEnvironmentYear5:OneToTenScale,
          spiritualityYear5:OneToTenScale,
          careerOverall:OverallScore,
          personalityAndHobbiesOverall:OverallScore,
          healthOverall:OverallScore,
          relationshipOverall:OverallScore,
          financialOverall:OverallScore,
          placeAndEnvironmentOverall:OverallScore,
          spiritualityOverall:OverallScore
         }),
         options: {
           label:'Give yourself a final evaluation for each of the past 5 Years, as well as an overall 5-Year Score (1-10 score per year per Life Category for a total maximum high score of 50/50).',
           fields: {
             
             careerYear1:{
               labels:'auto'
               
             },
             personalityAndHobbiesYear1: {
              labels:'auto'
              
             },
             healthYear1: {
             
              labels:'auto'
              
             },
             relationshipYear1: {
        
              labels:'auto'
              
            },
            financialYear1: {        
              labels:'auto'
              
            },
            placeAndEnvironmentYear1: {
           
              labels:'auto'
              
            },
            spiritualityYear1: {

              labels:'auto'
              
            },
             careerYear2:{
              labels:'auto'
              
            },
            personalityAndHobbiesYear2: {
              labels:'auto'
              
            },
            healthYear2: {
              labels:'auto'
              
            },
            relationshipYear2: {
              labels:'auto'
              
           },
           financialYear2: {
            labels:'auto'
            
           },
           placeAndEnvironmentYear2: {
            labels:'auto'
            
           },
           spiritualityYear2: {
            labels:'auto'
            
           },
            careerYear3:{
              labels:'auto'
              
            },
            personalityAndHobbiesYear3: {
             
              labels:'auto'
              
            },
            healthYear3: {
              labels:'auto'
              
            },
            relationshipYear3: {
         
              labels:'auto'
              
           },
           financialYear3: {
            labels:'auto'
            
           },
           placeAndEnvironmentYear3: {
            labels:'auto'
            
           },
           spiritualityYear3: {
            labels:'auto'
            
           },
            careerYear4:{
              labels:'auto'
              
            },
            personalityAndHobbiesYear4: {
              labels:'auto'
              
            },
            healthYear4: {
              labels:'auto'
              
            },
            relationshipYear4: {
              labels:'auto'
              
           },
           financialYear4: {
            labels:'auto'
            
           },
           placeAndEnvironmentYear4: {
            labels:'auto'
            
           },
           spiritualityYear4: {
            labels:'auto'
            
           },
            careerYear5:{
              labels:'auto'
              
            },
            personalityAndHobbiesYear5: {
              labels:'auto'
              
            },
            healthYear5: {
              labels:'auto'
              
            },
            relationshipYear5: {
              labels:'auto'
              
           },
           financialYear5: {
            labels:'auto'
            
           },
           placeAndEnvironmentYear5: {
            labels:'auto'
            
           },
           spiritualityYear5: {
            labels:'auto'
            
           },
            careerOverall:{
              labels:'auto',
              error: 'Add up your give year career score'
            },
            personalityAndHobbiesOverall:{
              label:'Personality & Hobbies Overall',
              error:'Add up your five year personality & hobbies score'
              
            },
            healthOverall: {
              label:'Health Overall',
              error:'Add up your five year health score'
            },
            relationshipOverall: {
              label:'Relationships Overall',
              error:'Add up your five year relationship score'
            },
            financialOverall: {
              label:'Financial Overall',
              error:'Add up your five year financial score'
            },
            placeAndEnvironmentOverall: {
              label:'P & E Overall',
              error:'Add up your five year P & E score'
            },
            spiritualityOverall: {
              label:'Spirituality Overall',
              error:'Add up your five year spirituality score'
            }

           }
         }

      },
      6:{
        type:t.struct({
          careerYear1:OneToTenScale,
          personalityAndHobbiesYear1:OneToTenScale,
          healthYear1:OneToTenScale,
          relationshipYear1:OneToTenScale,
          financialYear1:OneToTenScale,
          placeAndEnvironmentYear1:OneToTenScale,
          spiritualityYear1:OneToTenScale,
          careerYear2:OneToTenScale,
          personalityAndHobbiesYear2:OneToTenScale,
          healthYear2:OneToTenScale,
          relationshipYear2:OneToTenScale,
          financialYear2:OneToTenScale,
          placeAndEnvironmentYear2:OneToTenScale,
          spiritualityYear2:OneToTenScale,
          careerYear3:OneToTenScale,
          personalityAndHobbiesYear3:OneToTenScale,
          healthYear3:OneToTenScale,
          relationshipYear3:OneToTenScale,
          financialYear3:OneToTenScale,
          placeAndEnvironmentYear3:OneToTenScale,
          spiritualityYear3:OneToTenScale,
          careerYear4:OneToTenScale,
          personalityAndHobbiesYear4:OneToTenScale,
          healthYear4:OneToTenScale,
          relationshipYear4:OneToTenScale,
          financialYear4:OneToTenScale,
          placeAndEnvironmentYear4:OneToTenScale,
          spiritualityYear4:OneToTenScale,
          careerYear5:OneToTenScale,
          personalityAndHobbiesYear5:OneToTenScale,
          healthYear5:OneToTenScale,
          relationshipYear5:OneToTenScale,
          financialYear5:OneToTenScale,
          placeAndEnvironmentYear5:OneToTenScale,
          spiritualityYear5:OneToTenScale,
          careerOverall:OverallScore,
          personalityAndHobbiesOverall:OverallScore,
          healthOverall:OverallScore,
          relationshipOverall:OverallScore,
          financialOverall:OverallScore,
          placeAndEnvironmentOverall:OverallScore,
          spiritualityOverall:OverallScore
         }),
         options: {
           label:'Have one other person(per Area) - be it a family member or friend, and preferably one of your CEO of Me Board Members - give you a Score for the past 5 years(on a 1-10 scale), to arrive at an overall 5 year score for each of the 7 assessment areas. Would you like to engage someone to help you do this?',
           fields: {
             
             careerYear1:{
              labels:'auto'
               
             },
             personalityAndHobbiesYear1: {
              labels:'auto'
               
             },
             healthYear1: {
              labels:'auto'
               
             },
             relationshipYear1: {
        
              labels:'auto'
               
            },
            financialYear1: {
              labels:'auto'
               
            },
            placeAndEnvironmentYear1: {
              labels:'auto'
               
            },
            spiritualityYear1: {
              labels:'auto'
               
            },
             careerYear2:{
              labels:'auto'
               
            },
            personalityAndHobbiesYear2: {
              labels:'auto'
               
            },
            healthYear2: {
              labels:'auto'
               
            },
            relationshipYear2: {
              labels:'auto'
               
           },
           financialYear2: {
            labels:'auto'
             
           },
           placeAndEnvironmentYear2: {
            labels:'auto'
             
           },
           spiritualityYear2: {
            labels:'auto'
             
           },
            careerYear3:{
              labels:'auto'
               
            },
            personalityAndHobbiesYear3: {
              labels:'auto'
               
            },
            healthYear3: {
              labels:'auto'
               
            },
            relationshipYear3: {
              labels:'auto'
               
           },
           financialYear3: {
            labels:'auto'
             
           },
           placeAndEnvironmentYear3: {
            labels:'auto'
             
             
           },
           spiritualityYear3: {
            labels:'auto'
             
           },
            careerYear4:{
              labels:'auto'
               
            },
            personalityAndHobbiesYear4: {
              labels:'auto'
               
            },
            healthYear4: {
              labels:'auto'
               
            },
            relationshipYear4: {
              labels:'auto'
               
           },
           financialYear4: {
            labels:'auto'
             
           },
           placeAndEnvironmentYear4: {
            labels:'auto'
             
           },
           spiritualityYear4: {
            labels:'auto'
             
           },
            careerYear5:{
              labels:'auto'
               
            },
            personalityAndHobbiesYear5: {
              labels:'auto'
               
            },
            healthYear5: {
              labels:'auto'
               
            },
            relationshipYear5: {
              labels:'auto'
               
           },
           financialYear5: {
            labels:'auto'
             
           },
           placeAndEnvironmentYear5: {
            labels:'auto'
             
           },
           spiritualityYear5: {
            labels:'auto'
             
           },
            careerOverall:{
              labels:'auto'
               
            },
            personalityAndHobbiesOverall:{
              labels:'auto'
               
            },
            healthOverall: {
              labels:'auto'
  
            },
            relationshipOverall: {
              labels:'auto'
  
            },
            financialOverall: {
              labels:'auto'
  
            },
            placeAndEnvironmentOverall: {
              labels:'auto'
  
            },
            spiritualityOverall: {
              labels:'auto'
  
            }

           }
         }

      }
    }
};
