// @flow
import React                        from 'react';
import { ApolloProvider }           from 'react-apollo';
import { Provider }                 from 'react-redux';
import { AppRegistry }              from 'react-native';
import { PersistGate }              from 'redux-persist/es/integration/react'
import codePush                     from "react-native-code-push";

import setup                        from './redux';
import { client }                   from './services/apollo';
import ReduxNavigator               from './navigation/reduxNavigator';
import { APP_NAME }                 from './constants';
import DefaultIndicator             from './components/DefaultIndicator'
import Error                        from './components/Error'

if (__DEV__) {
  XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
                   GLOBAL.originalXMLHttpRequest :
                   GLOBAL.XMLHttpRequest;
}

const { persistor, store } = setup();

type State = {
  error?: any
}
export default class App extends React.Component<{},State> {

  state:State = {
    error: null
  }
  componentDidCatch(error:any) {
    this.setState({
      error
    })
  }

  render() {
    const { error } = this.state;
    if(error) {
      <Error message={error} />
    } 
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
const codePushConfigurations = { 
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME, 
  installMode: codePush.InstallMode.ON_NEXT_RESUME 
}

App = codePush(codePushConfigurations)(App);

AppRegistry.registerComponent(APP_NAME, () => App);
