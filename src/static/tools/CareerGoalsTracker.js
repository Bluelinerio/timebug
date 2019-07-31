// @flow

export const key = 'career_goals_tracker_tool'
import { SELF_ASSESSMENT, stepEnum } from '2020_services/cms'

export default {
  key,
  number: 13,
  affectedSteps: [13, 14, 15, 16, 17, 18, 19],
  phase: SELF_ASSESSMENT,
  title: 'Career roadmap',
  subtitle: 'The top goals you want to attain on your career',
  content:
    'Use this tool to plan the milestones you want to reach on your professional life.',
  form: {},
  config: {},
  require: {
    steps: [
      stepEnum.STEP_13,
      stepEnum.STEP_14,
      stepEnum.STEP_15,
      stepEnum.STEP_16,
      stepEnum.STEP_17,
      stepEnum.STEP_18,
      stepEnum.STEP_19,
    ],
  },
}
