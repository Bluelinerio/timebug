// @flow

import { call, cancelled, put, takeLatest, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import theme from 'react-native-theme'
import { incrementRequestCount, decrementRequestCount } from '../actions/network.actions'
import { FETCH_STEPS, getStepsColorFromCMS } from '../actions/cms.actions'
import { contentfulClient, fetchColors, CONTENTFUL_CONTENT_STEP } from '../../services/contentful'
import networkState from '../../utils/networkState'
import { Colors, Step } from '../../services/cms'
import { createRequest, request } from '../../Modules/redux-saga-request'
import { fetchSteps } from '../../services/contentful';

function setColorToTheme(color) {
	theme.add(
		{
			headerColor: {
				backgroundColor: color
			},
			wideButtonBackground: {
				backgroundColor: color
			},
			gradientTopColor: {
				color
			},
			assignmentDoneScreenTextColor: {
				color
			},
			themeBackgroundColor: {
				backgroundColor: color,
				borderColor: color
			}
		},
		color
	)
	theme.active(color)
}

function setColorsForCurrentStep(colors: Colors, step: Step) {
	let color = null
	if (colors.steps[step.number]) {
		color = colors.steps[step.number]
	}
	if (!color) {
		color = colors.phases[step.type]
	}
	return color
}

export function* getAllStepsSaga() {
	yield request(FETCH_STEPS, fetchSteps)
}