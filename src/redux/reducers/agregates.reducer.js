// https://facebook.github.io/react-native/docs/appstate.html
// active - The app is running in the foreground
// background - The app is running in the background. The user is either in another app or on the home screen
// inactive - This is a state that occurs when transitioning between foreground & background, and during periods of inactivity such as entering the Multitasking view or in the event of an incoming call

// @flow
import { NavigationActions } from 'react-navigation'
import R from 'ramda'
import routes from '../../navigation/routes'
import { composeReducers } from './utils'

export const UPDATE = 'UPDATE'
export const PUSH = 'PUSH'
export const EVENT = 'EVENT'
export const PAGE_VIEW = 'PAGE_VIEW'

export type AggregateState = {}
export type AggregateUpdateAction = {
  type: UPDATE | PUSH | EVENT | PAGE_VIEW,
  payload: {}
}
export const initialState: AggregateState = {}

// re: react-navigation and redux-beacon review https://github.com/rangle/redux-beacon/issues/138
function aggregateReducer(
  state: AggregateState = initialState,
  action: AggregateUpdateAction
) {
  switch (action.type) {
    case NavigationActions.NAVIGATE: {
      return navigate(state, action)
    }
    case EVENT:
      return {
        ...(state || {}),
        events: {
          ...state.events,
          [Date.now()]: action.payload
        }
      }
    case UPDATE:
      return {
        ...(state && {}),
        ...action.payload
      }
    case PUSH:
      return {
        ...(state && {}),
        ...Object.keys(action.payload).reduce(
          (sum, key) => ({
            [key]: [...state[key], action.payload]
          }),
          {}
        )
      }
    default:
      return state
  }
}

const navigate = (state = {}, action) => {
  const NavigationActionStepIdLens = R.lensPath(['params', 'stepId'])
  const NavigationActionFormIdLens = R.lensPath(['params', 'formId'])
  const NavigationActionRouteNameLens = R.lensPath(['routeName'])
  const PageVisits = 'pageVisit'
  const Pages = {
    stepWorkbook: 'stepWorkbook',
    stepGuide: 'stepGuide'
  }
  const stepWorkbookLensWithStep = (stepId: string) =>
    R.lensPath([PageVisits, Pages.stepGuide, stepId])
  const stepGuideLensWithStep = (stepId: string) =>
    R.lensPath([PageVisits, Pages.stepWorkbook, stepId])
  const updateScreen = append => previous => ({
    count: ((previous && previous.count) || 0) + 1,
    last: Date.now(),
    ...(append || {})
  })

  const tagPageVisits = (state = {}, action) => {
    switch (R.view(NavigationActionRouteNameLens, action)) {
      case routes.root.AssignmentFlow:
      case routes.step.StepScreen: {
        return R.over(
          stepGuideLensWithStep(R.view(NavigationActionStepIdLens, action)),
          updateScreen({}),
          state
        )
      }
      case routes.step.WorkbookScreen:
        return R.over(
          stepWorkbookLensWithStep(R.view(NavigationActionStepIdLens, action)),
          updateScreen({
            formId: R.view(NavigationActionFormIdLens)
          }),
          state
        )
      default:
        break
    }
  }

  const tagLastVisitedPage = (state, action) => ({
    ...state,
    lastVisitedPage: {
      routeName: R.view(NavigationActionRouteNameLens, action),
      timestamp: Date.now()
    }
  })

  return composeReducers(tagPageVisits, tagLastVisitedPage)(state, action)
}

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

//export const UNDETERMIND = 0
// stateReconciler: (
//   inboundState: AggregateState,
//   originalState: AggregateState
//   //reducedState: AggregateState
// ) => {
//   if (inboundState === UNDETERMIND) {
//     return UNDETERMIND
//   }
//   const state =
//     !inboundState ||
//     !inboundState.lastFetchDate ||
//     originalState.requestCount > 0
//       ? originalState
//       : originalState.lastFetchDate &&
//         originalState.lastFetchDate > inboundState.lastFetchDate
//         ? originalState
//         : inboundState
//   return state
// }

const persistConfig = {
  key: 'aggregate',
  storage: storage,
  blacklist: ['requestCount', 'error']
}

export default persistReducer(persistConfig, aggregateReducer)
