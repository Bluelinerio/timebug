// @flow

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import theme, { styles } from 'react-native-theme';
import AssignmentLeadInScreen from '../components/AssignmentLeadInScreen';
import type { Assignment } from '../../../services/cms';
import DefaultIndicator from '../../../components/DefaultIndicator';
import StepButtonStyle from '../../../styles/components/StepButton';
import selectors from '../../../redux/selectors';

type Props = {
	assignments: Assignment,
	navigation: {
		navigate(): any
	},
};

type State = {};

const mapStateToProps = state => {
	const currentStep = selectors.currentStep(state)
	const color = selectors.currentStepColor(state)
  const assignments = selectors.assignments(state)
	return {
		currentStep,
		color,
		assignments
	};
};

@connect(mapStateToProps)
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
			navigation
    } = this.props;
      
		if (assignments) {
			return (
				<AssignmentLeadInScreen
					assignments={assignments}
					currentStep={currentStep}
					color={color}
					dispatch={navigation.dispatch}
				/>
			);
		} else {
			return <DefaultIndicator size="large" />;
		}
	}
}

export default AssignmentLeadInScreenContainer;
