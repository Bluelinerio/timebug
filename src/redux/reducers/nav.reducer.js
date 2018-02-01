import { RootNavigator, root } from '../../navigation/navigation';

const HomeScreenState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams(root.options.initialRouteName)
);
const initialState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams('Walkthrough'), HomeScreenState
)

function navReducer(state = initialState, action) {
  const newState = RootNavigator.router.getStateForAction(action, state);
  return newState || state;
}


import storage from 'redux-persist/lib/storage';
import { persistReducer, createMigrate } from 'redux-persist';

const migrate = (state) => {
    debugger
    return initialState
}
const migrations = {
  0: migrate,
  1: migrate
}

const persistConfig = {
	key:'nav',
  storage: storage,
  version: 1,
  migrate: createMigrate(migrations, { debug: true }),
}

export default persistReducer(persistConfig, navReducer);
