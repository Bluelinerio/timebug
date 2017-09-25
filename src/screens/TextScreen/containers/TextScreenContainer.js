// @flow

import React from 'react'
import {ActivityIndicator} from 'react-native'
import {connect} from 'react-redux'
import TextScreen from "../components/TextScreen"
import theme from 'react-native-theme';

import {IStep} from "../../../interfaces"
import DefaultIndicator from "../../../components/DefaultIndicator";

type Props = {
  currentStep: IStep,
  navigation: {
    navigate(): any
  }
};

type State = {}

const mapStateToProps = (state) => {
  return {
    currentStep: state.steps.currentStep
  }
};

@connect(mapStateToProps)
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
          navigate={this.props.navigation.navigate}
        />
      )
    } else {
      return <DefaultIndicator size="large"/>

    }
  }
}

export default TextScreenContainer
