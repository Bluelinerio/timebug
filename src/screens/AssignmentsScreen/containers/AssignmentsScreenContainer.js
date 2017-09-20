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

type Props = {
  assignments: IAssignment,
  navigation: {
    navigate(): any
  }
};

type State = {}

const mapStateToProps = (state) => {
  let assignments = state.steps.currentStep.refAssignment ?
    state.steps.currentStep.refAssignment.map(i => i.fields) : [];
  return {
    assignments
  }
};

@connect(mapStateToProps)
class AssignmentsScreenContainer extends React.Component<Props, State> {
  static navigationOptions = {
    title: 'STEP 1 ASSIGNMENTS',
    headerTitleStyle: {textAlign: 'center', alignSelf: 'center'},
    headerStyle: {
      backgroundColor: '#00D2F5',
    },
    headerTintColor: 'white',
  };

  render() {
    if (this.props.assignments) {
      return (
        <AssignmentsScreen
          assignments={this.props.assignments}
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
