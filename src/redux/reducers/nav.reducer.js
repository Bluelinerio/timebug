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
import { persistReducer } from 'redux-persist';

const persistConfig = {
	key:'nav',
  storage: storage,
  //migrate: (state) => Promise.resolve(initialState)
};


export default persistReducer(persistConfig, navReducer);
