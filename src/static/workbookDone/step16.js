// @flow
import { WorkbookDoneConfig } from '2020_types/types'
import { TOOL_KEYS } from '../tools'

const workBookDoneConfig: WorkbookDoneConfig = {
  title: 'Congratulations!',
  text: 'You have completed the Health portion of your self-assessment. You can now visit your "Self Assessment Goals" tool to begin and track new goals realted to this category. Consider what you learned from this assessment when creating Health goals!',
  toolLink: {
    tool: TOOL_KEYS.CareerGoalsTrackerKey,
    text: 'SELF ASSESSMENT GOALS',
  },
}

export default workBookDoneConfig
