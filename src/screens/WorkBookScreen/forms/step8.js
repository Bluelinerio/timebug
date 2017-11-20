import t from "../components/templates";
import { ExerciseTypes, TimesOfDay, MeditationTypes, AloneOrOthers } from "./contents";

export default {

    1: {
      title:'On a 1-10 scale, write down your Physical, Mental and Emotional energy levels during different times ofthe day (Morning, Afternoon, Evening) on a typical day.',
      type: t.struct({
        id:t.maybe(t.String),
        weekday:t.struct({
          morning:t.struct({
            physical:t.Number,
            mental:t.Number,
            emotional:t.Number
          }),
          afternoon:t.struct({
            physical:t.Number,
            mental:t.Number,
            emotional:t.Number
          }),
          evening:t.struct({
            physical:t.Number,
            mental:t.Number,
            emotional:t.Number
          })
        }),
        weekend:t.struct({
          morning:t.struct({
            physical:t.Number,
            mental:t.Number,
            emotional:t.Number
          }),
          afternoon:t.struct({
            physical:t.Number,
            mental:t.Number,
            emotional:t.Number
          }),
          evening:t.struct({
            physical:t.Number,
            mental:t.Number,
            emotional:t.Number
          })
        }),
        now:t.struct({
          physical:t.Number,
          mental:t.Number,
          emotional:t.maybe(t.Number)
        })
      }),
      options:{
        fields:{
          id:{
            hidden:true
          },
          weekday:{
            fields:{
              morning:{
                fields:{
                  physical:{
                    auto:'placeholders'
                  },
                  mental:{
                    auto:'placeholders'
                  },
                  emotional:{
                    auto:'placeholders'
                  }
                }
              },
              afternoon:{
                fields:{
                  physical:{
                    auto:'placeholders'
                  },
                  mental:{
                    auto:'placeholders'
                  },
                  emotional:{
                    auto:'placeholders'
                  }
                }
              },
              evening:{
                fields:{
                  physical:{
                    auto:'placeholders'
                  },
                  mental:{
                    auto:'placeholders'
                  },
                  emotional:{
                    auto:'placeholders'
                  }
                }
              }
            }
          },
          weekend:{
            fields:{
              morning:{
                fields:{
                  physical:{
                    auto:'placeholders'
                  },
                  mental:{
                    auto:'placeholders'
                  },
                  emotional:{
                    auto:'placeholders'
                  }
                }
              },
              afternoon:{
                fields:{
                  physical:{
                    auto:'placeholders'
                  },
                  mental:{
                    auto:'placeholders'
                  },
                  emotional:{
                    auto:'placeholders'
                  }
                }
              },
              evening:{
                fields:{
                  physical:{
                    auto:'placeholders'
                  },
                  mental:{
                    auto:'placeholders'
                  },
                  emotional:{
                    auto:'placeholders'
                  }
                }
              }
            }
          },
          now:{
            fields:{
              physical:{
                auto:'placeholders'
              },
              mental:{
                auto:'placeholders'
              },
              emotional:{
                auto:'placeholders'
              }
            }
            
          }
        },
        value:{
          fields:{
            id:'step8+v0.0.0.1'
          }
        }

      }
      },
      2:{
        title:'Please answer the following questions regarding your typical exercise habits.',
        type:t.struct({
          timesPerWeek:t.String,
          howLong:t.String,
          exerciseType:ExerciseTypes,
          aloneOrOthers:AloneOrOthers,
          timeOfDay:t.maybe(TimesOfDay)
        }),
        options: {
          fields:{
            timesPerWeek: {
              auto:'labels'
            },
            howLong:{
              auto:'none',
              label:'For how long?'
            },
            meditationType:{
              label:'What type of meditation?'
            },
            aloneOrOthers:{
              label:'Alone or with others?'
            },
            timeOfDay:{
              label:'What time of day?'
            }
          }

        }
      },
      3:{
          title:'Please answer the following questions regarding your typical meditation habits.',
          type:t.struct({
            timesPerWeek:t.String,
            howLong:t.String,
            meditationType:MeditationTypes,
            aloneOrOthers:AloneOrOthers,
            timeOfDay:t.maybe(TimesOfDay)
          }),
          options: {
            fields:{
              timesPerWeek: {
                auto:'labels'
              },
              howLong:{
                auto:'none',
                label:'For how long?'
              },
              meditationType:{
                label:'What type of meditation?'
              },
              aloneOrOthers:{
                label:'Alone or with others?'
              },
              timeOfDay:{
                label:'What time of day?'
              }
            }

          }
        },
        4:{
          title:'Are you committed to exercising and meditating for at least 20 mins daily from now until the end of the 20/20 Life Vision Challenge?',
          type:t.struct({
            yes:t.Boolean,
            no:t.Boolean
          })
        }
       };