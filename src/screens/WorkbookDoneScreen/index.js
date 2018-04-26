import React                                   from 'react'
import { Button, View, Platform, StyleSheet }  from 'react-native'
import { HeaderBackButton, NavigationActions } from 'react-navigation'
import screen                                  from './containers/WorkbookDoneScreenContainer'
import { reset }                               from '../../redux/actions/nav.actions'
import styles                                  from '../styles'
import NavigationCloseButton                   from '../../components/NavigationCloseButton'

screen.navigationOptions = ({
  navigation: { dispatch, state: { params: { stepColor } } }
}) => {
  return {
    headerRight: <NavigationCloseButton onPress={() => dispatch(reset())} />,
    headerStyle: {
      ...StyleSheet.flatten(styles.navigationOptionHeaderStyle),
      backgroundColor: stepColor,
      borderBottomColor: 'transparent',
      shadowOpacity: 0,
      shadowColor: 'transparent'
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

export default {
  screen
}
