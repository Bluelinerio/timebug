import { user, cms } from './rootReducer.lenses'
import { compose, lensProp, lensPath } from 'ramda'

export const checkinsLens = compose(
  user,
  lensProp('checkins')
)

export const steps = compose(
  cms,
  lensProp('steps')
)
export const colors = compose(
  cms,
  lensProp('colors')
)

export const stepColors = compose(
  colors,
  lensProp('steps')
)

export const phaseColors = compose(
  colors,
  lensProp('phases')
)
export const introSlides = compose(
  cms,
  lensPath(['onboardingPages', 'intro', 'slides'])
)
export const cmsRequestCount = compose(
  cms,
  lensProp('requestCount')
)
export const totalNumberOfSteps = compose(
  cms,
  lensProp('totalNumberOfSteps')
)
export const meditations = compose(
  cms,
  lensProp('meditations')
)

export const pages = compose(
  cms,
  lensPath('pages')
)

export const appInstructions = compose(
  pages,
  lensProp('AppInstructions')
)