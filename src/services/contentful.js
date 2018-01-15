// @flow

import { createClient } from 'contentful'
import { CONTENTFUL_CREDENTIALS } from '../constants/config'
import type { Step, Colors } from './cms'

export const CONTENTFUL_CONTENT_STEP = 'day'
export const CONTENTFUL_CONTENT_LOGIN = 'login'
export const CONTENTFUL_CONTENT_COLORS = 'colors'

export const contentfulClient = createClient(CONTENTFUL_CREDENTIALS)

const aboutFromResponse = response => ({ 
	about: response.items.map(item => item.fields)[0].about
})

const colorsFromResponse = response => ({
	colors: response.items[0].fields.schema
})

const stepsFromResponse = response => ({
	steps: response.items.reduce((steps, step) => ({ ...steps, [step.fields.number]: step.fields }), {})
});

export const fetchAbout = () => contentfulClient
	.getEntries({ content_type: CONTENTFUL_CONTENT_LOGIN })
	.then(aboutFromResponse);

export const fetchColors = () => contentfulClient
	.getEntries({ content_type: CONTENTFUL_CONTENT_COLORS})
	.then(colorsFromResponse)

export const fetchSteps = () => contentfulClient
	.getEntries({ content_type: CONTENTFUL_CONTENT_STEP })
	.then(stepsFromResponse)

export const refreshCMS = () => Promise.all([
	fetchSteps(),
	fetchColors(),
	fetchAbout()
]).then(responses => ({
	...responses[0],
	...responses[1],
	...responses[2]
})
).then(test);


const test = (object) => {
	if(__DEV__) {
		if(!object.colors.steps) { throw 'failed validating contenful response' }
		if(!object.colors.phases) { throw 'failed validating contenful response' } 
		const steps = Object.values(object.steps)
		if(steps.length !== 30) { throw 'failed validating contenful response' }
		for (let index = 1; index < 31; index++) {
			const number = index.toString()
			const step = object.steps[number];
			if(!step) {
				throw `failed validating contenful response step ${index}`;
			}
		}
	}
	return object;
}
