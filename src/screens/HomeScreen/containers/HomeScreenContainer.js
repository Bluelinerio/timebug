// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import theme from 'react-native-theme';
import DashboardContainer from './DashboardContainer';
import IntroComponent from '../components/IntroComponent';
import StepComponent from '../components/StepComponent';
import DefaultIndicator from '../../../components/DefaultIndicator';
import { getAllStepsFromCMS, getStepFromCMSByStep } from '../../../actions/steps';
import { getAboutInfoFromCMS } from '../../../actions/login';
import { loginWithFB } from '../../../actions/FBAction';
import type { IStep } from '../../../interfaces';
import { goToTextScreen } from '../../../actions/navigate';
import { onAppLoaded } from '../../../actions/user';

type Props = {
	allSteps: IStep[],
	currentStep: IStep,
	about: string,
	isLoggedIn: boolean,
	isPending: boolean,
	getAllStepsFromCMS: any,
	getAboutInfoFromCMS: any,
	loginWithFB: any,
	navigation: {
		navigate(): any
	}
};

type State = {};

const mapStateToProps = state => {
	const allSteps = state.steps.allSteps;
	const currentStep = state.steps.currentStep;
	const color = currentStep ? state.steps.colors.steps[currentStep.number] : 'white';
	const about = state.login.about;
	const isLoggedIn = state.login.isLoggedIn;
	const isPending = state.network.isPendin;
	return {
		allSteps,
		currentStep,
		color,
		about,
		isLoggedIn,
		isPending
	};
};

@connect(mapStateToProps, {
	getAllStepsFromCMS: getAllStepsFromCMS.request,
	getAboutInfoFromCMS: getAboutInfoFromCMS.request,
	loginWithFB: loginWithFB.request,
	goToTextScreen,
	onAppLoaded
})
class HomeScreenContainer extends Component<Props, State> {
	static navigationOptions = {
		header: null
	};

	componentDidMount() {
		this.props.onAppLoaded();
		this.props.getAllStepsFromCMS();
	}

	componentWillMount() {
		theme.setRoot(this);
	}

	render() {
		let { isPending, isLoggedIn, about, loginWithFB, currentStep, allSteps, goToTextScreen, color } = this.props;
		if (isPending) {
			return <DefaultIndicator size="large" />;
		} else if (currentStep) {
			debugger;
			return (
				<ScrollView color={color || 'white'} automaticallyAdjustContentInsets={true}>
					<StepComponent
						currentStep={currentStep}
						color={color}
						totalNumberOfSteps={allSteps.length}
						buttonAction={() => goToTextScreen({ number: currentStep.number })}
					/>
				</ScrollView>
			);
		} else {
			return <IntroComponent about={about} onPress={loginWithFB} />;
		}
	}
}

export default HomeScreenContainer;
