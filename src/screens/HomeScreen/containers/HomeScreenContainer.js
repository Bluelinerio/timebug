// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { ScrollView, View } from "react-native";
import theme from "react-native-theme";
import IntroComponent from "../components/IntroComponent";
import StepComponent from "../components/StepComponent";
import DefaultIndicator from "../../../components/DefaultIndicator";
import {
  FETCH_STEPS
} from "../../../redux/actions/cms.actions";
import type { Step } from "../../../services/cms";
import { goToAssignmentFlow } from "../../../redux/actions/nav.actions";
import { onAppLoaded } from "../../../redux/actions/user.actions";
import selectors from '../../../redux/selectors'

type HomeScreenStep = {
  allSteps: Array<Step>,
  currentStep: Step,
  color: string
};
type HomeScreenInro = {
  about: string
};

const LOADING = "LOADING";
const INTRO = "INTRO";
const STEP = "STEP";
type HomeScreenState =
  | { type: LOADING }
  | { type: INTRO, component: HomeScreenInro }
  | { type: STEP, component: HomeScreenStep };

type Props = {
  state: HomeScreenState,
  getAllStepsFromCMS: () => void,
};

const mapStateToProps = state => {
  const isFetching = selectors.isCMSLoading(state) && !selectors.isUserStateDetermind(state);

  if (isFetching) {
    return {
      state: { type: LOADING }
    };
  }
  const isLoggedIn = selectors.isLoggedIn(state);

  if (isLoggedIn === true) {
    const allSteps = selectors.steps(state);
    const currentStep = selectors.currentStep(state)
    const color = selectors.currentStepColor(state);
    if (!allSteps || !currentStep || !color) {
      throw "missing currentStep or allSteps or color" + state.cms;
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
        about: ''
      }
    }
  };
};

@connect(mapStateToProps, {
  getAllStepsFromCMS: FETCH_STEPS.start,
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
    const { state, goToAssignmentFlow } = this.props;
    switch (state.type) {
      case LOADING:
        return <DefaultIndicator size='large' />;
      case INTRO:
        return (
          <IntroComponent {...state.component} />
        );
      case STEP:
        const { currentStep, color, allSteps} = state.component;
        return (
          <ScrollView
            color={color || 'white' }
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
  }
}

export default HomeScreenContainer;
