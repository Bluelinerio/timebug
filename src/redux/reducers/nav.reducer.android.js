import {
  RootNavigator,
  rootConfiguration,
  assignmentFlowConfiguration
} from "../../navigation";

const initialRouteState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams(
    rootConfiguration.routes.initialRouteName
  )
);
const walkthroughState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams(
    rootConfiguration.routes.Walkthrough
  ),
  initialRouteState
);

if (!initialRouteState || !walkthroughState) {
  throw "nav reducer --expect state to be not nil";
}
const initialState = initialRouteState;

export default function navReducer(state = initialState, action) {
  const newState = RootNavigator.router.getStateForAction(action, state);
  return newState || state;
}
