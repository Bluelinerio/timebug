import React                                                    from 'react'
import { ScrollView, Text, StyleSheet, StatusBar }              from 'react-native'
import { HeaderBackButton, NavigationActions, StackNavigator }  from 'react-navigation'
import styles                                                   from '../styles'
import User                                                     from './../../containers/User'
import ProgressDashboardCell                                    from './../HomeScreen/components/DashboardCells/ProgressDashboardCell'
import PieProgressDashboardCell                                 from './../HomeScreen/components/DashboardCells/PieProgressDashboardCell'

//TODO: Migrate ProgressDashboardCell 
const shouldShowUserProgressWithUser = user => user.forms.length > 3

const ProgressDashboardCellContainer =  ({ userState, isLoggedIn }) => 
  isLoggedIn &&
    shouldShowUserProgressWithUser(userState)
    ? (
      <React.Fragment >
        <ProgressDashboardCell />
        <PieProgressDashboardCell />
      </React.Fragment>
    ) : null

const MyJourneyScreenContainer = (props) => (
    <ScrollView style={{ flex: 1 }}>
        <User>
          <ProgressDashboardCellContainer />
        </User>
    </ScrollView>
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
