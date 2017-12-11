import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
}                                       from 'redux'
import createSagaMiddleware             from 'redux-saga'
import {
  ApolloClient,
  createNetworkInterface
} from 'react-apollo'
import { createLogger }                 from 'redux-logger'
import * as storage                     from 'redux-storage'
import filter                           from 'redux-storage-decorator-filter'
import debounce                         from 'redux-storage-decorator-debounce'
import createEngine                     from 'redux-storage-engine-reactnativeasyncstorage'
import { composeWithDevTools }          from 'remote-redux-devtools'

import cms      from './reducers/cms.reducer'
import error    from './reducers/error.reducer'
import network  from './reducers/network.reducer'
import user     from './reducers/user.reducer'
import form     from './reducers/form.reducer'
import nav      from './reducers/nav.reducer'

import rootSaga from './sagas/rootSagas'
import {client }from '../services/apollo'

const sagaMiddleware = createSagaMiddleware();

let engine = createEngine('2020-cache');

//here we tell redux-storage to save only cms
engine = filter(engine,
  [
    // white list
    'cms',
  ],
  [],
);

//here we specify the amount of time that must pass since the last change in store before it will be saved to a storage
engine = debounce(engine, 500);

const middleware                = storage.createMiddleware(engine);
export const load               = storage.createLoader(engine);
const loggerMiddleWare          = createLogger();
const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(loggerMiddleWare, sagaMiddleware, middleware, client.middleware()))(createStore);
const reducer = storage.reducer(
	combineReducers({
		cms,
		error,
		network,
		user,
		form,
		nav,
		apollo: client.reducer()
	})
)

export const store = createStoreWithMiddleware(reducer);

sagaMiddleware.run(rootSaga);

export const getUserState = state => state.user
export const getCms = state => state.cms;
