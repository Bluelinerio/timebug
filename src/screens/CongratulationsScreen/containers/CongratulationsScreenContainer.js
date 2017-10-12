// @flow

import React, { Component }                        from 'react';
import { StyleSheet }                              from 'react-native';
import { connect }                                 from 'react-redux'
import theme, { styles }                           from 'react-native-theme';
import { getStepFromCMSByStep, getAllStepsFromCMS } from "../../../actions/steps";
import { IStep }                                   from "../../../interfaces";
import CongratulationsScreen                       from '../components/CongratulationsScreen';
import { goToHomeScreen }                          from "../../../actions/navigate";

type Props = {
  allSteps: IStep[],
  currentStep: IStep,
  currentStepColor: string,
  getStepFromCMSByStep: any,
  getAllStepsFromCMS: any
};

type State = {}

const mapStateToProps = (state) => {
  const allSteps = state.steps.allSteps;
  const currentStep = state.steps.currentStep;
  const currentStepColor = state.steps.colors.steps[currentStep.number];
  return {
    allSteps,
    currentStep,
    currentStepColor
  }
};

@connect(mapStateToProps, {
  getStepFromCMSByStep: getStepFromCMSByStep.request,
  getAllStepsFromCMS: getAllStepsFromCMS.request,
  goToHomeScreen,
})
class CongratulationsScreenContainer extends Component<Props, State> {
  static navigationOptions = () => ( {
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center',
    },
    headerStyle: {
      backgroundColor: StyleSheet.flatten(styles.headerColor).backgroundColor,
    },
    headerTintColor: 'white',
    headerLeft: null,
  } );

  componentDidMount() {
    if (!this.props.currentStep.number) {
      this.props.getStepFromCMSByStep(1);
    }
    this.props.getAllStepsFromCMS();
  }

  componentWillMount() {
    theme.setRoot(this)
  }

  render() {
    return (
      <CongratulationsScreen
        done={() => this.props.goToHomeScreen({reset: true, direction: 'back'})}
        number={this.props.currentStep.number}
        duration={this.props.currentStep.duration}
        color={this.props.currentStepColor}
      />
    )
  }
}

export default CongratulationsScreenContainer
