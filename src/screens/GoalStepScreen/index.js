// @flow
import React                                   from 'react'
import { HeaderBackButton, NavigationActions } from 'react-navigation'
import screen                                  from './containers/GoalStepScreenContainer'
import { headerColor }                         from './styles'

screen.navigationOptions = ({ navigation: { dispatch } }) => {
  return {
    headerStyle: {
      backgroundColor: headerColor
    },
    headerTintColor: 'white',
    headerLeft: (
      <HeaderBackButton
        tintColor="white"
        onPress={() => dispatch(NavigationActions.back())}
      />
    )
  }
}

export default screen
