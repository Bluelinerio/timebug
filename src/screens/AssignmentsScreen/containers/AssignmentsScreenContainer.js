// @flow

import React, {Component}      from 'react'
import { StyleSheet }          from 'react-native';
import { connect }             from 'react-redux'
import theme, { styles }       from 'react-native-theme';
import AssignmentsScreen       from "../components/AssignmentsScreen"
import { IAssignment }         from "../../../interfaces";
import DefaultIndicator        from "../../../components/DefaultIndicator";
import { getStepFromCMSByDay } from "../../../actions/steps";
import { goToWorkBookScreen }  from "../../../actions/navigate";

type Props = {
  assignments: IAssignment,
  navigation: {
    navigate(): any
  },
  getStepFromCMSByDay: any,
  goToWorkBookScreen(): any
};

type State = {}

const mapStateToProps = (state) => {
  let { allSteps }    = state.steps;
  let { currentStep } = state.steps;
  let assignments     = currentStep.refAssignment ? currentStep.refAssignment.map(i => i.fields) : [];
  return {
    currentStep,
    allSteps,
    assignments,
  }
};

@connect(mapStateToProps, {
  getStepFromCMSByDay: getStepFromCMSByDay.request,
  goToWorkBookScreen,
})
class AssignmentsScreenContainer extends Component<Props, State> {
  static navigationOptions = ({ navigation: { state: { params } } }) => {
    return ( {
      title: 'ASSIGNMENT',
      headerTitleStyle: {
        textAlign: 'center',
        alignSelf: 'center',
        fontFamily: "Helvetica",
        fontSize: 20.5,
      },
      headerStyle: {
        backgroundColor: StyleSheet.flatten(styles.headerColor).backgroundColor,
      },
      headerTintColor: 'white',
    } );
  };

  componentWillMount() {
    theme.setRoot(this)
  }

  render() {
    if (this.props.assignments) {
      return (
        <AssignmentsScreen
          getStepFromCMSByDay={this.props.getStepFromCMSByDay}
          assignments={this.props.assignments}
          currentStep={this.props.currentStep}
          allSteps={this.props.allSteps}
          goToWorkBookScreen={this.props.goToWorkBookScreen}
          dispatch={this.props.navigation.dispatch}
        />
      )
    } else {
      return <DefaultIndicator size="large"/>
    }
  }
}


export default AssignmentsScreenContainer
