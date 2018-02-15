import { RootNavigator, rootConfiguration } from '../../navigation';

const homeScreenState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams(rootConfiguration.routes.initialRouteName)
);
const walkthroughState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams('Walkthrough'), homeScreenState
)

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
    // prevent from any navigation issue that may arise to override that the root view is always home:
    const initialRouteName = state.routes[0].routeName
    if(!initialRouteName /* this can happen sometimes! */ 
        || initialRouteName !== rootConfiguration.routes.initialRouteName) {
      return Promise.resolve(homeScreenState)
    }
    // validate assignment flow:
    const assignmentFlow = state.routes.find(route => route.routeName === rootConfiguration.routes.AssignmentFlow)
    if (assignmentFlow && !assignmentFlow.params.stepId) {
      return Promise.resolve(homeScreenState)
    }
    return Promise.resolve(state)    
  }
}

export default persistReducer(persistConfig, navReducer);
