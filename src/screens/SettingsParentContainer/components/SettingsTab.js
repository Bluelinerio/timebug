// @flow
import React                            from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { CHECKINS, SETTINGS, DEV }      from '../constants'
import type { ProvidedContextState }    from '../types'
import styles                           from '../styles'

class SettingsTab extends React.PureComponent<ProvidedContextState> {
  render() {
    const { selected, openSettings, openCheckins, openDevelopment } = this.props
    return (
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabBarElement} onPress={openSettings}>
          <Text
            style={[
              styles.tabBarText,
              selected === SETTINGS ? styles.selected : {},
            ]}
          >
            Settings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabBarElement} onPress={openCheckins}>
          <Text
            style={[
              styles.tabBarText,
              selected === CHECKINS ? styles.selected : {},
            ]}
          >
            Check - ins
          </Text>
        </TouchableOpacity>
        {__DEV__ && (
          <TouchableOpacity
            style={styles.tabBarElement}
            onPress={openDevelopment}
          >
            <Text
              style={[
                styles.tabBarText,
                selected === DEV ? styles.selected : {},
              ]}
            >
              Developer
            </Text>
          </TouchableOpacity>
        )}
      </View>
    )
  }
}

export default SettingsTab
