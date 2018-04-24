import * as React from 'react'
import { compose, withProps, mapProps } from 'recompose'
import Button from '../../../components/Button'
import type { Props } from '../../../components/Button'
import { goToWorkbookScreen } from '../../../redux/actions/nav.actions'
import { withNavigationAndStep } from '../../../HOC'

const textTestId = 'step_to_workbook_text'
const buttonTestId = 'step_to_workbook_button'
const text = 'BEGIN'

const mapToButton = ({ step, dispatch, ...rest }) : Props => ({
  ...rest,
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
  mapProps(mapToButton)
)(Button)

export default BeginExerciseButtonContainer
