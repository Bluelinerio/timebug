import t from "../components/templates";


export default {
    1:{
       type: t.struct ({
        id:t.maybe(t.String),
         currentViews: t.String,
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
             label: 'What are your current views and feelings about Spirituality? What does it mean to you?',
           },
           spiritualInfluence: {
             label: 'Who and what influenced your Spiritual views early on in life?'
           },
           currentMentors: {
             label: 'Who are your current role models or mentors in this area? Why do you admire their approach to and views on life?'
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
        timeSpentSpirutality: t.String,
        spiritualityChanged: t.String

      }),
      options: {
        label: 'Take time to evaluate your spiritual practices',
        fields:{
          timeSpentSpirutality: {
            label: 'How much time do you spend specifically, each week, on Spiritual practices, Interactions, reading, writing, etc.?'
          },
          spiritualityChanged: {
            label: 'How have your Spiritual practices and/or beliefs changed in the past 5 years?'
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

}