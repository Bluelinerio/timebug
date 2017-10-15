import React                      from 'react';
import { StackNavigator, }        from 'react-navigation';
import CardStackStyleInterpolator from '../utils/CustomCardStackStyleInterpolator'
import HomeScreen                 from "../screens/HomeScreen";
import TextScreen                 from "../screens/TextScreen";
import AssignmentsScreen          from "../screens/AssignmentsScreen";
import CongratulationsScreen      from "../screens/CongratulationsScreen";
import WorkBookScreen             from "../screens/WorkBookScreen";

export const initialRouteName = 'HomeScreen';

const Navigator = StackNavigator({
    HomeScreen,
    TextScreen,
    AssignmentsScreen,
    CongratulationsScreen,
    WorkBookScreen,
  },
  {
    initialRouteName,
    headerMode: 'screen',
    cardStyle: {
      backgroundColor: 'white',
      opacity: 1,
    },
    transitionConfig: () => ( {
      screenInterpolator: (sceneProps) => {
        if ([ 'TextScreen', 'HomeScreen' ].indexOf(sceneProps.navigation.state.routes[ sceneProps.navigation.state.routes.length - 1 ].routeName) !== -1) {
          return CardStackStyleInterpolator.forVertical(sceneProps)
        }
        return CardStackStyleInterpolator.forHorizontal(sceneProps)
      },
    } ),
  });

export default Navigator;
