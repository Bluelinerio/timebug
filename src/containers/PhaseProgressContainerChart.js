// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import selectors from '../redux/selectors';
import { 
  phaseForStepAtIndex,
  NUMBER_OF_STEPS,
  NUMBER_OF_STEP_FOR_PHASES,
  MEDITATION,
  SELF_ASSESSMENT,
  VISION_CREATION
} from '../services/cms';
import PieChartCells from '../components/PhaseProgress/PieChartCells'
import type, { Slice, Chart } from '../components/PhaseProgress/PieChartCells'
import { mediumGray } from '../constants/colors'

type  BuildChartProps = {
  missingFormsColor?: string,
  phaseColors: { string: string }
}

type CompletedSteps = {
  MEDITATION: number,
  VISION_CREATION: number,
  SELF_ASSESSMENT: number
}

type LabelFn = ({ total: number, completedSteps: number }) => string

type ChartProps = {
  completedStepsInPhase: CompletedSteps,
  total: number,
  label: LabelFn
}

type PhaseChartProps = {
  completedStepsInPhase: number,
  chartKey: string,
  total: number,
  label: LabelFn
}

type OverallChartFn = (ChartProps) => Chart

type ChartFn = (PhaseChartProps) => Chart

type ChartFns = (BuildChartProps) => {
  overall: OverallChartFn,
  phases: ChartFn
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

  const buildCharts = ({
    missingFormsColor = mediumGray,
    phaseColors
  }: BuildChartProps): ChartFns => {
    const overallChart: OverallChartFn = ({
      completedStepsInPhase,
      total,
      label 
    }) => {
      const completedSteps = Object.values(completedStepsInPhase).reduce((prev, curr) => prev + curr, 0)
      const slices = completedSteps === total 
        ? [{
              color: phaseColors[COMPLETE],
              amount: total
        }]
        : [
            {
              color: phaseColors[MEDITATION],
              amount: completedStepsInPhase[MEDITATION]
            },
            {
              color: phaseColors[SELF_ASSESSMENT],
              amount: completedStepsInPhase[SELF_ASSESSMENT]
            },
            {
              color: phaseColors[VISION_CREATION],
              amount: completedStepsInPhase[VISION_CREATION]
            },
            {
              color: missingFormsColor,
              amount: total - completedSteps
            }
        ]

      return {
        label: label({ total, completedSteps }),
        total,
        slices
      }
    }

    const phaseChart: ChartFn = ({
      completedStepsInPhase,
      chartKey, 
      total,
      label 
    }) => {
      const completedSteps = completedStepsInPhase[chartKey]
      const slices = [
        {
          color: phaseColors[chartKey],
          amount: completedSteps
        },
        {
          color: missingFormsColor,
          amount: total - completedSteps
        }
      ]
      return {
        label: label({ total, completedSteps }),
        total,
        slices
      }
    }

    return ({
      overall: overallChart,
      phase: phaseChart
    }) 
  }

  const { overall: overallChart, phase: phaseChart } = buildCharts({ missingFormsColor: mediumGray, phaseColors })

  const label: LabelFn = ({ total, completedSteps }) => 
    `Overall: ${completedSteps} / ${total}`

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
    phaseForStepAtIndex
  });
}

export default connect(mapStateToProps, null, merge)(PieChartCells);
