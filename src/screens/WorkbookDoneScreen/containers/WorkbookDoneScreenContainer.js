// @flow

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation'
import type { Step }              from '../../../services/cms';
import DefaultUserContainer       from '../../../containers/DefaultUserContainer'
import WorkbookDoneScreen         from '../components/WorkbookDoneScreen';
import type { Props }             from '../components/WorkbookDoneScreen';
import {
  restartStepAction, 
  reset 
}                                 from '../../../redux/actions/nav.actions'
import selectors                  from '../../../redux/selectors'

type FormMetaData = {
  uploading: boolean,
  numberOfUpdates: number,
  lastUpdate: number,
  firstUpdate: number,
  createAt: number
}

const mapStateToProps = (state) => {
  const steps = selectors.steps(state);
  const colors = selectors.stepColors(state);
  const completedForms = selectors.completedForms(state);
  const incompleteFormsData = selectors.incompleteFormsData(state);
  return { steps, colors }
}

const merge = (stateProps, dispatchProps, ownProps): Props => {
  const { colors, steps, completedForms, incompleteFormsData} = stateProps;
  const { goToAssignmentLeadInScreen } = dispatchProps
  const { navigation: { dispatch, state:{ params: { stepId }}}} = ownProps;
  
  const doneStep: Step = steps[stepId];
  const doneStepColor = doneStep.color;
  //const formData = completedForms[doneStep.stepId];
  const numberOfSteps = Object.values(steps).length;
  const doneStepNumber = doneStep.number
  const nextStepNumber = doneStep.number + 1;
  const nextStep = Object.values(steps).find(s => s.number === nextStepNumber);

  if (nextStep) {
    // this is required in case we change how stepId work...
    const title = `Step ${doneStepNumber} is complete!`;
    const buttonTitle = `Start Step ${nextStepNumber}`.toUpperCase()
    const buttonOnPress = () => dispatch( restartStepAction(nextStep))

    const nextStepColor = nextStep.color;
    const nextStepDuration = nextStep.duration;
    return {
      ...stateProps, 
      ...dispatchProps, 
      ...ownProps,
      title,
      buttonTitle,
      steps,
      doneStep,
      doneStepColor,
      doneStepNumber,
      nextStepDuration,
      nextStepNumber,
      nextStepColor,
      buttonOnPress,
    };
  }

  const title = `This Step ${doneStepNumber} is complete!`;
  const buttonTitle = `Start Step ${nextStepNumber}`.toUpperCase()
  const buttonOnPress = () => dispatch( reset())

  return {
    ...stateProps, 
    ...dispatchProps, 
    ...ownProps,
    title,
    buttonTitle,
    steps,
    doneStep,
    doneStepColor,
    doneStepNumber,
    nextStepNumber: 0,
    nextStepColor: doneStepColor
  }
}

const WorkbookDoneContainer = withNavigation(connect(mapStateToProps, ({ done: reset }), merge)(WorkbookDoneScreen));

 export default () => (
    <DefaultUserContainer 
      renderWithUser={() => (<WorkbookDoneContainer />)}
      anonymousMessage={'You need to be logged in to be able to do the exercises. Please go back and log in again.'}
    />
  )

