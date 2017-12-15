import React                        from 'react';
import { ApolloProvider }           from 'react-apollo';
import { AppRegistry, Platform }    from 'react-native';
import { store }                    from './redux/rootReducer';
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
    return (
      <ApolloProvider store={store} client={client}>
        <ReduxNavigator />
      </ApolloProvider>
    )
  }

}

AppRegistry.registerComponent(APP_NAME, () => App);
