import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { compose, mapProps, renderComponent, branch } from 'recompose'
import selectors from '../redux/selectors'
import UserAnonymousError from '../containers/UserAnonymousError'
import DefaultIndicator from '../components/DefaultIndicator'

const unpackStepParamsFromNavigation = ({
  state: { params: { stepId, stepColor, stepNumber } }
}) => ({
  stepId,
  stepColor,
  stepNumber
})

export const withNavigationAndStep = compose(
  connect(state => ({ steps: selectors.steps(state) })),
  withNavigation,
  mapProps(props => {
    if (!props.navigation) {
      if (__DEV__) {
        throw new Error('missing navigation in props')
      } else {
        return props
      }
    }
    const { steps } = props
    const {
      stepId /*, stepColor, stepNumber */
    } = unpackStepParamsFromNavigation(props.navigation)

    return {
      ...props,
      step: steps[stepId]
    }
  })
)

export const userRequired = compose(
  branch(
    state => selectors.isLoggedIn(state),
    branch(
      state => selectors.isAnonymous(state),
      renderComponent(DefaultIndicator),
      renderComponent(UserAnonymousError)
    )
  )
)
