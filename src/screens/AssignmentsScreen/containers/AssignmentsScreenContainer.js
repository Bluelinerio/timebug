// @flow

import React from 'react'
import {
  ActivityIndicator,
  StyleSheet
} from 'react-native'
import {connect} from 'react-redux'
import SplashScreen from 'react-native-splash-screen'
import AssignmentsScreen from "../components/AssignmentsScreen"
import {IAssignment} from "../../../interfaces";
import DefaultIndicator from "../../../components/DefaultIndicator";
import {getStepFromCMSByDay} from "../../../actions/steps";

type Props = {
  assignments: IAssignment,
  navigation: {
    navigate(): any
  },
  getStepFromCMSByDay(): any
};

type State = {}

const mapStateToProps = (state) => {
  let {allSteps} = state.steps;
  let {currentStep} = state.steps;
  let assignments = currentStep.refAssignment ?
    currentStep.refAssignment.map(i => i.fields) : [];
  return {
    currentStep,
    allSteps,
    assignments
  }
};

@connect(mapStateToProps, {
  getStepFromCMSByDay
})
class AssignmentsScreenContainer extends React.Component<Props, State> {
  static navigationOptions = ({navigation: {state: {params}}}) => ({
    title: params ? `DAY ${params.number} ASSIGNMENT` : 'ASSIGNMENT',
      headerTitleStyle: {textAlign: 'center', alignSelf: 'center'},
      headerStyle: {
        backgroundColor: '#6EBDDC',
      },
      headerTintColor: 'white',

  });

  render() {
    if (this.props.assignments) {
      return (
        <AssignmentsScreen
          getStepFromCMSByDay={this.props.getStepFromCMSByDay}
          assignments={this.props.assignments}
          currentStep={this.props.currentStep}
          allSteps={this.props.allSteps}
          navigate={this.props.navigation.navigate}
          dispatch={this.props.navigation.dispatch}
        />
      )
    } else {
      return <DefaultIndicator size="large"/>
    }
  }
}


export default AssignmentsScreenContainer
