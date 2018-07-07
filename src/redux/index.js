// @flow
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleware                                       from 'redux-saga'
import thunk                                                      from 'redux-thunk'
import { persistStore }                                           from 'redux-persist'
import { createReactNavigationReduxMiddleware }                   from 'react-navigation-redux-helpers'
import applyAppStateListener                                      from 'redux-enhancer-react-native-appstate'
import reduxReset                                                 from 'redux-reset'
import rootSaga                                                   from './rootSagas'
import { rootReducer }                                            from './rootReducer'
import { 
  RESET_STORE
 }                                                                from './actionTypes'
import { naviationRootKey, }                                      from '../navigation'
import nav                                                        from '../navigation/nav.reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const navigationMiddleware = createReactNavigationReduxMiddleware( naviationRootKey, state => state.nav)

export default () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    combineReducers({
      ...rootReducer,
      nav
    }),
    composeEnhancers(
      reduxReset(RESET_STORE), // resets te store
      applyAppStateListener(),
      applyMiddleware(navigationMiddleware, thunk, sagaMiddleware)
    )
  )
  const persistor = persistStore(store)

  sagaMiddleware.run(rootSaga)

  return {
    persistor,
    store
  }
}
