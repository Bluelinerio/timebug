/* eslint-disable no-unused-vars */
import {
  startConfiguration,
  StartNavigator,
  RootTabNavigator,
  tabConfiguration,
} from '../../navigation'

const initialRouteState = StartNavigator.router.getStateForAction(
  StartNavigator.router.getActionForPathAndParams(
    startConfiguration.routes.initialRouteName
  ),
)

const dashboardState = StartNavigator.router.getStateForAction(
  RootTabNavigator.router.getActionForPathAndParams(
    tabConfiguration.routes.initialRouteName
  ),
  initialRouteState
)

const walkthroughState = StartNavigator.router.getStateForAction(
  StartNavigator.router.getActionForPathAndParams(
    startConfiguration.routes.Walkthrough
  ),
  dashboardState
)

if (!initialRouteState || !walkthroughState) {
  throw 'nav reducer --expect state to be not nil'
}
const initialState = walkthroughState

function navReducer(state = initialState, action) {
  const newState = StartNavigator.router.getStateForAction(action, state)
  return newState || state
}

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const thisVersion = 14
const persistConfig = {
  key: 'nav',
  storage: storage,
  version: thisVersion,
  migrate: (state, version) => {
    if (state) {
      return Promise.resolve(dashboardState)
    }
    return Promise.resolve(state)
  },
}

export default persistReducer(persistConfig, navReducer)
