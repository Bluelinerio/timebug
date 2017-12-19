// @flow
import React from 'react'
import { connect } from 'react-redux'
import Button from '../../../components/Button'
import selectors from '../../../redux/selectors'
import { navigateToAssignmentLeadInScreen as onPressWithProps} from '../../../redux/actions/nav.actions';
import LoginButtonStyles from '../../../styles/components/LoginButton'
import { compose, withProps, withHandlers } from 'recompose';



const mapStateToProps = state => {
  const step = selectors.currentStep(state);
  const backgroundColor = selectors.currentStepColor(state);
  return {
    step,
    backgroundColor,
  }
}

const textTestId= 'step_to_assignment_text'
const buttonTestId= 'step_to_assignment_button'
const text = "ASSIGNMENTS"


export default compose(
  connect(mapStateToProps, ({onPressWithProps})),
  withProps({
    textTestId,
    buttonTestId,
    text
  })
)(Button)