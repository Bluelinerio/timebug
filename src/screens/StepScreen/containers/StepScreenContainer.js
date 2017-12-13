// @flow

import React, { Component } from 'react'
import theme from 'react-native-theme';
import { connect } from 'react-redux'
import DefaultIndicator from '../../../components/DefaultIndicator';
import { goToAssignmentLeadInScreen } from '../../../redux/actions/nav.actions';
import StepScreen from '../components/StepScreen'
import selectors from '../../../redux/selectors'
import { Step } from '../../../services/cms';

type Props = {
  currentStep: Step,
  navigation: {
    navigate(): any
  },
  goToAssignmentLeadInScreen(): any
};

const mapStateToProps = (state) => {
  const currentStep = selectors.currentStep(state);
	const color = selectors.currentStepColor(state);
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
