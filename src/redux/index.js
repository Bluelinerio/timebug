// @flow
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import applyAppStateListener from 'redux-enhancer-react-native-appstate';
import reduxReset from 'redux-reset';
import rootSaga from './rootSagas';
import { rootReducer } from './rootReducer';
import { resetStore } from './actions';
import Reactotron from 'reactotron-react-native';
import { storeHasLoaded } from './actions/persist.actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const logger = store => next => action => {
  Reactotron.display({
    name: 'action',
    preview: action.type,
    value: action.payload,
  });
  const result = next(action);
  Reactotron.display({
    name: 'store',
    preview: action.type,
    value: store.getState(),
  });
  return result;
};

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  if (__DEV__) {
    const store = Reactotron.createStore(
      combineReducers(rootReducer),
      composeEnhancers(
        reduxReset(resetStore.type), // Set action.type here
        applyAppStateListener(),
        applyMiddleware(logger, navigationMiddleware, thunk, sagaMiddleware)
      )
    );
    const persistor = persistStore(store, {}, () => {
      store.dispatch(storeHasLoaded());
    });

    sagaMiddleware.run(rootSaga);

    return {
      persistor,
      store,
    };
  }
  const store = createStore(
    combineReducers(rootReducer),
    composeEnhancers(
      reduxReset(resetStore.type), // Set action.type here
      applyAppStateListener(),
      applyMiddleware(logger, navigationMiddleware, thunk, sagaMiddleware)
    )
  );
  const persistor = persistStore(store, {}, () => {
    store.dispatch(storeHasLoaded());
  });

  sagaMiddleware.run(rootSaga);

  return {
    persistor,
    store,
  };
};
