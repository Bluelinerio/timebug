// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import selectors from '../../redux/selectors';
import { 
  phaseForStepAtIndex,
  NUMBER_OF_STEPS,
  NUMBER_OF_STEP_FOR_PHASES,
  MEDITATION,
  SELF_ASSESSMENT,
  VISION_CREATION
} from '../../services/cms';
import PieChartCells from '../../components/PhaseProgress/PieChartCells'
import { mediumGray } from '../../constants/colors'

import { buildCharts, LabelFn } from './charts'

type CompletedSteps = {
  MEDITATION: number,
  VISION_CREATION: number,
  SELF_ASSESSMENT: number
}

const chartProps: ChartProps = {
  spacing: 0,
  outerRadius: '95%',
  innerRadius: '50%'
}

const mapStateToProps = state => ({
  completedStepIndices: selectors.completedStepIds(state).map(i => i - 1),
  phaseColors: selectors.phaseColors(state),
});

const recommendedMaxColumns = 3

const merge = (stateProps, dispatchProps, ownProps) => {

  const { phaseColors, completedStepIndices } = stateProps
  const { maxColumns = recommendedMaxColumns } = ownProps

  const completedStepsInPhase: CompletedSteps = {
    MEDITATION: completedStepIndices.filter(index => phaseForStepAtIndex(index) === MEDITATION).length,
    VISION_CREATION: completedStepIndices.filter(index => phaseForStepAtIndex(index) === VISION_CREATION).length,
    SELF_ASSESSMENT: completedStepIndices.filter(index => phaseForStepAtIndex(index) === SELF_ASSESSMENT).length,
  }

  const { overall: overallChart, phase: phaseChart } = buildCharts({ missingFormsColor: mediumGray, phaseColors })

  const label: LabelFn = ({ total, completedSteps, labelKey }) => 
    `${labelKey}: ${completedSteps} / ${total}`

  
  const elements = [
    phaseChart({ completedStepsInPhase, chartKey: MEDITATION, total: NUMBER_OF_STEP_FOR_PHASES, label }),
    phaseChart({ completedStepsInPhase, chartKey: SELF_ASSESSMENT, total: NUMBER_OF_STEP_FOR_PHASES, label }),
    phaseChart({ completedStepsInPhase, chartKey: VISION_CREATION, total: NUMBER_OF_STEP_FOR_PHASES, label }),    
    overallChart({ completedStepsInPhase, total: NUMBER_OF_STEPS, label })
  ];

  return ({
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    maxColumns,
    elements,
    chartProps,
    phaseForStepAtIndex
  });
}

export default connect(mapStateToProps, null, merge)(PieChartCells);
