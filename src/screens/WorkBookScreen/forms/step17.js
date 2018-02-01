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
        label:'Take time to evaluate your relationship with yourself.',
        fields:{
          id: {
            hidden: true
          },
          selfTreatment:{
            label:'How do you typically treat yourself?(Using a 10-pt scale with 1=no value at all to 10=tremendous)',
            error: 'Please select a value.'
            
          },
          selfTreatmentLearningCurve: {
            label: 'How do you treat yourself in the process of having a learning curve, which inevitably involves making mistakes and learning from failures.(Using a 10-pt Scale with 1=little patience to 10=very patient and nurturing).',
            error: 'Please select a value.'
          },
         messagesInHead: {
           label: 'What messages run in your head on a daily basis about yourself',
           error: 'Please fill out the field.'
         },
         messagesJudgeSelf: {
          label: 'What are some of the typical main messages that you have used to judge or shame yourself?',
          error: 'Please fill out the field.'
         },
         peopleValued: {
           label: 'Name 5 specific people whom you truly value.',
           item: {
             label: 'name',
           }
         },
         peopleLoved: {
           label: 'How many of these people do you love, based on their weight or waist size?',
           error: 'Please fill out the field.'
         },
         peopleTreatedContempt: {
           label: 'How many of these people do you treat with the same contempt and impatience that you have described about yourself?',
           error: 'Please fill out the field.'
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
          person:t.String,
          how:t.String
        })  
      ),
      offeredGifts: t.String,
      rememberFeel: t.String,
      nextTimeReceive: t.String
     }),
     options: {
      label:'Take time to evaluate your relationship to others.',
       fields: {
         givingToOthers: {
           label: 'How comfortable do you feel giving to others in your daily life?(Using a 10-pt scale with 1=not at all comfortable and 10=very much comfortable).',
           error: 'Please select a value.'
         },
         trustValue: {
           label: 'Do you trust the value of what you have to offer or do you tend to second guess your choices? (Using a 10 pt scale with 1=no true value and 10=trusting and valueing what you give fully).',
           error: 'Please select a value.'
         },
         comfortableReceiving: {
           label: 'How comfortable do you feel receiving from others in your daily life?(Using a 10-pt scale with 1=not at all comfortable and 10=very much comfortable).',
           error: 'Please select a value.'
         },
         worthyAndComfortable: {
           label: 'Do you feel worthy and comfortable, even with compliments or acknowledgments that come your way? Or do you deflect and belittle the moment in some way? (Using a 10-pt Scale with 1=fully valuing and  appreciating what has been shared to 10=deep discomfort with the whole thing)',
           error: 'Please select a value.'
          },
          relationshipQualityGoals:{
            label: 'What goals have you had in terms of Relationship Quality(RQ) over the past five years?',
            item: {
              fields: {
                auto:'placeholders',
                goal: {
                  error: 'Please fill out the field.'
                },
                goalOutcome: {
                  error: 'Please select a value.'
                }
              }
            }
          },
          intimateRelationship: {
            label: 'Have you had an intimate, committed relationship over the past 5 years?'
          },
          communicationEval: {
            label: 'If yes, how would you evaluate the quality of the connection and communication, on the whole? (Using a 10-pt Scale with 1= a major struggle to 10= the ultimate connection)',
            error: 'Please select a value.'
            
          },
          relationshipsImproved: {
            label: 'Name 2-3 people whose relationships to you improved over the past 5 years.',
            item: {
              fields: {
                person: {
                  placeholder: 'Person',
                  error: "Please enter a person's name"
                },
                how: {
                  placeholder: 'I made an effort to spend more time...',
                  error: 'How did this relationship improve?'
                }
              }
            }
          },
          offeredGifts: {
            label: 'Think of some moments in your history when you have offered gifts (whether material things or time and energy invested) that you were most excited to give.',
            error: 'Briefly describe each event in 3-5 words.'
          },
          rememberFeel: {
            label: "Now remember how it made YOU feel to be able to touch someone's life in a meaningful way. It most likely opened your heart and created very pleasureable feelings, adding to a sense of having value to add to someone's life.",
            error: 'Try to use key words and specific emotions.'
          },
          nextTimeReceive : {
            label:'Next time you face the opportunity of receiving, whether it is a physical gift, a compliment or an investment of time and energy into your life... remember that the other person has the opportunity to experience the same pleasure and trust that they have something of value to offer.',
            error: 'In a sentence or two, write down your reaction to this statement.'
          }
       }
     }
  }
};