import t from "../components/templates";



export default {
    1:{ 
        type:t.struct({
          id:t.maybe(t.String),
          yes:t.Boolean,
          no:t.Boolean
        }),
        options: {
          label:'Did you do your MANTRA today(assigned on Day 21)?',
          fields: {
            id: {
              hidden: true
            }
          },
          auto:'labels'
        },
        value: {
          fields: {
            id: 'step23+v0.0.0.1'
          }
        }
    },
    2:{ 
      type:t.struct({
        yes:t.Boolean,
        no:t.Boolean
      }),
      options: {
        label:'Did you EXERCISE and meditate yet today(assigned on Day 8)?',
        auto:'labels'
      }
  },
  3:{ 
    type:t.struct({
      yes:t.Boolean,
      no:t.Boolean
    }),
    options: {
      label:'Did you MEDITATE yet today(assigned on Day 8)?',
      auto:'labels'
    }
},
4:{
    type:t.String,
    options: {
      label:'If you could change jobs, and do something totally new, what would it be?',
      auto: 'none'
    }

},
5:{
  type:t.String,
  options: {
    label:'Reflecting back on Day 13’s Assignment – particularly the questions on Fulfillment – what changes would you need to make in your career to get both answers (on Fulfillment and Motivation) to 10 on the scale?',
    auto: 'none'
  }

},
6:{
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
7:{
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
8: {
  type:t.Number,
  options:{
    label:'The average worker spends 40 hrs * 50 weeks working = 2,000 hours. How many hours will you spend working in 2016? #Workbug',
    placeholder:'Number of hours'
  }
}
};