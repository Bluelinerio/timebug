// @flow

export type Goal = {
  id: string,
  name: string,
  category: string,
  timeToComplete: string,
  steps: string,
  creation: string,
}

export type Substep = {
  id: string,
  name: string,
  completed?: boolean,
}

export type SubstepToolData = {
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
  steps?: Array<SubstepToolData>,
}
