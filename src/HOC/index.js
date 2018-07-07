import R from 'ramda'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { compose, withProps, renderComponent, branch } from 'recompose'
import combineSelectors from '../redux/selectors/combineSelectors'
import {
  steps,
  meditations,
  isNotLoggedIn,
  isAnonymous
} from '../redux/selectors'
import UserAnonymousError from '../containers/UserAnonymousError'
import DefaultIndicator from '../components/DefaultIndicator'

const stepIdFromNavigationLens = R.lensPath(['state', 'params', 'stepId'])
const stepFormIdFromNavigationLens = R.lensPath(['state', 'params', 'formId'])
const meditationIdFromNavigationLens = R.lensPath(['state', 'params', 'id'])

const withSteps = compose(
  connect(combineSelectors({ steps })),
  withProps(props => {
    if (!props.steps) {
      throw new Error('missing steps in props')
    }
    if (!props.steps.length === 30) {
      throw new Error('expected 30 steps')
    }
  })
)

const withMeditations = compose(
  connect(combineSelectors({ meditations })),
  withProps(props => {
    if (!props.meditations) {
      throw new Error('missing meditations in props')
    }
    if (!props.meditations.length !== 0) {
      throw new Error('expected more 1 or more meditations')
    }
  })
)

const withLoginStatus = connect(
  combineSelectors({
    isNotLoggedIn,
    isAnonymous
  })
)

const withNavigationValidationLenses = (...lenses) =>
  compose(
    withProps(props => {
      if (!props.navigation) {
        throw new Error('missing navigation in props')
      }
      if (lenses) {
        lenses.forEach(lens => {
          if (!R.view(lens, props.navigation)) {
            throw new Error('expected a step props object in navigation params')
          }
        })
      }
      return props
    }),
    withNavigation
  )

const withNavigationStepProps = withProps(({ navigation, steps }) => {
  return {
    step: steps[R.view(stepIdFromNavigationLens, navigation)],
    formId: R.view(stepFormIdFromNavigationLens, navigation)
  }
})

export const withNavigationAndStep = compose(
  withSteps,
  withNavigationValidationLenses(
    stepIdFromNavigationLens,
    stepFormIdFromNavigationLens
  ),
  withNavigationStepProps
)

const withMeditationFromNavigationOrFallback = withProps(
  ({ navigation, meditations }) => {
    const meditationId = !R.view(meditationIdFromNavigationLens, navigation)
    return {
      meditation:
        (meditationId && meditations.find(item => item.id === meditationId)) ||
        meditations[0]
    }
  }
)

export const withNavigationAndMeditation = compose(
  withMeditations,
  withNavigationValidationLenses(meditationIdFromNavigationLens),
  withMeditationFromNavigationOrFallback
)

export const userRequired = compose(
  withLoginStatus,
  branch(
    ({ isNotLoggedIn }) => isNotLoggedIn,
    branch(
      ({ isAnonymous }) => isAnonymous,
      renderComponent(UserAnonymousError),
      renderComponent(DefaultIndicator)
    )
  )
)
