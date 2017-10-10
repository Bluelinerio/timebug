import React                  from 'react';
import { ApolloProvider }     from 'react-apollo';
import { AppRegistry }        from 'react-native';
import { store, client }      from './src/reducers/rootReducer';
import ReduxNavigator         from './src/navigation/reduxNavigator'
import './src/styles';

if (__DEV__) {
  XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
                   GLOBAL.originalXMLHttpRequest :
                   GLOBAL.XMLHttpRequest;
}

export default class TwentyTwenty extends React.Component {

  render() {
    return (
      <ApolloProvider store={store} client={client}>
        <ReduxNavigator />
      </ApolloProvider>
    )
  }

}

AppRegistry.registerComponent('2020', () => TwentyTwenty);
