// @flow

import React from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux'
import theme, {styles} from 'react-native-theme';
import {getStepFromCMSByDay, getAllStepsFromCMS} from "../../../actions/steps";
import {IStep} from "../../../interfaces";
import CongratulationsScreen from '../components/CongratulationsScreen';

type Props = {
	allSteps: IStep[],
	currentStep: IStep,
	navigation: {
		navigate(): any
	},
	getStepFromCMSByDay(): any,
	getAllStepsFromCMS(): any
};

type State = {}

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
class CongratulationsScreenContainer extends React.Component<Props, State> {
	static navigationOptions = ({navigation: {state: {params}}}) => ({
		headerTitleStyle: {textAlign: 'center', alignSelf: 'center'},
		headerStyle: {
      backgroundColor: StyleSheet.flatten(styles.headerColor).backgroundColor,
		},
		headerTintColor: 'white',
		headerLeft: null

	});
	
	componentDidMount() {
		if (!this.props.currentStep.number) {
			this.props.getStepFromCMSByDay(1);
		}
		this.props.getAllStepsFromCMS();
	}

  componentWillMount() {
    theme.setRoot(this)
  }

  render () {
			return (
				<CongratulationsScreen
					getStepFromCMSByDay={this.props.getStepFromCMSByDay}
					navigate={this.props.navigation.navigate}
					allSteps={this.props.allSteps}
					currentStep={this.props.currentStep}
				/>
			)
	}
}

export default CongratulationsScreenContainer
