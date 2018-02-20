import t from "../components/templates";
import { PillarsOfLife, AreaOfLife, HoursPerMonth} from "./contents";

export default {
  1: {
    type: t.struct({
      id:t.maybe(t.String),
      field: t.list(
        t.struct({
          category: PillarsOfLife,
          hours: HoursPerMonth
        })
      )
    }),
    options: {
      fields: {
        id: {
          hidden: true
        },        
        field: {
          label: "Break down a typical 168 hour week according to the 7 Pillars Of Life.",
          auto: 'placeholders',
          disableOrder: true,
          maxLines: 10,
          config: {
            maxLines: 10,
          },
          item: {
            fields: {
              category: {
                //error: "Please select a Life category."
              },
                hours:{
                  //error: "How many hours out of a 168 hour week do you spend on this category?"
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
          category: PillarsOfLife,
          hours: HoursPerMonth
        })
      )
    }),
    options:  {
      fields: {
        field: {
          
          label: "How many hours do you ideally want to spend in each activity?",
          auto: 'placeholders',
          disableOrder: true,
          maxLines: 3,
          config: {
            maxLines: 3,
          },
          item: {
            fields: {
              category: {
                //error: "Please select a Life category."
              },
                hours:{
                  
                  //error: "How many hours out of a 168 hour week would you ideally spend on this category?"
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
          label: "What activities do you ideally want to engage in less?",
          auto: 'placeholders',
          disableOrder: true,
          maxLines: 10,
          config: {
            maxLines: 10,
          },
          item: {
            fields: {
              thing: {
                //error: "What's something you would like to do less of in the coming years?"
              },
                areaOfLife:{
                  //error: "What Timebug Life Category does this thing fit into?"
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
          label: "What activities do you ideally want to engage in more?",
          auto: 'placeholders',
          disableOrder: true,
          maxLines: 10,
          config: {
            maxLines: 10,
          },
          item: {
            fields: {
              thing: {
                //error: "What's something you would like to do less of in the coming years?"
              },
                areaOfLife:{
                  //error: "What Timebug Life Category does this thing fit into?"
                }
            }
          }
        }
      }
    }
  }
};
