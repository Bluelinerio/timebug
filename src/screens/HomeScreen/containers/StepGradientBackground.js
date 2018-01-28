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

const merge = (stateProps, dispatchProps, ownProps): Props => {
	const { gradientColorForStepFn } = stateProps
	const { index } = ownProps;
	const { colorStart, colorEnd } = gradientColorForStepFn(index);
	return {
		...stateProps, 
		...dispatchProps, 
		...ownProps,
		colorStart,
		colorEnd
	}
}

export default connect(mapStateToProps, null, merge)(StartEndGradient)