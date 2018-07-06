import * as React from 'react';
import { connect } from 'react-redux';
import Svg, { Circle, G } from 'react-native-svg';

import selectors from '../redux/selectors';
import PhaseProgress from '../components/PhaseProgress';
import { 
  phaseForStepAtIndex,
  NUMBER_OF_STEPS,
  NUMBER_OF_STEP_FOR_PHASES,
  MEDITATION,
  SELF_ASSESSMENT,
  VISION_CREATION
} from '../services/cms';
import PieChart from '../components/PhaseProgress/PieChart';
import PieChartCells from '../components/PhaseProgress/PieChartCells'

const mapStateToProps = state => ({
  completedStepIndices: selectors.completedStepIds(state).map(i => i - 1),
  phaseColors: selectors.phaseColors(state)
});

const merge = (stateProps, dispatchProps, ownProps) => {

  console.log("STATEPROPS", stateProps)

  //TODO: Replace OVERALL color when completed with COMPLETED COLOR
  const elements = [{
    label: 'Phase 1',
    total: NUMBER_OF_STEP_FOR_PHASES,
    slices: [{
      color: stateProps.phaseColors[MEDITATION],
      completed: stateProps.completedStepIndices.filter(index => phaseForStepAtIndex(index) === MEDITATION).length
    }, 
    {
      color: '#000000',
      completed: NUMBER_OF_STEP_FOR_PHASES - stateProps.completedStepIndices.filter(index => phaseForStepAtIndex(index) === MEDITATION).length
    }]
  },
  {
    label: 'Phase 2',
    total: NUMBER_OF_STEP_FOR_PHASES,
    slices: [{
      color: stateProps.phaseColors[SELF_ASSESSMENT],
      completed: stateProps.completedStepIndices.filter(index => phaseForStepAtIndex(index) === SELF_ASSESSMENT).length
    }, 
    {
      color: '#000000',
      completed: NUMBER_OF_STEP_FOR_PHASES - stateProps.completedStepIndices.filter(index => phaseForStepAtIndex(index) === SELF_ASSESSMENT).length
    }]
  },
  {
    label: 'Phase 3',
    total: NUMBER_OF_STEP_FOR_PHASES,
    slices: [{
      color: stateProps.phaseColors[VISION_CREATION],
      completed: stateProps.completedStepIndices.filter(index => phaseForStepAtIndex(index) === VISION_CREATION).length
    }, {
      color: '#000000',
      completed: NUMBER_OF_STEP_FOR_PHASES - stateProps.completedStepIndices.filter(index => phaseForStepAtIndex(index) === VISION_CREATION).length
    }]
  },
  {
    label: 'Overall',
    total: NUMBER_OF_STEPS,
    slices: [{
      color: stateProps.phaseColors[MEDITATION],
      completed: stateProps.completedStepIndices.filter(index => phaseForStepAtIndex(index) === MEDITATION).length
    },
    {
      color: stateProps.phaseColors[SELF_ASSESSMENT],
      completed: stateProps.completedStepIndices.filter(index => phaseForStepAtIndex(index) === SELF_ASSESSMENT).length
    },
    {
      color: stateProps.phaseColors[VISION_CREATION],
      completed: stateProps.completedStepIndices.filter(index => phaseForStepAtIndex(index) === VISION_CREATION).length
    }, 
    {
      color: '#000000',
      completed: NUMBER_OF_STEPS 
        - stateProps.completedStepIndices.filter(index => phaseForStepAtIndex(index) === SELF_ASSESSMENT).length
        - stateProps.completedStepIndices.filter(index => phaseForStepAtIndex(index) === VISION_CREATION).length
        - stateProps.completedStepIndices.filter(index => phaseForStepAtIndex(index) === MEDITATION).length
    }]
  }];
  console.log("ELEMENTS", elements)

  return ({
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    maxColumns: 3,
    elements: [{
      label: 'Phase 1'
    },
    {
      label: 'Phase 2'
    },
    {
      label: 'Phase 3'
    },
    {
      label: 'Overall'
    }],
    phaseForStepAtIndex
  });
}

export default connect(mapStateToProps, null, merge)(PieChartCells);
