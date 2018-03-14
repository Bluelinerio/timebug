import t from '../components/templates';
import { PillarsOfLife, InteractionFrequency } from './contents';

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      roleModels: t.list(
        t.struct({
          roleModel: t.String,
          pillarsOfLife: PillarsOfLife,
          interactionFrequency: InteractionFrequency,
          why: t.String
        })
      )
    }),
    options: {
      label: 'Who are your current role models?',

      fields: {
        id: {
          hidden: true
        },

        roleModels: {
          item: {
            fields: {
              roleModel: {
                auto: 'labels'
                //  error:'Please enter the name of a Role Model.'
              },
              pillarsOfLife: {
                label:
                  'Which of the 7 Pillars of Life does he/she primarily influence?'
                //error: 'Please select a Life Category.'
              },
              interactionFrequency: {
                label:
                  'To what degree do you interact with this Role Model?'
                //error: 'How often do you interact with this person?'
              },
              why: {
                label:
                  'Why do you look up to this Role Model?',
                multiline: true
                //error:'Why would this person make a good role model for you?'
              }
            }
          },
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
        id: 'step9+v0.0.0.1'
      }
    }
  }
};
