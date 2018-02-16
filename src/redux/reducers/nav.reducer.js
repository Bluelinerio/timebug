import { 
  RootNavigator, 
  rootConfiguration,
  assignmentFlowConfiguration
} from '../../navigation';

debugger;
const initialRouteState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams(rootConfiguration.routes.initialRouteName)
);
const walkthroughState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams(rootConfiguration.routes.Walkthrough), initialRouteState
)

if(
  !initialRouteState ||
  !walkthroughState
) {
  throw 'nav reducer --expect state to be not nil'
}
const initialState = walkthroughState;

function navReducer(state = initialState, action) {
  const newState = RootNavigator.router.getStateForAction(action, state);
  return newState || state;
}


import storage from 'redux-persist/lib/storage';
import { persistReducer, createMigrate } from 'redux-persist';

const thisVersion = 8
const persistConfig = {
	key:'nav',
  storage: storage,
  version: thisVersion,
  migrate: (state, version) => {
    if (state) {
      if(!state.routes) {
        return Promise.resolve(initialRouteState)
      }
      // prevent from any navigation issue that may arise to override that the root view is always home:
      const initialRouteName = state.routes[0].routeName
      if(!initialRouteName /* this can happen sometimes! */ 
          || initialRouteName !== rootConfiguration.routes.initialRouteName) {
        return Promise.resolve(initialRouteState)
      }
      // validate assignment flow:
      const assignmentFlow = state.routes.find(route => route.routeName === rootConfiguration.routes.AssignmentFlow)
      
      if (assignmentFlow) {
        if(!assignmentFlow.params.stepId) {
          return Promise.resolve(initialRouteState)
        }
        // instead of migrating screen names, reset!
        const unregisteredRouteNames = assignmentFlow.routes.
          find(route => Object.keys(assignmentFlowConfiguration.screens)
            .includes(route.routeName) === false 
          )
        if (unregisteredRouteNames) {
          return Promise.resolve(initialRouteState)
        }
      }
    }
    return Promise.resolve(state)    
  }
}

export default persistReducer(persistConfig, navReducer);
