import cms          from './reducers/cms.reducer'
import error        from './reducers/error.reducer'
import network      from './reducers/network.reducer'
import user         from './reducers/user.reducer'
import formData     from './reducers/formData.reducer'
import nav          from './reducers/nav.reducer'
import appState     from './reducers/appState.reducer'
import agregates    from './reducers/agregates.reducer'
import awards       from './reducers/awards.reducer'
import modal        from './reducers/modal.reducer'
import uiState      from './reducers/ui.reducer'
import checkins     from './reducers/checkin.reducer'
import persistState from './reducers/persist.reducer'

export const rootReducer = {
  cms,
  error,
  network,
  user,
  formData,
  nav,
  appState,
  agregates,
  awards,
  modal,
  uiState,
  checkins,
  persistState
}
