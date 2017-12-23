// @flow

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import theme, { styles } from "react-native-theme";
import type { Step } from "../../../services/cms";
import AssignmentDoneScreen from "../components/AssignmentDoneScreen";
import { doneWithCongratsScreen } from '../../../redux/actions/nav.actions';
import selectors from '../../../redux/selectors'


type Props = {
  currentStep: Step,
  currentStepColor: string
};

type State = {};

const mapStateToProps = state => {
  const { allSteps, totalNumberOfSteps, colors } = state.cms;
  const nextStepNumber = selectors.currentStepNumber(state);
	const currentStepNumber = nextStepNumber - 1;
  const currentStep = allSteps[currentStepNumber];
  const currentStepColor = colors.steps[currentStepNumber]
  if (nextStepNumber < totalNumberOfSteps) {
    const nextStepColor = colors.steps[nextStepNumber] ;
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
    nextStepColor: currentStepColor
  }
};

@connect(mapStateToProps, {
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
