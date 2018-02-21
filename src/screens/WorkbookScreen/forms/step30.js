import t from "../components/templates";
import { PillarsOfLife, AreaOfLife, AssessmentTypes } from "./contents";


export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      mantraAnswer: t.Boolean,
      exerciseAnswer: t.Boolean,
      meditateAnswer: t.Boolean,
    }),
    options: {
      label: '20/20 Life Vision Check-in',
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
        id: 'step30+v0.0.0.1'
      }
    }
  },
  2:{
    type:t.struct({commitment1:t.Boolean}),
    options: {
      label:'Over the past 7 Steps of Vision Creation, you were asked to apply emotions, thoughts and hours to various goals and bucket list items. Did you do it?',
      auto:'none',
      fields:{
        commitment1:{
          help:'If not, bring those details in now, classifying each goal/item under one of your 5-10 Life Categories.'          
        }
      }
    }
  },
  3:{
    type:t.struct({challenge:t.String}),
    options: {
      label:'Now, I challenge you to review what you’ve put down in this workbook. What emotions, thoughts or hours jump out to you, and why? Think about what you can do in the now and in the future to harness these features of your past and present life to make positive change in your future life.',
      fields:{
        challenge:{
          multiline:true,
          numberOfLines:5
        }
      }
    }
  }
};
