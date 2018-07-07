import R from 'ramda'
import {
  VISITS,
  HISTORY,
  LAST_VISITED,
  ROUTE_NAME,
  COUNT,
  TIME_STAMP
} from '../../constants/reducers'
import { reduceStepIds, reduceScreens, branchFn } from './utils.js'
import {
  STEP_SCREEN,
  WORKBOOK_SCREEN,
  WORKBOOK_DONE_SCREEN
} from '../../constants/screens'

const stepIdToLens = stepId => ({ lens: R.lensProp(stepId) })
const unpackStepIdLenses = reduceStepIds(stepIdToLens)
const screenWithStepIds = [STEP_SCREEN, WORKBOOK_SCREEN, WORKBOOK_DONE_SCREEN]
const unpackScreenLenses = reduceScreens(
  branchFn(
    R.contains(R.__, screenWithStepIds),
    screen => ({
      lens: R.lensProp(screen),
      ...unpackStepIdLenses
    }),
    screen => ({
      lens: R.lensProp(screen)
    })
  )
)

export default {
  history: {
    lens: R.lensProp(HISTORY),
    visits: {
      lens: R.lensProp(VISITS),
      ...unpackScreenLenses
    },
    lastVisited: {
      lens: R.lensProp(LAST_VISITED),
      routeName: {
        lens: R.lensProp(ROUTE_NAME)
      },
      count: {
        lens: R.lensProp(COUNT)
      },
      timeStamp: {
        lens: R.lensProp(TIME_STAMP)
      }
    }
  }
}
