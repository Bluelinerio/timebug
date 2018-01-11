// @flow

import { createClient } from 'contentful'
import { CONTENTFUL_CREDENTIALS } from '../constants/config'
import type { Step, Colors } from './cms'

export const CONTENTFUL_CONTENT_STEP = 'day'
export const CONTENTFUL_CONTENT_LOGIN = 'login'
export const CONTENTFUL_CONTENT_COLORS = 'colors'

export const contentfulClient = createClient(CONTENTFUL_CREDENTIALS)

export const fetchAbout = (): Promise<any> => contentfulClient
				.getEntries({ content_type: CONTENTFUL_CONTENT_LOGIN })
				.then(response => response.items.map(item => item.fields)[0].about);

const colorsFromResponse = response => response.items[0].fields.schema
const stepsFromResponse = response => response.items
			.reduce((steps, step) => ({ ...steps, [step.fields.number]: step.fields }), {});

export const fetchColors = () : Promise<Colors> => contentfulClient.getEntries({
		content_type: CONTENTFUL_CONTENT_COLORS
	}).then(response => colorsFromResponse(response))

export const fetchSteps = () : Promise<Array<Step>>=>
	contentfulClient
		.getEntries({
			content_type: CONTENTFUL_CONTENT_STEP
		})
		.then(response => stepsFromResponse(response)
		)

export const refreshCMS = () => Promise.all([
	fetchSteps(),
	fetchColors(),
	fetchAbout()
]).then(responses => ({
	steps: responses[0],
	colors: responses[1],
	about: responses[2]
})
);