import R from 'ramda'
import { stepIds } from '../../constants/steps'
import screens from '../../constants/screens'

export const reduceStepIds = fn =>
  R.reduce(
    (acc, stepId) => ({
      ...acc,
      [stepId]: fn(stepId)
    }),
    {},
    stepIds
  )

export const reduceScreens = fn =>
  R.reduce(
    (acc, screenKey) => ({
      ...acc,
      [screens[screenKey]]: fn(screens[screenKey])
    }),
    {},
    R.keys(screens)
  )

export const branch = (selector, pass, fail) => arg => (selector(arg) ? pass : fail)
export const branchFn = (selector, pass, fail) => arg => (selector(arg) ? pass(arg) : fail(arg))
