// @flow
import React, { PureComponent } from 'react'
import { StatusBar, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-navigation'

import Version from '../../../containers/Version'
import styles from '../styles'
import Banner from './Banner'

export default class HomeScreenComponent extends PureComponent {
  render() {
    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={styles.container}
      >
        <StatusBar barStyle="dark-content" backgroundColor={'white'} />
        <ScrollView style={{ flex: 1 }}>
          <Banner />
          <Version />
        </ScrollView>
      </SafeAreaView>
    )
  }
}
