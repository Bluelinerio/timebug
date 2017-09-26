// @flow

import React from 'react';
import {connect} from 'react-redux';
import {
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import theme from 'react-native-theme';

import DashboardComponent from '../components/DashboardComponent';
import IntroComponent from "../components/IntroComponent";
import DefaultIndicator from "../../../components/DefaultIndicator";

import {
getAllStepsFromCMS,
getStepFromCMSByDay
} from "../../../actions/steps";
import {getAboutInfoFromCMS} from "../../../actions/login";
import {loginWithFB} from "../../../actions/FBAction";

import type {IStep} from "../../../interfaces";
import {goToTextScreen} from "../../../actions/navigate";

type Props = {
  allSteps: IStep[],
  currentStep: IStep,
  about: string,
  isLoggedIn: boolean,
  isPending: boolean,
  getStepFromCMSByDay(): any,
  getAllStepsFromCMS(): any,
  getAboutInfoFromCMS(): any,
  loginWithFB(): any,
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
    isPending: state.network.isPending
  }
};

@connect(mapStateToProps, {
  getStepFromCMSByDay,
  getAllStepsFromCMS,
  getAboutInfoFromCMS,
  loginWithFB,
  goToTextScreen
})
class HomeScreenContainer extends React.Component<Props, State> {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    if (!this.props.isPending && !this.props.isLoggedIn) {
      this.props.getAboutInfoFromCMS();
    } else {
      if (!this.props.currentStep.number) {
        this.props.getStepFromCMSByDay(1);
        this.props.getAllStepsFromCMS();
      }
    }
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
      goToTextScreen
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
        <DashboardComponent
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
