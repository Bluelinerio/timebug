import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
import filter from 'redux-storage-decorator-filter';
import debounce from 'redux-storage-decorator-debounce'
import {createLogger} from 'redux-logger';
import steps from './steps';
import error from './error';
import login from './login';
import network from './network';
import rootSaga from '../sagas/rootSagas'

const sagaMiddleware = createSagaMiddleware();


let engine = createEngine('2020-cache');

//here we tell redux-storage to save only steps
engine = filter(engine,
  [
    // white list
    'steps'
  ],
  []
);

//here we specify the amount of time that must pass since the last change in store before it will be saved to a storage
engine = debounce(engine, 500);

const middleware = storage.createMiddleware(engine);
export const load = storage.createLoader(engine);
const loggerMiddleWare = createLogger();
const createStoreWithMiddleware = compose(applyMiddleware(loggerMiddleWare, sagaMiddleware, middleware))(createStore);
const reducer = storage.reducer(combineReducers(
  {
    steps,
    error,
    login,
    network
  }));

export const store = createStoreWithMiddleware(reducer);

sagaMiddleware.run(rootSaga);
