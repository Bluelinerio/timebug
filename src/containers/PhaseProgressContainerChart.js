import * as React from 'react';
import { connect } from 'react-redux';
import Svg, { Circle, G } from 'react-native-svg';

import selectors from '../redux/selectors';
import PhaseProgress from '../components/PhaseProgress';
import { phaseForStepAtIndex } from '../services/cms';
import PieChart from '../components/PhaseProgress/PieChart';
import PieChartCells from '../components/PhaseProgress/PieChartCells'

const mapStateToProps = state => ({
  completedStepIndices: selectors.completedStepIds(state).map(i => i - 1),
  phaseColors: selectors.phaseColors(state)
});

const merge = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  maxColumns: 3,
  elements: 4,
  phaseForStepAtIndex
});

export default connect(mapStateToProps, null, merge)(PieChartCells);
