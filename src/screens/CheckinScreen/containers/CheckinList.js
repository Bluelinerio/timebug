import { connect } from 'react-redux'
import { checkins } from '../checkins'
import {
  goToMyJourneyScreen,
  goToStartScreen,
  journeyScreenDeepParams
} from '../../../redux/actions/nav.actions'
import selectors from '../../../redux/selectors'
import CheckinListComponent from '../components/CheckinListComponent'

export const isStepCompleted = () => {
  const completionMap = {}
  return (stepNumber, user) => {
    if (completionMap[stepNumber]) return completionMap[stepNumber]
    const { forms } = user
    const completed =
      forms && forms.find(form => {
          const value = `${form.stepId}` === stepNumber
          if(!completionMap[form.stepId]) completionMap[form.stepId] = value
          return value
      }) ? true : false
    if(!completionMap[stepNumber]) completionMap[stepNumber] = completed
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
    user
  }
}

const mapDispatchToProps = (dispatch: () => any): CheckinListDispatchProps => ({
  homeScreen: (params: any) => dispatch(goToStartScreen(params)),
  journeyScreen: (params: any) => dispatch(journeyScreenDeepParams(params))
})

const mergeProps = (
  stateProps: CheckingListStateProps,
  dispatchProps: CheckinListDispatchProps,
  _
) => {
  const { steps, user } = stateProps
  const { homeScreen, journeyScreen } = dispatchProps
  const handleLink = (checkin: any) => {
    const { link } = checkin
    const { screen, component, params } = handleUrl(link)
    switch(screen) {
        case 'home':
            return () => homeScreen({ component, params })
        case 'journey': 
            return () => journeyScreen({ component, params })
    }
  }
  if (!stepsWithCheckinsMap)
    stepsWithCheckinsMap = Object.keys(steps).reduce((stepsR, key) => {
      const step = steps[key]
      if (step.checkin)
        return {
          ...stepsR,
          [key]: {
            ...step.checkin,
            onLink: handleLink(step.checkin),
            onPress: null
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
  if (
    !unlockedCheckinsMap ||
    unlockedCheckins.length !== unlockedCheckinsMap.length
  ) {
    unlockedCheckinsMap = unlockedCheckins
  }
  return {
    checkins: unlockedCheckinsMap
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  CheckinListComponent
)
