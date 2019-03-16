// @flow
/* eslint-disable no-unused-vars */
import R from 'ramda'
import ToolLocks from '2020_static/tools'
import {
  OPEN,
  STEPS,
  TOOL,
  ACHIEVEMENT,
  ALL,
  SOME,
} from '2020_static/tools/logic/constants'

import type { ToolLock, Tool, Clause, Condition } from '2020_static/tools/types'
import type { Step } from './cms'

const areArraysEqual = R.compose(R.isEmpty, R.symmetricDifference)

// TODO: Consider or fill other conditions besides step completion, like tool completion or other arguments
// TODO: Add a method to test/get a single tool at a time

export const testSome = (clause: Array<any>, data: Array<any>): boolean =>
  clause.reduce((fulfillment, c) => {
    if (fulfillment === true) return fulfillment
    if (data.find(d => d === c)) return true
    return fulfillment
  }, false)

export const testAll = (clause: Array<any>, data: Array<any>): boolean => {
  const difference = R.symmetricDifference(clause, data)
  const hasAll = clause.reduce((fulfillment, c) => {
    if (fulfillment === false) return fulfillment
    if (difference.find(d => d === c)) return false
    return fulfillment
  }, true)
  return hasAll
}

export const testStepConditions = (
  clause: Clause,
  stepNumberList: Array<string>
): boolean => {
  const { type, value } = clause
  switch (type) {
  case ALL:
    return testAll(value, stepNumberList)
  case SOME:
    return testSome(value, stepNumberList)
  default:
    return true
  }
}

export const testToolConditions = (
  clause: Clause,
  stepNumberList: Array<string>
): boolean => true

export const testAchievementConditions = (
  clause: Clause,
  achievementData: any
): boolean => true

export const handleConditionType = (
  { type, clause }: Condition,
  stepNumberList: Array<string>,
  toolData: any,
  achievementData: any
): boolean => {
  switch (type) {
  case STEPS:
    return testStepConditions(clause, stepNumberList)
  case TOOL:
    return testToolConditions(clause, toolData)
  case ACHIEVEMENT:
    return testAchievementConditions(clause, achievementData)
  case OPEN:
    return true
  default:
    return true
  }
}

// Conditions are considered with AND; every condition must be fulfilled for the test to be successful
export const testConditions = (
  lockedTool: ToolLock,
  stepNumberList: Array<string>,
  toolData: any,
  achievementData: any
): boolean => {
  const { conditions = [], tool } = lockedTool
  if (!conditions || R.isEmpty(conditions)) return true
  const test = conditions.reduce((fulfillment, condition) => {
    if (fulfillment === false) return fulfillment
    const isFulfilled = handleConditionType(
      condition,
      stepNumberList,
      toolData,
      achievementData
    )
    if (isFulfilled === false) return false
    return fulfillment
  }, true)
  return test
}

const _getUnlockedTools = () => {
  let unlockedToolCache = null
  let previouslyCompletedStepList = null
  return (
    completedSteps: Array<Step>,
    toolData?: Array<any> = [],
    achievementData?: any = null
  ): Array<Tool> => {
    const stepNumberList = completedSteps.map(s => s.number)
    const shouldUseCacheData =
      unlockedToolCache &&
      previouslyCompletedStepList &&
      areArraysEqual(stepNumberList, previouslyCompletedStepList)
    if (shouldUseCacheData) return unlockedToolCache

    const unlockedTools = ToolLocks.reduce((unlockedToolList, lockedTool) => {
      const areConditionsSatisfied = testConditions(
        lockedTool,
        stepNumberList,
        toolData,
        achievementData
      )
      if (areConditionsSatisfied) return [...unlockedToolList, lockedTool.tool]
      return unlockedToolList
    }, [])
    previouslyCompletedStepList = stepNumberList
    unlockedToolCache = unlockedTools
    return unlockedTools
  }
}

export const getUnlockedTools = _getUnlockedTools()
