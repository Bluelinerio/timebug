import React from 'react';
import {StackNavigator,} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'
import FirstScreen from "./screens/FirstScreen";
import DayIntroducing from "./screens/DayIntroducing";
import DayAssignments from "./screens/DayAssignments";

const Navigator = StackNavigator({
    Home: {screen: FirstScreen},
    DayIntroducing: {screen: DayIntroducing},
    DayAssignments: {screen: DayAssignments}
  },
  {
    cardStyle: {
      backgroundColor: 'white',
      opacity: 1
    },
    transitionConfig: () => ({
      screenInterpolator: (sceneProps) => {
        if (['DayAssignments'].indexOf(sceneProps.navigation.state.routes[sceneProps.navigation.state.routes.length - 1].routeName) !== -1) {
          return CardStackStyleInterpolator.forVertical(sceneProps)
        }
        return CardStackStyleInterpolator.forHorizontal(sceneProps)
      }
    }),
  });

export default Navigator;