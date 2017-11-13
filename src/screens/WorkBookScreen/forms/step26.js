import t from "../components/templates";



export default {
  1: {
    title: 'Did you do your MANTRA today(assigned on Day 21)?',
    type: t.struct({
      yes: t.Boolean,
      no: t.Boolean
    }),
    options: {
      auto: 'labels'
    }
  },
  2: {
    title: 'Did you EXERCISE and meditate yet today(assigned on Day 8)?',
    type: t.struct({
      yes: t.Boolean,
      no: t.Boolean
    }),
    options: {
      auto: 'labels'
    }
  },
  3: {
    title: 'Did you MEDITATE yet today(assigned on Day 8)?',
    type: t.struct({
      yes: t.Boolean,
      no: t.Boolean
    }),
    options: {
      auto: 'labels'
    }
  },
  4:{
    title:'The year is 2020. You have achieved all of your health goals and feel on top of the world, physically, mentally and emotionally. Describe what changes you made in your life to reach this state.  What changes and achievements did you make across the following areas:',
    type:t.struct({
      priorities:t.String,
      fitnessExercise:t.String,
      nutritionDiet:t.String,
      sleep:t.String,
      bodyCare:t.String,
      mentalEmotional:t.String
    }),
    options:{
      fields:{
        priorities:{
          label:'Prioritizing your Health Goals vs. other Areas'
        },
        fitnessExercise:{
          label:'Fitness & Exercise'
        },
        nutritionDiet:{
          label:'Nutrition & Diet'
        },
        sleep:{
          label:'Sleep'
        },
        bodyCare:{
          label:'Body Care'
        },
        mentalEmotional:{
          label:'Mental & Emotional Health'
        }
      }
    }

  },
  5:{
    title:'Think about one other person in your life, who you want to see make drastic improvements in their physical health.',
    type:t.struct({
      who:t.String,
      howChange:t.String,
      howHelp:t.String
    }),
    options:{
      fields:{
        who:{
          label:'Who is it?'
        },
        howChange:{
          label:'How should they change by 2020?'
        },
        howHelp:{
          label:'How can you help?'
        }
      }
    }
  },
  6:{
    title:'List one wish that you have for the world or a particular sector of the world when it comes to Health.',
    type:t.String,
    options:{
      auto:'none'
    }
  },
  7:{
    title:'What group of people or country can be most influential in helping this goal be attained?',
    type:t.String,
    options:{
      auto:'none'
    }
  },
  8:{
    title:'How can you help, be it in any small way, to see this goal be achieved?',
    type:t.String,
    options:{
      auto:'none'
    }
  }

};