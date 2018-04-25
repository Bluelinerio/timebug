// @flow
import R from 'ramda'
import { getUserState, getCms, getFormData } from './rootReducer'
import {
  UNDETERMINED,
  ANONYMOUS,
  AUTHENTICATING
} from '../services/apollo/models'
// models
import workbooks from '../screens/WorkbookScreen/forms'
import { removeIvalidValuesInsteadOfDoingAnyMigrationForNow } from './tcomb'

import type { User, Form } from '../services/apollo/models'
import type { Colors, Step, Slide } from '../services/cms'

export const filterWithKeys = (pred, obj) =>
  R.pipe(R.toPairs, R.filter(R.apply(pred)), R.fromPairs)(obj)

function isPositiveInteger(n) {
  return n >>> 0 === parseFloat(n)
}

export const filterNumbers = (obj: {}) =>
  filterWithKeys(key => isPositiveInteger(key), obj)

export const filterKeys = (keys: [string]) => (obj: {}) =>
  filterWithKeys(key => keys.includes(key), obj)
export const range = (start, end) =>
  Array(end - start)
    .fill()
    .map((v, i) => i + start)

export const stepIds = range(1, 30).map((v, i) => i.toString())

export const filterStepIds = filterKeys(stepIds)

// CMS
const sortSteps = (a: Step, b: Step) => a.number - b.number
const steps = (state: any): [Step] => getCms(state).steps
const sortedSteps = (state: any): [Step] =>
  Object.values(steps(state)).sort(sortSteps)
const stepColors = (state: any): { number: string } =>
  getCms(state).colors.steps
const introSlides = (state: any): [Slide] =>
  getCms(state).onboardingPages.intro.slides
const phaseColors = (state: any): { string: string } =>
  getCms(state).colors.phases

const isCMSLoading = (state: any) => getCms(state).requestCount > 0
const totalNumberOfSteps = (state: any) => getCms(state).totalNumberOfSteps
const colors = (state: any) => getCms(state).colors
const uniqueColors = (state: any) => [
  ...new Set([
    ...Object.values(getCms(state).colors.steps),
    ...Object.values(getCms(state).colors.phases)
  ])
]

const assignmentsForStepId = (state: any) => (stepId: string) =>
  steps(state)[stepId].assignments
const colorForStepWithId = (state: any) => (stepId: string) =>
  stepColors(state)[stepId]
const step = (number: number) => (state: any) => steps(state)[number]

const pages = state => getCms(state).pages
const appInstructions = (state: any) => pages(state)['AppInstructions']

// User
const user = (state: any): ?User =>
  typeof getUserState(state) === 'string' ? null : getUserState(state)
const userId = (state: any) => user(state) && user(state).id

const isNotLoggedIn = (state: any): boolean => !user(state)
const isLoggedIn = (state: any): boolean => !!user(state)
const isAnonymous = (state: any): boolean => getUserState(state) === ANONYMOUS
const isAuthenticating = (state: any): boolean =>
  getUserState(state) === AUTHENTICATING
const sortForms = (a: Form, b: Form) => a.stepId - b.stepId

// stepId on the server is an Int!. A clear idea how to
const completedFormsData = (state: any) =>
  completedForms(state).reduce(
    (forms, form) => ({
      ...forms,
      [form.stepId]: form.data
    }),
    {}
  )

const completedForms = (state: any): [Form] =>
  user(state) ? user(state).forms : []

const sortedCompletedForms = (state: any): [Form] =>
  completedForms(state).sort(sortForms)

const completedStepIds = (state: any): [string] =>
  completedForms(state).map(f => f.stepId)

const formWithStepId = (state: any) => (stepId: string): Form =>
  completedForms(state).find(f => f.stepId)

// form data
const formData = (state: any) => getFormData(state).data
const incompleteFormsData = (state: any) =>
  filterStepIds(getFormData(state).data)

const sortedStepsWithForms = state => {

  const completed = completedForms(state)
  const incompleteForms = incompleteFormsData(state)

  const { latestStepId } = Object.keys(incompleteForms).reduce(
    (sum, latestStepId) => {
      const timeStamp =
        incompleteForms[latestStepId] && incompleteForms[latestStepId].timeStamp
      if (timeStamp) {
        if (!sum.timeStamp || sum.timeStamp < timeStamp) {
          return {
            latestStepId,
            timeStamp
          }
        }
      }
      return sum
    },
    {}
  )
  return {
    sortedStepsWithForms: sortedSteps(state).map(step => {
      return {
        completedForms: completed.find(f => f.stepId),
        incomplete: filterNumbers(incompleteForms[step.stepId]),
        step
      }
    }),
    latestStepId
  }
}
const modelsAndDataForExercise = (state: any) => (stepId: string) => {
  //TComb Forms helpers

  const models = workbooks[stepId]
  const localData = getFormData(state).data[stepId]

  if (!localData) {
    return {
      models,
      formData: {}
    }
  }

  const mergeForm = (sum, formKey) => ({
    ...sum,
    ...(localData[formKey] && {
      [formKey]: removeIvalidValuesInsteadOfDoingAnyMigrationForNow(
        models[formKey],
        localData[formKey]
      )
    })
  })
  const formData = Object.keys(models).reduce(mergeForm, {})

  return {
    models,
    formData
  }
}

const isSynchingFormData = (state: any) => getFormData(state).requestCount > 0

export default {
  getCms,
  sortedSteps,
  sortedStepsWithForms,
  steps,
  colorForStepWithId,
  phaseColors,
  introSlides,
  step,
  pages,
  appInstructions,
  colors,
  uniqueColors,
  stepColors,
  isCMSLoading,
  totalNumberOfSteps,
  assignmentsForStepId,
  user,
  userId,
  isLoggedIn,
  isNotLoggedIn,
  isAnonymous,
  isAuthenticating,
  completedForms,
  sortedCompletedForms,
  completedFormsData,
  completedStepIds,
  formWithStepId,
  modelsAndDataForExercise,
  formData,
  incompleteFormsData,
  isSynchingFormData
}
