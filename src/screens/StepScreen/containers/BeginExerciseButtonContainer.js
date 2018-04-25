import * as React from 'react'
import { compose, withProps, mapProps } from 'recompose'
import { connect } from 'react-redux'
import Button from '../../../components/Button'
import type { Props } from '../../../components/Button'
import { goToWorkbookScreen } from '../../../redux/actions/nav.actions'
import selectors from '../../../redux/selectors'
import { withNavigationAndStep } from '../../../HOC'

const mapStateToProps = (state: any) => {
  const { sortedStepsWithForms } = selectors.sortedStepsWithForms(state)
  return {
    sortedStepsWithForms
  }
}

const textTestId = 'step_to_workbook_text'
const buttonTestId = 'step_to_workbook_button'
const text = 'BEGIN'

const titleForButtonWithCompleteAndIncompleteForms = ({
  completedForms,
  incomplete,
}) => {
  Object.keys(incomplete).length > 0 ? 'Resume' : 'Edit'
  if (Object.keys(incomplete).length > 0) {
    return 'Resume'
  } else if (completedForms && completedForms.length > 0) {
    return 'Edit'
  } else {
    return 'Start'
  }
}

const mapToButton = ({
  step,
  sortedStepsWithForms,
  dispatch,
  ...rest
}): Props => ({
  ...rest,
  text: titleForButtonWithCompleteAndIncompleteForms(
    sortedStepsWithForms.find(s => s.step.stepId === step.stepId)
  ),
  onPressWithProps: props => dispatch(goToWorkbookScreen(props)),
  backgroundColor: step.color
})

const BeginExerciseButtonContainer = compose(
  withProps({
    textTestId,
    buttonTestId,
    text
  }),
  withNavigationAndStep,
  connect(mapStateToProps),
  mapProps(mapToButton)
)(Button)

export default BeginExerciseButtonContainer
