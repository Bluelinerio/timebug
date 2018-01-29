import t from "../components/templates";
import { AreaOfLife, StageOfLife, Emotion } from "./contents";

export default {
  1: {
    type: t.struct({
      id:t.maybe(t.String),
      memory: t.String,
      areaOfLife: AreaOfLife,
      stageOfLife: StageOfLife
    }),
    options: {
      label: "Let's talk about your best life memory...",
      fields: {
        id: {
          hidden: true
        },
        stageOfLife: {
          help: "At what stage of your life was it?"
        },
        memory: {
          label: "Describe what happened",
          numberOfLines: 3,
          help: "Try to be as descriptive as possible."
        },
        areaOfLife: {
          label: "What area of life does this belong to?",
          help: "Assign this memory to one of the 7 Timebug Life Categories. This will be help us with later steps of Assessment and Vision Creation."
          
        },
      }
    },
    value: {
     fields: {
       id:'step1+v0.0.0.1'
     }
    }
  },
  2: {
    type: t.struct({
      regret: t.String,
      areaOfLife: t.maybe(AreaOfLife),
      stageOfLife: t.maybe(StageOfLife),
    }),
    options: {
      label: "What are some of your regrets?",
      fields: {
        stageOfLife: {
          label: "At what stage of your life was it?",
          help: "Please select a value"
        },
        areaOfLife: {
          label: "What Area Of Life does this belong to?",
          help: "Assign this memory to one of the 7 Timebug Life Categories. This will be help us with later steps of Assessment and Vision Creation.",          
          help: "Please fill out this field."
        },
        regret: {
          label: "Describe what happened",
          help: "Please fill out this field.",
          help: "Try to be as descriptive as possible."
        }
      }
    }
  },
  3: {
    type: t.struct({
      field: t.list(t.String)
    }),
    options: {
      label: "What are your defining moments?",        
      fields: {
        placeholder: 'birthing my first child.',
        field: {
          disableOrder: true,
          maxLines: 3,
          label: "Create your defining moments",        
          config: {
            maxLines: 3,
          },
          item: {
            label: "How would you name this moment?",
            help: "Think about events/moments that changed the course of your life.",
          }
        }
      }
    }
  },
  4: {
    type: t.struct({
      text: t.maybe(t.String),
      emotions:t.list(Emotion)
    }),
    options: {
      label: "When you were in that 90 year old’s body and mind",
      fields: {
        emotions: {
          item: {
            label: "What were some of the emotion you felt?",
            help: 'Emotions are hard for some and easy for others. Just pick the first thing that comes to mind.',          
          }
        },
        text: {
          label: "reflecting back on your life, what did you feel?",
          help: "Be completely honest with yourself. This is an exercise to help us determine what we want to keep doing well, and what we need to imrprove on as we walk down the path to 2020.",
        }
      }
    }
  }
};
