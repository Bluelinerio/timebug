import React, { Component } from 'react';
import StartEndGradient from '../components/StartEndGradient';
import { colorForStep } from '../../../Logic';

export default ({ step, ...restOfProps }) => (
	<StartEndGradient
		colorStart={colorForStep.colorStart(step)}
		colorEnd={colorForStep.colorEnd(step)}
		{...restOfProps}
	/>
);
