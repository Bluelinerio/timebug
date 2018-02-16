// @flow

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import type { Step }              from '../../../services/cms';
import WorkbookDoneScreen         from '../components/WorkbookDoneScreen';
import type { Props }             from '../components/WorkbookDoneScreen';
import {
  restartStepAction, 
  reset 
}                                 from '../../../redux/actions/nav.actions'
import selectors                  from '../../../redux/selectors'


const mapStateToProps = (state) => {
  const steps = selectors.steps(state);
  const colors = selectors.stepColors(state);
  return { steps, colors }
}
const merge = (stateProps, dispatchProps, ownProps): Props => {
  const { colors, steps} = stateProps;
  const { goToAssignmentLeadInScreen } = dispatchProps
  const { navigation: { dispatch, state:{ params: { stepId }}}} = ownProps;

  const doneStep: Step = steps[stepId];
  const doneStepColor = colors[stepId]
  const numberOfSteps = Object.values(steps).length;
  const doneStepNumber = doneStep.number
  const nextStepNumber = doneStep.number + 1;
  const nextStep = Object.values(steps).find(s => s.number === nextStepNumber);
  const goToNextStep = () => dispatch( restartStepAction(nextStep))
  if (nextStep) {
    // this is required in case we change how stepId work...
    const nextStepColor = nextStep.color;
    const nextStepDuration = nextStep.duration;
    return {
      ...stateProps, 
      ...dispatchProps, 
      ...ownProps,
      steps,
      doneStep,
      doneStepColor,
      doneStepNumber,
      nextStepDuration,
      nextStepNumber,
      nextStepColor,
      goToNextStep,
    };
  }
  return {
    ...stateProps, 
    ...dispatchProps, 
    ...ownProps,
    steps,
    doneStep,
    doneStepColor,
    doneStepNumber,
    nextStepNumber: 0,
    nextStepColor: doneStepColor
  }
}

const done = reset;

export default connect(mapStateToProps, ({ done }), merge)(WorkbookDoneScreen);