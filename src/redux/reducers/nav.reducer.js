import { RootNavigator, root } from '../../navigation/navigation';

const initialState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams(root.options.initialRouteName)
);

export default function (state = initialState, action) {
  const newState = RootNavigator.router.getStateForAction(action, state);
  return newState || state;
}
