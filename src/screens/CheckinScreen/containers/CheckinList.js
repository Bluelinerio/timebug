//@flow
import { connect } from 'react-redux'
import { checkins } from '../checkins'
import {
  goToStartScreen,
  journeyScreenDeepParams
} from '../../../redux/actions/nav.actions'
import { changeCheckin } from '../../../redux/actions/checkin.actions'
import selectors from '../../../redux/selectors'
import CheckinListComponent from '../components/CheckinListComponent'

export const isStepCompleted = () => {
  const completionMap = {}
  return (stepNumber, user) => {
    if (completionMap[stepNumber]) return completionMap[stepNumber]
    const { forms } = user
    const completed =
      forms &&
      forms.find(form => {
        const value = `${form.stepId}` === stepNumber
        if (!completionMap[form.stepId]) completionMap[form.stepId] = value
        return value
      })
        ? true
        : false
    if (!completionMap[stepNumber]) completionMap[stepNumber] = completed
    return completed
  }
}

const handleUrl = link => {
  const [location, query] = link.split('?')
  const [screen, component] = location.split('/')
  const params = query.split('&').reduce((params, param) => {
    const [key, value] = param.split('=')
    return {
      ...params,
      [key]: value
    }
  }, {})
  return {
    screen,
    component,
    params
  }
}

const stepCompletedMemoized = isStepCompleted()

let stepsWithCheckinsMap = null
let unlockedCheckinsMap = null

type CheckinListDispatchProps = {
  homeScreen: () => any,
  journeyScreen: () => any
}

type CheckingListStateProps = {
  steps: any,
  user: any
}

const mapStateToProps = (state: any): CheckingListStateProps => {
  const steps = selectors.steps(state)
  const user = selectors.user(state)
  const checkinState = selectors.getCheckins(state)
  //REMOVE ONCE CONTENTFUL HAS STEPS
  const modifiedSteps = Object.keys(steps).reduce((stepsR, key) => {
    const step = steps[key]
    const checkin = checkins[key]
    if (checkin)
      return {
        ...stepsR,
        [key]: {
          ...step,
          checkin
        }
      }
    return {
      ...stepsR,
      [key]: {
        ...step
      }
    }
  }, {})
  return {
    steps: modifiedSteps,
    user,
    checkinState
  }
}

const mapDispatchToProps = (dispatch: () => any): CheckinListDispatchProps => ({
  homeScreen: (params: any) => dispatch(goToStartScreen(params)),
  journeyScreen: (params: any) => dispatch(journeyScreenDeepParams(params)),
  updateCheckin: (params: any) => dispatch(changeCheckin(params))
})

const mergeProps = (
  stateProps: CheckingListStateProps,
  dispatchProps: CheckinListDispatchProps
) => {
  const { steps, user, checkinState } = stateProps
  const { homeScreen, journeyScreen, updateCheckin } = dispatchProps
  const handleLink = (checkin: any) => {
    const { link } = checkin
    const { screen, component, params } = handleUrl(link)
    switch (screen) {
      case 'home':
        return () => homeScreen({ component, params })
      case 'journey':
        return () => journeyScreen({ component, params })
    }
  }

  stepsWithCheckinsMap = Object.keys(steps).reduce((stepsR, key) => {
    const step = steps[key]
    const checkinUpdate = checkinState[key]
    if (step.checkin)
      return {
        ...stepsR,
        [key]: {
          ...step.checkin,
          onLink: handleLink(step.checkin),
          onPress: updateCheckin,
          step: key,
          frequency: checkinUpdate ? checkinUpdate.frequency : step.checkin.frequency 
        }
      }
    return stepsR
  }, {})

  const unlockedCheckins = Object.keys(stepsWithCheckinsMap).reduce(
    (checkins, key) => {
      if (user && stepCompletedMemoized(key, user))
        return [...checkins, stepsWithCheckinsMap[key]]
      return checkins
    },
    []
  )
  unlockedCheckinsMap = unlockedCheckins
  return {
    checkins: unlockedCheckinsMap
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  CheckinListComponent
)
