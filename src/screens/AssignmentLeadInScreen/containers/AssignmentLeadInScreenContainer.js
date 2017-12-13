// @flow

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import theme, { styles } from 'react-native-theme';
import AssignmentLeadInScreen from '../components/AssignmentLeadInScreen';
import type { Assignment } from '../../../services/cms';
import DefaultIndicator from '../../../components/DefaultIndicator';
import { goToWorkBookScreen } from '../../../redux/actions/nav.actions';
import StepButtonStyle from '../../../styles/components/StepButton';
import selectors from '../../../redux/selectors';

type Props = {
	assignments: Assignment,
	navigation: {
		navigate(): any
	},
	goToWorkBookScreen(): any
};

type State = {};

const mapStateToProps = state => {
	const allSteps = selectors.steps(state)
	const currentStep = selectors.currentStep(state)
	const color = selectors.currentStepColor(state)
  const assignments = selectors.assignments(state)
	return {
		currentStep,
		color,
		allSteps,
		assignments
	};
};

@connect(mapStateToProps, {
	goToWorkBookScreen
})
class AssignmentLeadInScreenContainer extends Component<Props, State> {
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
			assignments,
			currentStep,
			color,
			allSteps,
			goToWorkBookScreen,
			navigation
    } = this.props;
      
		if (assignments) {
			return (
				<AssignmentLeadInScreen
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

export default AssignmentLeadInScreenContainer;
