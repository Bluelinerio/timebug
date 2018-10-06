//@flow
import React                     from 'react'
import { ScrollView }            from 'react-native'
import { SafeAreaView }          from 'react-navigation'
import User                      from './../../../containers/User'
import ProgressCellComponent     from './ProgressCellComponent'
import styles                    from '../styles'
import Banner                    from '../../../components/MinifiedBanner'
import UnlockedStepsCarouselCell from './UnlockedStepsCarouselCell'

const shouldShowUserProgressWithUser = (user: any): boolean =>
  user.forms.length > 0

type MyJourneyProps = {
  component: string,
  reward: string
}

class MyJourneyScreenComponent extends React.Component<MyJourneyProps> {
  shouldComponentUpdate(nextProps) {
    if (
      nextProps.component !== this.props.component ||
      nextProps.reward !== this.props.reward
    ) {
      this._scrollView.scrollToEnd({ animated: true })
      return true
    }
    return false
  }
  render() {
    const { component, reward } = this.props
    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={styles.container}
      >
        <ScrollView
          ref={ref => (this._scrollView = ref)}
          style={styles.container}
        >
          <Banner />
          <User>
            {({ userState, isLoggedIn }) =>
              isLoggedIn && (
                <React.Fragment>
                  {shouldShowUserProgressWithUser(userState) && (
                    <React.Fragment>
                      <ProgressCellComponent />
                      <UnlockedStepsCarouselCell
                        component={component}
                        reward={reward}
                      />
                    </React.Fragment>
                  )}
                </React.Fragment>
              )
            }
          </User>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default MyJourneyScreenComponent
