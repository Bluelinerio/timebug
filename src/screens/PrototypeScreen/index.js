// @flow
import React from 'react'
import PrototypeScreen from './containers/PrototypeScreenContainer'
import User from '../../containers/User'
import DefaultIndicator from '../../components/DefaultIndicator'
import {
  StackNavigator,
  HeaderBackButton,
  NavigationActions
} from 'react-navigation'
import { headerBackgroundColor } from './styles'
import GoalFormScreen from './containers/GoalFormContainer'
import { protoRoutes as routes } from '../../navigation/routes'
/**
 * Ui reducer screen key
 */
export const screenKey = 'PrototypeScreen'

const Screen = () => {
  return (
    <User
      renderWithUser={() => <PrototypeScreen />}
      renderWithAnonymous={() => <PrototypeScreen />}
      renderWithAuthenticating={() => <DefaultIndicator size="large" />}
      renderWithUndetermined={() => <DefaultIndicator size="large" />}
    />
  )
}

export const PrototypeNavigatorConfiguration = {
  routes: routes.proto,
  screens: {
    [routes.proto.PrototypeScreen]: {
      screen: Screen
    },
    [routes.proto.GoalFormScreen]: {
      screen: GoalFormScreen
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
