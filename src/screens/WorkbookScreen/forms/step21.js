import t from '../components/templates';
import {
  PillarsOfLife,
  Strengths,
  PercentSelector,
  OneToTenScale
} from './contents';

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      areasOfGarden: t.list(
        t.struct({
          areaOfGarden: PillarsOfLife,
          selfInfluence: PercentSelector,
          otherInfluence: PercentSelector,
          nameOfOther: t.String
        })
      )
    }),
    options: {
      label: 'Imagine different areas of your garden.',

      fields: {
        id: {
          hidden: true
        },
        areasOfGarden: {
          item: {
            fields: {
              areaOfGarden: {
                auto: 'labels'
              },
              selfInfluence: {
                label:
                  'What percentage of the seeds in this garden were planted by you?'
              },
              otherInfluence: {
                label:
                  'What percentage of the seeds in this garden were planted by someone else?'
              },
              nameOfOther: {
                label:
                  'Who planted most of the seeds in your garden over the course of your life? '
              }
            }
          }
        }
      }
    },
    value: {
      fields: {
        id: 'step21+v0.0.0.2'
      }
    }
  },
  2: {
    type: t.struct({
      commitment: t.Boolean
    }),
    options: {
      label:
        'Are you committed to taking full ownership of your life garden going forward?',
      auto: 'none'
    }
  },
  3: {
    type: t.struct({
      careerBhagOne: t.String,
      careerBhagTwo: t.String,
      aimsAndHobbiesBhagOne: t.String,
      aimsAndHobbiesBhagTwo: t.String,
      healthBhagOne: t.String,
      healthBhagTwo: t.String,
      relationshipBhagOne: t.String,
      relationshipBhagTwo: t.String,
      financialBhagOne: t.String,
      financialBhagTwo: t.String,
      spiritualityBhagOne: t.String,
      spiritualityBHAG2: t.String,
      financesBhagOne: t.String,
      financesBhagTwo: t.String
    }),
    options: {
      label:
        "Reflecting on the 7 Self-assessments over Steps 13-19, list two Big Hairy Audacious Goals (BHAGs) that you'd like to plant for this next year."
    }
  },
  4: {
    type: t.struct({
      skills: t.list(
        t.struct({
          skill: t.String,
          proficiencyLevel: OneToTenScale,
          aspirationLevel: OneToTenScale,
          improvements: t.String
        })
      )
    }),
    options: {
      label:
        'Think about how strong your current tools(skills,approach,etc) are for tending to your garden - Strengths & Weaknesses from Day 3 is a useful review.',
      fields: {
        skills: {
          item: {
            fields: {
              skill: {
                label: 'Skill',
                error: 'Please select a Charachter Strength.'
              },
              proficiencyLevel: {
                label: 'Proficiency Level',
                error: 'Please select a value.',
                help: 'Using a 10pt Scale with 1=beginner to 10=master'
              },
              aspirationLevel: {
                label: 'Aspiration level in 2020',
                error: 'Please select a value.'
              },
              improvements: {
                label:
                  'What improvements needs to happen for you to reach your aspirational 2020 level?',
                error:
                  "Think about your past goals, things you'd like to do more and less of, etc..."
              }
            }
          }
        }
      }
    }
  }
};
