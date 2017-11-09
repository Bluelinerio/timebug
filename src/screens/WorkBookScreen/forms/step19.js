import t from "../components/templates";


export default {
    1:{
       title: 'Take the time to evaluate your spiritual views',
       type: t.struct ({
         currentViews: t.String,
         spiritualInfluence: t.String,
         currentMentors: t.String

       }),
       options: {
         fields: {
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

       }

    },
    2:{
      title: 'Take time to evaluate your spiritual practices',
      type: t.struct({
        timeSpentSpirutality: t.String,
        spiritualityChanged: t.String

      }),
      options: {
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
      title:'Take time to evaluate your Spiritual Insights & Growth',
      type:t.struct({
        internalQualities:t.String,
        insights:t.list(
          t.struct({
            purposeOnEarth:t.String,
            beyondOuterForm:t.String,
            karma:t.String,
            destinyDeterminedBy:t.String,
            healedEmotionalWoundsFrom:t.String
          })
        )
      }),
      options: {
        fields:{
          internalQualities: {
            label: 'What internal qualities(Iqs: Goal Type 4) have been influences - positively or negatively - by Spiritual practices - or lack thereof?',
          },
          insights: {
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