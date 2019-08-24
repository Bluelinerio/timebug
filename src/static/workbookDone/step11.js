// @flow
import { WorkbookDoneConfig } from '2020_types/types'
import { TOOL_KEYS } from '../tools'


const workBookDoneConfig: WorkbookDoneConfig = {
  title: 'Congratulations!',
  text: 'You have completed Step 11!',
  toolLink: {
    tool: TOOL_KEYS.CompletedGoalsTrackerKey,
    text: 'My 5 years life report',
  },
}

export default workBookDoneConfig
