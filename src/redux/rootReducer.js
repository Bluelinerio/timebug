// @flow
import { compose, set } from 'ramda'
import * as rootReducerLenses from './lenses/rootReducer.lenses'
import user from './reducers/user.reducer'
import cms from './reducers/cms.reducer'
import network from './reducers/network.reducer'
import formData from './reducers/formData.reducer'
import appState from './reducers/appState.reducer'
import agregates from './reducers/agregates.reducer'
import error from './reducers/error.reducer'

export const rootReducer = compose(
	set(rootReducerLenses.user, user),
	set(rootReducerLenses.cms, cms),
	set(rootReducerLenses.network, network),
	set(rootReducerLenses.formData, formData),
	set(rootReducerLenses.appState, appState),
	set(rootReducerLenses.agregates, agregates),
	set(rootReducerLenses.error, error),
)({})