import t from "../components/templates";
import { AssessmentTypes } from "./contents";

export default {
    1:{
      title:'Reflect back on your Day 11 Worksheet (The 5-Year Life Report), and make refinements or additional notes, given what you have seen here. Be more technical than before, especially when it comes to how you spent your Time & Energy.',
      type: t.struct({
        topGoals:t.list(
          t.struct({
          goal: t.String,
          newInsights: t.String,
          specificChanges: t.maybe(t.String)
          })
        )
      }),
      options: {
        fields: {
          topGoals: {
            item: {
              fields: {
                goal: {
                  label:'Review your goals, time spent, and key achievements listed on Day 11. What, if anything, has changed with your time and energy allotment?',
                  placholder:'goal'
                },
                newInsights: {
                  placeholder:'New insights(be as technical as you can)',
                  auto:'none'
                },
                specificChanges: {
                  placeholder: 'Specific changes to make',
                  auto:'none',
                }
              }
            }
          }
        }
      }

    },
    2:{
      title:'Reflect back on your Day 2 Worksheet (More or Less Time), and make refinements or additional notes, in relation to how your time allocation has changed over the past 5 years; and how you ideally would like to make changes in the current breakdown across Life Categories.',
      type: t.struct({
          lifeCategoryBreakdown: t.String,
          thingsDoLess: t.String,
          thingsDoMore: t.maybe(t.String)
      }),
      options: {
        fields: {
          lifeCategoryBreakdown: {
            label:'a)Has anything changed with your life category breakdown?'
          },
          thingsDoLess: {
            label:'Has anything changed with your 3 things that you want to DO LESS of in general(i.e. "Watching TV")?'
          },
          thingsDoMore: {
            label:'Has anything changed with your 3 things that you want to DO MORE of in general(i.e. "Exercising")?'
          }
        }
      }

    },
    3: {
      title: 'Reflect back on your 7 Assessments [Days 13-19]',
      type:t.struct({
        rank1:AssessmentTypes,
        rank2:AssessmentTypes,
        rank3:AssessmentTypes,
        rank4:AssessmentTypes,
        rank5:AssessmentTypes,
        rank6:AssessmentTypes,
        rank7:AssessmentTypes,
        career: t.Number,
        personalityAndHobbies: t.Number,
        health: t.Number,
        relationship:t.Number,
        financial:t.Number,
        placeAndEnvironment:t.Number,
        spirituality:t.Number
      }),
      options:{
        fields: {
        rank1:{
            label: 'Rank the 7 Areas in terms of the order of importance you gave them over the past 5 years.'
            
        },
        rank2:{
          auto:'labels'
        },
        rank3:{
          auto:'labels'
        },
        rank4:{
          auto:'labels'
        },
        rank5:{
          auto:'labels'
        },
        rank6:{
          auto:'labels'
        },
        rank7:{
          auto:'labels'
        },
        career: {
          label: 'If the 7 areas were a pie, how would you slice up your energy and motivation level?(Total should = 100%)'
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
      }
          
};
