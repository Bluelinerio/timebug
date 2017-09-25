// @flow

import React from 'react'
import { connect } from 'react-redux'
import HomeScreen from '../components/HomeScreen'
import {
  getAllStepsFromCMS,
  getStepFromCMSByDay
} from "../../../actions/steps"
import {IStep} from "../../../interfaces"
import DefaultIndicator from "../../../components/DefaultIndicator";

type Props = {
  allSteps: IStep[],
  currentStep: IStep,
  getStepFromCMSByDay(): any,
  getAllStepsFromCMS(): any,
  navigation: {
    navigate(): any
  }
};

type State = {

}

const mapStateToProps = (state) => {
  return {
    allSteps: state.steps.allSteps,
    currentStep: state.steps.currentStep
  }
};

@connect(mapStateToProps, {
  getStepFromCMSByDay,
  getAllStepsFromCMS
})
class HomeScreenContainer extends React.Component<Props, State> {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    if (!this.props.currentStep.number) {
      this.props.getStepFromCMSByDay(1);
    }
    this.props.getAllStepsFromCMS();
  }

  render () {
    if (this.props.currentStep.number && this.props.allSteps.length) {
      return (
        <HomeScreen
          currentStep={this.props.currentStep}
          allSteps={this.props.allSteps}
          navigate={this.props.navigation.navigate}
        />
      )
    } else {
      return <DefaultIndicator size="large"/>

    }
  }
}

export default HomeScreenContainer
