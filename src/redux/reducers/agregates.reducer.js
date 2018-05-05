// https://facebook.github.io/react-native/docs/appstate.html
// active - The app is running in the foreground
// background - The app is running in the background. The user is either in another app or on the home screen
// inactive - This is a state that occurs when transitioning between foreground & background, and during periods of inactivity such as entering the Multitasking view or in the event of an incoming call

// @flow
import navigationReducer, {
  NavigationReducerKeys,
  ActionTypes as NavigationReducerActionTypes
} from './agregates.navigation.reducer'

import suggestionsReducer, {
  SuggestionsReducerKeys,
  ActionTypes as SuggestionReducerActionTypes
} from './agregates.suggestions.reducer.js'

export const AgregateReducerKeys = {
  agregates: 'agregates',
  ...NavigationReducerKeys,
  ...SuggestionsReducerKeys
}

export const UPDATE = 'UPDATE'
export const PUSH = 'PUSH'
export const EVENT = 'EVENT'
export const PAGE_VIEW = 'PAGE_VIEW'

export type AgregateState = {}
export type AgregateUpdateAction = {
  type: UPDATE | PUSH | EVENT | PAGE_VIEW,
  payload: {}
}
export const initialState: AgregateState = {}

// re: react-navigation and redux-beacon review https://github.com/rangle/redux-beacon/issues/138
function agregateReducer(
  state: AgregateState = initialState,
  action: AgregateUpdateAction
) {
  if (NavigationReducerActionTypes.includes(action.type))
    return navigationReducer(state, action)

  if (SuggestionReducerActionTypes.includes(action.type)) {
    return suggestionsReducer(state, action)
  }

  switch (action.type) {
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

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

//export const UNDETERMIND = 0
// stateReconciler: (
//   inboundState: AgregateState,
//   originalState: AgregateState
//   //reducedState: AgregateState
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
  key: AgregateReducerKeys.agregates,
  storage: storage,
  blacklist: ['requestCount', 'error']
}

export default persistReducer(persistConfig, agregateReducer)
