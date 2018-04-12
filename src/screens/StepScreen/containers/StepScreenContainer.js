// @flow
import StepScreenComponent from '../components/StepScreenComponent'

import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { compose, mapProps } from 'recompose'
import selectors from '../../../redux/selectors'

const mapStepToStepScreenProps = step => {
  return {
    title: step.title,
    subtitle: `Step ${step.number}`,
    content: step.description,
    color: step.color,
    image: step.image
  }
}

const mapStepNavigationParam = ({
  steps,
  navigation: { state: { params: { stepId } } }
}) => steps[stepId]

const StepScreenContainer = compose(
  withNavigation,
  connect(state => ({ steps: selectors.steps(state) })),
  mapProps(mapStepNavigationParam),
  mapProps(mapStepToStepScreenProps)
)(StepScreenComponent)

export default StepScreenContainer
