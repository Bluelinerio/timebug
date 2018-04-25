import * as React from 'react'
import { compose, withProps, mapProps } from 'recompose'
import { connect } from 'react-redux'
import Button from '../../../components/Button'
import type { Props } from '../../../components/Button'
import { goToWorkbookScreen } from '../../../redux/actions/nav.actions'
import selectors from '../../../redux/selectors'
import { withNavigationAndStep } from '../../../HOC'

const textTestId = 'step_to_workbook_text'
const buttonTestId = 'step_to_workbook_button'

const mapToButton = ({
  step,
  buttonTitlesForFormCompletion,
  dispatch,
  ...rest
}): Props => ({
  ...rest,
  text: buttonTitlesForFormCompletion(step.stepId),
  onPressWithProps: props => dispatch(goToWorkbookScreen(props)),
  backgroundColor: step.color
})

const mapStateToProps = (state: any) => ({
  buttonTitlesForFormCompletion: selectors.buttonTitlesForFormCompletion(state)
})

const BeginExerciseButtonContainer = compose(
  withProps({
    textTestId,
    buttonTestId,
  }),
  withNavigationAndStep,
  connect(mapStateToProps),
  mapProps(mapToButton)
)(Button)

export default BeginExerciseButtonContainer
