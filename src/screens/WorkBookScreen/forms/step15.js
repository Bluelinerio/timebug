import t from "../components/templates";
import { TimeSpentMonth, TimeChanged } from "./contents";



export default {
  1: {
    type: t.struct({
      id:t.maybe(t.String),
      personalAimsAndHobbies:t.list(
        t.struct({
          personalAimHobby: t.String,
          timeSpentMonth: TimeSpentMonth,
          timeChanged: TimeChanged,
          whatAchieved: t.String,
          activityFeelings: t.String,
          aloneOrPartner: t.String
        })
      )      
    }),
    options:{
      label: 'Gather all of your previous goal data, including time spent, and key achievements over the past 5 years. You can start with 2015 if you feel overwhelmed assesing all 5 years.',
      fields:{
        id: {
          hidden: true
        },
        personalAimsAndHobbies:{
          label: 'Top 10 Personal Aims/Hobbies',
          item:{
            fields:{
              personalAimHobby: {
                label:'Personal Aim/Hobby',
                error:'Please add a hobby'
              },
              timeSpentMonth: {
                label:'Estimated time spent each month',
                error:'Please select a value'
              },
              timeChanged: {
                label:'How has time spent increased/decreased since last year?',
                error:'Please select a value'
              },
              whatAchieved: {
                label: 'What have you achieved in this area since last year?',
                error:'Please fill out this field'
              },
              activityFeelings: {
                label: 'How do engaging in these activities make you feel?',
                error:'Please fill out this field'
              },
              aloneOrPartner: {
                label: 'Do you do this activity alone/with another? If so, who?',
                error:'Please fill out this field'
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
          label: '2A)Which of these hobbies, if any, would you be willing to give up if some huge new priority came along, and required more of your time?',
          error:'Please enter a hobby'
        },
        notGiveUp: {
          label: '2B)Which would you NOT give up under (almost)any circumstance?',
          error:'Please enter a hobby'
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
                placeholder: 'Personal Aim/Hobby',
                error:'Please add a hobby'
              },
              why: {
                placeholder: 'Why?',
                error:'Why did you have trouble finding time for this hobby?'
              }
            }
          }

        }

      }
    }
  }
};