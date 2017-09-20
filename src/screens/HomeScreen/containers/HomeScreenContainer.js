// @flow

import React from 'react'
import { connect } from 'react-redux'
import {
  ActivityIndicator,
  StyleSheet
} from 'react-native'
import HomeScreen from '../components/HomeScreen'
import SplashScreen from 'react-native-splash-screen'
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
    title: 'Welcome',
    headerTitleStyle: {textAlign: 'center', alignSelf: 'center'},
    headerStyle: {
      backgroundColor: '#00D2F5',
    },
    headerTintColor: 'white',
  };

  componentDidMount() {
    this.props.getStepFromCMSByDay(1);
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
