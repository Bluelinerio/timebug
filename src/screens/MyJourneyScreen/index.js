import React                                   from 'react'
import { View, Text, StyleSheet, StatusBar }              from 'react-native'
import { HeaderBackButton, NavigationActions, StackNavigator } from 'react-navigation'
import styles                                  from '../styles'

const MyJourneyScreenContainer = (props) => (
    <View>
        <Text>
            MyJourney
        </Text>
    </View>
)

MyJourneyScreenContainer.navigationOptions = ({
  navigation: { dispatch }
}) => {
  return {
    title: 'My Journey',
    headerStyle: {
      height: 64,
      backgroundColor: '#005587'
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
