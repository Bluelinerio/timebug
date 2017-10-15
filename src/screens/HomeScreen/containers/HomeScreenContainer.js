// @flow

import React, { Component }             from 'react';
import { connect }                      from 'react-redux';
import { AsyncStorage }                 from "react-native";
import theme                            from 'react-native-theme';
import DashboardContainer               from './DashboardContainer';
import IntroComponent                   from "../components/IntroComponent";
import DefaultIndicator                 from "../../../components/DefaultIndicator";
import {
  getAllStepsFromCMS,
  getStepFromCMSByStep,
}                                       from "../../../actions/steps";
import { getAboutInfoFromCMS }          from "../../../actions/login";
import { loginWithFB }                  from "../../../actions/FBAction";
import type { IStep }                   from "../../../interfaces";
import { goToTextScreen }               from "../../../actions/navigate";
import { onAppLoaded }                  from "../../../actions/user";

type Props = {
  allSteps: IStep[],
  currentStep: IStep,
  about: string,
  isLoggedIn: boolean,
  isPending: boolean,
  getAllStepsFromCMS: any,
  getAboutInfoFromCMS: any,
  loginWithFB: any,
  navigation: {
    navigate(): any
  },
};

type State = {}

const mapStateToProps = (state) => {
  return {
    allSteps: state.steps.allSteps,
    currentStep: state.steps.currentStep,
    about: state.login.about,
    isLoggedIn: state.login.isLoggedIn,
    isPending: state.network.isPending,
  }
};

@connect(mapStateToProps, {
  getAllStepsFromCMS: getAllStepsFromCMS.request,
  getAboutInfoFromCMS: getAboutInfoFromCMS.request,
  loginWithFB: loginWithFB.request,
  goToTextScreen,
  onAppLoaded,
})
class HomeScreenContainer extends Component<Props, State> {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    //AsyncStorage.clear();
    this.props.onAppLoaded();
    this.props.getAllStepsFromCMS();
  }

  componentWillMount() {
    theme.setRoot(this)
  }

  render() {
    let {
          isPending,
          isLoggedIn,
          about,
          loginWithFB,
          currentStep,
          allSteps,
          goToTextScreen,
        } = this.props;
    if (!isPending && !isLoggedIn) {
      return (
        <IntroComponent
          about={about}
          loginWithFB={loginWithFB}
        />
      )
    } else if (!isPending && isLoggedIn && currentStep.number && allSteps.length) {
      return (
        <DashboardContainer
          currentStep={currentStep}
          totalNumberOfSteps={allSteps.length}
          goToTextScreen={goToTextScreen}
        />
      )
    } else {
      return <DefaultIndicator size="large"/>

    }
  }
}

export default HomeScreenContainer
