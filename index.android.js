import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/reducers/rootReducer';
import {AppRegistry} from 'react-native';
import Navigator from './src/navigator'
import * as NavigationService from './src/HOC/navigation'

export default class book2020 extends React.Component {

  componentDidMount() {
    NavigationService.setNavigator(this.navigator);
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator ref={nav => {
          this.navigator = nav;
        }}/>
      </Provider>
    )
  }

}

AppRegistry.registerComponent('book2020', () => book2020);
