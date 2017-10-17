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

const mapStateToProps = (state) => {
  const currentStep = state.steps.currentStep;
	const color = state.steps.colors.steps[currentStep.number];
  return {
    currentStep,
    color
  }
};

@connect(mapStateToProps, {
  goToAssignmentsScreen,
})
class TextScreenContainer extends Component<Props> {
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
        <TextScreen
          step={currentStep}
          color={color}
          goToAssignmentsScreen={this.props.goToAssignmentsScreen}
        />
      )
    } else {
      return <DefaultIndicator size="large"/>

    }
  }
}

export default TextScreenContainer
