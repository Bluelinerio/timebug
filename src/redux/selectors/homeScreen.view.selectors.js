// @flow
import R from 'ramda'
import { checkins } from './checkins.selectors';
import { isMeditationCheckin } from './selectors.logic'
import formsSelectors from './forms.selectors'

const { completedForms } = formsSelectors

export const showUserMeditationOption = R.pipe(
  checkins,
  R.findIndex(isMeditationCheckin),
  R.equals(-1),
  R.not,
)

export const showUserProgress = R.pipe(
  forms => forms.length > 3,
  completedForms
)
