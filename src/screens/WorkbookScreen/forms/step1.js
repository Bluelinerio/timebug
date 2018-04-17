import t from '../components/templates'
import { AreaOfLife, LifeStages, Emotion } from './contents'

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      memory: t.String,
      areaOfLife: AreaOfLife,
      lifeStages: LifeStages
    }),
    options: {
      label: 'What are your best memories?',
      fields: {
        id: {
          hidden: true
        },
        lifeStages: {
          label: 'Which stage of life does this belong to?'
        },
        memory: {
          multiline: true

          //help: "Try to be as descriptive as possible."
        },
        areaOfLife: {
          label: 'Which of the 7 Pillars of Life does this belong to?'
          //help: "Assign this memory to one of the 7 Timebug Life Categories. This will be help us with later steps of Assessment and Vision Creation."
        }
      }
    },
    value: {
      fields: {
        id: 'step1+v0.0.0.1'
      }
    }
  },
  2: {
    type: t.struct({
      regret: t.String,
      areaOfLife: t.maybe(AreaOfLife),
      lifeStages: t.maybe(LifeStages)
    }),
    options: {
      label: 'What are your main regrets?',
      fields: {
        lifeStages: {
          label: 'Which stage of life does this belong to?'
          // help: "Please select a value"
        },
        areaOfLife: {
          label: 'Which of the 7 Pillars of Life does this belong to?'
          //help: "Assign this memory to one of the 7 Timebug Life Categories. This will be help us with later steps of Assessment and Vision Creation.",
          //help: "Please fill out this field."
        },
        regret: {
          multiline: true
          // help: "Please fill out this field.",
          //help: "Try to be as descriptive as possible."
        }
      }
    }
  },
  3: {
    type: t.struct({
      definingMoment: t.list(t.String)
    }),
    options: {
      label:
        'What are your defining life moments?(e.g. marriage, birth of a child, career awards, etc.)',
      fields: {
        //placeholder: 'birthing my first child.',
        definingMoment: {
          disableOrder: true,
          maxLines: 3,
          config: {
            maxLines: 3
          }
        }
      }
    }
  },
  4: {
    type: t.struct({
      reflection: Emotion
    }),
    options: {
      //label: "When you were in that 90 year old’s body and mind",
      label:
        'What is your primary emotion as you reflect back on your life as a 90-year-old?',
      fields: {
        reflection: {
          showLabel: false,
          multiline: true
          //help: "Be completely honest with yourself. This is an exercise to help us determine what we want to keep doing well, and what we need to imrprove on as we walk down the path to 2020.",
        }
      }
    }
  }
}
