// @flow

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import theme, { styles } from 'react-native-theme';
import AssignmentsPages from '../components/AssignmentsPages';
import type { Props } from '../components/AssignmentsPages';
import type { Assignment } from '../../../services/cms';
import DefaultIndicator from '../../../components/DefaultIndicator';
import StepButtonStyle from '../../../styles/components/Button';
import selectors from '../../../redux/selectors';

const mapStateToProps = (state) => {
  const colors = selectors.stepColors(state);
  const assignmentsForStep = selectors.assignmentsForStep(state)
  return { colors, assignmentsForStep, }
}

const merge = (stateProps, dispatchProps, ownProps): Props => {
  const { colors, assignmentsForStep } = stateProps
	const { navigation: {state:{ params:{ step }}}} = ownProps
	const assignments = assignmentsForStep(step);
  const color = colors[step];
  return {
    ...ownProps,
		assignments,
    color,
    step
  }
}

export default connect(mapStateToProps, null, merge)(AssignmentsPages);
