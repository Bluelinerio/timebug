import t from "../components/templates";
import { LifeCategory, AreaOfLife} from "./contents";

export default {
  1: {
    title: "How do you spend a typical 168 hour week right now?",
    type: t.struct({
      id:t.maybe(t.String),
      field: t.list(
        t.struct({
          category: LifeCategory,
          hours: t.Number
        })
      )
    }),
    options: {
      fields: {
        id: {
          hidden: true
        },
        field: {
          auto: 'placeholders',
          disableOrder: true,
          maxLines: 10,
          config: {
            maxLines: 10,
          },
        },
      }
    },
    value: {
      fields: {
        id:'step2+v0.0.0.1'
      }
    }
  },
  2: {
    title: "If you could make any changes that you wanted to?",
    type: t.struct({
      field: t.list(
        t.struct({
          category: LifeCategory,
          hours: t.Number
        })
      )
    }),
    options: {
      fields: {
        field: {
          auto: 'placeholders',
          disableOrder: true,
          maxLines: 3,
          config: {
            maxLines: 3,
          },
        },
      }
    }
  },
  3: {
    title: "Write down at least 3 things that you want to DO LESS of in general (ie. Watching TV).",
    type: t.struct({
      field: t.list(
        t.struct({
          thing: t.String,
          areaOfLife: t.maybe(AreaOfLife),
        })
      )
    }),
    options: {
      fields: {
        field: {
          auto: 'placeholders',
          disableOrder: true,
          maxLines: 10,
          config: {
            maxLines: 10,
          },
        }
      }
    }
  },
  4: {
    title: "Write down at least 3 things that you want to DO MORE of, in your ideal life setup.",
    type: t.struct({
      field: t.list(
        t.struct({
          thing: t.String,
          areaOfLife: t.maybe(AreaOfLife),
        })
      )
    }),
    options: {
      fields: {
        field: {
          auto: 'placeholders',
          disableOrder: true,
          maxLines: 10,
          config: {
            maxLines: 10,
          },
        }
      }
    }
  }
};
