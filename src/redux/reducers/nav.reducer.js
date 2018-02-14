import { RootNavigator, root } from '../../navigation/navigation';

const homeScreenState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams(root.options.initialRouteName)
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
    const assignmentFlow = state.routes.find(route => route.routeName === root.routes.AssignmentFlow)
    if(assignmentFlow && !assignmentFlow.params.stepId) {
      return Promise.resolve(homeScreenState)
    }
    return Promise.resolve(state)    
  }
}

export default persistReducer(persistConfig, navReducer);
