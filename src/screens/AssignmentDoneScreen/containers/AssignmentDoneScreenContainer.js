// @flow

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import theme, { styles } from "react-native-theme";
import type { Step } from "../../../services/cms";
import AssignmentDoneScreen from "../components/AssignmentDoneScreen";
import type { Prop } from "../components/AssignmentDoneScreen";
import { doneWithCongratsScreen as done } from '../../../redux/actions/nav.actions';
import selectors from '../../../redux/selectors'

const mapStateToProps = (state) => {
  const steps = selectors.steps(state);
  const colors = selectors.stepColors(state);
  return { steps, colors }
}
const merge = (stateProps, dispatchProps, ownProps): Props => {
  const { colors, steps} = stateProps;
  const { goToAssignmentLeadInScreen } = dispatchProps
  const { navigation: {state:{ params: { step }}}} = ownProps;

  const doneStep = steps[step];
  const doneStepColor = colors[step]
  const nextStepNumber = step + 1;

  if (nextStepNumber < steps.length) {
    const nextStepColor = colors[nextStepNumber];
    const nextStep = steps[nextStepNumber];
    const nextStepDuration = nextStep.duration;
    return {
      ...stateProps, 
      ...dispatchProps, 
      ...ownProps,
      steps,
      doneStep,
      doneStepColor,
      nextStepDuration,
      nextStepNumber,
      nextStepColor
    };
  }
  return {
    ...stateProps, 
    ...dispatchProps, 
    ...ownProps,
    steps,
    doneStep,
    doneStepColor,
    nextStepNumber: 0,
    nextStepColor: doneStepColor
  }
}

export default connect(mapStateToProps, ({done}), merge)(AssignmentDoneScreen);