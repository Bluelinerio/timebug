//@flow
import { connect } from 'react-redux'

import { linkNavigation } from '../../../redux/actions/nav.actions'
import {
  changeCheckin,
  toggleCheckin,
} from '../../../redux/actions/checkin.actions'
import type {
  CheckinChangePayload,
  ToggleCheckinPayload,
} from '../../../redux/actions/checkin.actions'
import { cancelNotifications } from '../../../redux/actions/notifications.actions'
import selectors from '../../../redux/selectors'
import CheckinListComponent, {
  CheckinListComponentProps,
} from '../components/CheckinListComponent'

type CheckinListDispatchProps = {
  updateCheckin: CheckinChangePayload => any,
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

  return {
    checkins,
    stepColors,
    user,
    steps,
  }
}

const mapDispatchToProps = (dispatch: () => any): CheckinListDispatchProps => ({
  updateCheckin: params => dispatch(changeCheckin(params)),
  linkNavigation: params => dispatch(linkNavigation(params)),
  cancelAllNotifications: () => dispatch(cancelNotifications()),
  toggleNotification: params => dispatch(toggleCheckin(params)),
})

const mergeProps = (
  stateProps: CheckingListStateProps,
  dispatchProps: CheckinListDispatchProps,
): CheckinListComponentProps => {
  const { checkins, stepColors, user, steps } = stateProps
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

  const checkIfHasNestedObjects = (checkin, step) => {
    const { nextCheckin, id } = checkin

    const nestedObjects = Object.keys(checkin).reduce((nestedObjects, key) => {
      const prop = checkin[key]

      if ((prop instanceof Object) && prop.title) {
        const realCheckin = {
          ...prop,
          id,
          nextCheckin,
        }

        return [
          ...nestedObjects,
          {
            ...realCheckin,
            onLink: handleCheckinAction(realCheckin),
            onToggle: toggleNotification,
            onPress: updateCheckin,
            step: steps[step],
          },
        ]
      } else {
        return [...nestedObjects]
      }
    }, [] )

    return nestedObjects
  }

  const actualCheckins = Object.keys(checkins).reduce(
    (unlockedCheckins, key) => {
      const checkin = checkins[key]
      const nestedObjects = checkIfHasNestedObjects(checkin, key,)
      const realCheckin = {
        ...checkin,
        onLink: handleCheckinAction(checkin),
        onToggle: toggleNotification,
        onPress: updateCheckin,
        step: steps[key],
      }

      if (checkin.title) {
        return [
          ...unlockedCheckins,
          ...nestedObjects,
          realCheckin,
        ]
      } else {
        return [
          ...unlockedCheckins,
          ...nestedObjects,
        ]
      }
    },
    []
  )

  return {
    checkins: actualCheckins,
    cancelAllNotifications: __DEV__ ? cancelAllNotifications : null,
    stepColors,
    user,
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  CheckinListComponent
)
