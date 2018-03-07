import t from '../components/templates';
import { MajorLifeEvents, TimeShift, IncreaseDecrease } from './contents';

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      majorLifeEvents: t.list(
        t.struct({
          majorLifeEvent: MajorLifeEvents,
          postiveOrNegative: t.String,
          increaseDecrease: IncreaseDecrease
        })
      )
    }),
    options: {
      label: 'What MLEs happened to you over the past 5 years?',

      fields: {
        id: {
          hidden: true
        },
        majorLifeEvents: {
          item: {
            fields: {
              postiveOrNegative: {
                label:
                  'How did those MLEs factor in – positively and negatively – to your goals over the past 5 years?'
              },
              majorLifeEvent: {
                label: 'Major Life Event'
                //error:'Please select a Major Life Event'
              },
              increaseDecrease: {
                label:
                  'Did this MLE increase, decrease or do nothing to your Internal Energy Production?'
              }
            }
          },
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
        id: 'step12+v0.0.0.1'
      }
    }
  }
};
