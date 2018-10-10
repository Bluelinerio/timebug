import t from '../../../forms/components'
import {
  Emotion,
  PercentSelector,
  OneToTenScale,
  GoalProcess
}        from './contents'

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      topGoalsPast5Years: t.list(
        t.struct({
          goal: t.String,
          percentCompleted: PercentSelector,
          satisfactionLevel: OneToTenScale,
          goalProcess: GoalProcess
        })
      )
    }),
    options: {
      label: 'What were your top 3 or 4 goals over the past 5 years?',

      fields: {
        id: {
          hidden: true
        },
        topGoalsPast5Years: {
          item: {
            auto: 'none',
            fields: {
              goal: {
                label: 'Goal'
                //error:'Please enter a goal.'
              },
              percentCompleted: {
                label: 'How far did you get with this goal?(as a percentage)?'
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
          auto: 'none',
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
      fiveYearGoalTracking: t.struct({
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
      fiveYearGoalTracking: {
        options: {
          auto: 'none'
        }
      }
    }
  },
  3: {
    type: t.struct({
      emotionsPast5Years: t.list(Emotion)
    }),
    options: {
      label:
        "Choose a few emotions that best describe how you've felt over the past 5 years."
    },
    fields: {
      emotions: {
        options: {
          auto: 'labels'
        }
      }
    }
  }
}
