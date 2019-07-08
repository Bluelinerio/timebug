// @flow

export const key = 'completed_goals_tracker_tool'
import { SELF_ASSESSMENT, stepEnum } from '2020_services/cms'

export default {
  key,
  number: 11,
  affectedSteps: [11],
  phase: SELF_ASSESSMENT,
  title: 'My 5 Year Life Report',
  subtitle: 'Your top goals from the past 5 years',
  content: 'Use this tool to examine your past goals, and restart any that have been on the shelf.',
  form: {},
  config: {},
  require: {
    steps: [stepEnum.STEP_11],
  },
}
