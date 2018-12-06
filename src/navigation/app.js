import React from 'react';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { BackHandler, Linking } from 'react-native';
import { connect } from 'react-redux';
import { uriPrefix } from '../constants';
import { StartNavigator } from './index';

const addListener = createReduxBoundAddListener('root');

type Props = {
  dispatch: () => any,
  nav: any,
};

class AppNavigation extends React.Component<Props> {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    Linking.addEventListener('url', ({ url }: { url: string }) => {
      this.handleUrl(url);
    });

    Linking.getInitialURL().then((url: string) => url && this.handleUrl(url));
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  handleUrl(url) {
    const { dispatch } = this.props;
    const path = url.split(uriPrefix)[1] || url;
    const action = StartNavigator.router.getActionForPathAndParams(path);
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
  };

  render() {
    const { dispatch, nav } = this.props;
    const navigation = addNavigationHelpers({
      dispatch,
      state: nav,
      addListener,
    });
    return <StartNavigator navigation={navigation} />;
  }
}

const mapStateToProps = state => ({ nav: state.nav });

export default connect(mapStateToProps)(AppNavigation);
