// @flow
import type { CMSState }          from '../reducers/cms.reducer'
import type { FormModelsState }   from '../reducers/formData.reducer'
import type { UserState }         from '../../services/apollo/models'
import type { AppState }          from '../reducers/appState.reducer'
import type { AgregateState }     from '../reducers/agregates.reducer'
import type { AwardState }        from '../reducers/awards.reducer'
import type { UIState }           from '../reducers/ui.reducer'
import type { CheckinState }      from '../reducers/checkin.reducer'
import type { PersistState }      from '../reducers/persist.reducer'
import type { GoalState }         from '../reducers/goals.reducer'
import type { ContactState }      from '../reducers/contacts.reducer'
import type { NotificationState } from '../reducers/notifications.reducer'

export const getUserState = (state: any): UserState => state.user
export const getCms = (state: any): CMSState => state.cms
export const getForms = (state: any): FormModelsState => state.forms
export const getFormData = (state: any): any => state.formData
export const getAppState = (state: any): AppState => state.appState
export const getAgregateState = (state: any): AgregateState => state.agregates
export const getAwards = (state: any): AwardState => state.awards
export const getUIState = (state: any): UIState => state.uiState
export const getCheckinState = (state: any): CheckinState => state.checkins
export const getPersistState = (state: any): PersistState => state.persistState
export const getGoals = (state: any): GoalState => state.goals
export const getContactState = (state: any): ContactState => state.contacts
export const getNotifications = (state: any): NotificationState => state.notifications
export const getNavigationState = (state: any): any => state.nav