import t from '../../../forms/components';
import {
  OneToTenScale,
  IsSleepEnough,
  PriorityLevels,
  IndulgeFrequency,
  TakeEnergizers,
  ExerciseFrequency,
  ExerciseTypes,
  CarryStress,
  CommonGoalOutcomes,
  BedTimes,
  EatingFrequency,
  HoursSleep,
} from './contents';

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      healthAssessment: t.struct({
        priority: PriorityLevels,
        feelNow: OneToTenScale,
        healthyPerson: OneToTenScale,
      }),
    }),
    options: {
      fields: {
        id: {
          hidden: true,
        },
        healthAssessment: {
          fields: {
            priority: {
              label:
                'How much have you made health a priority over the past 5 years?',
              //error:'Please select a value'
            },
            feelNow: {
              label: 'How do you feel physically now?',
              help: '1= Not very well to 10= Very well',
            },
            healthyPerson: {
              label: 'Do you think you are a healthy person?',
              help: '1= Not very healthy to 10= Extremely healthy',
            },
          },
        },
      },
    },
    value: {
      fields: {
        id: 'step16+v0.0.0.1',
      },
    },
  },
  2: {
    type: t.struct({
      fitnessBehaviorAssessment: t.struct({
        doYouExercise: t.String,
        exerciseFrequency: ExerciseFrequency,
        exerciseTypes: ExerciseTypes,
        topFitnessGoals: t.list(
          t.struct({
            goal: t.String,
            goalOutcome: CommonGoalOutcomes,
          })
        ),
      }),
    }),
    options: {
      fields: {
        fitnessBehaviorAssessment: {
          label:
            'Now, its time to think about your fitness and exercise behaviors.',

          fields: {
            doYouExercise: {
              label: 'Do you exercise? If not, why?',
              error: 'Please answer this question.',
            },
            exerciseFrequency: {
              label: 'How often do you exercise?',
              error: 'Please select a value.',
            },
            exerciseTypes: {
              label: 'What type of exercise do you do?',
              error: 'Please select the type of exercise you do.',
            },
            topFitnessGoals: {
              label:
                "What were your top 3 fitness goals from last year and how did you do with them?(Refer to Day 7's typical outcomes)",
              item: {
                auto: 'none',
                fields: {
                  auto: 'labels',
                  goal: {
                    auto: 'labels',
                    error: 'Please fill out this field',
                  },
                  goalOutcome: {
                    auto: 'labels',
                    error: 'Please select a value.',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  3: {
    type: t.struct({
      nutritionDietAssessment: t.struct({
        typicalDiet: t.String,
        healthyDiet: OneToTenScale,
        eatingFrequency: EatingFrequency,
        makeYourOwnMeals: t.Boolean,
        eatOrganic: t.Boolean,
        takeSupplements: t.Boolean,
        indulgeFrequency: IndulgeFrequency,
      }),
    }),
    options: {
      fields: {
        nutritionDietAssessment: {
          label: "Let's think about your nutrition & diet.",

          fields: {
            typicalDiet: {
              label: 'What is your typical diet?',
              error: 'Please fill out the field.',
            },
            healthyDiet: {
              label:
                'How healthy is your diet? (Using a 10pt scale with 1=not very healthy to 10=extremely healthy)',
              error: 'Please fill out the field.',
            },
            eatingFrequency: {
              label: 'How often do you eat?',
              error: 'Please select a value.',
            },
            makeYourOwnMeals: {
              label: 'Do you make your own meals?',
            },
            eatOrganic: {
              label: 'Do you eat organic?',
            },
            takeSupplements: {
              label: 'Do you take supplements?(Vitamins, protein shakes, etc)',
            },
            indulgeFrequency: {
              label:
                'How often do you over-indulge with emotional eating(by eating too much or eating too much junk food excessively?)',
              error: 'Please select a value.',
            },
          },
        },
      },
    },
  },
  4: {
    type: t.struct({
      sleepPatternEvaluation: t.struct({
        hoursSleep: HoursSleep,
        isSleepEnough: IsSleepEnough,
        sleepQuality: OneToTenScale,
        sleepIssues: t.String,
        bedTimes: BedTimes,
        takeEnergizer: t.Boolean,
      }),
    }),
    options: {
      fields: {
        sleepPatternEvaluation: {
          label: 'Take time to evaluate your sleep pattern.',

          fields: {
            hoursSleep: {
              label: 'How many hours do you typically sleep?',
              //error: 'Please select a value.'
            },
            isSleepEnough: {
              label:
                'Is that enough? If not, how many hours do you really need?',
              //error: 'How many hours of sleep do you need?'
            },
            sleepQuality: {
              label:
                'What is the quality of your sleep(Using a 10pt scale with 1=poor and 10-great',
              //error: 'Please select a value.'
            },
            sleepIssues: {
              label: 'Do you have sleep issues? If so, why?',
              //error: 'Think about any sleep issues that you are consistently dealing with'
            },
            bedTimes: {
              label: 'What time do you generally go to bed?',
              //error: 'Please select a bed time'
            },
            takeEnergizer: {
              label:
                'Do you drink coffee or take anything to stay awake or energized daily?',
            },
          },
        },
      },
    },
  },
  5: {
    type: t.struct({
      bodyCareAssessment: t.struct({
        takeCare: t.String,
        carryStress: CarryStress,
        healthIssues: t.String,
        howProminent: OneToTenScale,
        sickDays: OneToTenScale,
        takeEnergizers: TakeEnergizers,
      }),
    }),
    options: {
      fields: {
        bodyCareAssessment: {
          label: 'Take time to evaluate your body care',

          fields: {
            takeCare: {
              label:
                'What do you do to physically take care of yourself? How often per month?',
              error: 'Please fill out the field.',
            },
            carryStress: {
              label: 'Where in your body to you carry stress or tension?',
              error: 'Please select a value.',
            },
            healthIssues: {
              label: 'Do you have any significant health issues?',
              error: 'Please fill out the field.',
            },
            howProminent: {
              label: 'How significant are these issues?',
              help:
                'Using a 10pt scale with 1=very little effect to 10=a daily challenge',
            },
            sickDays: {
              label:
                'How often do you get sick(# of days per year on average from the last few years)',
              error: 'Please select a value.',
            },
            takeEnergizers: {
              label:
                'Do you drink coffee or take anything to stay awake or energized daily?',
              error: 'Please select a value.',
            },
          },
        },
      },
    },
  },
  6: {
    type: t.struct({
      stressRange: t.struct({
        lowEnd: OneToTenScale,
        highEnd: OneToTenScale,
      }),
      dealWithStress: t.String,
      expressAbility: t.String,
      awareness: t.struct({
        example1: t.String,
        example2: t.String,
        example3: t.String,
      }),
    }),
    options: {
      fields: {
        stressRange: {
          label:
            'What is the range of your stress levels throughout a typical week?(Using a 10pt scale, choose a number for the low-end and another for the high-end, with 1=total tranquility and 10=major nervous breakdown)',
          fields: {
            lowEnd: {
              label: 'Low-End',
              error:
                'Whats the low end of your stress range for a typical week?.',
            },
            highEnd: {
              label: 'High-End',
              error:
                'Whats the high end of your stress range for a typical week?.',
            },
          },
        },
        dealWithStress: {
          label: 'How do you deal with stress?',
          error: 'Please fill out the field.',
        },
        abailityToExpressStress: {
          label:
            'Are you able to express your emotions in a healthy way? How do you communicate your feelings?',
          error: 'Please fill out the field.',
        },
        stressfulSituationAwareness: {
          label: 'How do stressful situations influence your health?',
          fields: {
            auto: 'placeholders',
            example1: {
              error: 'Please give an example of how stress has impacted you.',
            },
            example2: {
              error: 'Please give an example of how stress has impacted you.',
            },
            example3: {
              error: 'Please give an example of how stress has impacted you.',
            },
          },
        },
      },
    },
  },
};
