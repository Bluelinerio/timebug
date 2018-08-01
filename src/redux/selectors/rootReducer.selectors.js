// @flow
import R from 'ramda'
import {
  user,
  cms,
  formData,
  agregates,
  appState
} from '../lenses/rootReducer.lenses'

export const getUserState = R.view(user)
export const getCms = R.view(cms)
export const getFormData = R.view(formData)
export const getAgregateState = R.view(agregates)
export const getAppState = R.view(appState);