// @flow
import React                     from 'react'
import PrototypeScreen           from './containers/PrototypeScreenContainer'
import {
  StackNavigator,
  HeaderBackButton,
  NavigationActions
}                                from 'react-navigation'
import { headerBackgroundColor } from './styles'
import GoalFormScreen            from './containers/GoalFormContainer'
import GoalProtoScreen           from './components/GoalScreenComponent'
import { protoRoutes as routes } from '../../navigation/routes'
import HelpScreen                from '../HelpScreen'

/**
 * Ui reducer screen key
 */
export const screenKey = 'PrototypeScreen'

const Screen = () => {
  return <PrototypeScreen />
}

export const PrototypeNavigatorConfiguration = {
  routes: routes.proto,
  screens: {
    [routes.proto.PrototypeScreen]: {
      screen: Screen
    },
    [routes.proto.GoalFormScreen]: {
      screen: GoalFormScreen
    },
    [routes.proto.GoalProtoScreen]: {
      screen: GoalProtoScreen
    },
    [routes.proto.HelpScreen]: {
      screen: HelpScreen
    }
  },
  options: {
    initialRouteName: routes.proto.initialRouteName,
    headerMode: 'none',
    navigationOptions: ({ navigation: { dispatch } }) => ({
      headerStyle: {
        backgroundColor: headerBackgroundColor
      },
      headerTintColor: 'white',
      headerLeft: (
        <HeaderBackButton
          tintColor="#212121"
          onPress={() => dispatch(NavigationActions.back())}
        />
      )
    })
  }
}

const Navigator = StackNavigator(
  PrototypeNavigatorConfiguration.screens,
  PrototypeNavigatorConfiguration.options
)

export default Navigator
