import t from "../components/templates";



export default {
  1: { type: t.struct({
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
        id: 'step26+v0.0.0.1'
      }
    }
  },
  2:{
    type:t.struct({
      priorities:t.String,
      fitnessExercise:t.String,
      nutritionDiet:t.String,
      sleep:t.String,
      bodyCare:t.String,
      mentalEmotional:t.maybe(t.String)
    }),
    options:{
      label:'The year is 2020. You have achieved all of your health goals and feel on top of the world, physically, mentally and emotionally. Describe what changes you made in your life to reach this state.  What changes and achievements did you make across the following areas:',
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
  3:{
    type:t.struct({
      who:t.String,
      howChange:t.String,
      howHelp:t.String
    }),
    options:{
      label:'Think about one other person in your life, who you want to see make drastic improvements in their physical health.',
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
  4:{
    type:t.String,
    options:{
      label:'List one wish that you have for the world or a particular sector of the world when it comes to Health.',
      auto:'none'
    }
  },
  5:{
    type:t.String,
    options:{
      label:'What group of people or country can be most influential in helping this goal be attained?',
      auto:'none'
    }
  },
  6:{
    type:t.String,
    options:{
      label:'How can you help, be it in any small way, to see this goal be achieved?',
      auto:'none'
    }
  }

};