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
      label: "Write your best life memory",
      fields: {
        id: {
          hidden: true
        },
        stageOfLife: {
          label: "At what stage of your life was it?",
          error: "Please fill out this field."
        },
        memory: {
          label: "Describe what happened",
          numberOfLines: 3,
          error: "Please fill out this field.",
          numberOfLines: 3
        },
        areaOfLife: {
          label: "What area of life does this belong to?",
          error: "Please fill out this field.",
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
          error: "Please fill out this field."
        },
        areaOfLife: {
          label: "What Area Of Life does this belong to?",
          error: "Please fill out this field."
        },
        regret: {
          label: "Describe what happened",
          error: "Please fill out this field."
        }
      }
    }
  },
  3: {
    type: t.struct({
      field: t.list(
        t.struct({
          moments: t.String
        })
      )
    }),
    options: {
      
      fields: {
        moments: {
          label: "How would you describe this moment?",
          error: "Please fill out this field."
        },
        field: {
          label: "What are your defining moments?",
          auto: 'placeholders',
          disableOrder: true,
          maxLines: 3,
          config: {
            maxLines: 3,
          },
        }
      }
    }
  },
  4: {
    type: t.struct({
      text: t.maybe(t.String),
      emotions:t.list(
        t.struct({
          emotion: Emotion
        })
      )
    }),
    options: {
      label: "When you were in that 90 year old’s body and mind",
      fields: {
        emotions: {
          label: "What were some of the emotion you felt?",
          error: "Please fill out this field."
        },
        text: {
          label: "reflecting back on your life, what did you feel?",
          error: "Please fill out this field."
        }
      }
    }
  }
};
