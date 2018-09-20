//@flow
import { connect }             from 'react-redux'
import { linkNavigation }      from '../../../redux/actions/nav.actions'
import { changeCheckin }       from '../../../redux/actions/checkin.actions'
import { cancelNotifications } from '../../../redux/actions/notifications.actions'
import selectors               from '../../../redux/selectors'
import CheckinListComponent, {
  CheckinListComponentProps
}                              from '../components/CheckinListComponent'
import { isStepCompleted }     from '../../../services/cms'

let stepsWithCheckinsMap = null
let unlockedCheckinsMap = null

type CheckinListDispatchProps = {
  updateCheckin: () => any,
  linkNavigation: () => any,
  cancelAllNotifications: () => any
}

type CheckingListStateProps = {
  steps: any,
  user: any
}

const mapStateToProps = (state: any): CheckingListStateProps => {
  const steps = selectors.steps(state)
  const user = selectors.user(state)
  const checkinState = selectors.getCheckins(state)
  return {
    steps,
    user,
    checkinState
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
) : CheckinListComponentProps => {
  const { steps, user, checkinState } = stateProps
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

  stepsWithCheckinsMap = Object.keys(steps).reduce((stepsR, key) => {
    const step = steps[key]
    const checkinUpdate = checkinState[key] || {}
    if (step.checkin)
      return {
        ...stepsR,
        [key]: {
          ...step.checkin,
          ...checkinUpdate,
          onLink: handleCheckinAction(step.checkin),
          onPress: updateCheckin,
          step: key
        }
      }
    return stepsR
  }, {})

  const unlockedCheckins = Object.keys(stepsWithCheckinsMap).reduce(
    (checkins, key) => {
      if (user && isStepCompleted(key, user))
        return [...checkins, stepsWithCheckinsMap[key]]
      return checkins
    },
    []
  )
  unlockedCheckinsMap = unlockedCheckins
  return {
    checkins: unlockedCheckinsMap,
    cancelAllNotifications: __DEV__ ? cancelAllNotifications : null
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  CheckinListComponent
)
