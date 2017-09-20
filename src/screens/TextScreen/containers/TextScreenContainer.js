// @flow

import React from 'react'
import {
  ActivityIndicator,
  StyleSheet
} from 'react-native'
import {connect} from 'react-redux'
import SplashScreen from 'react-native-splash-screen'
import TextScreen from "../components/TextScreen"
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
  static navigationOptions = {
    title: 'STEP 1',
    headerTitleStyle: {textAlign: 'center', alignSelf: 'center'},
    headerStyle: {
      backgroundColor: '#00D2F5',
    },
    headerTintColor: 'white',
  };

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
