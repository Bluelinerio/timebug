// @flow
import React, { PureComponent }              from 'react'
import { StatusBar, ScrollView, View, Text } from 'react-native'
import { SafeAreaView }                      from 'react-navigation'
import Version                               from '2020_containers/Version'
import Banner                                from '2020_components/MinifiedBanner'
import GreetingComponent                     from '../containers/GreetingComponentContainer'
import InsightComponent                      from '../containers/InsightContainer'
import CheckinAreaComponent                  from '../containers/CheckinAreaContainer'
import ProgressAreaComponent                 from './ProgressAreaComponent'
import styles                                from '../styles'

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
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.scroll}
          stickyHeaderIndices={[0]}
        >
          <View style={styles.header}>
            <Banner />
          </View>
          <View style={[styles.container, styles.background, styles.mainDashboardContainer]}>
            <View style={[styles.container, styles.contentContainer]}>
              {isLogged ? (
                <React.Fragment>
                  <GreetingComponent />
                  <CheckinAreaComponent />
                  <InsightComponent />
                  <ProgressAreaComponent />
                </React.Fragment>
              ) : (
                <View>
                  <Text style={styles.greeting}>Good morning!</Text>
                  <Text style={styles.greetingSub}>
                    Please sign up to get the most out of the app
                  </Text>
                </View>
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
