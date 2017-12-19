//container:
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goToAssignmentFlow } from "../../../redux/actions/nav.actions";
import { getImageUrl } from '../../../services/cms';
import selectors from '../../../redux/selectors';
import type { Props } from '../components/StepComponent';
import StepComponent from '../components/StepComponent';

const mapStateToProps = (state): Props => {
	//const allSteps = selectors.steps(state)
	const totalNumberOfSteps = selectors.totalNumberOfSteps(state);
  const currentStep = selectors.currentStep(state)
	const color = selectors.currentStepColor(state);
	const { shortIcon } = currentStep;
	const imageUri = getImageUrl(shortIcon);
  return ({ totalNumberOfSteps, currentStep, color, imageUri})
}

export default connect(mapStateToProps, ({goToAssignmentFlow}))(StepComponent)