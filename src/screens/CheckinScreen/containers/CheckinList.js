//@flow
import { connect }             from 'react-redux'
import { linkNavigation }      from '../../../redux/actions/nav.actions'
import {
  updateOrCreateCheckin,
  toggleCheckin,
}                              from '../../../redux/actions/checkin.actions'
import type {
  NotificationUpdateOrCreatePayload,
  ToggleCheckinPayload,
}                              from '../../../redux/actions/checkin.actions'
import { cancelNotifications } from '../../../redux/actions/notifications.actions'
import selectors               from '../../../redux/selectors'
import CheckinListComponent, {
  CheckinListComponentProps,
}                              from '../components/CheckinListComponent'

type CheckinListDispatchProps = {
  updateCheckin: NotificationUpdateOrCreatePayload => any,
  linkNavigation: ({ link: string }) => any,
  cancelAllNotifications: () => any,
  toggleNotification: ToggleCheckinPayload => any,
}

type CheckingListStateProps = {
  checkins: any,
  stepColors: any,
  user: any,
  steps: any,
}

const mapStateToProps = (state: any): CheckingListStateProps => {
  const checkins = selectors.getCheckins(state)
  const stepColors = selectors.statefullStepColors(state)
  const user = selectors.getUser(state)
  const steps = selectors.steps(state)
  const isLoggedIn = selectors.isLoggedIn(state)

  return {
    checkins,
    stepColors,
    user,
    steps,
    isLoggedIn,
  }
}

const mapDispatchToProps = (dispatch: () => any): CheckinListDispatchProps => ({
  updateCheckin: params => dispatch(updateOrCreateCheckin(params)),
  linkNavigation: params => dispatch(linkNavigation(params)),
  cancelAllNotifications: () => dispatch(cancelNotifications()),
  toggleNotification: params => dispatch(toggleCheckin(params)),
})

const mergeProps = (
  stateProps: CheckingListStateProps,
  dispatchProps: CheckinListDispatchProps
): CheckinListComponentProps => {
  const { checkins, stepColors, user, steps, isLoggedIn } = stateProps
  const {
    updateCheckin,
    cancelAllNotifications,
    linkNavigation,
    toggleNotification,
  } = dispatchProps

  const handleLink = (payload: any) => {
    const { link } = payload
    linkNavigation({ link })
  }

  const handleCheckinAction = (checkin: any) => {
    const { action } = checkin
    if (action) {
      switch (action.type) {
      case 'link':
        return () => handleLink(action.payload)
      default:
        return () => null
      }
    }

    return () => null
  }

  const actualCheckins = Object.keys(checkins).reduce(
    (unlockedCheckins, key) => {
      const checkinsForStep = checkins[key]
      const checks = Object.keys(checkinsForStep).reduce(
        (allCheckinsForStep, k) => {
          const checkin = checkinsForStep[k]
          return [
            ...allCheckinsForStep,
            {
              ...checkin,
              onLink: handleCheckinAction(checkin),
              onToggle: toggleNotification,
              onPress: updateCheckin,
              step: steps[key],
            },
          ]
        },
        []
      )
      return [...unlockedCheckins, ...checks]
    },
    []
  )

  return {
    checkins: actualCheckins,
    isLoggedIn,
    cancelAllNotifications: __DEV__ ? cancelAllNotifications : null,
    stepColors,
    user,
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  CheckinListComponent
)
