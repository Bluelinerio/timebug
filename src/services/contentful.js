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

export const fetchColors = () : Promise<Colors> => contentfulClient.getEntries({
		content_type: CONTENTFUL_CONTENT_COLORS
	}).then(response => response.items.map(i => i.fields)[0])

function sortSteps(a, b) {
	return a.number - b.number;
}
export const fetchSteps = () : Promise<Array<Step>>=>
	contentfulClient
		.getEntries({
			content_type: CONTENTFUL_CONTENT_STEP
		})
		.then(response => response.items.reduce((steps, step) => ({ ...steps, [step.fields.number]: step.fields }), {}))
