// @flow

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import type { Step } from "../../../services/cms";
import AssignmentDoneScreen from "../components/AssignmentDoneScreen";
import type { Props } from "../components/AssignmentDoneScreen";
import { resetAction } from '../../../navigation/helpers'
import selectors from '../../../redux/selectors'

const mapStateToProps = (state) => {
  const steps = selectors.steps(state);
  const colors = selectors.stepColors(state);
  return { steps, colors }
}
const merge = (stateProps, dispatchProps, ownProps): Props => {
  const { colors, steps} = stateProps;
  const { goToAssignmentLeadInScreen } = dispatchProps
  const { navigation: {state:{ params: { stepId }}}} = ownProps;

  const doneStep: Step = steps[stepId];
  const doneStepColor = colors[stepId]
  const nextStepNumber = doneStep.number + 1;

  if (nextStepNumber < steps.length) {
    // this is required in case we change how stepId work...
    const nextStep = steps.find(s => s.number === nextStepNumber);
    const nextStepColor = nextStep.color;
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

const done = () => resetAction('HomeScreen');

export default connect(mapStateToProps, ({done}), merge)(AssignmentDoneScreen);