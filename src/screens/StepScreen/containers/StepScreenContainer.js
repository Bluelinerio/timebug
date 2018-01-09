// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import StepScreen from '../components/StepScreen'
import type Props from '../components/StepScreen'
import { getImageUrl } from "../../../services/cms";
import selectors from '../../../redux/selectors'
import { Step } from '../../../services/cms';
import { goToAssignmentLeadInScreen } from '../../../redux/actions/nav.actions'

const mapStateToProps = (state) => {
  const steps = selectors.steps(state);
  const colors = selectors.stepColors(state);
  return { steps, colors }
}
const merge = (stateProps, dispatchProps, ownProps): Props => {
  const { colors, steps} = stateProps;
  const { goToAssignmentLeadInScreen } = dispatchProps
  const { navigation: {state:{ params:{ step }}}} = ownProps;

  const _step = steps[step];
  const title = _step.title
  const subtitle = _step.subtitle
  const description = _step.description
  const number = _step.number
  const imageUri = getImageUrl(_step.icon)
  const color = colors[step]
  const onPress = () => goToAssignmentLeadInScreen(ownProps);
  return {
    title,
    subtitle,
    description,
    number,
    imageUri,
    color,
    onPress,
  }
}

const StepScreenContainer = connect(mapStateToProps, ({ goToAssignmentLeadInScreen }), merge)(StepScreen)

export default StepScreenContainer