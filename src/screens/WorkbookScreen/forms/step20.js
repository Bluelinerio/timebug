import t from '../components/templates'
import { TimeSpentProgress, OneToTenScale, OverallScore } from './contents'

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      nextFiveYearsTopGoals: t.list(
        t.struct({
          goal: t.String,
          newInsights: t.String,
          specificChanges: t.String
        })
      )
    }),
    options: {
      label:
        'Reflect on your Step 11 entry (The 5-Year Life Report) and make refinements or additional notes. Be more technical and detailed, especially about how you spent your Time & Energy.',
      fields: {
        id: {
          hidden: true
        },
        nextFiveYearsTopGoals: {
          item: {
            auto: 'none',
            fields: {
              goal: {
                auto: 'labels'
              },
              newInsights: {
                auto: 'labels'
              },
              specificChanges: {
                label: 'Specific changes to make'
              }
            }
          }
        }
      }
    },
    value: {
      fields: {
        id: 'step20+v0.0.0.1'
      }
    }
  },
  2: {
    type: t.struct({
      pillarsOfLifeBreakdown: t.String,
      thingsDoLess: TimeSpentProgress,
      thingsDoMore: TimeSpentProgress
    }),
    options: {
      label:
        'Reflect back on your Step 2 entry (More or Less Time) and refine your vision on how you want to spend your time over the next 5 years.',

      fields: {
        pillarsOfLifeBreakdown: {
          label: 'Has anything changed with your Pillars of Life breakdown?'
        },
        thingsDoLess: {
          label:
            'Has anything changed with your 3 things that you want to DO LESS of in general?',
          help: 'i.e. "Watching TV"'
        },
        thingsDoMore: {
          label:
            'Has anything changed with your 3 things that you want to DO MORE of in general?',
          help: 'i.e. "Exercising"'
        }
      }
    }
  },
  3: {
    type: t.struct({
      pastPillarImportance: t.struct({
        career: OneToTenScale,
        aimsAndHobbies: OneToTenScale,
        healthAndWellness: OneToTenScale,
        financial: OneToTenScale,
        relationship: OneToTenScale,
        environment: OneToTenScale,
        spirituality: OneToTenScale
      })
    }),
    options: {
      label:
        'Rank each of the 7 Pillars of Life in order of importance to you over the past 5 years.',
      fields: {
        pastPillarImportance: {
          fields: {
        career: {
          auto: 'labels',
          help: '10= Very Important and 1= Not important at all'
        },
        aimsAndHobbies: {
          auto: 'labels',
          help: '10= Very Important and 1= Not important at all'
        },
        healthAndWellness: {
          auto: 'labels',
          help: '10= Very Important and 1= Not important at all'
        },
        financial: {
          auto: 'labels',
          help: '10= Very Important and 1= Not important at all'
        },
        relationship: {
          auto: 'labels',
          help: '10= Very Important and 1= Not important at all'
        },
        environment: {
          auto: 'labels',
          help: '10= Very Important and 1= Not important at all'
        },
        spirituality: {
          auto: 'labels',
          help: '10= Very Important and 1= Not important at all'
        }
      }
        }
      }
    }
  },
  4: {
    type: t.struct({
      career: t.Number,
      aimsAndHobbies: t.Number,
      healthAndWellness: t.Number,
      relationship: t.Number,
      financial: t.Number,
      environment: t.Number,
      spirituality: t.Number
    }),
    options: {
      label:
        'How would you divide your energy and motivation level as a percent of a pie for each Category?',

      fields: {
        career: {
          auto: 'labels'
        },
        aimsAndHobbies: {
          auto: 'labels'
        },
        healthAndWellness: {
          auto: 'labels'
        },
        relationship: {
          auto: 'labels'
        },
        financial: {
          auto: 'labels'
        },
        environment: {
          auto: 'labels'
        },
        spirituality: {
          auto: 'labels'
        }
      }
    }
  },
  5: {
    type: t.struct({
      selfCareerYear1: OneToTenScale,
      selfAimsAndHobbiesYear1: OneToTenScale,
      selfHealthAndWellnessYear1: OneToTenScale,
      selfRelationshipYear1: OneToTenScale,
      selfFinancialYear1: OneToTenScale,
      selfEnvironmentYear1: OneToTenScale,
      selfSpiritualityYear1: OneToTenScale,
      selfCareerYear2: OneToTenScale,
      selfAimsAndHobbiesYear2: OneToTenScale,
      selfHealthAndWellnessYear2: OneToTenScale,
      selfRelationshipYear2: OneToTenScale,
      selfFinancialYear2: OneToTenScale,
      selfEnvironmentYear2: OneToTenScale,
      selfSpiritualityYear2: OneToTenScale,
      selfCareerYear3: OneToTenScale,
      selfAimsAndHobbiesYear3: OneToTenScale,
      selfHealthAndWellnessYear3: OneToTenScale,
      selfRelationshipYear3: OneToTenScale,
      selfFinancialYear3: OneToTenScale,
      selfEnvironmentYear3: OneToTenScale,
      selfSpiritualityYear3: OneToTenScale,
      selfCareerYear4: OneToTenScale,
      selfAimsAndHobbiesYear4: OneToTenScale,
      selfHealthAndWellnessYear4: OneToTenScale,
      selfRelationshipYear4: OneToTenScale,
      selfFinancialYear4: OneToTenScale,
      selfEnvironmentYear4: OneToTenScale,
      selfSpiritualityYear4: OneToTenScale,
      selfCareerYear5: OneToTenScale,
      selfAimsAndHobbiesYear5: OneToTenScale,
      selfHealthAndWellnessYear5: OneToTenScale,
      selfRelationshipYear5: OneToTenScale,
      selfFinancialYear5: OneToTenScale,
      selfEnvironmentYear5: OneToTenScale,
      selfSpiritualityYear5: OneToTenScale,
      selfCareerOverall: OverallScore,
      selfAimsAndHobbiesOverall: OverallScore,
      selfHealthAndWellnessOverall: OverallScore,
      selfRelationshipOverall: OverallScore,
      selfFinancialOverall: OverallScore,
      selfEnvironmentOverall: OverallScore,
      selfSpiritualityOverall: OverallScore
    }),
    options: {
      label:
        'Give yourself a final evaluation for each of the past 5 Years, as well as an overall 5-Year Score (1-10 score per year per Life Category for a total maximum high score of 50/50).',
      fields: {
        selfCareerYear1: {
          label: 'Career(Year 1)'
        },
        selfAimsAndHobbiesYear1: {
          label: 'Aims and Hobbies(Year 1)'
        },
        selfHealthAndWellnessYear1: {
          label: 'Health and Wellness(Year 1)'
        },
        selfRelationshipYear1: {
          label: 'Relationships(Year 1)'
        },
        selfFinancialYear1: {
          label: 'Financial(Year 1)'
        },
        selfEnvironmentYear1: {
          label: 'Environment(Year 1)'
        },
        selfSpiritualityYear1: {
          label: 'Spirituality(Year 1)'
        },
        selfCareerYear2: {
          label: 'Career(Year 2)'
        },
        selfAimsAndHobbiesYear2: {
          label: 'Aims and Hobbies(Year 2)'
        },
        selfHealthAndWellnessYear2: {
          label: 'Health and Wellness(Year 2)'
        },
        selfRelationshipYear2: {
          label: 'Relationships(Year 2)'
        },
        selfFinancialear2: {
          label: 'Financial(Year 2)'
        },
        selfEnvironmentYear2: {
          label: 'Environment(Year 2)'
        },
        selfSpiritualityYear2: {
          label: 'Spirituality(Year 2)'
        },
        selfCareerYear3: {
          label: 'Career(Year 3)'
        },
        selfAimsAndHobbiesYear3: {
          label: 'Aims and Hobbies(Year 3)'
        },
        selfHealthAndWellnessYear3: {
          label: 'Health and Wellness(Year 3)'
        },
        selfRelationshipYear3: {
          label: 'Relationships(Year 3)'
        },
        selfFinancialear3: {
          label: 'Financial(Year 3)'
        },
        selfEnvironmentYear3: {
          label: 'Environment(Year 3)'
        },
        selfSpiritualityYear3: {
          label: 'Spirituality(Year 3)'
        },
        selfCareerYear4: {
          label: 'Career(Year 4)'
        },
        selfAimsAndHobbiesYear4: {
          label: 'Aims and Hobbies(Year 4)'
        },
        selfHealthAndWellnessYear4: {
          label: 'Health and Wellness(Year 4)'
        },
        selfRelationshipYear4: {
          label: 'Relationships(Year 4)'
        },
        selfFinancialear4: {
          label: 'Financial(Year 4)'
        },
        selfEnvironmentYear4: {
          label: 'Environment(Year 4)'
        },
        selfSpiritualityYear4: {
          label: 'Spirituality(Year 4)'
        },
        selfCareerYear5: {
          label: 'Career(Year 5)'
        },
        selfAimsAndHobbiesYear5: {
          label: 'Aims and Hobbies(Year 5)'
        },
        selfHealthAndWellnessYear5: {
          label: 'Health and Wellness(Year 5)'
        },
        selfRelationshipYear5: {
          label: 'Relationships(Year 5)'
        },
        selfFinancialear5: {
          label: 'Financial(Year 5)'
        },
        selfEnvironmentYear5: {
          label: 'Environment(Year 5)'
        },
        selfSpiritualityYear5: {
          label: 'Spirituality(Year 5)'
        },
        selfCareerOverall: {
          labels: 'auto',
          error: 'Add up your five year career score'
        },
        selfAimsAndHobbiesOverall: {
          label: 'Personality & Hobbies Overall',
          error: 'Add up your five year personality & hobbies score'
        },
        selfHealthAndWellnessOverall: {
          label: 'Health And Wellness Overall',
          error: 'Add up your five year health score'
        },
        selfRelationshipOverall: {
          label: 'Relationships Overall',
          error: 'Add up your five year relationship score'
        },
        selfFinancialOverall: {
          label: 'Financial Overall',
          error: 'Add up your five year financial score'
        },
        selfEnvironmentOverall: {
          label: 'P & E Overall',
          error: 'Add up your five year P & E score'
        },
        selfSpiritualityOverall: {
          label: 'Spirituality Overall',
          error: 'Add up your five year spirituality score'
        }
      }
    }
  },
  6: {
    type: t.struct({
      otherCareerYear1: OneToTenScale,
      otherAimsAndHobbiesYear1: OneToTenScale,
      otherHealthAndWellnessYear1: OneToTenScale,
      otherRelationshipYear1: OneToTenScale,
      otherFinancialYear1: OneToTenScale,
      otherEnvironmentYear1: OneToTenScale,
      otherSpiritualityYear1: OneToTenScale,
      otherCareerYear2: OneToTenScale,
      otherAimsAndHobbiesYear2: OneToTenScale,
      otherHealthAndWellnessYear2: OneToTenScale,
      otherRelationshipYear2: OneToTenScale,
      otherFinancialYear2: OneToTenScale,
      otherEnvironmentYear2: OneToTenScale,
      otherSpiritualityYear2: OneToTenScale,
      otherCareerYear3: OneToTenScale,
      otherAimsAndHobbiesYear3: OneToTenScale,
      otherHealthAndWellnessYear3: OneToTenScale,
      otherRelationshipYear3: OneToTenScale,
      otherFinancialYear3: OneToTenScale,
      otherEnvironmentYear3: OneToTenScale,
      otherSpiritualityYear3: OneToTenScale,
      otherCareerYear4: OneToTenScale,
      otherAimsAndHobbiesYear4: OneToTenScale,
      otherHealthAndWellnessYear4: OneToTenScale,
      otherRelationshipYear4: OneToTenScale,
      otherFinancialYear4: OneToTenScale,
      otherEnvironmentYear4: OneToTenScale,
      otherSpiritualityYear4: OneToTenScale,
      otherCareerYear5: OneToTenScale,
      otherAimsAndHobbiesYear5: OneToTenScale,
      otherHealthAndWellnessYear5: OneToTenScale,
      otherRelationshipYear5: OneToTenScale,
      otherFinancialYear5: OneToTenScale,
      otherEnvironmentYear5: OneToTenScale,
      otherSpiritualityYear5: OneToTenScale,
      otherCareerOverall: OverallScore,
      otherAimsAndHobbiesOverall: OverallScore,
      otherHealthAndWellnessOverall: OverallScore,
      otherRelationshipOverall: OverallScore,
      otherFinancialOverall: OverallScore,
      otherEnvironmentOverall: OverallScore,
      otherSpiritualityOverall: OverallScore
    }),
    options: {
      label:
        'Have one other person(per Area) - be it a family member or friend, and preferably one of your CEO of Me Board Members - give you a Score for the past 5 years(on a 1-10 scale), to arrive at an overall 5 year score for each of the 7 assessment areas. Would you like to engage someone to help you do this?',
      fields: {
        otherCareerYear1: {
          label: 'Career(Year 1)'
        },
        otherAimsAndHobbiesYear1: {
          label: 'Aims and Hobbies(Year 1)'
        },
        otherHealthAndWellnessYear1: {
          label: 'Health and Wellness(Year 1)'
        },
        otherRelationshipYear1: {
          label: 'Relationships(Year 1)'
        },
        otherFinancialYear1: {
          label: 'Financial(Year 1)'
        },
        otherEnvironmentYear1: {
          label: 'Environment(Year 1)'
        },
        otherSpiritualityYear1: {
          label: 'Spirituality(Year 1)'
        },
        otherCareerYear2: {
          label: 'Career(Year 2)'
        },
        otherAimsAndHobbiesYear2: {
          label: 'Aims and Hobbies(Year 2)'
        },
        otherHealthAndWellnessYear2: {
          label: 'Health and Wellness(Year 2)'
        },
        otherRelationshipYear2: {
          label: 'Relationships(Year 2)'
        },
        otherFinancialYear2: {
          label: 'Financial(Year 2)'
        },
        otherEnvironmentYear2: {
          label: 'Environment(Year 2)'
        },
        otherSpiritualityYear2: {
          label: 'Spirituality(Year 2)'
        },
        otherCareerYear3: {
          label: 'Career(Year 3)'
        },
        otherAimsAndHobbiesYear3: {
          label: 'Aims and Hobbies(Year 3)'
        },
        otherHealthAndWellnessYear3: {
          label: 'Health and Wellness(Year 3)'
        },
        otherRelationshipYear3: {
          label: 'Relationships(Year 3)'
        },
        otherFinancialYear3: {
          label: 'Financial(Year 3)'
        },
        otherEnvironmentYear3: {
          label: 'Environment(Year 3)'
        },
        otherSpiritualityYear3: {
          label: 'Spirituality(Year 3)'
        },
        otherCareerYear4: {
          label: 'Career(Year 4)'
        },
        otherAimsAndHobbiesYear4: {
          label: 'Aims and Hobbies(Year 4)'
        },
        otherHealthAndWellnessYear4: {
          label: 'Health and Wellness(Year 4)'
        },
        otherRelationshipYear4: {
          label: 'Relationships(Year 4)'
        },
        otherFinancialYear4: {
          label: 'Financial(Year 4)'
        },
        otherEnvironmentYear4: {
          label: 'Environment(Year 4)'
        },
        otherSpiritualityYear4: {
          label: 'Spirituality(Year 4)'
        },
        otherCareerYear5: {
          label: 'Career(Year 5)'
        },
        otherAimsAndHobbiesYear5: {
          label: 'Aims and Hobbies(Year 5)'
        },
        otherHealthAndWellnessYear5: {
          label: 'Health and Wellness(Year 5)'
        },
        otherRelationshipYear5: {
          label: 'Relationships(Year 5)'
        },
        otherFinancialYear5: {
          label: 'Financial(Year 5)'
        },
        otherEnvironmentYear5: {
          label: 'Environment(Year 5)'
        },
        otherSpiritualityYear5: {
          label: 'Spirituality(Year 5)'
        },
        otherCareerOverall: {
          labels: 'auto'
        },
        otherAimsAndHobbiesOverall: {
          labels: 'auto'
        },
        otherHealthAndWellnessOverall: {
          labels: 'auto'
        },
        otherRelationshipOverall: {
          labels: 'auto'
        },
        financialOverall: {
          labels: 'auto'
        },
        otherEnvironmentOverall: {
          labels: 'auto'
        },
        otherSpiritualityOverall: {
          labels: 'auto'
        }
      }
    }
  }
}
