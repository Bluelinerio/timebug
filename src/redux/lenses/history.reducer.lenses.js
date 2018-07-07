import R from 'ramda'
import reducersStructure from './reducers.structure.lenses'
// import { screens } from '../../constants/screens'
//import { Screen } from '../../types'
// REDUCERS
export const HistoryReducerLastVisitedScreen = R.compose(
  reducersStructure.history.lastVisited.lens
)
export const HistoryReducerLastVisitedCount = R.compose(
  HistoryReducerLastVisitedScreen,
  reducersStructure.history.lastVisited.count.lens
)
export const HistoryReducerLastVisitedRouteName = R.compose(
  HistoryReducerLastVisitedScreen,
  reducersStructure.history.lastVisited.routeName.lens
)
export const HistoryReducerLastVisitedtimeStamp = R.compose(
  HistoryReducerLastVisitedScreen,
  reducersStructure.history.lastVisited.timeStamp.lens
)
export const HistoryReducerVisits = R.compose(
  reducersStructure.history.visits.lens
)
export const HistoryReducerVisitsToScreen = (screen /* : Screen */) =>
  R.compose(
    reducersStructure.history.visits.lens,
    reducersStructure.history.visits[screen].lens
  )