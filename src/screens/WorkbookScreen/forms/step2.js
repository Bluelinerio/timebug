import t from "../components/templates";
import { LifeCategory, AreaOfLife, HoursPerMonth} from "./contents";

export default {
  1: {
    type: t.struct({
      id:t.maybe(t.String),
      field: t.list(
        t.struct({
          category: LifeCategory,
          hours: HoursPerMonth
        })
      )
    }),
    options: {
      label: "⏳\n\nHow do you spend a typical 168 hour week right now?",
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
                error: "Please select a Life category."
              },
                hours:{
                  error: "How many hours out of a 168 hour week do you spend on this category?"
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
          hours: HoursPerMonth
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
                error: "Please select a Life category."
              },
                hours:{
                  
                  error: "How many hours out of a 168 hour week would you ideally spend on this category?"
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
                error: "What's something you would like to do less of in the coming years?"
              },
                areaOfLife:{
                  error: "What Timebug Life Category does this thing fit into?"
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
                error: "What's something you would like to do less of in the coming years?"
              },
                areaOfLife:{
                  error: "What Timebug Life Category does this thing fit into?"
                }
            }
          }
        }
      }
    }
  }
};