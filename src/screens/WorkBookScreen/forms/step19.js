import t from "../components/templates";
import { TimeSpent, SpiritualViews } from "./contents";


export default {
    1:{
       type: t.struct ({
        id:t.maybe(t.String),
         spiritualViews: SpiritualViews,
         spiritualInfluence: t.String,
         currentMentors: t.String

       }),
       options: {
         label: 'Take the time to evaluate your spiritual views',
         fields: {
           id:{
             hidden:true
           },
           currentViews: {
             label: 'Which statement best reflects your current views and feelings about spirituality?',
             error: 'Please select the statement that generally matches your feelings.'
           },
           spiritualInfluence: {
             label: 'Who and what influenced your Spiritual views early on in life?',
             error: 'It can be someone in your inner circle, or current/historical spiritual leader whose work you admire'
           },
           currentMentors: {
             label: 'Who are your current role models or mentors in this area? Why do you admire their approach to and views on life?',
             error: "If you don't know anyone personally, is there anyone whose work in this area inspires you?"
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