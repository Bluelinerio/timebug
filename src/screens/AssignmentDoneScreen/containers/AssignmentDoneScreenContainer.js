// @flow

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import theme, { styles } from "react-native-theme";
import {
  getStepFromCMSByStep,
  getAllStepsFromCMS
} from "../../../actions/steps";
import { IStep } from "../../../interfaces";
import AssignmentDoneScreen from "../components/AssignmentDoneScreen";
import { doneWithCongratsScreen } from "../../../actions/navigate";

type Props = {
  allSteps: IStep[],
  currentStep: IStep,
  currentStepColor: string,
  getStepFromCMSByStep: any,
  getAllStepsFromCMS: any
};

type State = {};

const mapStateToProps = state => {
  const allSteps = state.steps.allSteps;
  const currentStep = state.steps.currentStep;
  const currentStepNumber = currentStep.number;
  const currentStepColor = state.steps.colors.steps[currentStep.number];
  const nextStepNumber = currentStepNumber + 1;
  if (nextStepNumber < allSteps.length) {
    const nextStepColor = state.steps.colors.steps[nextStepNumber] ;
    const nextStep = allSteps[nextStepNumber];
    const nextStepDuration = nextStep.duration;
    
    return {
      allSteps,
      currentStep,
      currentStepColor,
      nextStepDuration,
      nextStepNumber,
      nextStepColor
    };
  }
  return {
    allSteps,
    currentStep,
    currentStepColor,
    nextStepNumber: 0,
    nextStepColor: null
  }
};

@connect(mapStateToProps, {
  getStepFromCMSByStep: getStepFromCMSByStep.request,
  getAllStepsFromCMS: getAllStepsFromCMS.request,
  done: doneWithCongratsScreen
})
class AssignmentDoneScreenContainer extends Component<Props, State> {
  static navigationOptions = () => ({
    headerTitleStyle: {
      textAlign: "center",
      alignSelf: "center"
    },
    headerStyle: {
      backgroundColor: StyleSheet.flatten(styles.headerColor).backgroundColor
    },
    headerTintColor: "white",
    headerLeft: null
  });

  componentDidMount() {
    if (!this.props.currentStep.number) {
      this.props.getStepFromCMSByStep(1);
    }
    this.props.getAllStepsFromCMS();
  }

  componentWillMount() {
    theme.setRoot(this);
  }

  render() {
    const {
      currentStepNumber,
      currentStepColor,
      nextStepDuration,
      nextStepNumber,
      nextStepColor,
      done
    } = this.props;
    return (
      <AssignmentDoneScreen
        done={done}
        currentStepNumber={currentStepNumber}
        nextStepDuration={nextStepDuration}
        color={currentStepColor}
        nextStepNumber={nextStepNumber}
        nextStepColor={nextStepColor}
      />
    );
  }
}

export default AssignmentDoneScreenContainer;
