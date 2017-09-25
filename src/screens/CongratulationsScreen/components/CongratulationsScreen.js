// @flow

import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';
import Button from '../../../components/Button'
import autobind from 'autobind-decorator';
import {IStep} from "../../../interfaces";

type Props = {
	allSteps: IStep[],
	currentStep: IStep,
	navigate(): any
}
const buttonIcon = require('../../../resources/images/clock_icon_bold.png');
export default class CongratulationsScreen extends React.Component<Props, State> {
	
	@autobind
	goToNextDay() {
		let {number} = this.props.currentStep;
		let {length} = this.props.allSteps;
		let nextDay = number + 1;
		if (nextDay <= length) {
			this.props.getStepFromCMSByDay(nextDay);
		}
		this.props.navigate('HomeScreen', number)
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.messageContainer}>
					<Text>See you soon in</Text>
					<Text style={styles.currentStep}>STEP {this.props.currentStep.number + 1}!</Text>
					<View style={styles.timerContainer}>
						<Image source={buttonIcon} style={styles.buttonImage}/>
						<Text style={[styles.durationText]}>{this.props.currentStep.duration} min</Text>
					</View>
					
				</View>
				<View style={[styles.buttonContainer, styles.absoluteContainer]}>
					<Button
						onPress={this.goToNextDay}
						text="DONE"
						side="left"
					>
					</Button>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	timerContainer: {
		flex: 0,
		flexDirection: 'row'
	},
	messageContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		top: 100
	},
	text: {
		color: '#000000',
		fontSize: 10,
		fontWeight: 'bold',
	},
	absoluteContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end'
	},
	currentStep: {
		color: '#48D0F1',
		fontSize: 28,
		fontWeight: 'bold'
	},
	buttonImage: {
		width: 10,
		height: 10,
		marginRight: 5,
		marginTop: 2
	},
	durationText: {
		color: '#48D0F1',
		fontWeight: '600',
		fontSize: 10,
		alignSelf: 'flex-end'
	}
});