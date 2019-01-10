//@flow
import React             from 'react'
import { ScrollView }    from 'react-native'
import { SafeAreaView }  from 'react-navigation'
import User              from './../../../containers/User'
import styles            from '../styles'
import Banner            from '../../../components/MinifiedBanner'
import ToolScreenContent from '../containers/ToolScreenContentContainer'

const shouldShowUserProgressWithUser = (user: any): boolean =>
  user.forms.length > 0

type MyJourneyProps = {
  component: string,
  reward: string,
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
    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={styles.container}
      >
        <ScrollView
          ref={ref => (this._scrollView = ref)}
          style={[styles.container, styles.background]}
        >
          <Banner />
          <User>
            {({ userState, isLoggedIn }) =>
              isLoggedIn && (
                <React.Fragment>
                  {shouldShowUserProgressWithUser(userState) && (
                    <React.Fragment>
                      <ToolScreenContent />
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
