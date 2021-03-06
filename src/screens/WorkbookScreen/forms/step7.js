import t from '../components/templates';
import { CommonGoalOutcomes } from './contents';

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      goals: t.list(
        t.struct({
          goal: t.String,
          commonGoalOutcomes: CommonGoalOutcomes
        })
      )
    }),
    options: {
      label: 'What are 5 of your goals from the past 5 years?',

      fields: {
        id: {
          hidden: true
        },
        goals: {
          disableOrder: true,
          maxLines: 5,
          config: {
            maxLines: 5
          },
          item: {
            fields: {
              goal: {
                label:"Enter a goal you've had from the past 5 years."
              },
              commonGoalOutcomes: {
                label:
                  'How would you classify the outcome of this goal?'
              }
            }
          }
        }
      }
    },
    value: {
      fields: {
        id: 'step7+v0.0.0.1'
      }
    }
  },
  2: {
    type: t.struct({
      patterns: t.String
    }),
    options: {
      label:
        'Have you noticed any patterns? Have any guesses as to the reasons underlying such patterns?',

      fields: {
        patterns: {
          multiline: true
        }
      }
    }
  }
};
