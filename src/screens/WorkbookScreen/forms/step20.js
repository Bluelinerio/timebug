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
                  placeholder: 'Goal',
                  error:'Please enter a goal.'
                },
                newInsights: {
                  placeholder:'New insights',
                  error:'Be as technical as you can, regarding new insights towards this goal.',
                  auto:'none'
                },
                specificChanges: {
                  placeholder: 'Specific changes to make',
                  error:'What specific changes do you need to make in the coming year in order to make significant progress towards this goal?',
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
          thingsDoLess: TimeSpentProgress,
          thingsDoMore: TimeSpentProgress
      }),
      options: {
        label:'Reflect back on your Day 2 Worksheet (More or Less Time), and make refinements or additional notes, in relation to how your time allocation has changed over the past 5 years; and how you ideally would like to make changes in the current breakdown across Life Categories.',
        fields: {
          lifeCategoryBreakdown: {
            label:'Has anything changed with your life category breakdown?',
            error: "Maybe you're spending more time with certain categories and less with others? Is this a good thing?."
          },
          thingsDoLess: {
            label:'Has anything changed with your 3 things that you want to DO LESS of in general(i.e. "Watching TV")?',
            error: 'Please select a value.'
          },
          thingsDoMore: {
            label:'c)Has anything changed with your 3 things that you want to DO MORE of in general(i.e. "Exercising")?',
            error: 'Please select a value.'
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
            error: 'Which assesment type is most important to you?'
            
        },
        rank2:{
          auto:'labels',
          error: 'Which assesment type is 2nd most important to you?'
        },
        rank3:{
          auto:'labels',
          error: 'Which assesment type is 3rd most important to you?'
        },
        rank4:{
          auto:'labels',
          error: 'Which assesment type is 4th most important to you?'
        },
        rank5:{
          auto:'labels',
          error: 'Which assesment type is 5th most important to you?'
        },
        rank6:{
          auto:'labels',
          error: 'Which assesment type is 6th most important to you?'
        },
        rank7:{
          auto:'labels',
          error: 'Which assesment type is least important to you?'
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
           label:'Give yourself a final evaluation for each of the past 5-years, as well as an overall 5-Year Score(1-10 score per year, for a total maximum high score of 50/50, per each of the 7 Areas that were assessed).',
           fields: {
             
             careerYear1:{
               labels:'auto',
               error: 'Give yourself a score'
             },
             personalityAndHobbiesYear1: {
              labels:'auto',
              error: 'Give yourself a score'
             },
             healthYear1: {
             
              labels:'auto',
              error: 'Give yourself a score'
             },
             relationshipYear1: {
        
              labels:'auto',
              error: 'Give yourself a score'
            },
            financialYear1: {        
              labels:'auto',
              error: 'Give yourself a score'
            },
            placeAndEnvironmentYear1: {
           
              labels:'auto',
              error: 'Give yourself a score'
            },
            spiritualityYear1: {

              labels:'auto',
              error: 'Give yourself a score'
            },
             careerYear2:{
              labels:'auto',
              error: 'Give yourself a score'
            },
            personalityAndHobbiesYear2: {
              labels:'auto',
              error: 'Give yourself a score'
            },
            healthYear2: {
              labels:'auto',
              error: 'Give yourself a score'
            },
            relationshipYear2: {
              labels:'auto',
              error: 'Give yourself a score'
           },
           financialYear2: {
            labels:'auto',
            error: 'Give yourself a score'
           },
           placeAndEnvironmentYear2: {
            labels:'auto',
            error: 'Give yourself a score'
           },
           spiritualityYear2: {
            labels:'auto',
            error: 'Give yourself a score'
           },
            careerYear3:{
              labels:'auto',
              error: 'Give yourself a score'
            },
            personalityAndHobbiesYear3: {
             
              labels:'auto',
              error: 'Give yourself a score'
            },
            healthYear3: {
              labels:'auto',
              error: 'Give yourself a score'
            },
            relationshipYear3: {
         
              labels:'auto',
              error: 'Give yourself a score'
           },
           financialYear3: {
            labels:'auto',
            error: 'Give yourself a score'
           },
           placeAndEnvironmentYear3: {
            labels:'auto',
            error: 'Give yourself a score'
           },
           spiritualityYear3: {
            labels:'auto',
            error: 'Give yourself a score'
           },
            careerYear4:{
              labels:'auto',
              error: 'Give yourself a score'
            },
            personalityAndHobbiesYear4: {
              labels:'auto',
              error: 'Give yourself a score'
            },
            healthYear4: {
              labels:'auto',
              error: 'Give yourself a score'
            },
            relationshipYear4: {
              labels:'auto',
              error: 'Give yourself a score'
           },
           financialYear4: {
            labels:'auto',
            error: 'Give yourself a score'
           },
           placeAndEnvironmentYear4: {
            labels:'auto',
            error: 'Give yourself a score'
           },
           spiritualityYear4: {
            labels:'auto',
            error: 'Give yourself a score'
           },
            careerYear5:{
              labels:'auto',
              error: 'Give yourself a score'
            },
            personalityAndHobbiesYear5: {
              labels:'auto',
              error: 'Give yourself a score'
            },
            healthYear5: {
              labels:'auto',
              error: 'Give yourself a score'
            },
            relationshipYear5: {
              labels:'auto',
              error: 'Give yourself a score'
           },
           financialYear5: {
            labels:'auto',
            error: 'Give yourself a score'
           },
           placeAndEnvironmentYear5: {
            labels:'auto',
            error: 'Give yourself a score'
           },
           spiritualityYear5: {
            labels:'auto',
            error: 'Give yourself a score'
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
              labels:'auto',
              error: 'What was your 3rd party score for this area/year?'
             },
             personalityAndHobbiesYear1: {
              labels:'auto',
              error: 'What was your 3rd party score for this area/year?'
             },
             healthYear1: {
              labels:'auto',
              error: 'What was your 3rd party score for this area/year?'
             },
             relationshipYear1: {
        
              labels:'auto',
              error: 'What was your 3rd party score for this area/year?'
            },
            financialYear1: {
              labels:'auto',
              error: 'What was your 3rd party score for this area/year?'
            },
            placeAndEnvironmentYear1: {
              labels:'auto',
              error: 'What was your 3rd party score for this area/year?'
            },
            spiritualityYear1: {
              labels:'auto',
              error: 'What was your 3rd party score for this area/year?'
            },
             careerYear2:{
              labels:'auto',
              error: 'What was your 3rd party score for this area/year?'
            },
            personalityAndHobbiesYear2: {
              labels:'auto',
              error: 'What was your 3rd party score for this area/year?'
            },
            healthYear2: {
              labels:'auto',
              error: 'What was your 3rd party score for this area/year?'
            },
            relationshipYear2: {
              labels:'auto',
              error: 'What was your 3rd party score for this area/year?'
           },
           financialYear2: {
            labels:'auto',
            error: 'What was your 3rd party score for this area/year?'
           },
           placeAndEnvironmentYear2: {
            labels:'auto',
            error: 'What was your 3rd party score for this area/year?'
           },
           spiritualityYear2: {
            labels:'auto',
            error: 'What was your 3rd party score for this area/year?'
           },
            careerYear3:{
              labels:'auto',
              error: 'What was your 3rd party score for this area/year?'
            },
            personalityAndHobbiesYear3: {
              labels:'auto',
              error: 'What was your 3rd party score for this area/year?'
            },
            healthYear3: {
              labels:'auto',
              error: 'What was your 3rd party score for this area/year?'
            },
            relationshipYear3: {
              labels:'auto',
              error: 'What was your 3rd party score for this area/year?'
           },
           financialYear3: {
            labels:'auto',
            error: 'What was your 3rd party score for this area/year?'
           },
           placeAndEnvironmentYear3: {
            labels:'auto',
            error: 'What was your 3rd party score for this area/year?'
             
           },
           spiritualityYear3: {
            labels:'auto',
            error: 'What was your 3rd party score for this area/year?'
           },
            careerYear4:{
              labels:'auto',
              error: 'What was your 3rd party score for this area/year?'
            },
            personalityAndHobbiesYear4: {
              labels:'auto',
              error: 'What was your 3rd party score for this area/year?'
            },
            healthYear4: {
              labels:'auto',
              error: 'What was your 3rd party score for this area/year?'
            },
            relationshipYear4: {
              labels:'auto',
              error: 'What was your 3rd party score for this area/year?'
           },
           financialYear4: {
            labels:'auto',
            error: 'What was your 3rd party score for this area/year?'
           },
           placeAndEnvironmentYear4: {
            labels:'auto',
            error: 'What was your 3rd party score for this area/year?'
           },
           spiritualityYear4: {
            labels:'auto',
            error: 'What was your 3rd party score for this area/year?'
           },
            careerYear5:{
              labels:'auto',
              error: 'What was your 3rd party score for this area/year?'
            },
            personalityAndHobbiesYear5: {
              labels:'auto',
              error: 'What was your 3rd party score for this area/year?'
            },
            healthYear5: {
              labels:'auto',
              error: 'What was your 3rd party score for this area/year?'
            },
            relationshipYear5: {
              labels:'auto',
              error: 'What was your 3rd party score for this area/year?'
           },
           financialYear5: {
            labels:'auto',
            error: 'What was your 3rd party score for this area/year?'
           },
           placeAndEnvironmentYear5: {
            labels:'auto',
            error: 'What was your 3rd party score for this area/year?'
           },
           spiritualityYear5: {
            labels:'auto',
            error: 'What was your 3rd party score for this area/year?'
           },
            careerOverall:{
              labels:'auto',
              error: 'What was your 3rd party score for this area/year?'
            },
            personalityAndHobbiesOverall:{
              labels:'auto',
              error: 'What was your 3rd party score for this area/year?'
            },
            healthOverall: {
              labels:'auto',
              error: 'What was your overall 3rd party score for this area?'
            },
            relationshipOverall: {
              labels:'auto',
              error: 'What was your overall 3rd party score for this area?'
            },
            financialOverall: {
              labels:'auto',
              error: 'What was your overall 3rd party score for this area?'
            },
            placeAndEnvironmentOverall: {
              labels:'auto',
              error: 'What was your overall 3rd party score for this area?'
            },
            spiritualityOverall: {
              labels:'auto',
              error: 'What was your overall 3rd party score for this area?'
            }

           }
         }

      }
          
};
