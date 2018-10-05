// @flow
import { connect }              from 'react-redux'
import selectors                from '../../redux/selectors'
import {
  phaseForStepAtIndex,
  NUMBER_OF_STEPS,
  NUMBER_OF_STEP_FOR_PHASES,
  MEDITATION,
  SELF_ASSESSMENT,
  VISION_CREATION
}                               from '../../services/cms'
import PieChartCells, {
  PieChartCellsProps
}                               from '../../components/PhaseProgress/PieChartCells'
import { mediumGray }           from '../../constants/colors'
import { buildCharts, LabelFn } from './charts'

type CompletedSteps = {
  MEDITATION: number,
  VISION_CREATION: number,
  SELF_ASSESSMENT: number
}

type PhaseProgressContainerChartProps = {
  maxColumns: number,
  width: number
}

export type PhaseColors = {
  MEDITATION: string,
  VISION_CREATION: string,
  SELF_ASSESSMENT: string,
  COMPLETE: string
}

type StepIndexesTo15 =
  | 0
  | 1
  | 2
  | 3
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
type StepIndexesTo29 =
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29

type StepIndexes = StepIndexesTo15 & StepIndexesTo29

type PhaseProgressContainerChartStateProps = {
  completedStepIndices: Array<StepIndexes>,
  phaseColors: PhaseColors
}

const chartProps: any = {
  spacing: 0,
  outerRadius: '95%',
  innerRadius: '50%'
}

const mapStateToProps = (
  state: any
): PhaseProgressContainerChartStateProps => ({
  completedStepIndices: selectors.completedStepIds(state).map(i => i - 1),
  phaseColors: selectors.phaseColors(state)
})

const recommendedMaxColumns = 3

const merge = (
  stateProps: PhaseProgressContainerChartStateProps,
  dispatchProps?: any,
  ownProps: PhaseProgressContainerChartProps
): PieChartCellsProps => {
  const { phaseColors, completedStepIndices } = stateProps
  const { maxColumns = recommendedMaxColumns } = ownProps

  const completedStepsInPhase: CompletedSteps = {
    MEDITATION: completedStepIndices.filter(
      index => phaseForStepAtIndex(index) === MEDITATION
    ).length,
    VISION_CREATION: completedStepIndices.filter(
      index => phaseForStepAtIndex(index) === VISION_CREATION
    ).length,
    SELF_ASSESSMENT: completedStepIndices.filter(
      index => phaseForStepAtIndex(index) === SELF_ASSESSMENT
    ).length
  }

  const { overall: overallChart, phase: phaseChart } = buildCharts({
    missingFormsColor: mediumGray,
    phaseColors
  })

  const label: LabelFn = ({ total, completedSteps, labelKey }) =>
    `${labelKey}: ${completedSteps} / ${total}`

  const elements = [
    phaseChart({
      completedStepsInPhase,
      chartKey: MEDITATION,
      total: NUMBER_OF_STEP_FOR_PHASES,
      label
    }),
    phaseChart({
      completedStepsInPhase,
      chartKey: SELF_ASSESSMENT,
      total: NUMBER_OF_STEP_FOR_PHASES,
      label
    }),
    phaseChart({
      completedStepsInPhase,
      chartKey: VISION_CREATION,
      total: NUMBER_OF_STEP_FOR_PHASES,
      label
    }),
    overallChart({ completedStepsInPhase, total: NUMBER_OF_STEPS, label })
  ]

  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    maxColumns,
    elements,
    chartProps
  }
}

export default connect(mapStateToProps, null, merge)(PieChartCells)
