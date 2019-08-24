// @flow
import { TOOL_KEYS } from '../tools'

import { WorkbookDoneConfig } from '2020_types/types'

const workBookDoneConfig: WorkbookDoneConfig = {
  title: 'Nice Job!',
  text: `You have completed Step 4, Who is my supporting cast? \n
    Community is key to the 20/20 Life Vision Challenge. Don’t ever be afraid to ask for support. We’ll check in periodically and remind you to contact your supporting cast.`,
  toolLink: {
    text: 'BOARD OF ADVISORS',
    tool: TOOL_KEYS.BoardOfAdvisorsKey,
  },
}

export default workBookDoneConfig
