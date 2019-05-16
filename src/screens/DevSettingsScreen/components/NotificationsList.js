// @flow
import React               from 'react'
import { View }            from 'react-native'
import NotificationElement from '../containers/NotificationElementContainer'
import styles              from '../styles'

type Props = {
  notifications: Array<any>,
}

class NotificationsList extends React.PureComponent<Props> {
  render() {
    const { notifications } = this.props
    return (
      <View style={styles.list}>
        {notifications &&
          notifications.map(notification => (
            <NotificationElement
              key={notification.id}
              notification={notification}
            />
          ))}
      </View>
    )
  }
}

export default NotificationsList
