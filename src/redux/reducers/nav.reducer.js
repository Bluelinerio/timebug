import { RootNavigator, root } from '../../navigation/navigation';

const initialState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams(root.options.initialRouteName)
);

export default function (state = initialState, action) {
  const newState = RootNavigator.router.getStateForAction(action, state);
  return newState || state;
}


import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
	key:'nav',
	storage: storage,
};

export default persistReducer(persistConfig, navReducer);
