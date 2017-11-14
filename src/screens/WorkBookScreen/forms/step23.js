import t from "../components/templates";



export default {
    1:{ 
        title:'Did you do your MANTRA today(assigned on Day 21)?',
        type:t.struct({
          id:t.String,
          yes:t.Boolean,
          no:t.Boolean
        }),
        options: {
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
      title:'Did you EXERCISE and meditate yet today(assigned on Day 8)?',
      type:t.struct({
        yes:t.Boolean,
        no:t.Boolean
      }),
      options: {
        auto:'labels'
      }
  },
  3:{ 
    title:'Did you MEDITATE yet today(assigned on Day 8)?',
    type:t.struct({
      yes:t.Boolean,
      no:t.Boolean
    }),
    options: {
      auto:'labels'
    }
},
4:{
    title:'If you could change jobs, and do something totally new, what would it be?',
    type:t.String,
    options: {
      auto: 'none'
    }

},
5:{
  title:'Reflecting back on Day 13’s Assignment – particularly the questions on Fulfillment – what changes would you need to make in your career to get both answers (on Fulfillment and Motivation) to 10 on the scale?',
  type:t.String,
  options: {
    auto: 'none'
  }

},
6:{
  title:'Back on Day 21, you were asked to list 2 BHAGs (Big Hairy Audacious Goals) for Career and 6 other areas of life. Focusing on Career only now, take that a step further, by adding 3-5 more Career BHAGs (so you should now have 5-7 Career BHAGs).',
  type:t.struct({
    careerBHAG1:t.String,
    careerBHAG2:t.String,
    careerBHAG3:t.String,
    careerBHAG4:t.String,
    careerBHAG5:t.String,
    careerBHAG6:t.maybe(t.String),
    careerBHAG7:t.maybe(t.String)
  }),
  options:{
    fields: {
      careerBHAG1: {
        label:'Career BHAG 1',
        placeholder:'MLA(Minimum Level of Achievement)'
      },
      careerBHAG2: {
        label:'Career BHAG 2',
        placeholder:'MLA(Minimum Level of Achievement)'
      },
      careerBHAG3: {
        label:'Career BHAG 3',
        placeholder:'MLA(Minimum Level of Achievement)'
      },
      careerBHAG4: {
        label:'Career BHAG 4',
        placeholder:'MLA(Minimum Level of Achievement)'
      },
      careerBHAG5: {
        label:'Career BHAG 5',
        placeholder:'MLA(Minimum Level of Achievement)'
      },
      careerBHAG6: {
        label:'Career BHAG 6',
        placeholder:'MLA(Minimum Level of Achievement)'
      },
      careerBHAG7: {
        label:'Career BHAG 7',
        placeholder:'MLA(Minimum Level of Achievement)'
      }
    }
}
},
7:{
  title:'Also on Day 21, Question 3 asked about specific skills that you are looking to build over the next 5 years. Go deeper into that now, with a career focus, making sure you have 3-5 career specific skills that you plan to develop. #Skillbug',
  type:t.list(
    t.struct({
      skill: t.String,
      whatWillYouDo: t.String,
      timePerWeek: t.maybe(t.String)
    }),
   ),
   options:{
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
},
8: {
  title:'The average worker spends 40 hrs * 50 weeks working = 2,000 hours. How many hours will you spend working in 2016? #Workbug',
  type:t.Number,
  options:{
    placeholder:'Number of hours'
  }
}
};