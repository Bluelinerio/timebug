// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { ScrollView, View } from "react-native";
import theme from "react-native-theme";
import IntroComponent from "../components/IntroComponent";
import StepContainer from "../containers/StepContainer";
import FinishedComponent from '../components/FinishedComponent';
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
    const isCMSLoading = selectors.isCMSLoading(state)
    const isUserStateUNDETERMINED = selectors.isUserStateUNDETERMINED(state)
    const isUserStateAUTHENTICATING = selectors.isUserStateAUTHENTICATING(state)
    return isCMSLoading || isUserStateUNDETERMINED || isUserStateAUTHENTICATING
  }
  const showLoading = isHomeScreenLoading(state)
  const isLoggedIn = selectors.isLoggedIn(state);
  const isFinished  = isLoggedIn && selectors.currentStepNumber(state) > selectors.totalNumberOfSteps(state)
  return { 
    showLoading,
    isLoggedIn,
    isFinished
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
    const {showLoading, isLoggedIn, isFinished} = this.props;
    if (showLoading) {
      return <DefaultIndicator size='large' />;
    } if (isLoggedIn && !isFinished) {
      return <Content /> 
    } else if(isFinished){
      return <FinishedComponent />
    } else {
      return <IntroComponent />
    }
  }
}

export default connect(mapStateToProps, {onAppLoaded})(HomeScreenContainer);
