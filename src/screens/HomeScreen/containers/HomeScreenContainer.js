// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { ScrollView } from "react-native";
import theme from "react-native-theme";
import IntroComponent from "../components/IntroComponent";
import StepComponent from "../components/StepComponent";
import FinishedComponent from '../components/FinishedComponent';
import DefaultIndicator from "../../../components/DefaultIndicator";
import {
  getAllStepsFromCMS,
  getStepFromCMSByStep
} from "../../../actions/steps";
import { getAboutInfoFromCMS } from "../../../actions/login";
import { loginWithFB } from "../../../actions/FBAction";
import type { IStep } from "../../../interfaces";
import { goToStepScreen, goToAssignmentFlow } from "../../../actions/navigate";
import { onAppLoaded } from "../../../actions/user";

type HomeScreenStep = {
  allSteps: IStep[],
  currentStep: IStep
};
type HomeScreenInro = {
  about: string
};

type HomeScreenFinished = {
  finished: boolean
}

const LOADING = "LOADING";
const INTRO = "INTRO";
const STEP = "STEP";
const FINISHED = "FINISHED"
type HomeScreenState =
  | { type: LOADING }
  | { type: INTRO, component: HomeScreenInro }
  | { type: STEP, component: HomeScreenStep }
  | { type: FINISHED, component: HomeScreenFinished };

type Props = {
  state: HomeScreenState,
  loginWithFB: any,
  user: any,
  getAllStepsFromCMS: any,
  getAboutInfoFromCMS: any
};

const mapStateToProps = state => {
  const isPending = state.network.isPending;
  if (isPending) {
    return {
      state: { type: LOADING }
    };
  }
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

  return {
    state: {
      type: INTRO,
      component: {
        about: state.login.about
      }
    }
  };
};

@connect(mapStateToProps, {
  getAllStepsFromCMS: getAllStepsFromCMS.request,
  getAboutInfoFromCMS: getAboutInfoFromCMS.request,
  loginWithFB: loginWithFB.request,
  goToStepScreen,
  goToAssignmentFlow,
  onAppLoaded
})
class HomeScreenContainer extends Component<Props> {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.props.onAppLoaded();
    this.props.getAllStepsFromCMS();
  }

  componentWillMount() {
    theme.setRoot(this);
  }

  render() {
    let { state, loginWithFB, goToAssignmentFlow } = this.props;
    switch (state.type) {
      case LOADING:
        return <DefaultIndicator size="large" />;
      case INTRO:
        return (
          <IntroComponent onPress={loginWithFB} {...state.component} />
        );
      case FINISHED:
        return (
          <FinishedComponent /> 
        )
      case STEP:
        const { currentStep, color, allSteps} = state.component;
        return (
          <ScrollView
            color={color || "white"}
            automaticallyAdjustContentInsets={true}
          >
            <StepComponent
              currentStep={currentStep}
              color={color}
              totalNumberOfSteps={allSteps.length}
              buttonAction={() =>
                goToAssignmentFlow({ number: currentStep.number })}
            />
          </ScrollView>
        );
    }
    throw 'this should not happen';
  }
}

export default HomeScreenContainer;
