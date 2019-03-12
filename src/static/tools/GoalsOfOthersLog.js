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
    'This tool helps you keep track of the goals of people that surround you, reciprocate the support they give you and help them reach their dreams!',
  form: {},
  config: {},
  require: {
    steps: [stepEnum.STEP_6],
  },
}
