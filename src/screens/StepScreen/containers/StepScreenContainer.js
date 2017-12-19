// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import StepScreen from '../components/StepScreen'
import selectors from '../../../redux/selectors'
import { Step } from '../../../services/cms';

type Props = {
  step: Step,
  navigation: {
    navigate(): any
  },
  goToAssignmentLeadInScreen(): any
};

const mapStateToProps = (state) => {
  const step = selectors.currentStep(state);
	const color = selectors.currentStepColor(state);
  return {
    step,
    color
  }
};

const StepScreenContainer = connect(mapStateToProps, null)(StepScreen)

export default StepScreenContainer