// @flow

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import AssignmentsPages from '../components/AssignmentsPages';
import type { Props } from '../components/AssignmentsPages';
import type { Assignment } from '../../../services/cms';
import DefaultIndicator from '../../../components/DefaultIndicator';
import StepButtonStyle from '../../../styles/components/Button';
import selectors from '../../../redux/selectors';

const mapStateToProps = state => {
  const colors = selectors.stepColors(state);
  const assignmentsForStepId = selectors.assignmentsForStepId(state);
  return { colors, assignmentsForStepId };
};

const merge = (stateProps, dispatchProps, ownProps): Props => {
  const { colors, assignmentsForStepId } = stateProps;
  const { navigation: { state: { params: { stepId } } } } = ownProps;
  const assignments = assignmentsForStepId(stepId);
  const color = colors[stepId];
  return {
    ...ownProps,
    assignments,
    color
  };
};

export default connect(mapStateToProps, null, merge)(AssignmentsPages);
