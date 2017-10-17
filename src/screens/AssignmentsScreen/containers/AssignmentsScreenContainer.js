// @flow

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import theme, { styles } from 'react-native-theme';
import AssignmentsScreen from '../components/AssignmentsScreen';
import { IAssignment } from '../../../interfaces';
import DefaultIndicator from '../../../components/DefaultIndicator';
import { getStepFromCMSByStep } from '../../../actions/steps';
import { goToWorkBookScreen } from '../../../actions/navigate';
import StepButtonStyle from '../../../styles/components/StepButton';

type Props = {
	assignments: IAssignment,
	navigation: {
		navigate(): any
	},
	getStepFromCMSByStep: any,
	goToWorkBookScreen(): any
};

type State = {};

const mapStateToProps = state => {
	const { allSteps } = state.steps;
	const { currentStep } = state.steps;
	const color = state.steps.colors.steps[currentStep.number];
  const assignments = currentStep.refAssignment ? currentStep.refAssignment.map(i => i.fields) : [];
	return {
		currentStep,
		color,
		allSteps,
		assignments
	};
};

@connect(mapStateToProps, {
	getStepFromCMSByStep: getStepFromCMSByStep.request,
	goToWorkBookScreen
})
class AssignmentsScreenContainer extends Component<Props, State> {
	static navigationOptions = ({ navigation: { state: { params } } }) => {
		return {
			title: 'ASSIGNMENT',
			headerTitleStyle: {
				textAlign: 'center',
				alignSelf: 'center',
				fontFamily: 'Helvetica',
				fontSize: 20.5
			},
			headerStyle: {
				backgroundColor: StyleSheet.flatten(styles.headerColor).backgroundColor
			},
			headerTintColor: 'white'
		};
	};

	componentWillMount() {
		theme.setRoot(this);
	}

	render() {
		const {
			getStepFromCMSByStep,
			assignments,
			currentStep,
			color,
			allSteps,
			goToWorkBookScreen,
			navigation
    } = this.props;
      
		if (assignments) {
			return (
				<AssignmentsScreen
					getStepFromCMSByStep={getStepFromCMSByStep}
					assignments={assignments}
					currentStep={currentStep}
					color={color}
					allSteps={allSteps}
					goToWorkBookScreen={goToWorkBookScreen}
					dispatch={navigation.dispatch}
				/>
			);
		} else {
			return <DefaultIndicator size="large" />;
		}
	}
}

export default AssignmentsScreenContainer;
