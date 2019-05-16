// @flow
import { connect } from 'react-redux'
import { mapProps, compose } from 'recompose'
import { notificationTypes } from '2020_services/notifications'
import { triggerNotification } from '2020_redux/actions/notifications.actions'
import NotificationsElement from '../components/NotificationElement'
import type { Props as ComponentProps } from '../components/NotificationElement'

const mapDispatchToProps = (dispatch: any) => ({
  dispatchNotification: (notificationId: string) =>
    dispatch(triggerNotification({ notificationId })),
})

const handleCheckinNotification = (notification): ComponentProps => {
  const { data, id: notificationId } = notification
  const { message } = data
  const type = 'Checkin notification'
  return {
    notificationId,
    text: message,
    type,
  }
}

const handleGoalNotification = (notification): ComponentProps => {
  const { data, id: notificationId } = notification
  const { message } = data
  const type = 'Goal notification'
  return {
    notificationId,
    text: message,
    type,
  }
}

const handleNotification = (notification, trigger): ComponentProps => {
  const { type } = notification
  switch (type) {
  case notificationTypes.CHECKIN_NOTIFICATION:
    return {
      ...handleCheckinNotification(notification),
      trigger,
    }
  case notificationTypes.GOAL_NOTIFICATION:
    return {
      ...handleGoalNotification(notification),
      trigger,
    }
  default:
    return {
      text: 'Unknown notification',
      type: 'UNREGISTERED',
      trigger: () => null,
    }
  }
}

const merge = (props: any) => {
  const { notification, dispatchNotification } = props
  return handleNotification(notification, dispatchNotification)
}

export default compose(connect(null, mapDispatchToProps), mapProps(merge))(
  NotificationsElement
)
