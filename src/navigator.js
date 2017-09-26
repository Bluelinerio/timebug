import React from 'react';
import {StackNavigator,} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'
import HomeScreen from "./screens/HomeScreen";
import TextScreen from "./screens/TextScreen";
import AssignmentsScreen from "./screens/AssignmentsScreen";
import CongratulationsScreen from "./screens/CongratulationsScreen";

const Navigator = StackNavigator({
    HomeScreen,
    TextScreen,
    AssignmentsScreen,
		CongratulationsScreen
  },
  {
    headerMode: 'screen',
    cardStyle: {
      backgroundColor: 'white',
      opacity: 1
    },
    transitionConfig: () => ({
      screenInterpolator: (sceneProps) => {
        if (['AssignmentsScreen'].indexOf(sceneProps.navigation.state.routes[sceneProps.navigation.state.routes.length - 1].routeName) !== -1) {
          return CardStackStyleInterpolator.forVertical(sceneProps)
        }
        return CardStackStyleInterpolator.forHorizontal(sceneProps)
      }
    }),
  });

export default Navigator;