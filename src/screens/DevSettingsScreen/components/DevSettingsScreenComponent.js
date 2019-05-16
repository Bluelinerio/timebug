// @flow
import React             from 'react'
import { View, Text }    from 'react-native'
import NotificationsList from '../containers/NotificationsListContainer'
import styles            from '../styles'

class DevSettingsScreenComponent extends React.PureComponent {
  render() {
    return (
      <View style={[styles.container, styles.padded]}>
        <Text style={styles.disclaimer}>
          These are Dev only settings, if you are seeing this please report
          immediately to the developers
        </Text>
        <NotificationsList />
      </View>
    )
  }
}

export default DevSettingsScreenComponent
