//@flow
import React                 from 'react'
import { ScrollView, View }  from 'react-native'
import { SafeAreaView }      from 'react-navigation'
import User                  from '2020_containers/User'
import Banner                from '2020_components/MinifiedBanner'
import styles                from '../styles'
import ToolScreenContent     from '../containers/ToolScreenContentContainer'
import PhaseProgress         from '../containers/PhaseProgressContainer'
import ScreenLockedComponent from './ScreenLockedComponent'

const shouldShowUserProgressWithUser = (user: any): boolean =>
  user.forms.length > 0

class MyJourneyScreenComponent extends React.PureComponent {
  render() {
    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={styles.container}
      >
        <ScrollView
          ref={ref => (this._scrollView = ref)}
          style={[styles.container, styles.background]}
          stickyHeaderIndices={[0]}
        >
          <View style={styles.stickyHeader}>
            <Banner />
            <PhaseProgress />
          </View>
          <User>
            {({ userState, isLoggedIn }) =>
              isLoggedIn ? (
                <React.Fragment>
                  {shouldShowUserProgressWithUser(userState) ? (
                    <React.Fragment>
                      <ToolScreenContent />
                    </React.Fragment>
                  ) : (
                    <ScreenLockedComponent
                      text={'You need to complete some steps first!'}
                    />
                  )}
                </React.Fragment>
              ) : (
                <ScreenLockedComponent
                  text={'You need to log in to see this content!'}
                />
              )
            }
          </User>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default MyJourneyScreenComponent
