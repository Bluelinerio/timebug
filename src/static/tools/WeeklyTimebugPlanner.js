// @flow

import {
  MEDITATION,
  stepEnum,
} from '2020_services/cms'

export const key = 'weekly_timebug_planner_tool'

export default {
  key,
  number: 2,
  phase: MEDITATION,
  title: 'Timebug Planner (Weekly)',
  subtitle: 'How do I want to spend my time?',
  content:
    'This tool will show you how you are spending your time in comparison to the "Ideal Week" that you have set for yourself in Step 2.',
  form: {},
  config: {
    max: 168,
    elementMax: 70,
  },
  require: {
    steps: [stepEnum.STEP_2],
  },
}
