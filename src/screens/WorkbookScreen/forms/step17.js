import t from "../components/templates";
import { CommonGoalOutcomes, OneToTenScale } from "./contents";

export default {
  1: { 
      type:t.struct({
        id:t.maybe(t.String),
        selfTreatment: OneToTenScale,
        selfTreatmentLearningCurve: OneToTenScale,
        messagesInHead: t.String,
        messagesJudgeSelf: t.String,
        peopleValued: t.list(t.String),
        peopleLoved: t.Number,
        peopleTreatedContempt: t.Number
      }),
      options:{

        fields:{
          id: {
            hidden: true
          },
          selfTreatment:{
            label:'How do you typically treat yourself?',
            help: '10 = With tremendous respect and 1 = With almost no respect'
            
          },
          selfTreatmentLearningCurve: {
            label: 'How do you treat yourself in the process of having a learning curve, which inevitably involves making mistakes and learning from failures.',
            help: '(1 = Not at all patient and 10 = Very patient)'
          },
         messagesInHead: {
           label: 'What messages run in your head on a daily basis about yourself',
         },
         messagesJudgeSelf: {
          label: 'What do you say to judge or shame yourself?'
         },
         peopleValued: {
           label: 'Whom do you truly value.',
           item: {
             label: 'name',
           }
         },
         peopleLoved: {
           label: 'How many of these people do you love based on their waist size?'
         },
         peopleTreatedContempt: {
           label: 'How many of these people do you treat with the same contempt and impatience that you have described about yourself?'
         }
        }
      },
      value : {
        fields: {
          id: 'step17+v0.0.0.1'
        }
      }
  },
  2:{
    type:t.struct({
      givingToOthers:OneToTenScale,
      trustValue: OneToTenScale,
      comfortableReceiving: OneToTenScale,
      worthyAndComfortable: OneToTenScale,
      relationshipQualityGoals: t.list(
        t.struct({
          goal: t.String,
          goalOutcome: CommonGoalOutcomes
        })
      ),
      intimateRelationship: t.Boolean,
      communicationEval: OneToTenScale,
      relationshipsImproved: t.list(
        t.struct({
          person:t.String
        })  
      ),
      relationshipsRegressed: t.list(
        t.struct({
          person:t.String
        })  
      )
      
     }),
     options: {
       fields: {
         givingToOthers: {
           label: 'How comfortable do you feel giving to others in your daily life?',
           help: '1=not at all comfortable and 10=very much comfortable'
         },
         trustValue: {
           label: 'Do you trust the value of what you have to offer to others?',
           help: '10 = Very Trusting and 1 = Not trustful at all.'
         },
         comfortableReceiving: {
           label: 'How comfortable do you feel receiving from others in your daily life?',
           help: 'Using a 10-pt scale with 1=not at all comfortable and 10=very much comfortable'
         },
         worthyAndComfortable: {
           label: 'Do you feel worthy and comfortable with compliments or acknowledgments from others?',
           help: '10 = Very comfortable and 1 = Not comfortable at all'
          },
          relationshipQualityGoals:{
            label: 'What were your relationship quality goals over the past 5 years?',
            item: {
              fields: {
                auto:'placeholders',
                goalOutcome: {
                  help: 'Classify each by Goal Outcomes from Step 7.'
                }
              }
            }
            
          },
          intimateRelationship: {
            label: 'Have you had an intimate, committed relationship over the past 5 years?'
          },
          communicationEval: {
            label: 'If yes, how would you evaluate the quality of the connection and communication, on the whole? ',
            help: '1 = Poor and 10 = Very strong'
            
          },
          relationshipsImproved: {
            label: 'Which relationships improved over the past 5 years? With whom?            ',
            item: {
              fields: {
                person: {
                  placeholder: 'Name'
                }
              }
            }
          },
          relationshipsRegressed: {
            label: 'Which relationships improved over the past 5 years? With whom?            ',
            item: {
              fields: {
                person: {
                  placeholder: 'Name'
                }
              }
            }
          },
       }
     }
  }
};
