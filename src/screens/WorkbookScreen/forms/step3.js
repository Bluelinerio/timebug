import t from '../components/templates';
import { Strengths, Weaknesses } from './contents';

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      charachterStrengths: t.list(
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
        charachterStrengths: {
          disableOrder: true,
          maxLines: 10,
          config: {
            maxLines: 10
          },
          item: {
            fields: {
              strengths: {
                auto: 'labels',
                error: 'Please select a charachter strength.'
              },
              resultingGoalAchieved: {
                label:
                  'What is a goal that you achieved as a result of this strength of yours?'
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
      charachterWeaknesses: t.list(
        t.struct({
          weaknesses: Weaknesses,
          goalNotReached: t.String
        })
      )
    }),
    options: {
      label: 'What are your weaknesses?',
      fields: {
        charachterWeaknesses: {
          disableOrder: true,
          maxLines: 5,
          config: {
            maxLines: 5
          },
          item: {
            fields: {
              weaknesses: {
                auto: 'labels'
                // error: "Please select a charachter weakness."
              },
              goalNotReached: {
                label:
                  "What is a goal that you haven't been able to reach as a result?"
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
      friendsName: t.String,
      strengths: t.list(Strengths),
      weaknesses: t.list(Weaknesses)
    }),
    options: {
      label:
        'What does a close friend or family member, an objective one, think of your strengths & weaknesses?',
      fields: {
        friendsName: {
          label: "Write down a friend or family member's name.",
          error:
            'The best person to help you with this exercise is someone who you trust to me completely honest without being judgemental.'
        },
        strengths: {
          label: 'Strengths',
          error: 'Please select a charachter strength.'
        },
        weaknesses: {
          label: 'Weaknesses',
          error: 'Please select a charachter weakness.',
          config: {
            minLines: 3
          }
        }
      }
    }
  }
};
