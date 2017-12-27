import React, { Component } from 'react';
import StartEndGradient from '../components/StartEndGradient';
import { connect } from 'react-redux'
import selector from '../../../redux/selectors'
import type Colors from '../../../services/cms'
import { gradientBackground_ColorForStepIndex } from '../../../services/cms'

const mapStateToProps = (state) => {
	const colors = selector.colors(state);
	const gradientColorForStepFn = gradientBackground_ColorForStepIndex(colors)
	return ({ gradientColorForStepFn })
}

const StepGradient = ({ index, gradientColorForStepFn, ...restOfProps }) => {
	const { colorStart, colorEnd } = gradientColorForStepFn(index);
	return (<StartEndGradient
		colorStart={colorStart}
		colorEnd={colorEnd}
		{...restOfProps}
	/>)
}

export default connect(mapStateToProps)(StepGradient)
