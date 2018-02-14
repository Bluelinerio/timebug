// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation';

import StepScreen                     from '../components/StepScreen'
import type Props                     from '../components/StepScreen'
import { getImageUrl }                from "../../../services/cms"
import selectors                      from '../../../redux/selectors'
import type { Step }                  from '../../../services/cms'
import { goToAssignmentLeadInScreen } from '../../../redux/actions/nav.actions'

const mapStateToProps = (state) => {
  const steps = selectors.steps(state);
  return { steps }
}

const testNavigation = (ownProps) => {
  if(!ownProps.navigation) throw 'did not find navigation'
}
const testStepId = ({ navigation: {state: { params:{ stepId }}}}) => {
  if(!stepId) {
    throw `did not find stepId in navigation.state.params`;
  }
}

const merge = (stateProps, dispatchProps, ownProps): Props => {
  const { steps} = stateProps;
  const { goToAssignmentLeadInScreen } = dispatchProps
  testNavigation(ownProps);
  testStepId(ownProps);
  const { navigation: {state:{ params:{ stepId }}}} = ownProps;
  const step = steps[stepId];
  if(!step) {
    throw `did not find step with number ${stepId} in steps: ${steps}`;
  }
  const title = step.title
  const subtitle = step.subtitle
  const description = step.description
  const number = step.number
  const icon = step.icon
  const color = step.color;
  const onPress = () => goToAssignmentLeadInScreen(ownProps);
  return {
    title,
    subtitle,
    description,
    number,
    icon,
    color,
    onPress,
  }
}

const StepScreenContainer = withNavigation(connect(mapStateToProps, ({ goToAssignmentLeadInScreen }), merge)(StepScreen))

export default StepScreenContainer