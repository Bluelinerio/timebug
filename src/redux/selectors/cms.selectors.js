// @flow
import R from 'ramda'
import { filterKeys, viewOr } from './utils'
import { stepIds } from '../../constants/steps'
import * as reducerLenses from '../lenses/reducer.lenses'

export const filterStepIds = filterKeys(stepIds)

const byNumber = R.ascend(R.prop('number'))

// CMS
export const steps = viewOr({}, reducerLenses.steps)
export const allSteps = R.compose(R.values, steps)
export const sortedSteps = R.pipe(
  steps,
  R.values,
  R.sort(byNumber)
)
export const stepColors = viewOr({}, reducerLenses.stepColors)
export const phaseColors = viewOr({}, reducerLenses.phaseColors)
export const introSlides = viewOr([], reducerLenses.introSlides)
export const isCMSLoading = R.compose(
  i => i > 0,
  viewOr(0, reducerLenses.cmsRequestCount),
  // R.equals(0),
  // R.not
)
export const totalNumberOfSteps = viewOr(30, reducerLenses.totalNumberOfSteps)
export const colors = viewOr(undefined, reducerLenses.colors)
export const uniqueColors = state => R.uniq(
  [...R.values(phaseColors(state)), ...R.values(stepColors(state))]
)
export const meditations = viewOr([], reducerLenses.meditations)
export const step = R.curry((state, stepId) => R.prop(stepId, steps(state)))
export const pages = viewOr([], reducerLenses.pages)
export const appInstructions = viewOr(undefined, reducerLenses.appInstructions)

export default {
  steps,
  allSteps,
  sortedSteps,
  meditations,
  phaseColors,
  stepColors,
  introSlides,
  step,
  pages,
  appInstructions,
  colors,
  uniqueColors,
  isCMSLoading,
  totalNumberOfSteps
}