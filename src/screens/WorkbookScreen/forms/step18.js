import t from '../components/templates';
import { OneToTenScale, CommonGoalOutcomes } from './contents';

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      enviromnmentAssessment: t.struct({
        changes: t.String,
        liveWith: t.String,
        trulyHappy: t.String
      })
    }),
    options: {
      label: 'Environment Assessment',
      fields: {
        id: {
          hidden: true
        },
        enviromnmentAssessment: {
          fields: {
            changes: {
              label:
                'What changes have taken place in your place and environment since Year 1?'
            },
            liveWith: {
              label:
                'Who do you live with right now, and how does that effect your lifestyle choices?.'
            },
            trulyHappy: {
              label:
                'Are you truly happy where you are or do you stay there because you are afraid of change? (or because this is all you’ve ever known)?'
            }
          }
        }
      }
    },
    value: {
      fields: {
        id: 'step18+v0.0.0.1'
      }
    }
  },
  2: {
    type: t.struct({
      doYouConnectToEnvironment: t.struct({
        connect: t.Boolean,
        likeMindedPeople: t.Boolean,
        climate: t.Boolean
      })
    }),
    options: {
      label: 'Environment Assessment',
      fields: {
        doYouConnectToEnvironment: {
          fields: {
            connect: {
              label:
                'Do you authentically connect to the culture in your town or city?'
            },
            likeMindedPeople: {
              label:
                'Are you surrounded by like minded people? Are your social needs met?'
            },
            climate: {
              label:
                'Do the climate elements(ie. humid, dry, rainy, etc) suit you physically and mentally)?'
            }
          }
        }
      }
    }
  },
  3: {
    type: t.struct({
      placeEnvironmentGoals: t.list(
        t.struct({
          goal: t.String,
          commonGoalOutcomes: CommonGoalOutcomes
        })
      )
    }),
    options: {
      label: 'What were your place and environment goals since Year 1? ',
      fields: {
        placeEnvironmentGoals: {
          item: {
            auto: 'none',
            fields: {
              goal: {
                label: 'Goal'
              },
              commonGoalOutcomes: {
                label: 'Goal Outcome',
                help: 'Classify your goal according to the 7 Goal Outcomes.'
              }
            }
          }
        }
      }
    }
  }
};
