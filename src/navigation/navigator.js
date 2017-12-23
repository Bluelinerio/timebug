import { Platform } from 'react-native'
import { StackNavigator } from 'react-navigation'
import React from 'react'
import CardStackStyleInterpolator from '../utils/CustomCardStackStyleInterpolator'
import HomeScreen from '../screens/HomeScreen'
import StepScreen from '../screens/StepScreen'
import AssignmentLeadInScreen from '../screens/AssignmentLeadInScreen'
import AssignmentDoneScreen from '../screens/AssignmentDoneScreen'
import WorkBookScreen from '../screens/WorkBookScreen'

export const initialRouteName = 'HomeScreen'

// TODO: there's an issue with moving from the current setup where the import of each screen gets you an object that looks like { screen: } rather than a component, so I added 
const AssignmentFlowNavigator = StackNavigator(
  {
    StepScreen: {
      screen: StepScreen.screen,
      path: 'step/:number'
    },
    AssignmentLeadInScreen: {
      screen: AssignmentLeadInScreen.screen,
      path: 'step/leadin/:number'
    },
    WorkBookScreen: {
      screen: WorkBookScreen.screen,
      path: 'step/workbook/:number'
    },
    AssignmentDoneScreen: {
      screen: AssignmentDoneScreen.screen,
      path: 'step/finished/:number'
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

const Navigator = StackNavigator(
  {
    HomeScreen : {
      screen: HomeScreen.screen,
    },
    AssignmentFlow: {
      screen: AssignmentFlowNavigator,
    }
  },
  {
    initialRouteName,
		mode: Platform.OS === 'ios' ? 'modal' : 'card',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: "white",
      opacity: 1
    },
  }
);

export default Navigator;

const transitionConfig = () => ({
      screenInterpolator: sceneProps => {
        if (
          ['HomeScreen', 'AssignmentFlow'].indexOf(
            sceneProps.navigation.state.routes[
              sceneProps.navigation.state.routes.length - 1
            ].routeName
          ) !== -1
        ) {
          return CardStackStyleInterpolator.forVertical(sceneProps);
        }
        return CardStackStyleInterpolator.forHorizontal(sceneProps);
      }
    })