// @flow
import { MEDITATION, stepEnum } from '2020_services/cms'

export const key = 'energy_levels_tracker_tool'

export default {
  key,
  number: 8,
  phase: MEDITATION,
  title: 'Energy levels tracker',
  subtitle: 'Check your energy levels through the day',
  content:
    'Use this tool to keep track of how you feel through the day. Log your energy levels and make sure that you are making the progress you want to make',
  form: {},
  config: {},
  require: {
    steps: [stepEnum.STEP_8],
  },
}
