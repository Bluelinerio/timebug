import R from 'ramda'
import { user } from './rootReducer.lenses'

export const formsLenses = R.compose(
  user,
  R.lensProp('forms')
);
