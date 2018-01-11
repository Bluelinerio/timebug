const contentful = require('contentful')
const jsonfile = require('jsonfile')
const path = require('path');
const util = require('util');
const fs = require('fs');

const SPACE_ID = '6h184bey8vl3'
const ACCESS_TOKEN = '65a618b02639a9c34ec36c573e06611e3568354171e02f72fbd96adbe83f50d3'

const CONTENTFUL_CONTENT_STEP = 'day'
const CONTENTFUL_CONTENT_LOGIN = 'login'
const CONTENTFUL_CONTENT_COLORS = 'colors'


const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
})

const fetchAbout = ()=> client
				.getEntries({ content_type: CONTENTFUL_CONTENT_LOGIN })
				.then(response => response.items.map(item => item.fields)[0].about);

const colorsFromResponse = response => response.items[0].fields.schema.colors
const stepsFromResponse = response => response.items
			.reduce((steps, step) => ({ ...steps, [step.fields.number]: step.fields }), {});

const fetchColors = () => client.getEntries({
		content_type: CONTENTFUL_CONTENT_COLORS
	}).then(response => colorsFromResponse(response))

const fetchSteps = () =>
	client
		.getEntries({
			content_type: CONTENTFUL_CONTENT_STEP
		})
		.then(response => stepsFromResponse(response)
		)

const refreshCMS = () => Promise.all([
	fetchSteps(),
	fetchColors(),
	fetchAbout()
]).then(responses => ({
	steps: responses[0],
	colors: responses[1],
	about: responses[2]
})
);


const jsfilename = path.join(__dirname, '../src/static/cms.js')
const jsonfilename = path.join(__dirname, '../src/static/cms.json')

const writeJSONFile = (content) => jsonfile.writeFile(jsonfilename, content, (err) => {
  console.error(err ? err : 'sucess')
})
const writeFile = (content) => fs.writeFile(jsfilename, util.inspect(content['1']['refAssignment'], {
  depth: null,
  maxArrayLength: null
}), 'utf-8');

const justLog = contnet => { console.log('result: \n' + JSON.stringify(contnet)); return contnet}

refreshCMS().then(writeJSONFile)