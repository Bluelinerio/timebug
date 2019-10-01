// @flow

import { VISION_CREATION, stepEnum } from '2020_services/cms'

export const key = 'vision_creation_dreams_tracker'

export default {
  key,
  number: 23,
  phase: VISION_CREATION,
  title: 'Phase 3 Goals',
  subtitle: 'Vision Creation',
  content: 'Use this tool to set up and track goals realted to the "Vision Creation" exercises you have done in phase 3 of the workbook.',
  require: {
    steps: [stepEnum.STEP_23],
  },
}
