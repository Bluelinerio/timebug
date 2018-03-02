// DEBOUNCING!
// Fix for debouncing on the https://github.com/react-navigation/react-navigation/issues/271
// working fix for debouncing:
import { NavigationActions, StateUtils } from "react-navigation";

export const fixDebounce = navigator =>
  (navigator.router.getStateForAction = navigateOnce(
    navigator.router.getStateForAction
  ));

export const navigateOnce = getStateForAction => (action, state) => {
  const { type, routeName, params } = action;
  return state &&
    type === NavigationActions.NAVIGATE &&
    isEqualRoute({ routeName, params }, state.routes[state.routes.length - 1])
    ? null
    : getStateForAction(action, state);
  // you might want to replace 'null' with 'state' if you're using redux (see comments below)
};

// Official (but not working...)
import deepDiffer from "react-native/lib/deepDiffer";

export const getActiveRouteForState = navigationState =>
  navigationState.routes
    ? getActiveRouteForState(navigationState.routes[navigationState.index])
    : navigationState;

export const isEqualRoute = (route1, route2) => {
  if (route1.routeName !== route2.routeName) {
    return false;
  }

  return !deepDiffer(route1.params, route2.params);
};

const PATTERN_DRAWER_ROUTE_KEY = /^Drawer(Open|Close|Toggle)$/;
export const isDrawerRoute = route =>
  PATTERN_DRAWER_ROUTE_KEY.test(route.routeName);

export const withNavigationPreventDuplicate = getStateForAction => {
  const defaultGetStateForAction = getStateForAction;

  const getStateForActionWithoutDuplicates = (action, state) => {
    if (action.type === NavigationActions.NAVIGATE) {
      const previousRoute = getActiveRouteForState(StateUtils.back(state));
      const currentRoute = getActiveRouteForState(state);
      const nextRoute = action;

      if (
        isDrawerRoute(currentRoute) &&
        isEqualRoute(previousRoute, nextRoute)
      ) {
        return StateUtils.back(state); // Close drawer
      }

      if (isEqualRoute(currentRoute, nextRoute)) {
        return null;
      }
    }

    return defaultGetStateForAction(action, state);
  };

  return getStateForActionWithoutDuplicates;
};
