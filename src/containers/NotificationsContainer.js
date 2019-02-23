// @flow
import React                    from 'react'
import tron                     from 'reactotron-react-native'
import { connect }              from 'react-redux'
import { notificationReceived } from '../redux/actions/notifications.actions'
import NotificationService      from '../services/notifications'

type DispatchProps = {
  notificationReceived: any => any,
}

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  notificationReceived: (payload) => dispatch(notificationReceived(payload)),
})

const mergeProps = (_, dispatchProps: DispatchProps) => {
  const { notificationReceived } = dispatchProps

  const onRegister = token => {
    tron.log('OnRegister')
    tron.log(token)
  }

  const onNotification = notification => {
    tron.log('OnNotification')
    tron.log(notification)
    const { additionalProps } = notification
    notificationReceived(additionalProps)
  }

  if (!NotificationService.callbacksSet) {
    NotificationService.setCallbacks(onRegister, onNotification)
  }

  return {}
}

const NotificationsContainer = connect(null, mapDispatchToProps, mergeProps)(
  () => null
)

export const withNotifications = Component => {
  const container = () => (
    <React.Fragment>
      <NotificationsContainer />
      <Component />
    </React.Fragment>
  )
  return container
}
