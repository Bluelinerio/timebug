// @flow
import R from 'ramda'
import type { Form } from '../../types'
import { formsLenses } from '../lenses/user.lenses';
import { viewOr } from './utils';
/// forms
const sortFormsChronologically = (a: Form, b: Form) =>
  Date.parse(b.updatedAt) - Date.parse(a.updatedAt)
// stepId on the server is an Int!. A clear idea how to

const completedForms = viewOr([], formsLenses)

const completedFormsData = R.compose(
  R.indexBy(R.prop('stepId')),
  completedForms
)

export const completedFormsChronologically = R.compose(
  R.sort(sortFormsChronologically),
  completedForms
)

export const sortedCompletedForms = R.compose(
  R.completedForms,
  completedForms
)

export const completedStepIds = R.compose(
  R.prop('stpeId'),
  completedForms
)

export const formWithStepId = stepId => R.compose(
  R.propEq('stepId', stepId),
  completedForms
)

export const hasCompletedForms = R.compose(R.length, completedForms)

export const hasNoCompletedForms = R.compose(R.not, hasCompletedForms)

export default {
  completedForms,
  sortedCompletedForms,
  completedFormsChronologically,
  completedFormsData,
  completedStepIds,
  formWithStepId,
  hasCompletedForms,
  hasNoCompletedForms
}
