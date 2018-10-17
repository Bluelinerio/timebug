import t                                from '../../../forms/components';
import { PillarsOfLife, HoursPerMonth } from './contents';

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      typicalWeeklyBreakdown: t.list(
        t.struct({
          pillarOfLife: PillarsOfLife,
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
        typicalWeeklyBreakdown: {
          disableOrder: true,
          maxLines: 10,
          config: {
            maxLines: 10
          },
          item: {
            auto: 'none',
            fields: {
              pillarOfLife: {
                auto: 'labels'
              },
              hours: {
                auto: 'labels'
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
      idealWeeklyBreakdown: t.list(
        t.struct({
          pillarOfLife: PillarsOfLife,
          hours: HoursPerMonth
        })
      )
    }),
    options: {
      label: 'How many hours do you ideally want to spend on each activity?',

      fields: {
        idealWeeklyBreakdown: {
          disableOrder: true,
          maxLines: 3,
          config: {
            maxLines: 3
          },
          item: {
            auto: 'none',
            fields: {
              pillarOfLife: {
                auto: 'labels'
                //error: "Please select a Life category."
              },
              hours: {
                auto: 'labels'
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
      activitiesToEngageLess: t.list(
        t.struct({
          activity: t.String,
          pillarOfLife: PillarsOfLife
        })
      )
    }),
    options: {
      label: 'What activities do you ideally want to engage in less?',
      fields: {
        activitiesToEngageLess: {
          disableOrder: true,
          maxLines: 10,
          config: {
            maxLines: 10
          },
          item: {
            auto: 'none',
            fields: {
              activity: {
                auto:'labels'
                //error: "What's something you would like to do less of in the coming years?"
              },
              pillarOfLife: {
                auto:'labels'
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
      activitiesToEngageMore: t.list(
        t.struct({
          activity: t.String,
          pillarsOfLife: PillarsOfLife
        })
      )
    }),
    options: {
      label: 'What activities do you ideally want to engage in more?',
      fields: {
        activitiesToEngageMore: {
          disableOrder: true,
          maxLines: 10,
          config: {
            maxLines: 10
          },
          item: {
            auto: 'none',
            fields: {
              activity: {
                auto:'labels'
                //error: "What's something you would like to do less of in the coming years?"
              },
              pillarsOfLife: {
                auto:'labels'
                //error: "What Timebug Life Category does this thing fit into?"
              }
            }
          }
        }
      }
    }
  }
};
