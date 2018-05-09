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
      label: 'Name some of the Major Life Events (MLEs) that have ocurred over the past 5 years.',

      fields: {
        id: {
          hidden: true
        },
        majorLifeEvents: {
          item: {
            auto: 'none',
            fields: {
              postiveOrNegative: {
                label:
                  'How did this MLE influence your goals?'
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
