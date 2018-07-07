import R from 'ramda'
import {
  HISTORY,
  VISITS,
  LAST_VISITED,
  COUNT,
  TIME_STAMP
} from '../../constants/reducers'
import {
  STEP_SCREEN,
  WORKBOOK_SCREEN
  // HOME_SCREEN,
  // ASSIGNMENT_FLOW,
  // WALKTHROUGH,
  // DASHBOARD_SCREEN,
  // INITIAL_ROUTE_NAME,
  // MEDITATION_SCREEN,
  // MARKDOWN_SCREEN,
  // EMOJI_PICKER_SCREEN,
  // WORKBOOK_DONE_SCREEN
} from '../../constants/screens'
import type { StepId, Screen } from '../../types'
import {
  HistoryReducerLastVisitedScreen,
  HistoryReducerLastVisitedCount,
  HistoryReducerLastVisitedRouteName,
  HistoryReducerLastVisitedtimeStamp,
  HistoryReducerVisits,
  HistoryReducerVisitsToScreen
} from './history.reducer.lenses'
import reducersStructure from './reducers.structure.lenses'

const composeWithHistoryLens      = lens => R.compose(reducersStructure.history.lens, lens)
export const lastVisitedScreen    = composeWithHistoryLens(HistoryReducerLastVisitedScreen)
export const lastVisitedCount     = composeWithHistoryLens(HistoryReducerLastVisitedCount)
export const lastVisitedRouteName = composeWithHistoryLens(HistoryReducerLastVisitedRouteName)
export const lastVisitedtimeStamp = composeWithHistoryLens(HistoryReducerLastVisitedtimeStamp)
export const visitsScreen         = composeWithHistoryLens(HistoryReducerVisits)
export const visitsToScreen       = composeWithHistoryLens(HistoryReducerVisitsToScreen)


const historyVisitsLensWithScreen = (screen: Screen, ...rest) =>
  R.lensPath([HISTORY, VISITS, screen, ...rest])

export const historyReducerLenses = {
  lastVisited: R.lensPath([HISTORY, LAST_VISITED]),
  visits: {
    [WORKBOOK_SCREEN]: historyVisitsLensWithScreen(WORKBOOK_SCREEN),
    [STEP_SCREEN]: historyVisitsLensWithScreen(STEP_SCREEN),

    [WORKBOOK_SCREEN + 'WithStepId']: (stepId: StepId) =>
      historyVisitsLensWithScreen(WORKBOOK_SCREEN, stepId),
    [STEP_SCREEN + 'WithStepId']: (stepId: StepId) =>
      historyVisitsLensWithScreen(STEP_SCREEN, stepId)
  }
}
