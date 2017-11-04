// @flow

import React, { Component } from 'react'
import theme from 'react-native-theme';
import { connect } from 'react-redux'
import DefaultIndicator from "../../../components/DefaultIndicator";
import { goToAssignmentLeadInScreen } from "../../../actions/navigate";
import StepScreen from "../components/StepScreen"
import { IStep } from "../../../interfaces"

type Props = {
  currentStep: IStep,
  navigation: {
    navigate(): any
  },
  goToAssignmentLeadInScreen(): any
};

const mapStateToProps = (state) => {
  const currentStep = state.steps.currentStep;
	const color = state.steps.colors.steps[currentStep.number];
  return {
    currentStep,
    color
  }
};

@connect(mapStateToProps, {
  goToAssignmentLeadInScreen,
})
class StepScreenContainer extends Component<Props> {
  static navigationOptions = ({ navigation: { state: { params } } }) => ( {
    header: false,
  } );

  componentWillMount() {
    theme.setRoot(this)
  }

  render() {
    const { currentStep, step, color } = this.props;
    if (currentStep) {
      return (
        <StepScreen
          step={currentStep}
          color={color}
          goToAssignmentLeadInScreen={this.props.goToAssignmentLeadInScreen}
        />
      )
    } else {
      return <DefaultIndicator size="large"/>

    }
  }
}

export default StepScreenContainer
