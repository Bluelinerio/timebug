import t from "../components/templates";



export default {
    1:{ 
      type: t.struct({
        id: t.maybe(t.String),
        mantraAnswer: t.Boolean,
        exerciseAnswer: t.Boolean,
        meditateAnswer: t.Boolean,
      }),
      options: {
        label: 'Let us reiew your progress quick...',
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
    },
2:{
    type:t.String,
    options: {
      label:'If you could change jobs, and do something totally new, what would it be?',
      auto: 'none'
    }

},
3:{
  type:t.String,
  options: {
    label:'Reflecting back on Day 13’s Assignment – particularly the questions on Fulfillment – what changes would you need to make in your career to get both answers (on Fulfillment and Motivation) to 10 on the scale?',
    auto: 'none'
  }

},
4:{
  type:t.list(
    t.struct({
    careerBHAG:t.String,
    MLA:t.Number
  })
  ),
  options:{
    label:'Back on Day 21, you were asked to list 2 BHAGs (Big Hairy Audacious Goals) for Career and 6 other areas of life. Focusing on Career only now, take that a step further, by adding 3-5 more Career BHAGs (so you should now have 5-7 Career BHAGs).',
}
},
5:{
  type: t.struct({
    id:t.maybe(t.String),
    field:t.list(
      t.struct({
        skill: t.String,
        whatWillYouDo: t.String,
        timePerWeek: t.maybe(t.String)
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
              auto: 'none'
            },
            whatWillYouDo: {
              label: 'What will you do in 2017 to develop this skill?',
              auto: 'none'
            },
            timePerWeek: {
              label: 'How much time per week will you dedicate to this?',
              auto: 'none'
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
    placeholder:'Number of hours'
  }
}
};