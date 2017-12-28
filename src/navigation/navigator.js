import { Platform } from 'react-native'
import { StackNavigator } from 'react-navigation'
import React from 'react'
import CardStackStyleInterpolator from '../utils/CustomCardStackStyleInterpolator'
import HomeScreen from '../screens/HomeScreen'
import StepScreen from '../screens/StepScreen'
import AssignmentLeadInScreen from '../screens/AssignmentLeadInScreen'
import AssignmentDoneScreen from '../screens/AssignmentDoneScreen'
import WorkBookScreen from '../screens/WorkBookScreen'
import { uriPrefix } from '../constants'

// TODO: there's an issue with moving from the current setup where the import of each screen gets you an object that looks like { screen: } rather than a component, so I added 
const AssignmentFlowNavigator = StackNavigator(
  {
    StepScreen: {
      screen: StepScreen.screen,
    },
    AssignmentLeadInScreen: {
      screen: AssignmentLeadInScreen.screen,
      path: 'leadin/:number'
    },
    WorkBookScreen: {
      screen: WorkBookScreen.screen,
      path: 'workbook/:number'
    },
    AssignmentDoneScreen: {
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


export const initialRouteName = 'HomeScreen'
const Main = StackNavigator(
  {
    HomeScreen : {
      screen: HomeScreen,
    },
    AssignmentFlow: {
      screen: AssignmentFlowNavigator,
      path: 'step'
    }
  },
  {
    initialRouteName:HomeScreen,
		mode: Platform.OS === 'ios' ? 'modal' : 'card',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: "white",
      opacity: 1
    },
  }
);

const previousGetActionForPathAndParams = Main.router.getActionForPathAndParams;

Object.assign(Main.router, {
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


export default Main;