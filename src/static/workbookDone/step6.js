// @flow
import { WorkbookDoneConfig } from '2020_types/types'
import { TOOL_KEYS } from '../tools'

const workBookDoneConfig: WorkbookDoneConfig = {
  title: 'Congratulations!',
  text:
    'Nice job, you have finished step 6. You now have access to the "Goals of Others" tool that will allow you to track what you can do to help those close to you. By helping others, we are reminded of the interconnectedness of our families, communities, and the entire world. Not to mention, empowering those around us strengthens our own support network. Giving and reciprocity are essential to the 20/20 Life Vision path.',
  toolLink: {
    tool: TOOL_KEYS.GoalsLogKey,
    text: 'GOALS FOR OTHERS',
  },  
}

export default workBookDoneConfig
