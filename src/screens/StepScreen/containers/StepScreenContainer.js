// @flow
import StepScreenComponent from '../components/StepScreenComponent'
import { compose, mapProps } from 'recompose'
import {
  withNavigationAndStep
} from '../../../HOC'

const mapStepToStepScreenProps = ({step}) => {
  return {
    headerTitle: step.stepScreenDescription,
    title: step.title,
    subtitle: `Step ${step.number}`,
    content: step.description,
    color: step.color,
    image: step.image
  }
}

const StepScreenContainer = compose(
  withNavigationAndStep,
  mapProps(mapStepToStepScreenProps)
)(StepScreenComponent)

export default StepScreenContainer
