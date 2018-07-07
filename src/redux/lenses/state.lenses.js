import R from 'ramda'
import reducersStructure from './reducers.structure.lenses'
import {
  HistoryReducerLastVisitedScreen,
  HistoryReducerLastVisitedCount,
  HistoryReducerLastVisitedRouteName,
  HistoryReducerLastVisitedtimeStamp,
} from './history.reducer.lenses.js'

// STATE
export const lastVisitedScreen = R.compose(
  reducersStructure.history.lens,
  HistoryReducerLastVisitedScreen
)

export const lastVisitedCount = R.compose(
  lastVisitedScreen,
  HistoryReducerLastVisitedCount
)
export const lastVisitedRouteName = R.compose(
  lastVisitedScreen,
  HistoryReducerLastVisitedRouteName
)
export const lastVisitedtimeStamp = R.compose(
  lastVisitedScreen,
  HistoryReducerLastVisitedtimeStamp
)
