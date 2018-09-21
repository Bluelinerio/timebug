//@flow
import { connect }             from 'react-redux'
import { linkNavigation }      from '../../../redux/actions/nav.actions'
import { changeCheckin }       from '../../../redux/actions/checkin.actions'
import { cancelNotifications } from '../../../redux/actions/notifications.actions'
import selectors               from '../../../redux/selectors'
import CheckinListComponent, {
  CheckinListComponentProps
}                              from '../components/CheckinListComponent'

type CheckinListDispatchProps = {
  updateCheckin: () => any,
  linkNavigation: () => any,
  cancelAllNotifications: () => any
}

type CheckingListStateProps = {
  checkins: any
}

const mapStateToProps = (state: any): CheckingListStateProps => {
  const checkins = selectors.getCheckins(state)
  return {
    checkins
  }
}

const mapDispatchToProps = (dispatch: () => any): CheckinListDispatchProps => ({
  updateCheckin: (params: any) => dispatch(changeCheckin(params)),
  linkNavigation: (params: { link: string }) =>
    dispatch(linkNavigation(params)),
  cancelAllNotifications: () => dispatch(cancelNotifications())
})

const mergeProps = (
  stateProps: CheckingListStateProps,
  dispatchProps: CheckinListDispatchProps
): CheckinListComponentProps => {
  const { checkins } = stateProps
  const {
    updateCheckin,
    cancelAllNotifications,
    linkNavigation
  } = dispatchProps

  const handleLink = (payload: any) => {
    const { link } = payload
    linkNavigation({ link })
  }

  const handleCheckinAction = (checkin: any) => {
    const { action: { type, payload } } = checkin
    switch (type) {
      case 'link':
        return () => handleLink(payload)
      default:
        return () => null
    }
  }

  const actualCheckins = Object.keys(checkins).reduce(
    (unlockedCheckins, key) => {
      const checkin = checkins[key]
      return [
        ...unlockedCheckins,
        {
          ...checkin,
          onLink: handleCheckinAction(checkin),
          onPress: updateCheckin,
          step: key
        }
      ]
    },
    []
  )

  return {
    checkins: actualCheckins,
    cancelAllNotifications: __DEV__ ? cancelAllNotifications : null
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  CheckinListComponent
)
