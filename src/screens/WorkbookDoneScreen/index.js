import React                                   from 'react'
import { StyleSheet }                          from 'react-native'
import { HeaderBackButton, NavigationActions } from 'react-navigation'
import screen                                  from './containers/WorkbookDoneScreenContainer'
import { goBackFrom }                          from '../../redux/actions/nav.actions'
import styles                                  from '../styles'
import NavigationCloseButton                   from '../../components/NavigationCloseButton'
import routes                                  from '../../navigation/routes'

screen.navigationOptions = ({
  navigation: { dispatch, state: { params: { stepColor } } }
}) => {
  return {
    headerRight: (
      <NavigationCloseButton
        onPress={() => dispatch(goBackFrom(routes.root.AssignmentFlow))}
      />
    ),
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
