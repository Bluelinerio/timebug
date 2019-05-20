// @flow
import React                             from 'react'
import { View, Text }                    from 'react-native'
import ContactSettingContainer           from '../containers/ContactsSettingContainer'
import EmailNotificationSettingContainer from '../containers/EmailNotificationsSettingContainer'
import PushNotificationSettingContainer  from '../containers/PushNotificationSettingContainer'
import styles                            from '../styles'

class SettingsList extends React.PureComponent {
  render() {
    return (
      <View style={styles.settingsList}>
        <Text style={styles.settingTitle}>Settings</Text>
        <View>
          <PushNotificationSettingContainer />
          <EmailNotificationSettingContainer />
          <ContactSettingContainer />
        </View>
      </View>
    )
  }
}

export default SettingsList
