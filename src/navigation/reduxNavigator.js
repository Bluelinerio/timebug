import React                  from 'react';
import * as ReactNavigation   from 'react-navigation';
import { BackHandler }        from "react-native";
import { connect }            from 'react-redux';
import Navigator              from './navigator';
import * as NavigationService from '../HOC/navigation'

const mapStateToProps = state => ({ nav: state.nav });

class ReduxNavigation extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  }
  render() {
    const { dispatch, nav } = this.props;
    const navigation = ReactNavigation.addNavigationHelpers({
      dispatch,
      state: nav
    });
    NavigationService.setNavigator(navigation);
    return <Navigator navigation={navigation} />;
  }
}

export default connect(mapStateToProps)(ReduxNavigation);
