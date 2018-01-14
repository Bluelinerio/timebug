import React                        from 'react';
import { ApolloProvider }           from 'react-apollo';
import { Provider }                 from 'react-redux';
import { AppRegistry }              from 'react-native';
import { PersistGate }              from 'redux-persist/es/integration/react'
import setup                        from './redux';
import { client }                   from './services/apollo';
import ReduxNavigator               from './navigation/reduxNavigator';
import { APP_NAME }                 from './constants';
import DefaultIndicator             from './components/DefaultIndicator'
import                                  './styles';

if (__DEV__) {
  XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
                   GLOBAL.originalXMLHttpRequest :
                   GLOBAL.XMLHttpRequest;
}

const { persistor, store } = setup();

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <PersistGate
            loading={ <DefaultIndicator />}
            onBeforeLift={() => {
              
            }}
            persistor={persistor}
          >
            <ReduxNavigator />
          </PersistGate>
        </Provider>
      </ApolloProvider>
    )
  }
}

AppRegistry.registerComponent(APP_NAME, () => App);
