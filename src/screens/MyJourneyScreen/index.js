import React                                                    from 'react'
import { View, Text, StyleSheet, StatusBar }                    from 'react-native'
import { HeaderBackButton, NavigationActions, StackNavigator }  from 'react-navigation'
import styles                                                   from '../styles'
import User                                                     from './../../containers/User'
import ProgressDashboardCell                                    from './../HomeScreen/components/DashboardCells/ProgressDashboardCell'

//TODO: Migrate ProgressDashboardCell 
const shouldShowUserProgressWithUser = user => user.forms.length > 3

const MyJourneyScreenContainer = (props) => (
    <View>
        <User>
            {
                ({ userState, isLoggedIn }) => (
                    <React.Fragment>        
                        {
                            isLoggedIn &&
                                shouldShowUserProgressWithUser(userState) && (
                                    <ProgressDashboardCell />
                                )
                        }
                    </React.Fragment>
                )
            }
        </User>
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
