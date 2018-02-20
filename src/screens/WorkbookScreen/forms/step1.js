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
      fields: {
        id: {
          hidden: true
        },
        stageOfLife: {
          label:'Which stage of life does this belong to?'
        },
        memory: {
          label: "What are your best memories?",
          multiline: true,
          //help: "Try to be as descriptive as possible."
        },
        areaOfLife: {
          label: "Which of the 7 Pillars of Life does this belong to?",
          //help: "Assign this memory to one of the 7 Timebug Life Categories. This will be help us with later steps of Assessment and Vision Creation."     
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
      fields: {
        stageOfLife: {
          label:'Which stage of life does this belong to?'
         // help: "Please select a value"
        },
        areaOfLife: {
          label: "Which of the 7 Pillars of Life does this belong to?",
          //help: "Assign this memory to one of the 7 Timebug Life Categories. This will be help us with later steps of Assessment and Vision Creation.",          
          //help: "Please fill out this field."
        },
        regret: {
          label: "What are your main regrets?",
         // help: "Please fill out this field.",
          //help: "Try to be as descriptive as possible."
        }
      }
    }
  },
  3: {
    type: t.struct({
      field: t.list(t.String)
    }),
    options: {
      fields: {
        
        //placeholder: 'birthing my first child.',
        field: {
          label: "What are your defining life moments?(e.g. marriage, birth of a child, career awards, etc.)",        
          
          disableOrder: true,
          maxLines: 3,      
          config: {
            maxLines: 3,
          },
          item: {
            placeholder: "Defining moment",
            //help: "Think about events/moments that changed the course of your life.",
          }
        }
      }
    }
  },
  4: {
    type: t.struct({
      text: t.maybe(t.String)
    }),
    options: {
      label: "When you were in that 90 year old’s body and mind",
      fields: {
        },
        text: {
          label: "reflecting back on your life, what did you feel?",
          help: "Be completely honest with yourself. This is an exercise to help us determine what we want to keep doing well, and what we need to imrprove on as we walk down the path to 2020.",
        }
      }
    }
  }
};
