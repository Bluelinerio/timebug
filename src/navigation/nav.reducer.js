import {
  RootNavigator,
  rootConfiguration,
  assignmentFlowConfiguration
} from './index'
import routes from '../navigation/routes'

const initialRouteState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams(
    rootConfiguration.routes.initialRouteName
  )
)
const walkthroughState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams(
    rootConfiguration.routes.Walkthrough
  ),
  initialRouteState
)

if (!initialRouteState || !walkthroughState) {
  throw 'nav reducer --expect state to be not nil'
}
const initialState = walkthroughState

function navReducer(state = initialState, action) {
  const newState = RootNavigator.router.getStateForAction(action, state)
  return newState || state
}

import storage from 'redux-persist/lib/storage'
import { persistReducer, createMigrate } from 'redux-persist'

const requiredParamFieldsForRoute = (route: string) => {
  switch (route) {
    case routes.root.AssignmentFlow:
    case routes.step.StepScreen:
    case routes.step.WorkbookScreen:
    case routes.step.WorkbookDoneScreen: {
      return ['stepId', 'stepColor']
    }
    default:
      return []
  }
}

const isRouteInvalid = route => {
  if (!route.routeName) return true
  if (route.routes) return allRoutesAreValid(route.routes) === false
  const keys = requiredParamFieldsForRoute(route.routeName)
  if (
    keys.length > 0 &&
    (!route.params ||
      keys.find(key => !Object.keys(route.params).includes(key)))
  )
    return true
  return false
}
const allRoutesAreValid = routes => {
  return routes.find(isRouteInvalid) ? false : true
}

const findAssignmentFlow = state =>
  state.routes.find(
    route => route.routeName === rootConfiguration.routes.AssignmentFlow
  )

const isAssignmentFlowValid = assignmentFlow => {
  try {
    // instead of migrating screen names, reset!
    const unregisteredRouteNames = assignmentFlow.routes.find(
      route =>
        Object.keys(assignmentFlowConfiguration.screens).includes(
          route.routeName
        ) === false
    )
    if (unregisteredRouteNames) {
      return false
    } else {
      return true
    }
  } catch (e) {
    return false
  }
}

const thisVersion = 9
const persistConfig = {
  key: 'nav',
  storage: storage,
  version: thisVersion,
  migrate: (state, version) => {
    if (state) {
      if (!state.routes || !allRoutesAreValid(state.routes)) {
        console.warn('nav.reducer: resetting routes')
        return Promise.resolve(initialRouteState)
      }
      if (version < thisVersion) {
        return Promise.resolve(initialRouteState)
      }
      // prevent from any navigation issue that may arise to override that the root view is always home:
      const initialRouteName = state.routes[0].routeName
      if (
        !initialRouteName /* this can happen sometimes! */ ||
        initialRouteName !== rootConfiguration.routes.initialRouteName
      ) {
        return Promise.resolve(initialRouteState)
      }
      // validate assignment flow:
      const assignmentFlow = findAssignmentFlow(state)
      if (assignmentFlow && !isAssignmentFlowValid(assignmentFlow)) {
        return Promise.resolve(initialRouteState)
      }
    }
    return Promise.resolve(state)
  }
}

export default persistReducer(persistConfig, navReducer)