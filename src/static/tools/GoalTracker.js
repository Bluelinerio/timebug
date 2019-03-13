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
    'Use this tool to track your Life Vision Goals, step by step.',
  form: {},
  config: {},
  require: {
    steps: [stepEnum.STEP_5],
  },
}
