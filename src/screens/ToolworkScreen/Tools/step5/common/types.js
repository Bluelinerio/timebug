// @flow

type FormAnswer = {
  value: any,
  _id: any,
}

export type Goal = {
  id: string,
  [x: string]: FormAnswer,
}

export type GoalToolData = {
  completed?: boolean,
  deleted?: boolean,
  completion_date?: string,
}

export type GoalWithToolData = Goal & {
  toolData?: GoalToolData,
}
