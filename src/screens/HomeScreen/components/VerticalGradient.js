import React, { Component } from 'react';
import { LinearGradient } from 'expo';
import styles, { colors } from '../styles/index.styles';

const StartEndGradient = ({ colorStart = colors.startGradientColor, colorEnd = colors.endGradientColor, style }) => (
	<LinearGradient
		colors={[colorEnd, colorStart]}
		start={{ x: 0, y: 1 }}
		end={{ x: 0, y: 0 }}
		style={[styles.gradient, style]}
	/>
);

export default StartEndGradient;
