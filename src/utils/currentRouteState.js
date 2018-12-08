export const getCurrentRouteState = navigationState => {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteState(route)
  }
  return route
}

export const getCurrentRouteStateParams = (
  navigationState,
  currentState = {}
) => {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  const state = { ...route.params, ...currentState }
  // dive into nested navigators
  if (route.routes) {
    return {
      ...state,
      ...getCurrentRouteStateParams(route, state),
    }
  }
  return state
}
