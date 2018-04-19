import t from '../components/templates';
import { Strengths, Weaknesses } from './contents';

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      characterStrengths: t.list(
        t.struct({
          strengths: Strengths,
          resultingGoalAchieved: t.String
        })
      )
    }),
    options: {
      label: 'What are your strengths?',

      fields: {
        id: {
          hidden: true
        },
        characterStrengths: {
          disableOrder: true,
          maxLines: 10,
          config: {
            maxLines: 10
          },
          item: {
            auto: 'none',
            fields: {
              strengths: {
                auto: 'labels',
                error: 'Please select a character strength.'
              },
              resultingGoalAchieved: {
                label:
                  'What goal was positively impacted as a result of this strength?'
              }
            }
          }
        }
      },
      value: {
        fields: {
          id: 'step3+v0.0.0.1'
        }
      }
    }
  },
  2: {
    type: t.struct({
      characterWeaknesses: t.list(
        t.struct({
          weaknesses: Weaknesses,
          goalNotReached: t.String
        })
      )
    }),
    options: {
      label: 'What are your weaknesses?',
      fields: {
        characterWeaknesses: {
          disableOrder: true,
          maxLines: 5,
          config: {
            maxLines: 5
          },
          item: {
            auto: 'none',
            fields: {
              weaknesses: {
                auto: 'labels'
                // error: "Please select a character weakness."
              },
              goalNotReached: {
                label:
                  'What goal was negatively impacted as a result of this weakness?'
                // error: "What was one of your goals that you were not able to achieve as a result?"
              }
            }
          }
        }
      }
    }
  },
  3: {
    type: t.struct({
      closeFriend: t.struct({
        friendsName: t.String,
        strengths: t.list(Strengths),
        weaknesses: t.list(Weaknesses)
      })
    }),
    options: {
      label:
        'What does a close friend or family member, an objective one, think of your strengths & weaknesses?',
      fields: {
        friendsName: {
          label: 'Friend/family member',
          error:
            'The best person to help you with this exercise is someone who you trust to me completely honest without being judgemental.'
        },
        strengths: {
          label: 'Strengths',
          error: 'Please select a character strength.'
        },
        weaknesses: {
          label: 'Weaknesses',
          error: 'Please select a character weakness.',
          config: {
            minLines: 3
          }
        }
      }
    }
  }
};
