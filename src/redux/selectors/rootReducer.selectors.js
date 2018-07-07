// @flow
import type { CMSState } from '../reducers/cms.reducer';
import type { FormModelsState } from '../reducers/formData.reducer';
import type { UserState } from '../../services/apollo/models';
import type { AppState } from '../reducers/appState.reducer';
import type { AgregateState } from '../reducers/agregates.reducer';

export const getUserState = (state: any): UserState => state.user;
export const getCms = (state: any): CMSState => state.cms;
export const getForms = (state: any): FormModelsState => state.forms;
export const getFormData = (state: any): FormDataState => state.formData;
export const getAppState = (state: any): AppState => state.appState;
export const getAgregateState = (state: any): AgregateState =>
  state.agregates;