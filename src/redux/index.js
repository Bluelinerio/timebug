// @flow
import {
  createStore,
  applyMiddleware,
  compose,
}                                               from 'redux'
import createSagaMiddleware                     from 'redux-saga'
import { persistStore, persistCombineReducers } from 'redux-persist'
import { AsyncStorage }                         from 'react-native'
import rootSaga           from './rootSagas'
import { rootReducer }    from './rootReducer';
import { persistConfig }  from '../constants/config';

type Props = {
  whitelist: Array<string>,
  blacklist: Array<string>,
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    persistCombineReducers({
      ...persistConfig,
      storage: AsyncStorage,
    }, rootReducer), 
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware, 
      )
    )
  );
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return {
    persistor,
    store
  }
}

