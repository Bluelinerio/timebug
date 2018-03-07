import { Platform } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import React from 'react';

import CardStackStyleInterpolator from '../utils/CustomCardStackStyleInterpolator';
import HomeScreen from '../screens/HomeScreen';
import StepScreen from '../screens/StepScreen';
import AssignmentLeadInScreen from '../screens/AssignmentLeadInScreen';
import WorkbookDoneScreen from '../screens/WorkbookDoneScreen';
import WorkbookScreen from '../screens/WorkbookScreen';
import WalkthroughScreen from '../screens/WalkthroughScreen';
import DashboardScreen from '../screens/DashboardScreen';
import MeditationScreen from '../screens/MeditationScreen';
import { uriPrefix } from '../constants';
import routes from './routes';

if (!routes || !routes.root || !routes.root.initialRouteName || !routes.step) {
  throw 'missing routes or nested fields ' + JSON.stringify(routes);
}

// TODO: there's an issue with moving from the current setup where the import of each screen gets you an object that looks like { screen: } rather than a component, so I added
export const assignmentFlowConfiguration = {
  routes: routes.step,
  screens: {
    [routes.step.StepScreen]: {
      screen: StepScreen.screen
    },
    [routes.step.AssignmentLeadInScreen]: {
      screen: AssignmentLeadInScreen.screen,
      path: 'leadin/:number'
    },
    [routes.step.WorkbookScreen]: {
      screen: WorkbookScreen.screen,
      path: 'workbook/:number'
    },
    [routes.step.WorkbookDoneScreen]: {
      screen: WorkbookDoneScreen.screen,
      path: 'finished/:number'
    }
  },
  options: {
    headerMode: 'screen',
    cardStyle: {
      backgroundColor: 'white',
      opacity: 1
    }
  }
};

const AssignmentFlowNavigator = StackNavigator(
  assignmentFlowConfiguration.screens,
  assignmentFlowConfiguration.options
);

export const rootConfiguration = {
  routes: routes.root,
  screens: {
    [routes.root.HomeScreen]: {
      screen: HomeScreen
    },
    [routes.root.AssignmentFlow]: {
      screen: AssignmentFlowNavigator,
      path: 'step'
    },
    [routes.root.Walkthrough]: {
      screen: WalkthroughScreen
    },
    [routes.root.DashboardScreen]: {
      screen: DashboardScreen,
      path: 'dashboard'
    },
    [routes.root.MeditationScreen]: {
      screen: MeditationScreen
    }
  },
  options: {
    initialRouteName: routes.root.initialRouteName,
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: 'white',
      opacity: 1
    }
  }
};

export const RootNavigator = StackNavigator(
  rootConfiguration.screens,
  rootConfiguration.options
);

// fix for debouncing
import { fixDebounce } from './util';
fixDebounce(RootNavigator);
fixDebounce(AssignmentFlowNavigator);
// remove once fixed...

const previousGetActionForPathAndParams =
  RootNavigator.router.getActionForPathAndParams;

Object.assign(RootNavigator.router, {
  getActionForPathAndParams(path, params) {
    const key = path.split('/')[1];
    if (key === 'step') {
      return NavigationActions.navigate({
        routeName: 'Profile',
        action: NavigationActions.navigate({
          // This child action will get passed to the child router
          // ProfileScreen.router.getStateForAction to get the child
          // navigation state.
          routeName: 'Friends'
        })
      });
    }
    return previousGetActionForPathAndParams(path, params);
  }
});
