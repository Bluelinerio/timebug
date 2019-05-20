// @flow
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../styles'

type Props = {
  type: string,
  text: string,
  trigger: number => void,
  notificationId: number,
}

class NotificationElement extends React.PureComponent<Props> {
  _triggerNotification = () => {
    const { trigger, notificationId } = this.props
    trigger(notificationId)
  }

  render() {
    const { type, text } = this.props
    return (
      <View style={[styles.container, styles.notification]}>
        <View style={styles.notificationTextContainer}>
          <Text style={styles.notificationText}>{text}</Text>
          <Text style={styles.notificationType}>{type}</Text>
        </View>
        <TouchableOpacity
          style={styles.triggerButton}
          onPress={this._triggerNotification}
        >
          <Text style={styles.triggerText}>Trigger</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default NotificationElement
