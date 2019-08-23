// @flow

export const key = 'career_goals_tracker_tool'
import { SELF_ASSESSMENT, stepEnum } from '2020_services/cms'

export default {
  key,
  number: 13,
  affectedSteps: [13, 14, 15, 16, 17, 18, 19],
  phase: SELF_ASSESSMENT,
  title: 'Phase 2 Goals',
  subtitle: 'Your Self-Assessment',
  content:
    'Use this tool to create and keep track of goals inspired by phase 2 of the workbook.',
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
