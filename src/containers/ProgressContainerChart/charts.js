// @flow
import { 
    MEDITATION,
    SELF_ASSESSMENT,
    VISION_CREATION
} from '../../services/cms';
import type, { Chart } from '../../components/PhaseProgress/PieChart'

export type BuildChartProps = {
    missingFormsColor?: string,
    phaseColors: { string: string }
}
  
export type LabelFn = ({ total: number, completedSteps: number }) => string

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