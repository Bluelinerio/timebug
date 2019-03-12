// @flow

export const key = 'goal_tracker_tool'
import {
  MEDITATION,
  stepEnum,
} from '2020_services/cms'

export default {
  key,
  number: 5,
  affectedSteps: [5],
  phase: MEDITATION,
  title: 'Goal tracking tool',
  subtitle: 'How are you following up on your goals?',
  content:
    'Check-in with this tool periodically to keep track of your goals. Persevere and reach your dreams!',
  form: {},
  config: {},
  require: {
    steps: [stepEnum.STEP_5],
  },
}
