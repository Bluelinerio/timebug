/* eslint-disable no-unused-vars */
// TODO-RRN: Remove from redux react navigation
import {
  startConfiguration,
  StartNavigator,
  RootTabNavigator,
  tabConfiguration,
} from '../../navigation'
import { NavigationActions } from 'react-navigation'
import tron from 'reactotron-react-native'

const initialRouteState = StartNavigator.router.getStateForAction(
  NavigationActions.navigate({
    routeName: startConfiguration.routes.initialRouteName,
  })
)

const walkthroughState = StartNavigator.router.getStateForAction(
  StartNavigator.router.getActionForPathAndParams(
    startConfiguration.routes.Walkthrough
  ),
  initialRouteState
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
      return Promise.resolve(initialRouteState)
    }
    return Promise.resolve(state)
  },
}

export default persistReducer(persistConfig, navReducer)
