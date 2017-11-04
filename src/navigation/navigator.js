import { StackNavigator } from "react-navigation";
import React from "react";
import CardStackStyleInterpolator from "../utils/CustomCardStackStyleInterpolator";
import HomeScreen from "../screens/HomeScreen";
import StepScreen from "../screens/StepScreen";
import AssignmentsScreen from "../screens/AssignmentsScreen";
import CongratulationsScreen from "../screens/CongratulationsScreen";
import WorkBookScreen from "../screens/WorkBookScreen";

export const initialRouteName = "HomeScreen";

// TODO: there's an issue with moving from the current setup where the import of each screen gets you an object that looks like { screen: } rather than a component, so I added 
const Navigator = StackNavigator(
  {
    HomeScreen : {
      screen: HomeScreen.screen,
    } ,
    StepScreen: {
      screen: StepScreen.screen,
      path: 'step/:number'
    },
    AssignmentsScreen: {
      screen: AssignmentsScreen.screen,
      path: 'step/leadin/:number'
    },
    CongratulationsScreen: {
      screen: CongratulationsScreen.screen,
      path: 'step/finished/:number'
    },
    WorkBookScreen: {
      screen: WorkBookScreen.screen,
      path: 'step/workbook/:number'
    },
  },
  {
    initialRouteName,
    headerMode: "screen",
    cardStyle: {
      backgroundColor: "white",
      opacity: 1
    },
    transitionConfig: () => ({
      screenInterpolator: sceneProps => {
        if (
          ["StepScreen", "HomeScreen"].indexOf(
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
  }
);

export default Navigator;
