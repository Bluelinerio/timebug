// @flow
import { 
    MEDITATION,
    SELF_ASSESSMENT,
    VISION_CREATION,
    COMPLETE,
    Phase
} from '../../services/cms';
import type, { Chart } from '../../components/PhaseProgress/PieChart'
import { PhaseColors } from './PhaseProgressContainerChart'

export type BuildChartProps = {
    missingFormsColor?: string,
    phaseColors: PhaseColors
}
  
export type LabelFn = ({ total: number, completedSteps: number, labelKey?: string }) => string

export type ChartProps = {
    completedStepsInPhase: CompletedSteps,
    total: number,
    label: LabelFn
}

export type PhaseChartProps = {
    completedStepsInPhase: number,
    chartKey: string,
    total: number,
    label: LabelFn
}

export type OverallChartFn = (ChartProps) => Chart

export type ChartFn = (PhaseChartProps) => Chart

export type ChartFns = (BuildChartProps) => {
    overall: OverallChartFn,
    phase: ChartFn
}

const transformKeyToText = (key: Phase) : string => {
  return key === MEDITATION 
    ? 'Meditation'
    : key === SELF_ASSESSMENT
    ? 'Self assessment'
    : key === VISION_CREATION
    ? 'Vision creation'
    : 'Complete'
}

export const buildCharts = ({
    missingFormsColor = mediumGray,
    phaseColors
}: BuildChartProps): ChartFns => {
    const overallChart: OverallChartFn = ({
      completedStepsInPhase,
      total,
      label 
    }) => {
      const completedSteps = Object.values(completedStepsInPhase).reduce((prev, curr) => prev + curr, 0)
      const labelKey = 'Overall'
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
        label: label({ labelKey, total, completedSteps }),
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
      const labelKey = transformKeyToText(chartKey)
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
        label: label({ labelKey, total, completedSteps }),
        total,
        slices
      }
    }

    return ({
      overall: overallChart,
      phase: phaseChart
    }) 
}