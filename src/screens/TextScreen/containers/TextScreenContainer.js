// @flow

import React from 'react'
import {ActivityIndicator} from 'react-native'
import {connect} from 'react-redux'
import TextScreen from "../components/TextScreen"
import theme from 'react-native-theme';

import {IStep} from "../../../interfaces"
import DefaultIndicator from "../../../components/DefaultIndicator";
import {goToAssignmentsScreen} from "../../../actions/navigate";

type Props = {
  currentStep: IStep,
  navigation: {
    navigate(): any
  },
  goToAssignmentsScreen(): any
};

type State = {}

const mapStateToProps = (state) => {
  return {
    currentStep: state.steps.currentStep
  }
};

@connect(mapStateToProps, {
  goToAssignmentsScreen
})
class TextScreenContainer extends React.Component<Props, State> {
  static navigationOptions = ({navigation: {state: {params}}}) => ({
    header: false
  });

  componentWillMount() {
    theme.setRoot(this)
  }

  render() {
    if (this.props.currentStep) {
      return (
        <TextScreen
          currentStep={this.props.currentStep}
          goToAssignmentsScreen={this.props.goToAssignmentsScreen}
        />
      )
    } else {
      return <DefaultIndicator size="large"/>

    }
  }
}

export default TextScreenContainer
