import cms           from './reducers/cms.reducer'
import error         from './reducers/error.reducer'
import network       from './reducers/network.reducer'
import user          from './reducers/user.reducer'
import formData      from './reducers/formData.reducer'
import appState      from './reducers/appState.reducer'
import agregates     from './reducers/agregates.reducer'
import awards        from './reducers/awards.reducer'
import modal         from './reducers/modal.reducer'
import uiState       from './reducers/ui.reducer'
import checkins      from './reducers/checkin.reducer'
import persistState  from './reducers/persist.reducer'
import goals         from './reducers/goals.reducer'
import contacts      from './reducers/contacts.reducer'
import notifications from './reducers/notifications.reducer'
import permissions   from './reducers/permissions.reducer'

export const rootReducer = {
  cms,
  error,
  network,
  user,
  formData,
  appState,
  agregates,
  awards,
  modal,
  uiState,
  checkins,
  persistState,
  goals,
  contacts,
  notifications,
  permissions,
}
