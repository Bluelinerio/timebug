import cms          from './reducers/cms.reducer'
import error        from './reducers/error.reducer'
import network      from './reducers/network.reducer'
import user         from './reducers/user.reducer'
import forms        from './reducers/forms.reducer'
import formData     from './reducers/formData.reducer'
import nav          from './reducers/nav.reducer'
import appState     from './reducers/appState.reducer'
import agregates    from './reducers/agregates.reducer'
import events       from './reducers/events.reducer'

export const rootReducer = {
  cms,
  error,
  network,
  user,
  forms,
  formData,
  nav,
  appState,
  agregates,
  events
}

// @flow
import type { CMSState }        from './reducers/cms.reducer'
import type { FormDataState }   from './reducers/forms.reducer'
import type { FormModelsState } from './reducers/formData.reducer'
import type { UserState }       from '../../services/apollo/models'
import type { AppState }        from './reducers/appState.reducer'
import type { AggregateState }  from './reducers/agregates.reducer'
import type { EventsState }     from './reducers/events.reducer';

export const getUserState = (state: any):UserState => state.user
export const getCms = (state: any):CMSState => state.cms
export const getForms = (state: any):FormModelsState => state.forms
export const getFormData = (state: any):FormDataState => state.formData
export const getAppState = (state: any):AppState => state.appState
export const getAggregateState = (state: any): AggregateState => state.agregates
export const getEventsState = (state: any): EventsState => state.events;
