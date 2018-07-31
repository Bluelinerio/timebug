import React                    from 'react'
import { StyleSheet }           from 'react-native'
import {
  HeaderBackButton,
  NavigationActions,
  StackNavigator
}                               from 'react-navigation'
import styles                   from './styles'
import MyJourneyScreenContainer from './containers/MyJourneyScreenContainer'

const headerTitle = 'My Journey'

MyJourneyScreenContainer.navigationOptions = ({
  navigation: { dispatch }
}) => ({
  title: headerTitle,
  headerStyle: {
    ...StyleSheet.flatten(styles.header)
  },
  headerTintColor: 'white',
  headerLeft: (
    <HeaderBackButton
      tintColor="white"
      onPress={() => dispatch(NavigationActions.back())}
    />
  )
})

const MyJourneyScreen = StackNavigator(
  {
    Markdown: MyJourneyScreenContainer
  },
  {
    headerMode: 'screen',
    cardStyle: {
      backgroundColor: 'white',
      opacity: 1
    }
  }
)

export default MyJourneyScreen
