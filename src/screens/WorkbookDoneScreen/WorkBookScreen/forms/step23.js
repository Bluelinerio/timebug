import t from "../components/templates";
import { OneToTenScale,TimeSpent } from "./contents";



export default {
    1:{ 
      type: t.struct({
        id: t.maybe(t.String),
        mantraAnswer: t.Boolean,
        exerciseAnswer: t.Boolean,
        meditateAnswer: t.Boolean,
      }),
      options: {
        fields: {
          id: {
            hidden: true
          },
          mantraAnswer: {
            label: 'Did you do your mantra today (assigned on Day 21)?'
          },
          exerciseAnswer: {
            label: 'Did you exercise and meditate yet today(assigned on Day 8)?',
          },
          meditateAnswer: {
            label: 'Did you MEDITATE yet today(assigned on Day 8)?'
          }
        },
      },
      value : {
        fields: {
          id: 'step23+v0.0.0.1'
        }
      }
    },
2:{
    type:t.String,
    options: {
      label:'If you could change jobs, and do something totally new, what would it be?',
      error: "Be honest with yourself - if you're totally happy, then you can say so!"
    }

},
3:{
  type:t.String,
  options: {
    label:'Reflecting back on Day 13’s Assignment – particularly the questions on Fulfillment – what changes would you need to make in your career to get both answers (on Fulfillment and Motivation) to 10 on the scale?',
    error: 'Where should you spend more time? Less time?'
  }

},
4:{
  type:t.list(
    t.struct({
    careerBHAG:t.String,
    MLA:OneToTenScale
  })
  ),
  options:{
    label:'Back on Day 21, you were asked to list 2 BHAGs (Big Hairy Audacious Goals) for Career and 6 other areas of life. Focusing on Career only now, take that a step further, by adding 3-5 more Career BHAGs (so you should now have 5-7 Career BHAGs).',
    item:{
      fields: {
        careerBHAG: {
          error: 'Please enter a BHAG.'
        },
        MLA: {
          error: 'Please select a value.'
        }
      }
    }
}
},
5:{
  type: t.struct({
    id:t.maybe(t.String),
    field:t.list(
      t.struct({
        skill: t.String,
        whatWillYouDo: t.String,
        timePerWeek: TimeSpent
      }),
    ),
  }),
   options:{
     label:'Also on Day 21, Question 3 asked about specific skills that you are looking to build over the next 5 years. Go deeper into that now, with a career focus, making sure you have 3-5 career specific skills that you plan to develop. #Skillbug',
     fields: {
      id: {
        hidden: true
      },
      field: {
        item:{
          fields:{
            skill: {
              label:'Skill',
              error: 'What is a skill you need to develop?'
            },
            whatWillYouDo: {
              label: 'What will you do this year to develop this skill?',
              error: 'Think big and believe in yourself!'
            },
            timePerWeek: {
              label: 'How much time per week will you dedicate to this?',
              error: 'Please select a value'
            }
          }
        }
      }
    }
   }
},
6: {
  type:t.Number,
  options:{
    label:'The average worker spends 40 hrs * 50 weeks working = 2,000 hours. How many hours will you spend working in 2016? #Workbug',
    placeholder:'Number of hours',
    error: 'Please fill out this field.'
  }
}
};