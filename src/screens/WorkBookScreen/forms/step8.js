import t from "../components/templates";
import { ExerciseTypes, TimesOfDay, MeditationTypes, AloneOrOthers } from "./contents";

export default {
    1: {
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
        label:'On a 1-10 scale, write down your Physical, Mental and Emotional energy levels during different times ofthe day (Morning, Afternoon, Evening) on a typical day.',
        fields:{
          id:{
            hidden:true
          },
          weekday:{
            fields:{
              morning:{
                fields:{
                  physical:{
                    auto:'placeholders',
                    error: 'Please fill out this field.'
                  },
                  mental:{
                    auto:'placeholders',
                    error: 'Please fill out this field.'
                  },
                  emotional:{
                    auto:'placeholders',
                    error: 'Please fill out this field.'
                  }
                }
              },
              afternoon:{
                fields:{
                  physical:{
                    auto:'placeholders',
                    error: 'Please fill out this field.'
                  },
                  mental:{
                    auto:'placeholders',
                    error: 'Please fill out this field.'
                  },
                  emotional:{
                    auto:'placeholders',
                    error: 'Please fill out this field.'
                  }
                }
              },
              evening:{
                fields:{
                  physical:{
                    auto:'placeholders',
                    error: 'Please fill out this field.'
                  },
                  mental:{
                    auto:'placeholders',
                    error: 'Please fill out this field.'
                  },
                  emotional:{
                    auto:'placeholders',
                    error: 'Please fill out this field.'
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
                    auto:'placeholders',
                    error: 'Please fill out this field.'
                  },
                  mental:{
                    auto:'placeholders',
                    error: 'Please fill out this field.'
                  },
                  emotional:{
                    auto:'placeholders',
                    error: 'Please fill out this field.'
                  }
                }
              },
              afternoon:{
                fields:{
                  physical:{
                    auto:'placeholders',
                    error: 'Please fill out this field.'
                  },
                  mental:{
                    auto:'placeholders',
                    error: 'Please fill out this field.'
                  },
                  emotional:{
                    auto:'placeholders',
                    error: 'Please fill out this field.'
                  }
                }
              },
              evening:{
                fields:{
                  physical:{
                    auto:'placeholders',
                    error: 'Please fill out this field.'
                  },
                  mental:{
                    auto:'placeholders',
                    error: 'Please fill out this field.'
                  },
                  emotional:{
                    auto:'placeholders',
                    error: 'Please fill out this field.'
                  }
                }
              }
            }
          },
          now:{
            fields:{
              physical:{
                auto:'placeholders',
                error: 'Please fill out this field.'
              },
              mental:{
                auto:'placeholders',
                error: 'Please fill out this field.'
              },
              emotional:{
                auto:'placeholders',
                error: 'Please fill out this field.'
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
        type:t.struct({
          timesPerWeek:t.String,
          howLong:t.String,
          exerciseType:ExerciseTypes,
          aloneOrOthers:AloneOrOthers,
          timeOfDay:TimesOfDay
        }),
        options: {
          label:'Please answer the following questions regarding your typical exercise habits.',
          fields:{
            timesPerWeek: {
              auto:'labels',
              error:'Please fill out this field.'
            },
            howLong:{
              auto:'none',
              label:'For how long?',
              error:'Please fill out this field.'
            },
            exerciseType:{
              label:'What type of Exercise?',
              error:'Please select a value.'
            },
            aloneOrOthers:{
              label:'Alone or with others?',
              error:'Please select a value.'
            },
            timeOfDay:{
              label:'What time of day?',
              error:'Please select a value.'
            }
          }

        }
      },
      3:{
          type:t.struct({
            timesPerWeek:t.String,
            howLong:t.String,
            meditationType:MeditationTypes,
            aloneOrOthers:AloneOrOthers,
            timeOfDay:TimesOfDay
          }),
          options: {
            label:'Please answer the following questions regarding your typical meditation habits.',
            fields:{
              timesPerWeek: {
                auto:'labels'
              },
              howLong:{
                auto:'none',
                label:'For how long?',
                error:'Please fill out this field.'
              },
              meditationType:{
                label:'What type of meditation?',
                error:'Please select a value.'
              },
              aloneOrOthers:{
                label:'Alone or with others?',
                error:'Please select a value.'
              },
              timeOfDay:{
                label:'What time of day?',
                error:'Please select a value.'
              }
            }

          }
        },
        4:{
          type:t.struct({
            commitmentAnswer:t.Boolean
          }),
          options: {
            fields: {
              commitmentAnswer: {
            label:'Are you committed to exercising and meditating for at least 20 mins daily from now until the end of the 20/20 Life Vision Challenge?',
          }
        }
        }
        }
       };