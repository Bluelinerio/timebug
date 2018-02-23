// @flow
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
}                                               from 'redux'
import createSagaMiddleware                     from 'redux-saga'
import { persistStore }                         from 'redux-persist'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { AsyncStorage }                         from 'react-native'
import applyAppStateListener                    from 'redux-enhancer-react-native-appstate';
import rootSaga                                 from './rootSagas'
import { rootReducer }                          from './rootReducer';
import { reactNavigationMiddleware }            from './middlewares';


type Props = {
  whitelist: Array<string>,
  blacklist: Array<string>,
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

export default () => {

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(combineReducers(rootReducer),
    composeEnhancers(
      applyAppStateListener(),
      applyMiddleware(sagaMiddleware),
      applyMiddleware(navigationMiddleware)
    )
  );
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return {
    persistor,
    store
  }
}

