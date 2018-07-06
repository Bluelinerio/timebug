import * as React from 'react';
import { connect } from 'react-redux';

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

const missingColor = '#9E9E9E'

const mapStateToProps = state => ({
  completedStepIndices: selectors.completedStepIds(state).map(i => i - 1),
  phaseColors: selectors.phaseColors(state),
});

const merge = (stateProps, dispatchProps, ownProps) => {

  console.log("STATEPROPS", stateProps)

  const completedStepsInPhase = {
    MEDITATION: stateProps.completedStepIndices.filter(index => phaseForStepAtIndex(index) === MEDITATION).length,
    VISION_CREATION: stateProps.completedStepIndices.filter(index => phaseForStepAtIndex(index) === VISION_CREATION).length,
    SELF_ASSESSMENT: stateProps.completedStepIndices.filter(index => phaseForStepAtIndex(index) === SELF_ASSESSMENT).length,
  }

  //TODO: Replace OVERALL color when completed with COMPLETED COLOR
  const elements = [{
    label: `Phase 1: ${completedStepsInPhase[MEDITATION]} / ${NUMBER_OF_STEP_FOR_PHASES}`,
    total: NUMBER_OF_STEP_FOR_PHASES,
    slices: [{
      color: stateProps.phaseColors[MEDITATION],
      amount: completedStepsInPhase[MEDITATION]
    }, 
    {
      color: missingColor,
      amount: NUMBER_OF_STEP_FOR_PHASES - completedStepsInPhase[MEDITATION]
    }]
  },
  {
    label: `Phase 2: ${completedStepsInPhase[SELF_ASSESSMENT]} / ${NUMBER_OF_STEP_FOR_PHASES}`,
    total: NUMBER_OF_STEP_FOR_PHASES,
    slices: [{
      color: stateProps.phaseColors[SELF_ASSESSMENT],
      amount: completedStepsInPhase[SELF_ASSESSMENT]
    }, 
    {
      color: missingColor,
      amount: NUMBER_OF_STEP_FOR_PHASES - completedStepsInPhase[SELF_ASSESSMENT]
    }]
  },
  {
    label: `Phase 3: ${completedStepsInPhase[VISION_CREATION]} / ${NUMBER_OF_STEP_FOR_PHASES}`,
    total: NUMBER_OF_STEP_FOR_PHASES,
    slices: [{
      color: stateProps.phaseColors[VISION_CREATION],
      amount: completedStepsInPhase[VISION_CREATION]
    }, {
      color: missingColor,
      amount: NUMBER_OF_STEP_FOR_PHASES - completedStepsInPhase[VISION_CREATION]
    }]
  },
  {
    label: `Overall: ${completedStepsInPhase[MEDITATION] 
      + completedStepsInPhase[SELF_ASSESSMENT] 
      + completedStepsInPhase[VISION_CREATION] } / ${NUMBER_OF_STEPS}`,
    total: NUMBER_OF_STEPS,
    slices: [{
      color: stateProps.phaseColors[MEDITATION],
      amount: completedStepsInPhase[MEDITATION]
    },
    {
      color: stateProps.phaseColors[SELF_ASSESSMENT],
      amount: completedStepsInPhase[SELF_ASSESSMENT]
    },
    {
      color: stateProps.phaseColors[VISION_CREATION],
      amount: completedStepsInPhase[VISION_CREATION]
    }, 
    {
      color: missingColor,
      amount: NUMBER_OF_STEPS 
        - completedStepsInPhase[MEDITATION]
        - completedStepsInPhase[SELF_ASSESSMENT]
        - completedStepsInPhase[VISION_CREATION]
    }]
  }];
  console.log("ELEMENTS", elements)

  return ({
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    maxColumns: 3,
    elements,
    phaseForStepAtIndex
  });
}

export default connect(mapStateToProps, null, merge)(PieChartCells);
