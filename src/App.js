import React                        from 'react';
import { ApolloProvider }           from 'react-apollo';
import { Provider }                 from 'react-redux';
import { AppRegistry, Platform }    from 'react-native';
import setup                        from './redux';
import { client }                   from './services/apollo';
import ReduxNavigator               from './navigation/reduxNavigator';
import { APP_NAME }                 from './constants';
import                                  './styles';

if (__DEV__) {
  XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
                   GLOBAL.originalXMLHttpRequest :
                   GLOBAL.XMLHttpRequest;
}
export default class App extends React.Component {

  render() {
    const { store } = setup();
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <ReduxNavigator />
        </Provider>
      </ApolloProvider>
    )
  }

}

AppRegistry.registerComponent(APP_NAME, () => App);
