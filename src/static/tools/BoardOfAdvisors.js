// @flow
export const key = 'board_of_advisors_tool'
import { MEDITATION, stepEnum } from '2020_services/cms'

export default {
  key,
  number: 4,
  phase: MEDITATION,
  title: 'Board of advisors',
  subtitle: 'Build your board of advisors',
  content:
    'Use this tool to connect with your board of advisors and log the feedback you get.',
  form: {},
  config: {},
  require: {
    steps: [stepEnum.STEP_4],
  },
}
