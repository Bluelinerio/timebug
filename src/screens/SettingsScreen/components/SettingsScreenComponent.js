import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import styles from '../styles'

class SettingsScreenComponent extends React.PureComponent {
  render() {
    return (
      <SafeAreaView
        forceInset={{ top: 'always', bottom: 'never' }}
        style={styles.container}
      >
        <View>
          <Text>SettingsScreen</Text>
        </View>
      </SafeAreaView>
    )
  }
}

export default SettingsScreenComponent
