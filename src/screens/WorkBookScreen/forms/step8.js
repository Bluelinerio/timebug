import t from "../components/templates";
import { 
  ExerciseTypes, 
  TimesOfDay, 
  MeditationTypes, 
  AloneOrOthers, 
  OneToTenScale, 
  TimesPerWeek,
  ExerciseLength
} from "./contents";

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
      options: {
        label:'On a 1-10 scale, write down your Physical, Mental and Emotional energy levels during different times ofthe day (Morning, Afternoon, Evening) on a typical day.',
        fields: {
          id: {
            hidden:true
          },
          weekday: {
            fields: {
              morning: {
                fields: {
                  physical: {
                    label:'Weekday morning: physical',
                    error: 'What is your typical physical energy level on a weekday morning?'
                  },
                  mental: {
                    label:'Weekday morning: mental',
                    eerror: 'What is your typical mental energy level on a weekday morning?'
                  },
                  emotional: {
                    label:'Weekday morning: emotional',
                    error: 'What is your typical emotional energy level on a weekday morning?'
                  }
                }
              },
              afternoon: {
                fields: {
                  physical: {
                    label:'Weekday afternoon: physical',
                    error: 'What is your typical physical energy level on a weekday afternoon?'
                  },
                  mental: {
                    label:'Weekday afternoon: mental',
                    eerror: 'What is your typical mental energy level on a weekday afternoon?'
                  },
                  emotional: {
                    label:'Weekday afternoon: emotional',
                    error: 'What is your typical emotional energy level on a weekday afternoon?'
                  }
                }
              },
              evening: {
                fields: {
                  physical: {
                    label:'Weekday evening: physical',
                    error: 'What is your typical physical energy level on a weekday evening?'
                  },
                  mental: {
                    label:'Weekday evening: mental',
                    eerror: 'What is your typical mental energy level on a weekday evening?'
                  },
                  emotional: {
                    label:'Weekday evening: emotional',
                    error: 'What is your typical emotional energy level on a weekday evening?'
                  }
                }
              }
            }
          },
          weekend: {
            fields: {
              morning: {
                fields: {
                  physical: {
                    label:'Weekend morning: physical',
                    error: 'What is your typical physical energy level on a weekend morning?'
                  },
                  mental: {
                    label:'Weekend morning: mental',
                    eerror: 'What is your typical mental energy level on a weekend morning?'
                  },
                  emotional: {
                    label:'Weekend morning: emotional',
                    error: 'What is your typical emotional energy level on a weekend morning?'
                  }
                }
              },
              afternoon: {
                fields: {
                  physical: {
                    label:'Weekend afternoon: physical',
                    error: 'What is your typical physical energy level on a weekend afternoon?'
                  },
                  mental: {
                    label:'Weekend afternoon: mental',
                    eerror: 'What is your typical mental energy level on a weekend afternoon?'
                  },
                  emotional: {
                    label:'Weekend afternoon: emotional',
                    error: 'What is your typical emotional energy level on a weekend afternoon?'
                  }
                }
              },
              evening: {
                fields: {
                  physical: {
                    label:'Weekend evening: physical',
                    error: 'What is your typical physical energy level on a weekend evening?'
                  },
                  mental: {
                    label:'Weekend evening: mental',
                    eerror: 'What is your typical mental energy level on a weekend evening?'
                  },
                  emotional: {
                    label:'Weekend evening: emotional',
                    error: 'What is your typical emotional energy level on a weekend evening?'
                  }
                }
              }
            }
          },
          now: {
            fields: {
              physical: {
                label:'Right now: physical',
                error: 'What is your  physical energy level right now?'
              },
              mental: {
                label:'Right now: mental',
                error: 'What is your  mental energy level right now?'
              },
              emotional: {
                label:'Right now: emotional',
                error: 'What is your emotional energy level right now?'
              }
            }
            
          }
        },
        value: {
          fields: {
            id:'step8+v0.0.0.1'
          }
        }

      }
      },
      2: {
        type:t.struct({
          timesPerWeek:TimesPerWeek,
          howLong: ExerciseLength,
          exerciseType: ExerciseTypes,
          aloneOrOthers: AloneOrOthers,
          timeOfDay: TimesOfDay,
          motivation: t.list(t.String)
        }),
        options: {
          label:'My Exercise Routine',
          fields: {
            timesPerWeek: {
              label:'How many times per week do you usually exercise?',
              help: 'Try to estimates by averaging your last memorable 6 months'
            },
            howLong: {
              auto:'none',
              label:'For how long do?',
              help: 'The art of making estimates starts with practice, and practice makes perfect!'
            },
            exerciseType: {
              label:'What type of Exercise?',
              help: 'In case you have a few, which one is the most remarkable or the one you are challanged by the most? Some people find their routine boring, some can not wait to get to it...'
            },
            aloneOrOthers: {
              label: 'Alone or with others?',
              help: 'How do you deal with distraction in your routine? What are the kind of partneship preference you like?'
            },
            timeOfDay: {
              label: 'At what time of day do you generally exercise',
              help: 'What time of the day you feel the most effective for your routine?'
            },
            motivation: {
              item: {
                label:'Write down some motivational words, quotations, role models and images to goes though your mind and help your keey your routine.',
                help: 'Please select a value.'
              }
            }
          }
        }
      },
      3: {
          type:t.struct({
            timesPerWeek: TimesPerWeek,
            howLong: ExerciseLength,
            meditationType: MeditationTypes,
            aloneOrOthers: AloneOrOthers,
            timeOfDay: TimesOfDay
          }),
          options: {
            label:'Please answer the following questions regarding your typical meditation habits.',
            fields: {
              timesPerWeek: {
                auto:'labels'
              },
              howLong: {
                auto:'none',
                label:'For how long do you usually meditate?',
                help: 'What length of time you find to be the most common in your practice?'
              },
              meditationType: {
                label:'What type of meditation?',
                help: 'Personal practice is very important to some. We would appreciate knowing if we missed a kind of practice that you may have. If that is the case please please drop us a line! 🙏 '
              },
              aloneOrOthers: {
                label: 'Alone or with others?',
                help: 'What are the kind of benefits you find meditating with others?'
              },
              timeOfDay: {
                label:'At what time of day do you generally meditate?',
                help: 'Some novice practioners meditate when they feel the need to, if that is the case what would be the most common time? Others, practice multiple times a day, if that is the case, what time has been the most compelling or profound for you?'
              }
            }
          }
        },
        4: {
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