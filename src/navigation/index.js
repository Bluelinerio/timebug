import { Platform } from 'react-native'
import { StackNavigator, NavigationActions } from 'react-navigation'
import React from 'react'

import CardStackStyleInterpolator         from '../utils/CustomCardStackStyleInterpolator'
import HomeScreen                         from '../screens/HomeScreen'
import StepScreen                         from '../screens/StepScreen'
import AssignmentLeadInScreen             from '../screens/AssignmentLeadInScreen'
import AssignmentDoneScreen               from '../screens/AssignmentDoneScreen'
import WorkBookScreen                     from '../screens/WorkBookScreen'
import WalkthroughScreen                  from '../screens/WalkthroughScreen';
import DashboardScreen                    from '../screens/Dashboard'
import { uriPrefix }                      from '../constants'
import routes                             from './routes';

if(!routes || !routes.root ||!routes.root.initialRouteName || !routes.step) { 
  throw 'missing routes or nested fields ' + JSON.stringify(routes) 
}

// TODO: there's an issue with moving from the current setup where the import of each screen gets you an object that looks like { screen: } rather than a component, so I added 
const AssignmentFlowNavigator = StackNavigator(
  {
    [routes.step.StepScreen]: {
      screen: StepScreen.screen,
    },
    [routes.step.AssignmentLeadInScreen]: {
      screen: AssignmentLeadInScreen.screen,
      path: 'leadin/:number'
    },
    [routes.step.WorkBookScreen]: {
      screen: WorkBookScreen.screen,
      path: 'workbook/:number'
    },
    [routes.step.AssignmentDoneScreen]: {
      screen: AssignmentDoneScreen.screen,
      path: 'finished/:number'
    },
  },
  {
    headerMode: 'screen',
    cardStyle: {
      backgroundColor: 'white',
      opacity: 1
    }
  }
)

export const rootConfiguration = {
  routes: routes.root,
  screens: {
    [routes.root.HomeScreen]: {
      screen: HomeScreen,
    },
    [routes.root.AssignmentFlow]: {
      screen: AssignmentFlowNavigator,
      path: 'step'
    },
    [routes.root.Walkthrough]: { 
      screen: WalkthroughScreen
    },
    [routes.root.Dashboard]: {
      screen: DashboardScreen,
      path: 'dashboard'
    }
  },
  options: {
    initialRouteName: routes.root.initialRouteName,
		mode: Platform.OS === 'ios' ? 'modal' : 'card',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: "white",
      opacity: 1
    },
  }
}

console.log(rootConfiguration);

export const RootNavigator = StackNavigator(rootConfiguration.screens, rootConfiguration.options)


// fix for debouncing
import { fixDebounce } from './util';
fixDebounce(RootNavigator)
fixDebounce(AssignmentFlowNavigator);
// remove once fixed...

const previousGetActionForPathAndParams = RootNavigator.router.getActionForPathAndParams;

Object.assign(RootNavigator.router, {
  getActionForPathAndParams(path, params) {
     const key = path.split('/')[1]
    if (key === 'step') {
      return NavigationActions.navigate({
        routeName: 'Profile',
        action: NavigationActions.navigate({
          // This child action will get passed to the child router
          // ProfileScreen.router.getStateForAction to get the child
          // navigation state.
          routeName: 'Friends',
        }),
      });
    }
    return previousGetActionForPathAndParams(path, params);
  },
});
