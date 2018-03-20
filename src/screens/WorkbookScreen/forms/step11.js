import t from '../components/templates';
import {
  PillarsOfLife,
  Emotion,
  InteractionFrequency,
  GoalYears,
  PercentSelector,
  OneToTenScale,
  GoalProcess,
  DescribeProcess
} from './contents';

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      goals: t.list(
        t.struct({
          goal: t.String,
          percentCompleted: PercentSelector,
          satisfactionLevel: OneToTenScale,
          goalProcess: GoalProcess
        })
      )
    }),
    options: {
      label: 'What were you top 3 or 4 goals over the past 5 years?',

      fields: {
        id: {
          hidden: true
        },
        goals: {
          item: {
            fields: {
              goal: {
                label: 'Goal'
                //error:'Please enter a goal.'
              },
              percentCompleted: {
                label: 'What percentage complete is this goal?'
              },
              satisfactionLevel: {
                label:
                  'How satisfied are you with the time and energy you committed to this goal?',
                help: '1= Not at all satisfied to 10= Very satisfied'
              },
              goalProcess: {
                label: 'How would you describe your goal-process?'
                //error:'How much time and energy have you invested?'
              }
            }
          },
          auto:'none',
          disableOrder: true,
          maxLines: 15,
          config: {
            maxLines: 15
          }
        }
      }
    },
    value: {
      fields: {
        id: 'step11+v0.0.0.1'
      }
    }
  },
  2: {
    type: t.struct({
      goalTracking: t.struct({
        year1: t.Boolean,
        year2: t.Boolean,
        year3: t.Boolean,
        year4: t.Boolean,
        year5: t.Boolean
      })
    }),
    options: {
      label: 'What years of the past 5 did you actively track your goals?'
    },
    fields: {
      goalTracking: {
        options: {
          auto: 'labels'
        }
      }
    }
  },
  3: {
    type: t.struct({
      emotions: t.list(Emotion)
    }),
    options: {
      label: "Choose a few emotions that best describe how you've felt over the past 5 years."
    },
    fields: {
      emotions: {
        options: {
          auto: 'labels'
        }
      }
    }
  }
};
