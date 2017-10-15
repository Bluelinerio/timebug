import React, { Component } from 'react';
import { styles } from 'react-native-theme';
import ScrollableHeader from '../../../components/ScrollableHeader';
import StepComponent from '../components/StepComponent';

export default ({ currentStep, totalNumberOfSteps, goToTextScreen }) => (
	<ScrollableHeader
		headerStyles={styles.headerColor}
		header={
			<StepComponent
				currentStep={currentStep}
				totalNumberOfSteps={totalNumberOfSteps}
				buttonAction={() => goToTextScreen({ number: currentStep.number })}
			/>
		}
	/>
);
