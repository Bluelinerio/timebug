import t from '../components/templates';
import {
  ExerciseTypes,
  TimesOfDay,
  MeditationTypes,
  AloneOrOthers,
  OneToTenScale,
  TimesPerWeek,
  ExerciseLength
} from './contents';

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      weekdayEnergyLevels: t.struct({
        weekdayMorningEnergyLevels: t.struct({
          physical: OneToTenScale,
          mental: OneToTenScale,
          emotional: OneToTenScale
        }),
        weekdayAfternoonEnergyLevels: t.struct({
          physical: OneToTenScale,
          mental: OneToTenScale,
          emotional: OneToTenScale
        }),
        weekdayEveningEnergyLevels: t.struct({
          physical: OneToTenScale,
          mental: OneToTenScale,
          emotional: OneToTenScale
        })
      }),
      weekend: t.struct({
        weekendMorningEnergyLevels: t.struct({
          physical: OneToTenScale,
          mental: OneToTenScale,
          emotional: OneToTenScale
        }),
        weekendAfternoonEnergyLevels: t.struct({
          physical: OneToTenScale,
          mental: OneToTenScale,
          emotional: OneToTenScale
        }),
        weekendEveningEnergyLevels: t.struct({
          physical: OneToTenScale,
          mental: OneToTenScale,
          emotional: OneToTenScale
        })
      }),
      rightNowEnergyLevels: t.struct({
        physical: OneToTenScale,
        mental: OneToTenScale,
        emotional: OneToTenScale
      })
    }),
    options: {
      auto: 'none',
      label:
        'What are your different energy levels (physical, mental and emotional) at different times of a typical day (morning, afternoon, evening)?',
      fields: {
        id: {
          hidden: true
        },
        weekdayEnergyLevels: {
          fields: {
            weekdayMorningEnergyLevels: {
              label: 'Weekday: Morning',
              fields: {
                physical: {
                  label:
                    'What is your typical physical energy level on a weekday morning?'
                },
                mental: {
                  label:
                    'What is your typical mental energy level on a weekday morning?'
                },
                emotional: {
                  label:
                    'What is your typical emotional energy level on a weekday morning?'
                }
              }
            },
            weekdayAfternoonEnergyLevels: {
              label: 'Weekday: Afternoon',
              fields: {
                physical: {
                  label:
                    'What is your typical physical energy level on a weekday afternoon?'
                },
                mental: {
                  label:
                    'What is your typical mental energy level on a weekday afternoon?'
                },
                emotional: {
                  label:
                    'What is your typical emotional energy level on a weekday afternoon?'
                }
              }
            },
            weekdayEveningEnergyLevels: {
              label: 'Weekday: Evening',
              fields: {
                physical: {
                  label:
                    'What is your typical physical energy level on a weekday evening?'
                },
                mental: {
                  label:
                    'What is your typical mental energy level on a weekday evening?'
                },
                emotional: {
                  label:
                    'What is your typical emotional energy level on a weekday evening?'
                }
              }
            }
          }
        },
        weekendEnergyLevels: {
          fields: {
            weekendMorningEnergyLevels: {
              label: 'Weekend: Morning',
              fields: {
                physical: {
                  label:
                    'What is your typical physical energy level on a weekend morning?'
                },
                mental: {
                  label:
                    'What is your typical mental energy level on a weekend morning?'
                },
                emotional: {
                  label:
                    'What is your typical emotional energy level on a weekend morning?'
                }
              }
            },
            weekendAfternoonEnergyLevels: {
              label: 'Weekend: Afternoon',
              fields: {
                physical: {
                  label:
                    'What is your typical physical energy level on a weekend afternoon?'
                },
                mental: {
                  label:
                    'What is your typical mental energy level on a weekend afternoon?'
                },
                emotional: {
                  label:
                    'What is your typical emotional energy level on a weekend afternoon?'
                }
              }
            },
            weekendEveningEnergyLevels: {
              label: 'Weekend: Evening',
              fields: {
                physical: {
                  label:
                    'What is your typical physical energy level on a weekend evening?'
                },
                mental: {
                  label:
                    'What is your typical mental energy level on a weekend evening?'
                },
                emotional: {
                  label:
                    'What is your typical emotional energy level on a weekend evening?'
                }
              }
            }
          }
        },
        rightNowEnergyLevels: {
          label: 'Right Now',

          fields: {
            physical: {
              label: 'What is your  physical energy level right now?'
            },
            mental: {
              label: 'What is your  mental energy level right now?'
            },
            emotional: {
              label: 'What is your emotional energy level right now?'
            }
          }
        }
      },
      value: {
        fields: {
          id: 'step8+v0.0.0.1'
        }
      }
    }
  },
  2: {
    type: t.struct({
      exerciseHabits: t.struct({
        timesPerWeek: TimesPerWeek,
        howLong: ExerciseLength,
        exerciseType: ExerciseTypes,
        aloneOrOthers: AloneOrOthers,
        timeOfDay: TimesOfDay
        //motivation: t.list(t.String)
      })
    }),
    options: {
      label: 'Exercise',
      fields: {
        exerciseHabits: {
          fields: {
            timesPerWeek: {
              label: 'How many times do you exercise per week?'
              //help: 'Try to estimates by averaging your last memorable 6 months'
            },
            howLong: {
              label: 'For how long?'
              //help: 'The art of making estimates starts with practice, and practice makes perfect!'
            },
            exerciseType: {
              label: 'What type?'
              //help: 'In case you have a few, which one is the most remarkable or the one you are challanged by the most? Some people find their routine boring, some can not wait to get to it...'
            },
            aloneOrOthers: {
              label: 'Alone or with others?'
              // help: 'How do you deal with distraction in your routine? What are the kind of partneship preference you like?'
            },
            timeOfDay: {
              label: 'What time of day?'
              //help: 'What time of the day you feel the most effective for your routine?'
            }
            /*motivation: {
          item: { auto:'none',
            label:'Write down some motivational words, quotations, role models and images to goes though your mind and help your keey your routine.',
            help: 'Please select a value.'
          }
        }*/
          }
        }
      }
    }
  },
  3: {
    type: t.struct({
      meditationHabits: t.struct({
        timesPerWeek: TimesPerWeek,
        howLong: ExerciseLength,
        meditationType: MeditationTypes,
        aloneOrOthers: AloneOrOthers,
        timeOfDay: TimesOfDay
      })
    }),
    options: {
      label: 'Meditation',
      fields: {
        meditationHabits: {
          fields: {
            timesPerWeek: {
              label: 'How many times do you meditate per week?'
            },
            howLong: {
              label: 'For how long?'
              //help: 'What length of time you find to be the most common in your practice?'
            },
            meditationType: {
              label: 'What type ?'
              //help: 'Personal practice is very important to some. We would appreciate knowing if we missed a kind of practice that you may have. If that is the case please please drop us a line! 🙏 '
            },
            aloneOrOthers: {
              label: 'Alone or with others?'
              //help: 'What are the kind of benefits you find meditating with others?'
            },
            timeOfDay: {
              label: 'What time of day?'
              //help: 'Some novice practioners meditate when they feel the need to, if that is the case what would be the most common time? Others, practice multiple times a day, if that is the case, what time has been the most compelling or profound for you?'
            }
          }
        }
      }
    }
  },
  4: {
    type: t.struct({
      commitToHealth: t.Boolean
    }),
    options: {
      label:
        'Exercise and meditate daily from here on out through the rest of the 20/20 Life Vision Challenge, for at least 20 minutes combined. Are you committed to this?',
      auto: 'none'
    }
  }
};
