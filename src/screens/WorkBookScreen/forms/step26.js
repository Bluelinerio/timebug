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
      mentalEmotional:t.String
    }),
    options:{
      label:'The year is 2020. You have achieved all of your health goals and feel on top of the world, physically, mentally and emotionally. Describe what changes you made in your life to reach this state.  What changes and achievements did you make across the following areas:',
      fields:{
        priorities:{
          label:'Prioritizing your Health Goals vs. other Areas',
          error: 'Please fill out this field.'
        },
        fitnessExercise:{
          label:'Fitness & Exercise',
          error: 'Please fill out this field.'
        },
        nutritionDiet:{
          label:'Nutrition & Diet',
          error: 'Please fill out this field.'
        },
        sleep:{
          label:'Sleep',
          error: 'Please fill out this field.'
        },
        bodyCare:{
          label:'Body Care',
          error: 'Please fill out this field.'
        },
        mentalEmotional:{
          label:'Mental & Emotional Health',
          error: 'Please fill out this field.'
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
          label:'Who is it?',
          error: 'Please fill out this field.'
        },
        howChange:{
          label:'How should they change by 2020?',
          error: 'Please fill out this field.'
        },
        howHelp:{
          label:'How can you help?',
          error: 'Please fill out this field.'
        }
      }
    }
  },
  4:{
    type:t.String,
    options:{
      label:'List one wish that you have for the world or a particular sector of the world when it comes to Health.',
      auto:'none',
      error: 'Please fill out this field.'
    }
  },
  5:{
    type:t.String,
    options:{
      label:'What group of people or country can be most influential in helping this goal be attained?',
      auto:'none',
      error: 'Please fill out this field.'
    }
  },
  6:{
    type:t.String,
    options:{
      label:'How can you help, be it in any small way, to see this goal be achieved?',
      auto:'none',
      error: 'Please fill out this field.'
    }
  }

};