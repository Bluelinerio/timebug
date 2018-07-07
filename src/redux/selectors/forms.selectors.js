// @flow
import type { Form }                                          from '../../types'
import { user }                                               from './user.selectors'

/// forms
const sortForms = (a: Form, b: Form) => a.stepId - b.stepId
const sortFormsChronologically = (a: Form, b: Form) =>
  Date.parse(b.updatedAt) - Date.parse(a.updatedAt)
// stepId on the server is an Int!. A clear idea how to

const completedForms = (state: any): [Form] =>
  user(state) ? user(state).forms.map(f => f) : []

const completedFormsData = (state: any) =>
  completedForms(state).reduce(
    (forms, form) => ({
      ...forms,
      [form.stepId]: form.data
    }),
    {}
  )


const completedFormsChronologically = (state: any): [Form] =>
  completedForms(state).sort(sortFormsChronologically)

const sortedCompletedForms = (state: any): [Form] =>
  completedForms(state).sort(sortForms)

const completedStepIds = (state: any): [string] =>
  completedForms(state).map(f => f.stepId)

const formWithStepId = (state: any) => (stepId: string): Form =>
  completedForms(state).find(f => f.stepId === stepId)

export default {
  completedForms,
  sortedCompletedForms,
  completedFormsChronologically,
  completedFormsData,
  completedStepIds,
  formWithStepId,
}
