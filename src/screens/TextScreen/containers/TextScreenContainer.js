// @flow

import React, { Component }      from 'react'
import theme                     from 'react-native-theme';
import { connect }               from 'react-redux'
import DefaultIndicator          from "../../../components/DefaultIndicator";
import { goToAssignmentsScreen } from "../../../actions/navigate";
import TextScreen                from "../components/TextScreen"
import { IStep }                 from "../../../interfaces"

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
    currentStep: state.steps.currentStep,
  }
};

@connect(mapStateToProps, {
  goToAssignmentsScreen,
})
class TextScreenContainer extends Component<Props, State> {
  static navigationOptions = ({ navigation: { state: { params } } }) => ( {
    header: false,
  } );

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
