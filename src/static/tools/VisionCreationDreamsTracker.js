// @flow

import { VISION_CREATION, stepEnum } from '2020_services/cms'

export const key = 'vision_creation_dreams_tracker'

export default {
  key,
  number: 23,
  phase: VISION_CREATION,
  title: 'Dream tracker',
  subtitle: 'What are my dreams?',
  content: 'Use this tool to track your dreams so you can achieve them',
  require: {
    steps: [stepEnum.STEP_23],
  },
}
