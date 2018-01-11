import t from "../components/templates";
import { LifeCategory, AreaOfLife} from "./contents";

export default {
  1: {
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
      label: "How do you spend a typical 168 hour week right now?",
      fields: {
        id: {
          hidden: true
        },
        
        field: {
          label: "Enter how many hours you spend weekly on each life category.",
          auto: 'placeholders',
          disableOrder: true,
          maxLines: 10,
          config: {
            maxLines: 10,
          },
          item: {
            fields: {
              category: {
                error: "Please fill out this field."
              },
                hours:{
                  error: "Please fill out this field."
                }
            }
          }
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
    type: t.struct({
      field: t.list(
        t.struct({
          category: LifeCategory,
          hours: t.Number
        })
      )
    }),
    options:  {
      fields: {
        label: "If you could make any changes that you wanted to?",
        field: {
          
          label: "Enter how many hours you WOULD LIKE to spend weekly on each life category.",
          auto: 'placeholders',
          disableOrder: true,
          maxLines: 3,
          config: {
            maxLines: 3,
          },
          item: {
            fields: {
              category: {
                error: "Please fill out this field."
              },
                hours:{
                  error: "Please fill out this field."
                }
            }
          }
        },
      }
    }
  },
  3: {
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
          label: "Enter at least 3 things that you want to DO LESS of in general (ie. Watching TV).",
          auto: 'placeholders',
          disableOrder: true,
          maxLines: 10,
          config: {
            maxLines: 10,
          },
          item: {
            fields: {
              thing: {
                error: "Please fill out this field."
              },
                areaOfLife:{
                  error: "Please fill out this field."
                }
            }
          }
        }
      }
    }
  },
  4: {
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
          label: "Enter at least 3 things that you want to DO MORE of, in your ideal life setup.",
          auto: 'placeholders',
          disableOrder: true,
          maxLines: 10,
          config: {
            maxLines: 10,
          },
          item: {
            fields: {
              thing: {
                error: "Please fill out this field."
              },
                areaOfLife:{
                  error: "Please fill out this field."
                }
            }
          }
        }
      }
    }
  }
};
