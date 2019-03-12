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
    'Check-in with this tool once a week to see how you are doing compared to the goals you laid out for yourself, and make adjustments when necessary',
  form: {},
  config: {
    max: 168,
    elementMax: 70,
  },
  require: {
    steps: [stepEnum.STEP_2],
  },
}
