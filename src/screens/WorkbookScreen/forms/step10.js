import t                 from '../../../forms/components';
import { OneToTenScale } from './contents';

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      egoAspects: t.list(
        t.struct({
          i: t.String,
          strengthOfI: OneToTenScale,
          whatIWouldSay: t.String
        })
      )
    }),
    options: {
      label: "What are some different 'I's that are a part of you? \n\n",
      fields: {
        id: {
          hidden: true
        },
        egoAspects: {
          item: {
            auto: 'none',
            fields: {
              i: {
                //label: 'Write down your \'I\'',
                label: 'Name this "I"',
                placeholder: 'e.g. "Kind I"'
                // error: 'For example \'I procrastinate\'.'
              },
              strengthOfI: {
                label:
                  'How strong is this "I"? \n\n1 = Weakest and 10 = Strongest'
                // error: 'How strong is it for you?.'
              },
              whatIWouldSay: {
                help: 'e.g., Angry I – "LEAVE ME ALONE!! STOP BOTHERING ME!”',
                label: 'What does this "I" say in a few words?'
              }
            }
          },
          auto: 'none',
          disableOrder: true,
          maxLines: 10,
          config: {
            maxLines: 10
          }
        }
      }
    },
    value: {
      fields: {
        id: 'step10+v0.0.0.1'
      }
    }
  },
  2: {
    type: t.struct({
      egoAspectGoalInfluence: t.list(
        t.struct({
          goal: t.String,
          helpOrHinder: t.String
        })
      )
    }),
    options: {
      label: 'Have any of these "I"s either hindered or aided your goals?',
      fields: {
        egoAspectGoalInfluence: {
          disableOrder: true,
          maxLines: 10,
          config: {
            maxLines: 10
          },
          item: {
            auto: 'none',
            fields: {
              goal: {
                auto: 'labels'
              },
              helpOrHinder: {
                label:
                  'How did a particular ego aspect help or hinder you in pursuit of this goal?'
              }
            }
          }
        }
      }
    }
  }
};
