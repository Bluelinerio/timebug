// @flow
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PagninatedCarousel from '../components/PagninatedCarousel';
import type Item from '../components/SliderEntry';
import type Step from '../../../services/cms';
import { getImageUrl, phaseForStepAtIndex } from '../../../services/cms';
import selectors from '../../../redux/selectors';
import { goToAssignmentFlow } from '../../../redux/actions/nav.actions';

const mapStateToProps = (state: any) => {
  const phaseColors = selectors.phaseColors(state);
  const backgroundColorAtIndex = (step: number) =>
    phaseColors[phaseForStepAtIndex(step)];
  const isLoggedIn = selectors.isLoggedIn(state);
  const completedFormsData = isLoggedIn
    ? selectors.completedFormsData(state)
    : {};
  const incompleteFormsData = isLoggedIn
    ? selectors.incompleteFormsData(state)
    : {};

  const steps: [Step] = selectors.sortedSteps(state).map(step => {
    if (!isLoggedIn) return step;

    const completedForm = completedFormsData[step.stepId];
    const lastUpdate = (completedForm && completedForm.updatedAt) || 0;
    const incompleteForm = incompleteFormsData[step.stepId];
    return {
      ...step,
      iconName: lastUpdate !== 0 ? 'check' : incompleteForm ? 'edit' : null,
      progress: {
        lastUpdate,
        incompleteForm
      }
    };
  });

  const items: [Item] = steps.map((step, index) => ({
    ...step,
    subtitle: `Step ${step.number}, Phase: ${step.type}`
  }));
  return {
    backgroundColorAtIndex,
    items
  };
};

const onPress = (step, index) => goToAssignmentFlow({ step, index });

export default connect(mapStateToProps, { onPress })(PagninatedCarousel);
