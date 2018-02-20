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
      fields:{
        label:'What changes and achievements will you make across the following areas?',
        priorities:{
          label:'Prioritizing your Health Goals vs. other Areas',
          multiline: true
        },
        fitnessExercise:{
          label:'Fitness & Exercise',
          multiline: true
        },
        nutritionDiet:{
          label:'Nutrition & Diet',
          multiline: true
        },
        sleep:{
          label:'Sleep',
          multiline: true
        },
        bodyCare:{
          label:'Body Care',
          multiline: true
        },
        mentalEmotional:{
          label:'Mental & Emotional Health',
          multiline: true
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
      fields:{
        who:{
          label:'Who you want to make drastic improvements in their physical health?',
        },
        howChange:{
          label:'How exactly do you want them to change?',
          multiline: true
        },
        howHelp:{
          label:'How can you help them achieve this goal?',
          multiline: true
          
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
      label:'What group of people or country can be most influential in helping to attain this goal?',
      auto:'none'
    }
  },
  6:{
    type:t.String,
    options:{
      label:'How can you help, even in a small way, to acheive this goal?',
      auto:'none',
      multiline:true
    }
  }

};
