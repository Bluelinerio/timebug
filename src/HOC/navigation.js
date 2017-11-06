import { NavigationActions } from 'react-navigation';

const config = {};

export function setNavigator(nav) {
  if (nav) {
    config.navigator = nav;
  }
}

export function navigate(routeName, params) {
  if (config.navigator && routeName) {
    let action = NavigationActions.navigate({
      routeName,
      params,
    });
    config.navigator.dispatch(action);
  }
}

//TODO: Refactor
export function navigateToStack(navigator, params, routeName) {
  if (config.navigator && routeName) {
    let action = NavigationActions.navigate({
      routeName: navigator,
      params,
      action: NavigationActions.init({ routeName }, params)
    });
    config.navigator.dispatch(action);
  }
}

export function goBack() {
  if (config.navigator) {
    let action = NavigationActions.back();
    config.navigator.dispatch(action);
  }
}

export function reset(routeName, params) {
  if (config.navigator) {
    const resetAction = NavigationActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({
          routeName,
          params,
        }),
      ],
    });
    config.navigator.dispatch(resetAction);

  }
}

