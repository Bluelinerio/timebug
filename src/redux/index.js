import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
}                                       from 'redux'
import createSagaMiddleware             from 'redux-saga'
import { offline }                      from '@redux-offline/redux-offline';
import offlineConfig                    from '@redux-offline/redux-offline/lib/defaults';

import rootSaga       from './rootSagas'
import { rootReducer }from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combineReducers({
    ...rootReducer,
    }), 
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware, 
      ),
      offline({
        offlineConfig,
        whitelist: ['formData', 'cms' ],
        blacklist: ['forms']
      })
    )
  );

  sagaMiddleware.run(rootSaga);

  return {
    store
  }
}
