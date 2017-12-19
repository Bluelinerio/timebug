// @flow

import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import type { LayoutStyle, ColorValue } from 'react-native';
import { connect } from 'react-redux'
import selectors from '../../../redux/selectors'
import { Step } from '../../../services/cms';
import GradientWithTwoColors from '../../../components/GradientWithTwoColors'
import type { GradientBackgroundProps } from '../../../components/GradientWithTwoColors'

const mapStateToProps = (state: any) => {
  const gradientTopColor = selectors.currentStepColor(state);
  const gradientBottomColor = 'white'
  debugger;
  return {
    gradientTopColor,
    gradientBottomColor
  }
}

export default connect(mapStateToProps)(GradientWithTwoColors)