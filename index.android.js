import React from 'react';
import {Provider} from 'react-redux';
import { store } from './src/reducers/rootReducer';
import {AppRegistry} from 'react-native';
import Navigator from './src/navigator'

export default class book2020 extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
    )
  }

}

AppRegistry.registerComponent('book2020', () => book2020);
