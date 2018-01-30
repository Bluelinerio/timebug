import t from "../components/templates";
import { TimeSpent, SpiritualViews, SpiritualPactices } from "./contents";


export default {
    1:{
       type: t.struct ({
        id:t.maybe(t.String),
         spiritualViews: SpiritualViews,
         spiritualPractices: t.maybe(SpiritualPactices),
         spiritualInfluence: t.list(t.struct({
            name:t.String,
            what:t.maybe(t.String)
         })),
         currentMentors: t.list(t.struct({
           name:t.String,
           why:t.maybe(t.String)
         }))

       }),
       options: {
         label: 'Take the time to anotate your spiritual views and practices',
         fields: {
           id:{
             hidden:true
           },
           spiritualViews: {
             label: 'Which statement you feel reflects your current views and feelings about spirituality?',
             help: 'Select the one that is the closest to how you are feeling about it.'
           },
           spiritualPractices: {
             label: 'Which statement is the closest to where you are in your practice of spiritualiy?',
             help: 'You do not have to be spiritual to practice meditation...'
           },
           spiritualInfluence: {
             label: 'Who influenced my Spiritual views early on in life?',
             item: {
               fields:{
                name: {
                  label: 'What is was their name?',
                    help: 'For some, it can be people in their own inner circle, for some it can be current or historical spiritual leaders whose work they admire'
                },
                what: {
                  label: 'Write something about how or why did they became influential on you'
                }
               }
             }
           },
           currentMentors: {
             label: 'Who are your spiritual role models and mentors?',
             item: {
                fields: {
                  name: {
                    label: 'What is their name?',
                    help: 'If you do not know anyone personally, is there anyone whose work in this area inspires you?'
                  },
                  why: {
                    label: 'Write something about what they mean to you',
                    help: 'for instance, why do you admire their approach or views on life?',
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
        label: 'Take time to evaluate your spiritual practices',
        fields:{
          timeSpentSpirutality: {
            label: 'How much time do you spend specifically, each week, on Spiritual practices, interactions, reading, writing, etc.?',
            error:'Please select a value.'
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
        insights:t.list(
          t.struct({
            purposeOnEarth:t.String,
            beyondOuterForm:t.String,
            karma:t.String,
            destinyDeterminedBy:t.String,
            healedEmotionalWoundsFrom:t.maybe(t.String)
          })
        )
      }),
      options: {
        label:'Take time to evaluate your Spiritual Insights & Growth',
        fields:{
          internalQualities: {
            label: 'What internal qualities(Iqs: Goal Type 4) have been influenced - positively or negatively - by Spiritual practices - or lack thereof?',
          },
          insights: {
            label: 'List 5-10 insights that you have gained, in relation to the 5 components of Spirituality noted above, over the past 5 years?',
            item: {
              fields:{
                purposeOnEarth: {
                  label:'What Is My Purpose On Earth?',
                  error:'Dream big!'
                },
                beyondOuterForm: {
                  label: 'Beyond My Outer Form, What Am I?',
                  error: 'Are you only your body? Or is there more to you than just your physical existence?'
                },
                karma: {
                  label: 'My Karma Has Shown Me...',
                  error: 'What does karma mean to you? Has the old addage "What goes around comes around" manifested in your life?'
                },
                healedEmotionalWoundsFrom: {
                  label: 'I have healed emotional wounds from...',
                  error: 'What parts of your past have you had to work through in order to become the you that you are today? Are there any remaining that you need to work through to move past?'
                }
              }
            }
          }
        }
      }

    }

}