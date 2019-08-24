// @flow
import { TOOL_KEYS } from '../tools'
import { WorkbookDoneConfig } from '2020_types/types'

const workBookDoneConfig: WorkbookDoneConfig = {
  title: 'Congratulations!',
  text: `You have completed Step 1: What is my life story? \n 
    Your relections after meditating on your past will be used to help guide you to the 
    most optimal use of your time right now, to help you manifest the future that YOU desire`,
  toolLink: {
    tool: TOOL_KEYS.DailyMeditationKey,
    text: 'MEDITATION TOOL',
  },
}

export default workBookDoneConfig
