// @flow
import invariant from 'invariant'
import { connect } from 'react-redux'
import { compose, mapProps } from 'recompose'
import { withNavigation } from 'react-navigation'
import PaginatedCarousel from '../components/PaginatedCarousel'
import { phaseForStepAtIndex } from '../../../services/cms'
import type Item from '../components/SliderEntry'
import type Step from '../../../services/cms'
import selectors from '../../../redux/selectors'
import {
  goToWorkbookSkippingStepScreen,
  goToAssignmentFlow,
  goToPreviosFormsForStep
} from '../../../redux/actions/nav.actions'

const ALLOW_USER_TO_JUST_DIRECTLY_TO_FORM = false
const FIRST_FORM_ID = '1'

const renderProgressButton = (
  { completedForms, incomplete, step, buttonTitleForFormCompletion },
  { dispatch }
) => {
  if (Object.keys(incomplete).length > 0) {
    return {
      title: buttonTitleForFormCompletion,
      onPress: () => {
        dispatch(
          goToWorkbookSkippingStepScreen({
            step,
            incompleteFormsIds: Object.keys(incomplete)
          })
        )
      }
    }
  } else if (completedForms && completedForms.length > 0) {
    return {
      title: buttonTitleForFormCompletion,
      onPress: () => dispatch(goToPreviosFormsForStep(step))
    }
  } else if (ALLOW_USER_TO_JUST_DIRECTLY_TO_FORM) {
    return {
      title: buttonTitleForFormCompletion,
      onPress: () => {
        dispatch(
          goToWorkbookSkippingStepScreen({
            step,
            incompleteFormsIds: [FIRST_FORM_ID]
          })
        )
      }
    }
  } else {
    return null
  }
}

const mapStateToProps = (state: any) => {
  const { latestStepId, sortedStepsWithForms } = selectors.sortedStepsWithForms(
    state
  )

  const phaseColors = selectors.phaseColors(state)

  const backgroundColorAtIndex = (step: number) =>
    phaseColors[phaseForStepAtIndex(step)]

  const activeSliderIndex = latestStepId
    ? sortedStepsWithForms.map(s => s.step.stepId).indexOf(latestStepId)
    : 0

  invariant(
    activeSliderIndex >= 0,
    `failed finding latestStepId: ${latestStepId} in steps: ${sortedStepsWithForms.map(
      s => s.step.stepId
    )}`
  )

  return {
    sortedStepsWithForms,
    activeSliderIndex,
    backgroundColorAtIndex
  }
}

const PagninatedCarouselContainer = compose(
  withNavigation,
  connect(mapStateToProps),
  mapProps(
    ({ activeSliderIndex, sortedStepsWithForms, navigation, ...rest }) => {
      const props = {
        ...rest,
        onPress: (item, index) =>
          navigation.dispatch(goToAssignmentFlow(sortedStepsWithForms[index])),
        activeSliderIndex,
        items: sortedStepsWithForms.map(stepWithForms => ({
          title: stepWithForms.step.title,
          icon: stepWithForms.step.icon,
          subtitle: `Step ${stepWithForms.step.number}, Phase: ${
            stepWithForms.step.type
          }`,
          actionButtonProps: renderProgressButton(stepWithForms, navigation)
        }))
      }
      return props
    }
  )
)(PaginatedCarousel)

export default PagninatedCarouselContainer
