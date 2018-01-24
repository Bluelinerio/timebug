// @flow
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
import Error                        from './components/Error'
import                                  './styles';
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

AppRegistry.registerComponent(APP_NAME, () => App);
