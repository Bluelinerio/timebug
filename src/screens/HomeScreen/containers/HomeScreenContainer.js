// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { ScrollView, View } from "react-native";
import theme from "react-native-theme";
import IntroComponent from "../components/IntroComponent";
import StepContainer from "../containers/StepContainer";
import DefaultIndicator from "../../../components/DefaultIndicator";
import LogoutButton from '../containers/LogoutButton'
import type { Step } from "../../../services/cms";
import { onAppLoaded } from "../../../redux/actions/user.actions";
import selectors from '../../../redux/selectors'

type Props = {
  showLoading: boolean,
  isLoggedIn: boolean
}

const mapStateToProps = (state: any) : Props => {
  const isHomeScreenLoading = (state) => {
    const isStorageNotLoaded = !selectors.isStorageLoaded(state)
    const isCMSLoading = selectors.isCMSLoading(state)
    const isUserStateUNDETERMINED = selectors.isUserStateUNDETERMINED(state)
    return isStorageNotLoaded || isCMSLoading || isUserStateUNDETERMINED 
  }
  const showLoading = isHomeScreenLoading(state)
  const isLoggedIn = selectors.isLoggedIn(state);
  return { 
    showLoading,
    isLoggedIn
  }
};

const Content = () =>           
  <ScrollView
    automaticallyAdjustContentInsets={true}
  >
    <StepContainer />
    <LogoutButton />
  </ScrollView>

class HomeScreenContainer extends Component<Props> {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.props.onAppLoaded();
  }

  componentWillMount() {
    theme.setRoot(this);
  }

  render() {
    const {showLoading, isLoggedIn} = this.props;
    if (showLoading) {
      return <DefaultIndicator size='large' />;
    } if (isLoggedIn) {
      return <Content /> 
    } else {
      return <IntroComponent />
    }
  }
}

export default connect(mapStateToProps, {onAppLoaded})(HomeScreenContainer);
