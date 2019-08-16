// @flow
import { TOOL_KEYS } from '../tools'

import { WorkbookDoneConfig } from '2020_types/types'

const workBookDoneConfig: WorkbookDoneConfig = {
  title: 'Congratulations!',
  text:
    'You have finished step 5. You can check in and update your goals anytime by visiting the Goals tool at the bottom of the app. We will notify you periodically to help you stay on track. You may re-visit this step at any time to enter new goals.',
  toolLink: {
    tool: TOOL_KEYS.GoalTrackerKey,
    text: 'GOAL TRACKER',
  },
}

export default workBookDoneConfig
