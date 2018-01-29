// @flow
import React from 'react'
import { connect } from 'react-redux'
import Button from '../../../components/Button'
import type { Props, Side } from '../../../components/Button'
import selectors from '../../../redux/selectors'
import { navigateToAssignmentLeadInScreen as onPressWithProps} from '../../../redux/actions/nav.actions';

const mapStateToProps = state => {
  const steps = selectors.steps(state);
  const colors = selectors.stepColors(state);
  return {
    steps,
    colors
  }
}

const textTestId= 'step_to_assignment_text'
const buttonTestId= 'step_to_assignment_button'
const text = "Exercise".toUpperCase()

const merge = (stateProps, dispatchProps, ownProps): Props => {
  const { colors, steps } = stateProps
  const { onPressWithProps } = dispatchProps
  const { number } = ownProps
  const backgroundColor = colors[number];
  return {
    ...ownProps,
    onPressWithProps,
    textTestId,
    buttonTestId,
    text,
    backgroundColor
  }
}

export default connect(mapStateToProps, ({onPressWithProps}), merge)(Button)