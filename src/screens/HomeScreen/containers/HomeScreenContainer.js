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
  const isLoggedIn = state.login.isLoggedIn;

  const { finished } = state.user;
  if( finished ){
    return {
      state: {
        type: FINISHED,
        component: {
          finished
        }
      }
    };
  };
  if (isLoggedIn === true) {
    steps = state.steps;
    const allSteps = steps.allSteps;
    const currentStep = steps.currentStep ? steps.currentStep : { number: 1};
    const color = steps.colors.steps[currentStep.number];

    if (!allSteps || !currentStep || !color) {
      throw "missing currentStep or allSteps or color" + state.steps;
    }
    return {
      state: {
        type: STEP,
        component: {
          allSteps,
          currentStep,
          color
        }
      }
    };
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
