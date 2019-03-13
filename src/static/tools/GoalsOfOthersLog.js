// @flow

export const key = 'goals_of_others_log_tool'
import {
  MEDITATION,
  stepEnum,
} from '2020_services/cms'

export default {
  key,
  number: 6,
  phase: MEDITATION,
  title: 'Goals of Others Log',
  subtitle: 'How are the goals of your peers coming up?',
  content:
    'Use this tool to help keep track of the things you have committed to do for those close to you.',
  form: {},
  config: {},
  require: {
    steps: [stepEnum.STEP_6],
  },
}
