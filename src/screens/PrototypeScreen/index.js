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

export const routes = {
  proto: {
    PrototypeScreen: 'PrototypeScreen',
    initialRouteName: 'PrototypeScreen'
  }
}

export const PrototypeNavigatorConfiguration = {
  routes: routes.proto,
  screens: {
    [routes.proto.PrototypeScreen]: {
      screen: Screen
    }
  },
  options: {
    initialRouteName: routes.proto.initialRouteName,
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
