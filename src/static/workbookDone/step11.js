// @flow
import { WorkbookDoneConfig } from '2020_types/types'
import { TOOL_KEYS } from '../tools'


const workBookDoneConfig: WorkbookDoneConfig = {
  title: 'Congratulations!',
  text: "This is a big step. Examining the past five years of your life to see what worked and what didn't. Use your new tool, 'My Five Year Life Report', to re-start any of your old goals that have been sitting on the shelf. ",
  toolLink: {
    tool: TOOL_KEYS.CompletedGoalsTrackerKey,
    text: 'My 5 year Life Report',
  },
}

export default workBookDoneConfig
