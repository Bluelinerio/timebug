import t from '../components/templates';
import { PillarsOfLife, AreaOfLife, HoursPerMonth } from './contents';

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      pillar: t.list(
        t.struct({
          pillarsOfLife: PillarsOfLife,
          hours: HoursPerMonth
        })
      )
    }),
    options: {
      label:
        'Break down a typical 168 hour week according to the 7 Pillars Of Life.',

      fields: {
        id: {
          hidden: true
        },
        pillarOfLife: {
          disableOrder: true,
          maxLines: 10,
          config: {
            maxLines: 10
          },
          item: {
            fields: {
              pillarsOfLife: {
                //error: "Please select a Life category."
              },
              hours: {
                //error: "How many hours out of a 168 hour week do you spend on this category?"
              }
            }
          }
        }
      }
    },
    value: {
      fields: {
        id: 'step2+v0.0.0.1'
      }
    }
  },
  2: {
    type: t.struct({
      pillar: t.list(
        t.struct({
          pillarsOfLife: PillarsOfLife,
          hours: HoursPerMonth
        })
      )
    }),
    options: {
      label: 'How many hours do you ideally want to spend on each activity?',

      fields: {
        pillar: {
          disableOrder: true,
          maxLines: 3,
          config: {
            maxLines: 3
          },
          item: {
            fields: {
              pillarsOfLife: {
                //error: "Please select a Life category."
              },
              hours: {
                //error: "How many hours out of a 168 hour week would you ideally spend on this category?"
              }
            }
          }
        }
      }
    }
  },
  3: {
    type: t.struct({
      activities: t.list(
        t.struct({
          activity: t.String,
          pillarsOfLife: t.maybe(PillarsOfLife)
        })
      )
    }),
    options: {
      label: 'What activities do you ideally want to engage in less?',
      fields: {
        activities: {
          disableOrder: true,
          maxLines: 10,
          config: {
            maxLines: 10
          },
          item: {
            fields: {
              activity: {
                //error: "What's something you would like to do less of in the coming years?"
              },
              areaOfLife: {
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
      activities: t.list(
        t.struct({
          activity: t.String,
          pillarsOfLife: t.maybe(PillarsOfLife)
        })
      )
    }),
    options: {
      label: 'What activities do you ideally want to engage in more?',
      fields: {
        activities: {
          disableOrder: true,
          maxLines: 10,
          config: {
            maxLines: 10
          },
          item: {
            fields: {
              activity: {
                //error: "What's something you would like to do less of in the coming years?"
              },
              pillarsOfLife: {
                //error: "What Timebug Life Category does this thing fit into?"
              }
            }
          }
        }
      }
    }
  }
};
