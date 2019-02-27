// @flow
export type Goal = {
  [x: string]: {
    value: any,
  },
  _id: string,
  toolData?: {
    completed?: boolean,
    completionDate?: string,
    deleted?: boolean,
    deletionDate?: string,
    goalId: string,
  },
}

export type GoalToolData = {
  goalId: string,
  completed?: boolean,
  completionDate?: string,
  updatedAt: string
}