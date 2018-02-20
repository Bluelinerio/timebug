import t from "../components/templates";
import { TimeSpent, SpiritualViews, SpiritualPractices } from "./contents";


export default {
    1:{
       type: t.struct ({
        id:t.maybe(t.String),
         spiritualViews: SpiritualViews,
         spiritualInfluence: t.list(t.struct({
            name:t.String
         })),
         currentMentors: t.list(t.struct({
           name:t.String,
           why:t.String
         }))

       }),
       options: {
         fields: {
           id:{
             hidden:true
           },
           spiritualViews: {
             label: 'What are your current views and feelings about spirituality?'
           },

           spiritualInfluence: {
             field: {
               label: 'Who and what influenced your spiritual views early on in life?',
             },
             item: {
               fields:{
                name: {
                  label: 'Name'          
                },
                
               }
             }
           },
           currentMentors: {
             label: 'Who are your current role models or mentors in this area? ',
             item: {
                fields: {
                  name: {
                    label: 'What is their name?',
                    help: 'If you do not know anyone personally, is there anyone whose work in this area inspires you?'
                  },
                  why: {
                    label: 'Why do you admire their approach to and views on life? '
                  }                  
                }
             }
           }
         }

       },
       value : {
         fields: {
           id: 'step19+v0.0.0.1'
         }
       }

    },
    2:{
      type: t.struct({
        timeSpentSpirutality: TimeSpent,
        spiritualityChanged: t.String

      }),
      options: {
        fields:{
          timeSpentSpirutality: {
            label: 'How much time do you spend each week on spiritual practices, interactions, reading, writing, etc.?'
          },
          spiritualityChanged: {
            label: 'How have your Spiritual practices and/or beliefs changed over the past 5 years?'
          }
        }
      }
    },
    3:{
      type:t.struct({
        internalQualities:t.String,
        insights:t.struct({
            purposeOnEarth:t.String,
            beyondOuterForm:t.String,
            karma:t.String,
            destinyDeterminedBy:t.String,
            healedEmotionalWoundsFrom:t.String
          })
      }),
      options: {
        fields:{
          internalQualities: {
            label: 'What internal qualities(Iqs: Goal Type 4) have been influenced - positively or negatively - by Spiritual practices - or lack thereof?',
          },
          insights: {
            label: 'What insights did you pick up from your spirituality over the past 5 years?',            
              fields:{
                purposeOnEarth: {
                  label:'What Is My Purpose On Earth?'
                },
                beyondOuterForm: {
                  label: 'Beyond My Outer Form, What Am I?'
                },
                karma: {
                  label: 'My Karma Has Shown Me...'
                },
                healedEmotionalWoundsFrom: {
                  label: 'I have healed emotional wounds from...'
                }
              }
            }
          
        }
      }

    }

}
