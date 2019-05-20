// @flow
import React                       from 'react'
import { SafeAreaView }            from 'react-navigation'
import { View, ScrollView }        from 'react-native'
import CheckinList                 from '../../CheckinScreen/containers/CheckinList'
import SettingsScreen              from '../../SettingsScreen/components/SettingsScreenComponent'
import DevSettingsScreen           from '../../DevSettingsScreen'
import TopBar                      from '../containers/TopBarContainer'
import SettingsTab                 from '../containers/SettingsTabContainer'
import { CHECKINS, SETTINGS, DEV } from '../constants'
import type { SECTIONS }           from '../types'
import styles                      from '../styles'

type Props = {
  selected: SECTIONS,
}

class SettingsParentComponent extends React.PureComponent<Props> {
  render() {
    const { selected } = this.props
    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={styles.container}
      >
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.scroll}
        >
          <View>
            <TopBar />
            <SettingsTab />
          </View>
          <View style={[styles.container, styles.background, styles.padded]}>
            {selected === SETTINGS ? (
              <SettingsScreen />
            ) : selected === CHECKINS ? (
              <CheckinList />
            ) : selected === DEV ? (
              <DevSettingsScreen />
            ) : null}
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default SettingsParentComponent
