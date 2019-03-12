// @flow
export const key = 'board_of_advisors_tool'
import { MEDITATION, stepEnum } from '2020_services/cms'

export default {
  key,
  number: 4,
  phase: MEDITATION,
  title: 'Board of advisors',
  subtitle: 'Build up your board of advisors',
  content:
    'These are the people that you can trust, and that give valuable insight to help you make progress on your endeavors. Choose wisely, and build your dream team!',
  form: {},
  config: {},
  require: {
    steps: [stepEnum.STEP_4],
  },
}
