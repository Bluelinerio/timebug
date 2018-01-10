import t from "../components/templates";


export default {
  1: {
    type: t.struct({
      id:t.maybe(t.String),
      personalAimsAndHobbies:t.list(
        t.struct({
          personalAimHobby: t.String,
          timeSpentMonth: t.String,
          timeChange: t.String,
          whatAchieved: t.String,
          activityFeelings: t.String,
          aloneOrPartner: t.maybe(t.String)
        })
      )      
    }),
    options:{
      label: 'Gather all of your previous goal data, including time spent, and key achievements ove rthe past 5 years. You can start with 2015 if you feel overwhelmed assesing all 5 years.',
      fields:{
        id: {
          hidden: true
        },
        personalAimsAndHobbies:{
          label: 'Top 10 Personal Aims/Hobbies',
          item:{
            fields:{
              personalAimHobby: {
                label:'Personal Aim/Hobby'
              },
              timeSpentMonth: {
                label:'Est. time spent each month'
              },
              timeChange: {
                label:'How has time increased/decreased since 2011?'
              },
              whatAchieved: {
                label: 'What have you achieved in this area since 2011?'
              },
              activityFeelings: {
                label: 'How do engaging in these activities make you feel?'
              },
              aloneOrPartner: {
                label: 'Do you do this activity alone/with another? If so, who?'
              }
            }
          }
        }
      }
    },
    value : {
      fields: {
        id: 'step15+v0.0.0.1'
      }
    }
  },
  2:{
    type:t.struct({
      giveUp: t.String,
      notGiveUp: t.String
    }),
    options:{
      label: '', //TODO: Add label
      fields: {
        giveUp: {
          label: '2A)Which of these hobbies, if any, would you be willing to give up if some huge new priority came along, and required more of your time?'
        },
        notGiveUp: {
          label: '2B)Which would you NOT give up under (almost)any circumstance?'
        }
      }

    }
  },
  3:{ 
    type:t.struct({
      aimsAndHobbies:t.list(
        t.struct({
        personalAimHobby: t.String,
        why: t.String
        })
    )
    }),
    options:{
      fields:{
        aimsAndHobbies:{
          label:'What Personal Aims and Hobbies were you not able to get going over the past 5 years, that you really wanted to do? (List up to 5)',          
          item:{
            fields:{
              personalAimHobby:{
                placeholder: 'Personal Aim/Hobby'
              },
              why: {
                placeholder: 'Why?'
              }
            }
          }

        }

      }
    }
  }
};