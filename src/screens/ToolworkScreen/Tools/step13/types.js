// @flow

export type ToolData = {
  form: Array<any>,
  toolData: Array<GoalToolData>
}

export type Goal = {
  id: string,
  name: string,
  category: string,
  timeToComplete: string,
  steps: string,
  creation: string,
  toolData: GoalToolData
}

export type Substep = {
  id: string,
  name: string,
  toolData: SubstepToolData
}

export type SubstepToolData = {
  substepId: string,
  completedAt?: string,
  due?: string,
  completed?: string,
}

export type GoalToolData = {
  goalId: string,
  completed?: boolean,
  deleted?: boolean,
  completedAt?: string,
  deletedAt?: string,
  notes?: string,
  steps?: Array<SubstepToolData>,
}
