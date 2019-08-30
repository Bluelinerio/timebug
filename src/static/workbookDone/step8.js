// @flow
import { WorkbookDoneConfig } from '2020_types/types'
import { TOOL_KEYS } from '../tools'

const workBookDoneConfig: WorkbookDoneConfig = {
  title: 'Congratulations!',
  text:
    'Way to go! You have completed Step 8! You have unlocked the "My Energy Levels" tool, which will allow you to check in up to 6 times per day and let us know how you are feeling. In return, you will get back daily, weekly and monthly distribution charts that will show you how your energy flows. This can help show you where you are doing well and where there is room for improvement.',
    toolLink: {
      tool: TOOL_KEYS.EnergyLevelsTrackerKey,
      text: 'MY ENERGY LEVELS',
    },  
}

export default workBookDoneConfig
