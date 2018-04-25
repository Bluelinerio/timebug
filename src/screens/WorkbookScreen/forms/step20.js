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
      careerYear1: OneToTenScale,
      aimsAndHobbiesYear1: OneToTenScale,
      healthAndWellnessYear1: OneToTenScale,
      relationshipYear1: OneToTenScale,
      financialYear1: OneToTenScale,
      environmentYear1: OneToTenScale,
      spiritualityYear1: OneToTenScale,
      careerYear2: OneToTenScale,
      aimsAndHobbiesYear2: OneToTenScale,
      healthAndWellnessYear2: OneToTenScale,
      relationshipYear2: OneToTenScale,
      financialYear2: OneToTenScale,
      environmentYear2: OneToTenScale,
      spiritualityYear2: OneToTenScale,
      careerYear3: OneToTenScale,
      aimsAndHobbiesYear3: OneToTenScale,
      healthAndWellnessYear3: OneToTenScale,
      relationshipYear3: OneToTenScale,
      financialYear3: OneToTenScale,
      environmentYear3: OneToTenScale,
      spiritualityYear3: OneToTenScale,
      careerYear4: OneToTenScale,
      aimsAndHobbiesYear4: OneToTenScale,
      healthAndWellnessYear4: OneToTenScale,
      relationshipYear4: OneToTenScale,
      financialYear4: OneToTenScale,
      environmentYear4: OneToTenScale,
      spiritualityYear4: OneToTenScale,
      careerYear5: OneToTenScale,
      aimsAndHobbiesYear5: OneToTenScale,
      healthAndWellnessYear5: OneToTenScale,
      relationshipYear5: OneToTenScale,
      financialYear5: OneToTenScale,
      environmentYear5: OneToTenScale,
      spiritualityYear5: OneToTenScale,
      careerOverall: OverallScore,
      aimsAndHobbiesOverall: OverallScore,
      healthAndWellnessOverall: OverallScore,
      relationshipOverall: OverallScore,
      financialOverall: OverallScore,
      environmentOverall: OverallScore,
      spiritualityOverall: OverallScore
    }),
    options: {
      label:
        'Give yourself a final evaluation for each of the past 5 Years, as well as an overall 5-Year Score (1-10 score per year per Life Category for a total maximum high score of 50/50).',
      fields: {
        careerYear1: {
          label: 'Career(Year 1)'
        },
        aimsAndHobbiesYear1: {
          label: 'Aims and Hobbies(Year 1)'
        },
        healthAndWellnessYear1: {
          label: 'Health and Wellness(Year 1)'
        },
        relationshipYear1: {
          label: 'Relationships(Year 1)'
        },
        financialYear1: {
          label: 'Financial(Year 1)'
        },
        environmentYear1: {
          label: 'Environment(Year 1)'
        },
        spiritualityYear1: {
          label: 'Spirituality(Year 1)'
        },
        careerYear2: {
          label: 'Career(Year 2)'
        },
        aimsAndHobbiesYear2: {
          label: 'Aims and Hobbies(Year 2)'
        },
        healthAndWellnessYear2: {
          label: 'Health and Wellness(Year 2)'
        },
        relationshipYear2: {
          label: 'Relationships(Year 2)'
        },
        financialYear2: {
          label: 'Financial(Year 2)'
        },
        environmentYear2: {
          label: 'Environment(Year 2)'
        },
        spiritualityYear2: {
          label: 'Spirituality(Year 2)'
        },
        careerYear3: {
          label: 'Career(Year 3)'
        },
        aimsAndHobbiesYear3: {
          label: 'Aims and Hobbies(Year 3)'
        },
        healthAndWellnessYear3: {
          label: 'Health and Wellness(Year 3)'
        },
        relationshipYear3: {
          label: 'Relationships(Year 3)'
        },
        financialYear3: {
          label: 'Financial(Year 3)'
        },
        environmentYear3: {
          label: 'Environment(Year 3)'
        },
        spiritualityYear3: {
          label: 'Spirituality(Year 3)'
        },
        careerYear4: {
          label: 'Career(Year 4)'
        },
        aimsAndHobbiesYear4: {
          label: 'Aims and Hobbies(Year 4)'
        },
        healthAndWellnessYear4: {
          label: 'Health and Wellness(Year 4)'
        },
        relationshipYear4: {
          label: 'Relationships(Year 4)'
        },
        financialYear4: {
          label: 'Financial(Year 4)'
        },
        environmentYear4: {
          label: 'Environment(Year 4)'
        },
        spiritualityYear4: {
          label: 'Spirituality(Year 4)'
        },
        careerYear5: {
          label: 'Career(Year 5)'
        },
        aimsAndHobbiesYear5: {
          label: 'Aims and Hobbies(Year 5)'
        },
        healthAndWellnessYear5: {
          label: 'Health and Wellness(Year 5)'
        },
        relationshipYear5: {
          label: 'Relationships(Year 5)'
        },
        financialYear5: {
          label: 'Financial(Year 5)'
        },
        environmentYear5: {
          label: 'Environment(Year 5)'
        },
        spiritualityYear5: {
          label: 'Spirituality(Year 5)'
        },
        careerOverall: {
          labels: 'auto',
          error: 'Add up your five year career score'
        },
        aimsAndHobbiesOverall: {
          label: 'Personality & Hobbies Overall',
          error: 'Add up your five year personality & hobbies score'
        },
        healthAndWellnessOverall: {
          label: 'Health And Wellness Overall',
          error: 'Add up your five year health score'
        },
        relationshipOverall: {
          label: 'Relationships Overall',
          error: 'Add up your five year relationship score'
        },
        financialOverall: {
          label: 'Financial Overall',
          error: 'Add up your five year financial score'
        },
        environmentOverall: {
          label: 'P & E Overall',
          error: 'Add up your five year P & E score'
        },
        spiritualityOverall: {
          label: 'Spirituality Overall',
          error: 'Add up your five year spirituality score'
        }
      }
    }
  },
  6: {
    type: t.struct({
      careerYear1: OneToTenScale,
      aimsAndHobbiesYear1: OneToTenScale,
      healthAndWellnessYear1: OneToTenScale,
      relationshipYear1: OneToTenScale,
      financialYear1: OneToTenScale,
      environmentYear1: OneToTenScale,
      spiritualityYear1: OneToTenScale,
      careerYear2: OneToTenScale,
      aimsAndHobbiesYear2: OneToTenScale,
      healthAndWellnessYear2: OneToTenScale,
      relationshipYear2: OneToTenScale,
      financialYear2: OneToTenScale,
      environmentYear2: OneToTenScale,
      spiritualityYear2: OneToTenScale,
      careerYear3: OneToTenScale,
      aimsAndHobbiesYear3: OneToTenScale,
      healthAndWellnessYear3: OneToTenScale,
      relationshipYear3: OneToTenScale,
      financialYear3: OneToTenScale,
      environmentYear3: OneToTenScale,
      spiritualityYear3: OneToTenScale,
      careerYear4: OneToTenScale,
      aimsAndHobbiesYear4: OneToTenScale,
      healthAndWellnessYear4: OneToTenScale,
      relationshipYear4: OneToTenScale,
      financialYear4: OneToTenScale,
      environmentYear4: OneToTenScale,
      spiritualityYear4: OneToTenScale,
      careerYear5: OneToTenScale,
      aimsAndHobbiesYear5: OneToTenScale,
      healthAndWellnessYear5: OneToTenScale,
      relationshipYear5: OneToTenScale,
      financialYear5: OneToTenScale,
      environmentYear5: OneToTenScale,
      spiritualityYear5: OneToTenScale,
      careerOverall: OverallScore,
      aimsAndHobbiesOverall: OverallScore,
      healthAndWellnessOverall: OverallScore,
      relationshipOverall: OverallScore,
      financialOverall: OverallScore,
      environmentOverall: OverallScore,
      spiritualityOverall: OverallScore
    }),
    options: {
      label:
        'Have one other person(per Area) - be it a family member or friend, and preferably one of your CEO of Me Board Members - give you a Score for the past 5 years(on a 1-10 scale), to arrive at an overall 5 year score for each of the 7 assessment areas. Would you like to engage someone to help you do this?',
      fields: {
        careerYear1: {
          label: 'Career(Year 1)'
        },
        aimsAndHobbiesYear1: {
          label: 'Aims and Hobbies(Year 1)'
        },
        healthAndWellnessYear1: {
          label: 'Health and Wellness(Year 1)'
        },
        relationshipYear1: {
          label: 'Relationships(Year 1)'
        },
        financialYear1: {
          label: 'Financial(Year 1)'
        },
        environmentYear1: {
          label: 'Environment(Year 1)'
        },
        spiritualityYear1: {
          label: 'Spirituality(Year 1)'
        },
        careerYear2: {
          label: 'Career(Year 2)'
        },
        aimsAndHobbiesYear2: {
          label: 'Aims and Hobbies(Year 2)'
        },
        healthAndWellnessYear2: {
          label: 'Health and Wellness(Year 2)'
        },
        relationshipYear2: {
          label: 'Relationships(Year 2)'
        },
        financialYear2: {
          label: 'Financial(Year 2)'
        },
        environmentYear2: {
          label: 'Environment(Year 2)'
        },
        spiritualityYear2: {
          label: 'Spirituality(Year 2)'
        },
        careerYear3: {
          label: 'Career(Year 3)'
        },
        aimsAndHobbiesYear3: {
          label: 'Aims and Hobbies(Year 3)'
        },
        healthAndWellnessYear3: {
          label: 'Health and Wellness(Year 3)'
        },
        relationshipYear3: {
          label: 'Relationships(Year 3)'
        },
        financialYear3: {
          label: 'Financial(Year 3)'
        },
        environmentYear3: {
          label: 'Environment(Year 3)'
        },
        spiritualityYear3: {
          label: 'Spirituality(Year 3)'
        },
        careerYear4: {
          label: 'Career(Year 4)'
        },
        aimsAndHobbiesYear4: {
          label: 'Aims and Hobbies(Year 4)'
        },
        healthAndWellnessYear4: {
          label: 'Health and Wellness(Year 4)'
        },
        relationshipYear4: {
          label: 'Relationships(Year 4)'
        },
        financialYear4: {
          label: 'Financial(Year 4)'
        },
        environmentYear4: {
          label: 'Environment(Year 4)'
        },
        spiritualityYear4: {
          label: 'Spirituality(Year 4)'
        },
        careerYear5: {
          label: 'Career(Year 5)'
        },
        aimsAndHobbiesYear5: {
          label: 'Aims and Hobbies(Year 5)'
        },
        healthAndWellnessYear5: {
          label: 'Health and Wellness(Year 5)'
        },
        relationshipYear5: {
          label: 'Relationships(Year 5)'
        },
        financialYear5: {
          label: 'Financial(Year 5)'
        },
        environmentYear5: {
          label: 'Environment(Year 5)'
        },
        spiritualityYear5: {
          label: 'Spirituality(Year 5)'
        },
        careerOverall: {
          labels: 'auto'
        },
        aimsAndHobbiesOverall: {
          labels: 'auto'
        },
        healthAndWellnessOverall: {
          labels: 'auto'
        },
        relationshipOverall: {
          labels: 'auto'
        },
        financialOverall: {
          labels: 'auto'
        },
        environmentOverall: {
          labels: 'auto'
        },
        spiritualityOverall: {
          labels: 'auto'
        }
      }
    }
  }
}
