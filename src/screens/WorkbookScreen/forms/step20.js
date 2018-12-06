import t from '../../../forms/components';
import { TimeSpentProgress, OneToTenScale, OverallScore } from './contents';

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      nextFiveYearsTopGoals: t.list(
        t.struct({
          goal: t.String,
          newInsights: t.String,
          specificChanges: t.String,
        })
      ),
    }),
    options: {
      label:
        'Reflect on your Step 11 entry (The 5-Year Life Report) and make refinements or additional notes. Be more technical and detailed, especially about how you spent your Time & Energy.',
      fields: {
        id: {
          hidden: true,
        },
        nextFiveYearsTopGoals: {
          item: {
            auto: 'none',
            fields: {
              goal: {
                auto: 'labels',
              },
              newInsights: {
                auto: 'labels',
              },
              specificChanges: {
                label: 'Specific changes to make',
              },
            },
          },
        },
      },
    },
    value: {
      fields: {
        id: 'step20+v0.0.0.1',
      },
    },
  },
  2: {
    type: t.struct({
      pillarsOfLifeBreakdown: t.String,
      nextFiveYearsThingsDoLess: TimeSpentProgress,
      nextFiveYearsThingsDoMore: TimeSpentProgress,
    }),
    options: {
      label:
        'Reflect back on your Step 2 entry (More or Less Time) and refine your vision on how you want to spend your time over the next 5 years.',

      fields: {
        pillarsOfLifeBreakdown: {
          label: 'Has anything changed with your Pillars of Life breakdown?',
        },
        nextFiveYearsThingsDoLess: {
          label:
            'Has anything changed with your 3 things that you want to DO LESS of in general?',
          help: 'i.e. "Watching TV"',
        },
        nextFiveYearsThingsDoMore: {
          label:
            'Has anything changed with your 3 things that you want to DO MORE of in general?',
          help: 'i.e. "Exercising"',
        },
      },
    },
  },
  3: {
    type: t.struct({
      pastPillarImportance: t.struct({
        pastPillarImportanceCareer: OneToTenScale,
        pastPillarImportanceAimsAndHobbies: OneToTenScale,
        pastPillarImportanceHealthAndWellness: OneToTenScale,
        pastPillarImportanceFinancial: OneToTenScale,
        pastPillarImportanceRelationship: OneToTenScale,
        pastPillarImportanceEnvironment: OneToTenScale,
        pastPillarImportanceSpirituality: OneToTenScale,
      }),
    }),
    options: {
      label:
        'Rank each of the 7 Pillars of Life in order of importance to you over the past 5 years.',
      fields: {
        pastPillarImportance: {
          fields: {
            pastPillarImportanceCareer: {
              label: 'Career',
              help: '10= Very Important and 1= Not important at all',
            },
            pastPillarImportanceAimsAndHobbies: {
              label: 'Aims and Hobbies',
              help: '10= Very Important and 1= Not important at all',
            },
            pastPillarImportanceHealthAndWellness: {
              label: 'Health and Wellness',
              help: '10= Very Important and 1= Not important at all',
            },
            pastPillarImportanceFinancial: {
              label: 'Financial',
              help: '10= Very Important and 1= Not important at all',
            },
            pastPillarImportanceRelationship: {
              label: 'Relationships',
              help: '10= Very Important and 1= Not important at all',
            },
            pastPillarImportanceEnvironment: {
              label: 'Environment',
              help: '10= Very Important and 1= Not important at all',
            },
            pastPillarImportanceSpirituality: {
              label: 'Spirituality',
              help: '10= Very Important and 1= Not important at all',
            },
          },
        },
      },
    },
  },
  4: {
    type: t.struct({
      careerEnergyMotivationLevel: t.Number,
      aimsAndHobbiesEnergyMotivationLevel: t.Number,
      healthAndWellnessEnergyMotivationLevel: t.Number,
      relationshipEnergyMotivationLevel: t.Number,
      financialEnergyMotivationLevel: t.Number,
      environmentEnergyMotivationLevel: t.Number,
      spiritualityEnergyMotivationLevel: t.Number,
    }),
    options: {
      label: 'How would you slice up each in terms of energy level?',

      fields: {
        careerEnergyMotivationLevel: {
          label: 'Career',
        },
        aimsAndHobbiesEnergyMotivationLevel: {
          label: 'Aims and Hobbies',
        },
        healthAndWellnessEnergyMotivationLevel: {
          label: 'Health and Wellness',
        },
        relationshipEnergyMotivationLevel: {
          label: 'Relationships',
        },
        financialEnergyMotivationLevel: {
          label: 'Financial',
        },
        environmentEnergyMotivationLevel: {
          label: 'Environment',
        },
        spiritualityEnergyMotivationLevel: {
          label: 'Spirituality',
        },
      },
    },
  },
  5: {
    type: t.struct({
      selfCareerYear1Rating: OneToTenScale,
      selfAimsAndHobbiesYear1Rating: OneToTenScale,
      selfHealthAndWellnessYear1Rating: OneToTenScale,
      selfRelationshipYear1Rating: OneToTenScale,
      selfFinancialYear1Rating: OneToTenScale,
      selfEnvironmentYear1Rating: OneToTenScale,
      selfSpiritualityYear1Rating: OneToTenScale,
      selfCareerYear2Rating: OneToTenScale,
      selfAimsAndHobbiesYear2Rating: OneToTenScale,
      selfHealthAndWellnessYear2Rating: OneToTenScale,
      selfRelationshipYear2Rating: OneToTenScale,
      selfFinancialYear2Rating: OneToTenScale,
      selfEnvironmentYear2Rating: OneToTenScale,
      selfSpiritualityYear2Rating: OneToTenScale,
      selfCareerYear3Rating: OneToTenScale,
      selfAimsAndHobbiesYear3Rating: OneToTenScale,
      selfHealthAndWellnessYear3Rating: OneToTenScale,
      selfRelationshipYear3Rating: OneToTenScale,
      selfFinancialYear3Rating: OneToTenScale,
      selfEnvironmentYear3Rating: OneToTenScale,
      selfSpiritualityYear3Rating: OneToTenScale,
      selfCareerYear4Rating: OneToTenScale,
      selfAimsAndHobbiesYear4Rating: OneToTenScale,
      selfHealthAndWellnessYear4Rating: OneToTenScale,
      selfRelationshipYear4Rating: OneToTenScale,
      selfFinancialYear4Rating: OneToTenScale,
      selfEnvironmentYear4Rating: OneToTenScale,
      selfSpiritualityYear4Rating: OneToTenScale,
      selfCareerYear5Rating: OneToTenScale,
      selfAimsAndHobbiesYear5Rating: OneToTenScale,
      selfHealthAndWellnessYear5Rating: OneToTenScale,
      selfRelationshipYear5Rating: OneToTenScale,
      selfFinancialYear5Rating: OneToTenScale,
      selfEnvironmentYear5Rating: OneToTenScale,
      selfSpiritualityYear5Rating: OneToTenScale,
      selfCareerOverallRating: OverallScore,
      selfAimsAndHobbiesOverallRating: OverallScore,
      selfHealthAndWellnessOverallRating: OverallScore,
      selfRelationshipOverallRating: OverallScore,
      selfFinancialOverallRating: OverallScore,
      selfEnvironmentOverallRating: OverallScore,
      selfSpiritualityOverallRating: OverallScore,
    }),
    options: {
      label:
        'What is your final evaluation for each of the past 5 Years? Give yourself a 5-Year Score (1-10 score per year, for a total maximum high score of 50/50, across each Pillar of Life).',
      fields: {
        selfCareerYear1Rating: {
          label: 'Career(Year 1)',
        },
        selfAimsAndHobbiesYear1Rating: {
          label: 'Aims and Hobbies(Year 1)',
        },
        selfHealthAndWellnessYear1Rating: {
          label: 'Health and Wellness(Year 1)',
        },
        selfRelationshipYear1Rating: {
          label: 'Relationships(Year 1)',
        },
        selfFinancialYear1Rating: {
          label: 'Financial(Year 1)',
        },
        selfEnvironmentYear1Rating: {
          label: 'Environment(Year 1)',
        },
        selfSpiritualityYear1Rating: {
          label: 'Spirituality(Year 1)',
        },
        selfCareerYear2Rating: {
          label: 'Career(Year 2)',
        },
        selfAimsAndHobbiesYear2Rating: {
          label: 'Aims and Hobbies(Year 2)',
        },
        selfHealthAndWellnessYear2Rating: {
          label: 'Health and Wellness(Year 2)',
        },
        selfRelationshipYear2Rating: {
          label: 'Relationships(Year 2)',
        },
        selfFinancialYear2Rating: {
          label: 'Financial(Year 2)',
        },
        selfEnvironmentYear2Rating: {
          label: 'Environment(Year 2)',
        },
        selfSpiritualityYear2Rating: {
          label: 'Spirituality(Year 2)',
        },
        selfCareerYear3Rating: {
          label: 'Career(Year 3)',
        },
        selfAimsAndHobbiesYear3Rating: {
          label: 'Aims and Hobbies(Year 3)',
        },
        selfHealthAndWellnessYear3Rating: {
          label: 'Health and Wellness(Year 3)',
        },
        selfRelationshipYear3Rating: {
          label: 'Relationships(Year 3)',
        },
        selfFinancialYear3Rating: {
          label: 'Financial(Year 3)',
        },
        selfEnvironmentYear3Rating: {
          label: 'Environment(Year 3)',
        },
        selfSpiritualityYear3Rating: {
          label: 'Spirituality(Year 3)',
        },
        selfCareerYear4Rating: {
          label: 'Career(Year 4)',
        },
        selfAimsAndHobbiesYear4Rating: {
          label: 'Aims and Hobbies(Year 4)',
        },
        selfHealthAndWellnessYear4Rating: {
          label: 'Health and Wellness(Year 4)',
        },
        selfRelationshipYear4Rating: {
          label: 'Relationships(Year 4)',
        },
        selfFinancialYear4Rating: {
          label: 'Financial(Year 4)',
        },
        selfEnvironmentYear4Rating: {
          label: 'Environment(Year 4)',
        },
        selfSpiritualityYear4Rating: {
          label: 'Spirituality(Year 4)',
        },
        selfCareerYear5Rating: {
          label: 'Career(Year 5)',
        },
        selfAimsAndHobbiesYear5Rating: {
          label: 'Aims and Hobbies(Year 5)',
        },
        selfHealthAndWellnessYear5Rating: {
          label: 'Health and Wellness(Year 5)',
        },
        selfRelationshipYear5Rating: {
          label: 'Relationships(Year 5)',
        },
        selfFinancialYear5Rating: {
          label: 'Financial(Year 5)',
        },
        selfEnvironmentYear5Rating: {
          label: 'Environment(Year 5)',
        },
        selfSpiritualityYear5Rating: {
          label: 'Spirituality(Year 5)',
        },
        selfCareerOverallRating: {
          label: 'Career Overall',
          error: 'Add up your five year career score',
        },
        selfAimsAndHobbiesOverallRating: {
          label: 'Personality & Hobbies Overall',
          error: 'Add up your five year personality & hobbies score',
        },
        selfHealthAndWellnessOverallRating: {
          label: 'Health And Wellness Overall',
          error: 'Add up your five year health score',
        },
        selfRelationshipOverallRating: {
          label: 'Relationships Overall',
          error: 'Add up your five year relationship score',
        },
        selfFinancialOverallRating: {
          label: 'Financial Overall',
          error: 'Add up your five year financial score',
        },
        selfEnvironmentOverallRating: {
          label: 'P & E Overall',
          error: 'Add up your five year P & E score',
        },
        selfSpiritualityOverallRating: {
          label: 'Spirituality Overall',
          error: 'Add up your five year spirituality score',
        },
      },
    },
  },
  6: {
    type: t.struct({
      otherCareerYear1Rating: OneToTenScale,
      otherAimsAndHobbiesYear1Rating: OneToTenScale,
      otherHealthAndWellnessYear1Rating: OneToTenScale,
      otherRelationshipYear1Rating: OneToTenScale,
      otherFinancialYear1Rating: OneToTenScale,
      otherEnvironmentYear1Rating: OneToTenScale,
      otherSpiritualityYear1Rating: OneToTenScale,
      otherCareerYear2Rating: OneToTenScale,
      otherAimsAndHobbiesYear2Rating: OneToTenScale,
      otherHealthAndWellnessYear2Rating: OneToTenScale,
      otherRelationshipYear2Rating: OneToTenScale,
      otherFinancialYear2Rating: OneToTenScale,
      otherEnvironmentYear2Rating: OneToTenScale,
      otherSpiritualityYear2Rating: OneToTenScale,
      otherCareerYear3Rating: OneToTenScale,
      otherAimsAndHobbiesYear3Rating: OneToTenScale,
      otherHealthAndWellnessYear3Rating: OneToTenScale,
      otherRelationshipYear3Rating: OneToTenScale,
      otherFinancialYear3Rating: OneToTenScale,
      otherEnvironmentYear3Rating: OneToTenScale,
      otherSpiritualityYear3Rating: OneToTenScale,
      otherCareerYear4Rating: OneToTenScale,
      otherAimsAndHobbiesYear4Rating: OneToTenScale,
      otherHealthAndWellnessYear4Rating: OneToTenScale,
      otherRelationshipYear4Rating: OneToTenScale,
      otherFinancialYear4Rating: OneToTenScale,
      otherEnvironmentYear4Rating: OneToTenScale,
      otherSpiritualityYear4Rating: OneToTenScale,
      otherCareerYear5Rating: OneToTenScale,
      otherAimsAndHobbiesYear5Rating: OneToTenScale,
      otherHealthAndWellnessYear5Rating: OneToTenScale,
      otherRelationshipYear5Rating: OneToTenScale,
      otherFinancialYear5Rating: OneToTenScale,
      otherEnvironmentYear5Rating: OneToTenScale,
      otherSpiritualityYear5Rating: OneToTenScale,
      otherCareerOverallRating: OverallScore,
      otherAimsAndHobbiesOverallRating: OverallScore,
      otherHealthAndWellnessOverallRating: OverallScore,
      otherRelationshipOverallRating: OverallScore,
      otherFinancialOverallRating: OverallScore,
      otherEnvironmentOverallRating: OverallScore,
      otherSpiritualityOverallRating: OverallScore,
    }),
    options: {
      label:
        'Have one other person(per Area) - be it a family member or friend, and preferably one of your CEO of Me Board Members - give you a Score for the past 5 years(on a 1-10 scale), to arrive at an overall 5 year score for each of the 7 assessment areas. Would you like to engage someone to help you do this?',
      fields: {
        otherCareerYear1Rating: {
          label: 'Career(Year 1)',
        },
        otherAimsAndHobbiesYear1Rating: {
          label: 'Aims and Hobbies(Year 1)',
        },
        otherHealthAndWellnessYear1Rating: {
          label: 'Health and Wellness(Year 1)',
        },
        otherRelationshipYear1Rating: {
          label: 'Relationships(Year 1)',
        },
        otherFinancialYear1Rating: {
          label: 'Financial(Year 1)',
        },
        otherEnvironmentYear1Rating: {
          label: 'Environment(Year 1)',
        },
        otherSpiritualityYear1Rating: {
          label: 'Spirituality(Year 1)',
        },
        otherCareerYear2Rating: {
          label: 'Career(Year 2)',
        },
        otherAimsAndHobbiesYear2Rating: {
          label: 'Aims and Hobbies(Year 2)',
        },
        otherHealthAndWellnessYear2Rating: {
          label: 'Health and Wellness(Year 2)',
        },
        otherRelationshipYear2Rating: {
          label: 'Relationships(Year 2)',
        },
        otherFinancialYear2Rating: {
          label: 'Financial(Year 2)',
        },
        otherEnvironmentYear2Rating: {
          label: 'Environment(Year 2)',
        },
        otherSpiritualityYear2Rating: {
          label: 'Spirituality(Year 2)',
        },
        otherCareerYear3Rating: {
          label: 'Career(Year 3)',
        },
        otherAimsAndHobbiesYear3Rating: {
          label: 'Aims and Hobbies(Year 3)',
        },
        otherHealthAndWellnessYear3Rating: {
          label: 'Health and Wellness(Year 3)',
        },
        otherRelationshipYear3Rating: {
          label: 'Relationships(Year 3)',
        },
        otherFinancialYear3Rating: {
          label: 'Financial(Year 3)',
        },
        otherEnvironmentYear3Rating: {
          label: 'Environment(Year 3)',
        },
        otherSpiritualityYear3Rating: {
          label: 'Spirituality(Year 3)',
        },
        otherCareerYear4Rating: {
          label: 'Career(Year 4)',
        },
        otherAimsAndHobbiesYear4Rating: {
          label: 'Aims and Hobbies(Year 4)',
        },
        otherHealthAndWellnessYear4Rating: {
          label: 'Health and Wellness(Year 4)',
        },
        otherRelationshipYear4Rating: {
          label: 'Relationships(Year 4)',
        },
        otherFinancialYear4Rating: {
          label: 'Financial(Year 4)',
        },
        otherEnvironmentYear4Rating: {
          label: 'Environment(Year 4)',
        },
        otherSpiritualityYear4Rating: {
          label: 'Spirituality(Year 4)',
        },
        otherCareerYear5Rating: {
          label: 'Career(Year 5)',
        },
        otherAimsAndHobbiesYear5Rating: {
          label: 'Aims and Hobbies(Year 5)',
        },
        otherHealthAndWellnessYear5Rating: {
          label: 'Health and Wellness(Year 5)',
        },
        otherRelationshipYear5Rating: {
          label: 'Relationships(Year 5)',
        },
        otherFinancialYear5Rating: {
          label: 'Financial(Year 5)',
        },
        otherEnvironmentYear5Rating: {
          label: 'Environment(Year 5)',
        },
        otherSpiritualityYear5Rating: {
          label: 'Spirituality(Year 5)',
        },
        otherCareerOverallRating: {
          label: 'Career Overall',
        },
        otherAimsAndHobbiesOverallRating: {
          label: 'Aims And Hobbies Overall',
        },
        otherHealthAndWellnessOverallRating: {
          label: 'Health And Wellness Overall',
        },
        otherRelationshipOverallRating: {
          label: 'Relationships Overall',
        },
        otherFinancialOverallRating: {
          label: 'Fiancial Overall',
        },
        otherEnvironmentOverallRating: {
          label: 'Environment Overall',
        },
        otherSpiritualityOverallRating: {
          label: 'Spirituality Overall',
        },
      },
    },
  },
};
