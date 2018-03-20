import t from '../components/templates';
import { OneToTenScale, CommonGoalOutcomes } from './contents';

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      changes: t.String,
      liveWith: t.String,
      trulyHappy: t.String
    }),
    options: {
      label: 'Environment Assessment',
      fields: {
        id: {
          hidden: true
        },
        changes: {
          label:
            'Name some changes that took place in your place and environment over the past 5 years? Did you move?'
        },
        liveWith: {
          label:
            'Who do you live with right now, and how does that effect your lifestyle choices?'
        },
        trulyHappy: {
          label:
            'Are you truly happy where you are or do you stay there because you are afraid of change? (or because this is all you’ve ever known)?'
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
      connect: t.Boolean,
      likeMindedPeople: t.Boolean,
      climate: t.Boolean
    }),
    options: {
      label: 'Environment Assessment',
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
  },
  3: {
    type: t.struct({
      goals: t.list(
        t.struct({
          goal: t.String,
          commonGoalOutcomes: CommonGoalOutcomes
        })
      )
    }),
    options: {
      label: 'What were your place and environment goals over the past 5 years?',
      fields: {
        goals: {
          item: {
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
