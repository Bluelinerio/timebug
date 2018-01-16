import React                  from 'react';
import { 
  addNavigationHelpers, 
  NavigationActions
}                             from 'react-navigation';
import { BackHandler, Linking }
                              from "react-native";
import { connect }            from 'react-redux';
import Navigator              from './navigator';
import * as NavigationService from '../HOC/navigation'
import { uriPrefix }          from '../constants'

const mapStateToProps = state => ({ nav: state.nav });

class ReduxNavigation extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    Linking.addEventListener('url', ({ url }: {url: string}) => {
      this.handleUrl(url);
    });
    
    Linking.getInitialURL().then(
      (url: string) => url && this.handleUrl(url)
    );
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    Linking.removeEventListener('url', this.handleOpenURL);
  }
  
  handleUrl(url) {
    const { dispatch } = this.props;
    const path = url.split(uriPrefix)[1] || url;
    const action = Navigator.router.getActionForPathAndParams(path);
    if (action) {
      dispatch(action);
    }
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
    const navigation = addNavigationHelpers({
      dispatch,
      state: nav
    });
    NavigationService.setNavigator(navigation);
    return <Navigator navigation={navigation} />;
  }
}

export default connect(mapStateToProps)(ReduxNavigation);
