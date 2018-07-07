// @flow
import type { Step, Slide } from '../../services/cms'
import { getCms } from '../rootReducer'
import { filterKeys } from './utils'
import { stepIds } from '../../constants/steps'

export const filterStepIds = filterKeys(stepIds)

const sortSteps = (a: Step, b: Step) => a.number - b.number

// CMS
const steps = (state: any): [Step] => getCms(state).steps
const sortedSteps = (state: any): [Step] => Object.values(steps(state)).sort(sortSteps)
const stepColors = (state: any): { number: string } => getCms(state).colors.steps
const introSlides = (state: any): [Slide] => getCms(state).onboardingPages.intro.slides
const phaseColors = (state: any): { string: string } => getCms(state).colors.phases
const isCMSLoading = (state: any) => getCms(state).requestCount > 0
const totalNumberOfSteps = (state: any) => getCms(state).totalNumberOfSteps
const colors = (state: any) => getCms(state).colors
const uniqueColors = (state: any) => [
  ...new Set([
    ...Object.values(getCms(state).colors.steps),
    ...Object.values(getCms(state).colors.phases)
  ])
]
const meditations = (state: any) => getCms(state).meditations
const step = (number: number) => (state: any) => steps(state)[number]
const pages = state => getCms(state).pages
const appInstructions = (state: any) => pages(state)['AppInstructions']

export default {
  sortedSteps,
  steps,
  meditations,
  phaseColors,
  introSlides,
  step,
  pages,
  appInstructions,
  colors,
  uniqueColors,
  stepColors,
  isCMSLoading,
  totalNumberOfSteps
}
