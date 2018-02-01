// @flow
// testing the API : https://npm.runkit.com/contentful
import { createClient } from 'contentful'
import type { Step, Colors } from './cms'
export const CONTENTFUL_CREDENTIALS = {
  "accessToken": 'c139e7f2a7a86fc0813e71fbb18bb7b1921189ce4d7cc58c7f0ccc0022adee5f',
  "space": '1gbed7lrsmj4' 
};

export const CONTENTFUL_CONTENT_STEP = 'day'
export const CONTENTFUL_CONTENT_LOGIN = 'login'
export const CONTENTFUL_CONTENT_COLORS = 'colors'
export const CONTENTFUL_ONBOARDING_PAGE = 'onboardingPage'

export const contentfulClient = createClient(CONTENTFUL_CREDENTIALS)

const getImageUrl = (icon: Icon): {uri: string} => ({
	uri: (icon.url || icon.fields.file.url || '').replace('//', 'https://')
})

const onboardingPagesFromResponse = response => {
	const mapOnboardingSlide = ({
		fields: {
			title,
			description,
			image
		}
	}) => ({
		title,
		description,
		image: image 
			? getImageUrl(image)
			: null
	})
	return ({
	onboardingPages: response.items.reduce( (items, { 
			fields: {
				name, 
				slides,
				title
			}, 
		}) => ({ 
			...items, 
			[name]: {
				title,
				slides: slides.map(mapOnboardingSlide)
			}
		}), {})
	})
}

const aboutFromResponse = response => ({ 
	about: response.items.map(item => item.fields)[0].about
})

const colorsFromResponse = response => ({
	colors: response.items[0].fields.schema
})

const AddWorkbookDurationMinValueIfNotPopulated = (step: Step) => ({
	...step,
	workbookDurationMin: step.workbookDurationMin || 15,
	duration: step.duration || 15
})

const unlinkStepField = (items) => items.reduce((steps, step) => ({ 
	...steps, 
	[step.fields.number]: AddWorkbookDurationMinValueIfNotPopulated(step.fields)
}), {});

const stepsFromResponse = response => ({
	steps: unlinkStepField(response.items)
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

export const fetchonboardingPages = () => contentfulClient
	.getEntries({ content_type: CONTENTFUL_ONBOARDING_PAGE })
	.then(onboardingPagesFromResponse)

export const refreshCMS = () => Promise.all([
	fetchSteps(),
	fetchColors(),
	fetchAbout(),
	fetchonboardingPages(),
]).then(responses => Object.assign(...responses))


export const testContentFromCMS = (object) => {
	if( !object.colors.steps) { throw 'failed validating contenful response' }
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
	return object;
}
