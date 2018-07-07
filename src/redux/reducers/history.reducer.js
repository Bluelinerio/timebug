//@flow
import R from 'ramda'
import {
  NavigationActionStepIdLens,
  NavigationActionFormIdLens,
  NavigationActionRouteNameLens,
  historyReducerLenses
} from '../lenses'
import {
  HistoryReducerLastVisitedScreen,
  HistoryReducerLastVisitedCount,
  HistoryReducerLastVisitedRouteName,
  HistoryReducerLastVisitedtimeStamp,
  HistoryReducerVisits,
  HistoryReducerVisitsToScreen
} from '../lenses/history.reducer.lenses'

import type { StepId } from '../../types'
import routes from '../../navigation/routes'
import { composeReducers } from './utils'

export const updateScreen = append => previous => ({
  count: ((previous && previous.count) || 0) + 1,
  last: Date.now(),
  ...(append || {})
})

export const setLastVisitedWithScreenRouteFromNavigationActionAndAddTimeStamp = (
  state,
  action
) =>
  R.over(
    HistoryReducerLastVisitedScreen,
    {
      routeName: R.view(NavigationActionRouteNameLens, action),
      timeStamp: Date.now()
    },
    state
  )

export const updateStateWithNewWorkbookPageVisit = composeReducers(
  setLastVisitedWithScreenRouteFromNavigationActionAndAddTimeStamp,
  (action, state) =>
    R.over(
      historyReducerLenses.visits.guideScreenWithStepId(
        R.view(NavigationActionStepIdLens, action)
      ),
      updateScreen(),
      state
    )
)

export const updateStateWithNewGuidebookPageVisist = composeReducers(
  setLastVisitedWithScreenRouteFromNavigationActionAndAddTimeStamp,
  (state, action) =>
    R.over(
      historyReducerLenses.visits.workbookScreenWithStepId(
        R.view(NavigationActionStepIdLens, action)
      ),
      updateScreen({
        formId: R.view(NavigationActionFormIdLens)
      }),
      state
    )
)

export const initialState = {}

export const reducer = (state = initialState, action) => {
  switch (R.view(NavigationActionRouteNameLens, action)) {
    case routes.root.AssignmentFlow:
    case routes.step.StepScreen: {
      return updateStateWithNewWorkbookPageVisit(state, action)
    }
    case routes.step.WorkbookScreen:
      return updateStateWithNewGuidebookPageVisist(state, action)
    default:
      return state
  }
}

export default reducer
