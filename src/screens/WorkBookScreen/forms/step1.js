import t from "../components/templates";
import { AreaOfLife, StageOfLife, Emotions } from "./contents";

export default {
  1: {
    title: "Write your best life memory",
    type: t.struct({
      id:t.String,
      memory: t.String,
      areaOfLife: t.maybe(AreaOfLife),
      stageOfLife: t.maybe(StageOfLife)
    }),
    options: {
      fields: {
        id: {
          hidden: true
        },
        stageOfLife: {
          label: "At what stage of your life was it?"
        },
        memory: {
          label: "Describe what happened",
          numberOfLines: 3
        },
        areaOfLife: {
          label: "What area of life does this belong to?"
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
    title: "What are some of your regrets?",
    type: t.struct({
      regret: t.String,
      areaOfLife: t.maybe(AreaOfLife),
      stageOfLife: t.maybe(StageOfLife),
    }),
    options: {
      fields: {
        stageOfLife: {
          label: "At what stage of your life was it?"
        },
        areaOfLife: {
          label: "What Area Of Life does this belong to?"
        },
        regret: {
          label: "Describe what happend"
        }
      }
    }
  },
  3: {
    title: "What are your defining moments?",
    type: t.struct({
      field: t.list(
        t.struct({
          moments: t.maybe(t.String)
        })
      )
    }),
    options: {
      fields: {
        moments: {
          label: "How would you describe this moment?"
        },
        field: {
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
    title: "When you were in that 90 year old’s body and mind",
    type: t.struct({
      text: t.maybe(t.String),
      emotions:t.list(
        t.struct({
          emotion: Emotions
        })
      )
    }),
    options: {
      fields: {
        emotions: {
          label: "What were some of the emotion you felt?"
        },
        text: {
          label: "reflecting back on your life, what did you feel?"
        }
      }
    }

  }
};
