import t from "../components/templates";
import { ExerciseTypes, TimesOfDay, MeditationTypes, AloneOrOthers,OneToTenScale } from "./contents";

export default {
    1: {
      type: t.struct({
        id:t.maybe(t.String),
        weekday:t.struct({
          morning:t.struct({
            physical:OneToTenScale,
            mental:OneToTenScale,
            emotional:OneToTenScale
          }),
          afternoon:t.struct({
            physical:OneToTenScale,
            mental:OneToTenScale,
            emotional:OneToTenScale
          }),
          evening:t.struct({
            physical:OneToTenScale,
            mental:OneToTenScale,
            emotional:OneToTenScale
          })
        }),
        weekend:t.struct({
          morning:t.struct({
            physical:OneToTenScale,
            mental:OneToTenScale,
            emotional:OneToTenScale
          }),
          afternoon:t.struct({
            physical:OneToTenScale,
            mental:OneToTenScale,
            emotional:OneToTenScale
          }),
          evening:t.struct({
            physical:OneToTenScale,
            mental:OneToTenScale,
            emotional:OneToTenScale
          })
        }),
        now:t.struct({
          physical:OneToTenScale,
          mental:OneToTenScale,
          emotional:OneToTenScale
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
                    label:'Weekday morning: physical',
                    error: 'What is your typical physical energy level on a weekday morning?'
                  },
                  mental:{
                    label:'Weekday morning: mental',
                    eerror: 'What is your typical mental energy level on a weekday morning?'
                  },
                  emotional:{
                    label:'Weekday morning: emotional',
                    error: 'What is your typical emotional energy level on a weekday morning?'
                  }
                }
              },
              afternoon:{
                fields:{
                  physical:{
                    label:'Weekday afternoon: physical',
                    error: 'What is your typical physical energy level on a weekday afternoon?'
                  },
                  mental:{
                    label:'Weekday afternoon: mental',
                    eerror: 'What is your typical mental energy level on a weekday afternoon?'
                  },
                  emotional:{
                    label:'Weekday afternoon: emotional',
                    error: 'What is your typical emotional energy level on a weekday afternoon?'
                  }
                }
              },
              evening:{
                fields:{
                  physical:{
                    label:'Weekday evening: physical',
                    error: 'What is your typical physical energy level on a weekday evening?'
                  },
                  mental:{
                    label:'Weekday evening: mental',
                    eerror: 'What is your typical mental energy level on a weekday evening?'
                  },
                  emotional:{
                    label:'Weekday evening: emotional',
                    error: 'What is your typical emotional energy level on a weekday evening?'
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
                    label:'Weekend morning: physical',
                    error: 'What is your typical physical energy level on a weekend morning?'
                  },
                  mental:{
                    label:'Weekend morning: mental',
                    eerror: 'What is your typical mental energy level on a weekend morning?'
                  },
                  emotional:{
                    label:'Weekend morning: emotional',
                    error: 'What is your typical emotional energy level on a weekend morning?'
                  }
                }
              },
              afternoon:{
                fields:{
                  physical:{
                    label:'Weekend afternoon: physical',
                    error: 'What is your typical physical energy level on a weekend afternoon?'
                  },
                  mental:{
                    label:'Weekend afternoon: mental',
                    eerror: 'What is your typical mental energy level on a weekend afternoon?'
                  },
                  emotional:{
                    label:'Weekend afternoon: emotional',
                    error: 'What is your typical emotional energy level on a weekend afternoon?'
                  }
                }
              },
              evening:{
                fields:{
                  physical:{
                    label:'Weekend evening: physical',
                    error: 'What is your typical physical energy level on a weekend evening?'
                  },
                  mental:{
                    label:'Weekend evening: mental',
                    eerror: 'What is your typical mental energy level on a weekend evening?'
                  },
                  emotional:{
                    label:'Weekend evening: emotional',
                    error: 'What is your typical emotional energy level on a weekend evening?'
                  }
                }
              }
            }
          },
          now:{
            fields:{
              physical:{
                label:'Right now: physical',
                error: 'What is your  physical energy level right now?'
              },
              mental:{
                label:'Right now: mental',
                error: 'What is your  mental energy level right now?'
              },
              emotional:{
                label:'Right now: emotional',
                error: 'What is your emotional energy level right now?'
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
              label:'How many times per week do you exercise?',
              error:'Please fill out this field.'
            },
            howLong:{
              auto:'none',
              label:'For how long?',
              error:'Please fill out this field.'
            },
            exerciseType:{
              label:'What type of Exercise?',
              error:'Please select an exercise type.'
            },
            aloneOrOthers:{
              label:'Alone or with others?',
              error:'Please select a value.'
            },
            timeOfDay:{
              label:'At what time of day do you generally exercise',
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
                label:'For how long do you usually meditate?',
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
                label:'At what time of day do you generally meditate?',
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