// @flow
import R from 'ramda'
import { filterKeys, viewOr } from './utils'
import { stepIds } from '../../constants/steps'
import * as reducerLenses from '../lenses/reducer.lenses'

export const filterStepIds = filterKeys(stepIds)

const byNumber = R.ascend(R.prop('number'))

// CMS
const steps = viewOr({}, reducerLenses.steps)
const sortedSteps = R.pipe(
  steps,
  R.values,
  R.sort(byNumber)
)
const stepColors = viewOr({}, reducerLenses.stepColors)
const phaseColors = viewOr({}, reducerLenses.phaseColors)
const introSlides = viewOr([], reducerLenses.introSlides)
const isCMSLoading = R.compose(
  i => i > 0,
  viewOr(0, reducerLenses.cmsRequestCount),
  // R.equals(0),
  // R.not
)
const totalNumberOfSteps = viewOr(30, reducerLenses.totalNumberOfSteps)
const colors = viewOr(undefined, reducerLenses.colors)
const uniqueColors = state => R.uniq(
  [...R.values(phaseColors(state)), ...R.values(stepColors(state))]
)
const meditations = viewOr([], reducerLenses.meditations)
const step = R.curry((state, stepId) => R.prop(stepId, steps(state)))
const pages = viewOr([], reducerLenses.pages)
const appInstructions = viewOr(undefined, reducerLenses.appInstructions)

export default {
  steps,
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