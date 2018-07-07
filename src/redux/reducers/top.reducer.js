import type { UserState }       from '../../types'
import type { CMSState }        from './cms.reducer'
import type { FormModelsState } from './formData.reducer'
import type { AppState }        from './appState.reducer'
import type { AgregateState }   from './agregates.reducer'
import type { FormDataState }   from './formData.reducer'

export const getUserState = (state: any): UserState => state.user
export const getCms = (state: any): CMSState => state.cms
export const getForms = (state: any): FormModelsState => state.forms
export const getFormData = (state: any): FormDataState => state.formData
export const getAppState = (state: any): AppState => state.appState
export const getAgregateState = (state: any): AgregateState => state.agregates
