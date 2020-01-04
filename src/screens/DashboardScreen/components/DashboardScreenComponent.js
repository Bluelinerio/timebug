// @flow
import React, { PureComponent } from 'react'
import { StatusBar, ScrollView, View } from 'react-native'
import Text from '2020_components/Text'
import { SafeAreaView } from 'react-navigation'
import Version from '2020_containers/Version'
import Banner from '2020_components/MinifiedBanner'
import GreetingComponent from '../containers/GreetingComponentContainer'
import InsightComponent from '../containers/InsightContainer'
import CheckinAreaComponent from '../containers/CheckinAreaContainer'
import ProgressAreaComponent from './ProgressAreaComponent'
import SignInButton from '../containers/SignInButtonContainer'
import styles from '../styles'
import GreetingModal from '../../../components/GreetingModal'

type Props = {
  isLogged: boolean,
}

class StartScreenComponent extends PureComponent<Props> {
  render() {
    const { isLogged } = this.props
    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={styles.container}
      >
        <StatusBar barStyle="dark-content" backgroundColor={'white'} />
        <GreetingModal />
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.scroll}
          stickyHeaderIndices={[0]}
        >
          <View style={styles.header}>
            <Banner />
          </View>
          <View
            style={[
              styles.container,
              styles.background,
              styles.mainDashboardContainer,
            ]}
          >
            <View style={[styles.container, styles.contentContainer]}>
              {isLogged ? (
                <React.Fragment>
                  <GreetingComponent />
                  <CheckinAreaComponent />
                  <InsightComponent />
                  <ProgressAreaComponent />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <GreetingComponent />
                  <View style={styles.notLoggedContainer}>
                    <Text style={styles.greetingSub}>
                      Please log in with your Facebook account to begin using
                      the app.
                    </Text>
                    <SignInButton />
                  </View>
                </React.Fragment>
              )}
            </View>
            <Version />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default StartScreenComponent
