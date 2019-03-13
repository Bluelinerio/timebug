// @flow
import { OPEN, STEPS, TOOL, ACHIEVEMENT, ALL, SOME } from '../logic/constants'
import {
  MEDITATION,
  SELF_ASSESSMENT,
  VISION_CREATION,
  COMPLETE,
} from '2020_services/cms'

export type Clause = {
  type: ALL | SOME,
  value: any,
}

export type Condition = {
  type: OPEN | STEPS | TOOL | ACHIEVEMENT,
  clause?: Clause,
}

export type Tool = {
  key: string,
  number?: number,
  affectedSteps?: Array<number>,
  title: string,
  subtitle: string,
  content: string,
  form?: any,
  formStyles?: any,
  config?: any,
  phase: MEDITATION | SELF_ASSESSMENT | VISION_CREATION | COMPLETE,
}

export type ToolLock = {
  conditions: Array<Condition>,
  tool: Tool,
}
