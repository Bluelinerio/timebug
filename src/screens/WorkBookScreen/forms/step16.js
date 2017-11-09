import t from "../components/templates";
import { PriorityLevels, ExerciseFrequency, ExerciseTypes, CarryStress, CommonGoalOutcomes, BedTimes, EatingFrequency, HoursSleep } from "./contents";

export default {
  1: {
    title:'Take time to evaluate your general health status',
    type: t.struct({
      priority:PriorityLevels,
      feelNow: t.Number,
      healthyPerson: t.Number
    }),
    options:{ 
      fields: {
        priority: {
          label:'How much of a priority has health been for you?'
        },
        feelNow: {
          label:'How do you feel now, physical health-wise?(Using a 10pt scale with 1=not very food to 10-excellent'
        },
        healthyPerson: {
          label:'Do you think you are a healthy person? (Using a 10pt scale with 1=not very healthy to 10=extremely healthy).'
        }

      }
    }
    

  },
  2: {
    title:'Take time to evaluate your Fitness and Exercise behavior',
    type:t.struct({
      doYouExercise: t.String,
      exerciseFrequency: ExerciseFrequency,
      exerciseTypes: ExerciseTypes,
      topFitnessGoals: t.list(
        t.struct({
          goal: t.String,
          goalOutcome: CommonGoalOutcomes
        })
      )


    }),
    options: {
      fields: {
        doYouExercise: {
          label: 'Do you exercise? If not, why?'
        },
        exerciseFrequency: {
          label: 'How often do you exercise?'
        },
        exerciseTypes: {
          label: 'What type of exercise do you do?'
        },
        topFitnessGoals: {
          label:"What were your top 3 fitness goals in 2011-201 5and how did you do with them?(Refer to Day 7's typical outcomes",
          item: {
            fields: {
              auto: 'placeholders'
            }
          }
        }
      }
    }
  },
  3:{
    title: 'Take time to evaluate your nutrition & diet',
    type: t.struct({
      typicalDiet: t.String,
      healthyDiet: t.Number,
      eatingFrequency: EatingFrequency,
      makeYourOwnMeals: t.struct({
        yes:t.Boolean,
        no:t.Boolean
      }),
      eatOrganic: t.struct({
        yes:t.Boolean,
        no:t.Boolean
      }),
      takeSupplements: t.struct({
        yes:t.Boolean,
        no:t.Boolean
      }),
      indluge: t.struct({
        a:t.Boolean,
        b:t.Boolean,
        c:t.Boolean,
        d:t.Boolean,
        e:t.Boolean

      })
    }),
    options: {
      fields: {
        typicalDiet: {
          label:'What is your typical diet?'
        },
        healthyDiet: {
          label:'How health is your diet? (Using a 10pt scale with 1=not very healthy to 10=extremely healthy)'
        },
        eatingFrequency: {
          label:'How often do you eat?'
        },
        makeYourOwnMeals: {
          label:'Do you make your own meals?'
        },
        eatOrganic: {
          label:'Do you eat organic?',
          fields: {
            auto: 'labels'
          }
        },
        takeSupplements: {
          label:'Do you take supplements?(Vitamins, protein shakes, etc',
          fields: {
            auto: 'labels'
          }
        },
        indluge: {
          label:'How often do you over-indulge with emotional eating(by eating too much or eating too much junk food excessively?)',
          fields: {
            a:{
              label:'a) Daily'
            },
            b:{
              label:'b) 1-2x/wk'
            },
            c:{
              label:'c) Occasionally(1-2x/mo)'
            },
            d:{
              label:'d) Rarely'
            },
            e:{
              label:'e) Never'
            },

          }
        }
      }
    }
  },
  4: {
    title:'Take tmie to evaluate your Sleep pattern.',
    type:t.struct({
      hoursSleep: HoursSleep,
      isEnough: t.String,
      sleepQuality: t.Number,
      sleepIssues: t.String,
      bedTimes: BedTimes,
      takeEnergizer: t.String

    }),
    options: {
      fields: {
        hoursSleep: {
          label:'How many hours do you typically sleep?'
        },
        isEnough: {
          label:'Is that enough? If not, how many hours do you really need?'
        },
        sleepQuality: {
          label: 'What is the quality of your sleep(Using a 10pt scale with 1=poor and 10-great'
        },
        sleepIssues: {
          label:'Do you have sleep issues? If so, why?'
        },
        bedTimes: {
          label:'What time do you generally go to bed?'
        },
        takeEnergizer: {
          label:'Do you drink coffee or take anything to stay awake or energized daily?'
        }
      }
    }
  },
  5: {
    title: 'Take time to evaluate your Body Care',
    type:t.struct({
      takeCare: t.String,
      carryStress: CarryStress,
      healthIssues: t.String,
      howProminent: t.Number,
      sickDays: t.Number,
      takeEnergizer: t.struct({
        a: t.Boolean,
        b: t.Boolean,
        c: t.Boolean,
        d: t.Boolean,
        e: t.Boolean,
      })
    }),
    options: {
      fields: {
        takeCare: {
          label:'What do you do to physically take care of yourself? How often per month?'
        },
        carryStress: {
          label:'Where in your body to you carry stress or tension?'
        },
        healthIssues: {
          label:'Do you have any notable health issues? '
        },
        howProminent: {
          label:'How prominent are the yin your life?(Using a 10pt scale with 1=very little effect to 10=a daily challenge)'
        },
        sickDays: {
          label:'How often do you get sick(# of days per year on average from 2011-2015)'
        },
        takeEnergizer: {
          label:'Do you drink coffee or take anything to stay awake or energized daily?',
          fields: {
            a: {
              label:'a)Never'
            },
            b: {
              label:'b)Only When Really Sick'
            },
            c: {
              label:'c)Occasionally'
            },
            d: {
              label:'d)Frequently'
            },
            e: {
              label:'e)Daily'
            }
          }
        }
      }
    }
  },
  6: {
    title: 'Take time to evaluate your Mental & Emotional Health',
    type:t.struct({
      stressRange: t.struct({
        lowEnd:t.Number,
        highEnd:t.Number
      }),
      dealWithStress: t.String,
      expressAbility: t.String,
      awareness: t.struct({
        example1: t.String,
        example2: t.String,
        example3: t.String
      })
    }),
    options:{
    fields: {
      stressRange: {
        label:'What is the range of your stress levels throughout a typical week?(Using a 10pt scale, Choose a number for the low-end and another for the high-end, with 1=total tranquility and 10=major nervous breakdown)',
        fields: {
          lowEnd: {
            placeholder:'Low-End'
          },
          highEnd: {
            placeholder:'High-End'
          }
        }
      },
     dealWithStress: {
       label: 'How do you deal with stress?'
     },
     expressAbility: {
       label:'Are you able to express your emotions in a healthy way? How do you communicate your feelings?'
     },
     awareness: {
       label:'Are you aware of how stressful situations impact your health and life? Give 3 examples.',
       fields: {
         auto:'placeholders'
       }
     }
    }
  }
}
};