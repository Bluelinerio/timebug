import React                  from 'react';
import { ApolloProvider } from 'react-apollo';
import { store, client }              from './src/reducers/rootReducer';
import { AppRegistry }        from 'react-native';
import Navigator              from './src/navigator'
import * as NavigationService from './src/HOC/navigation'
import './src/styles';

XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
                 GLOBAL.originalXMLHttpRequest :
                 GLOBAL.XMLHttpRequest;

export default class book2020 extends React.Component {


  componentDidMount() {
    NavigationService.setNavigator(this.navigator);
  }

  render() {
    return (
      <ApolloProvider store={store} client={client}>
        <Navigator ref={nav => {
          this.navigator = nav;
        }}/>
      </ApolloProvider>
    )
  }

}

AppRegistry.registerComponent('TwentyTwenty', () => book2020);
