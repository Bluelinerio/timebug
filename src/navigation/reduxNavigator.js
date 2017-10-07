import React                  from 'react';
import * as ReactNavigation   from 'react-navigation';
import { connect }            from 'react-redux';
import Navigator              from './navigator';
import * as NavigationService from '../HOC/navigation'

const mapStateToProps = state => ({ nav: state.nav });

const ReduxNavigator = (props) => {
  const { dispatch, nav } = props;
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav,
  });
  NavigationService.setNavigator(navigation);

  return <Navigator navigation={navigation} />;
}

export default connect(mapStateToProps)(ReduxNavigator);
