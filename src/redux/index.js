// @flow
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import applyAppStateListener from 'redux-enhancer-react-native-appstate'
import reduxReset      from 'redux-reset'

import rootSaga        from './rootSagas'
import { rootReducer } from './rootReducer'
import { resetStore }  from './actions'

import Reactotron from 'reactotron-react-native'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)

const logger = store => next => action => {  
  Reactotron.log(action.type)  
  const result = next(action)
  Reactotron.log(result)
  return result  
} 

export default () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    combineReducers(rootReducer),
    composeEnhancers(
      reduxReset(resetStore.type), // Set action.type here
      applyAppStateListener(),
      applyMiddleware(logger, navigationMiddleware, thunk, sagaMiddleware)
    )
  )
  const persistor = persistStore(store)

  sagaMiddleware.run(rootSaga)

  return {
    persistor,
    store
  }
}
