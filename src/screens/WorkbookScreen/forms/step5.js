import t from '../components/templates';
import { GoalTypes } from './contents';

export default {
  1: {
    type: t.struct({
      id: t.maybe(t.String),
      recentGoals: t.list(
        t.struct({
          goal: t.String,
          goalTypes: GoalTypes
        })
      )
    }),
    options: {
      label:
        'What are some of your recent goals? Classify them according to the 7 Goal Types.',
      fields: {
        id: {
          hidden: true
        },
        recentGoals: {
          item: {
            auto: 'none',
            fields: {
              goal: { label: 'What is a recent life goal?' }, //error:'Please enter a goal'},
              goalTypes: { label: 'How would you classify this goal?' } //error:'Please select a Goal Type'}
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
      id: 'step5+v0.0.0.1'
    }
  }
};
