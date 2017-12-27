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
  const steps = selectors.sortedSteps(state);
  return { steps }
}

const StepScreenContainer = connect(mapStateToProps, null)(StepScreen)

export default StepScreenContainer