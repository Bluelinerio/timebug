// @flow
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
}                                               from 'redux'
import createSagaMiddleware                     from 'redux-saga'
import { persistStore }                         from 'redux-persist'
import { AsyncStorage }                         from 'react-native'
import applyAppStateListener                    from 'redux-enhancer-react-native-appstate';
import rootSaga           from './rootSagas'
import { rootReducer }    from './rootReducer';

type Props = {
  whitelist: Array<string>,
  blacklist: Array<string>,
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(combineReducers(rootReducer),
    composeEnhancers(
      applyAppStateListener(),
      applyMiddleware(sagaMiddleware)
    )
  );
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return {
    persistor,
    store
  }
}

