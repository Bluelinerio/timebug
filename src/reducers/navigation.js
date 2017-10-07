import navigator, { initialRouteName } from '../navigation/navigator';

const initialState = navigator.router.getStateForAction(
    navigator.router.getActionForPathAndParams(initialRouteName)
);

export default function (state = initialState, action) {
  const newState = navigator.router.getStateForAction(action, state);
  return newState || state;
}
