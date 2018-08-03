// @flow
import R from 'ramda'
import workbooks from '../../screens/WorkbookScreen/forms'
import { getFormData } from './rootReducer.selectors'
import { removeIvalidValuesInsteadOfDoingAnyMigrationForNow } from '../tcomb'
import { filterKeys, filterNumbers, viewOr } from './utils'
import { stepIds } from '../../constants/steps'
import formsSelectors from './forms.selectors'
import cmsSelectors from './cms.selectors'
import combineSelectors from './combineSelectors';

const { completedForms } = formsSelectors
const { sortedSteps, allSteps } = cmsSelectors

export const filterStepIds = filterKeys(stepIds)
const EDITING_FORMS_SUPPORTTED = false

const formData = R.compose(
	viewOr({}, R.lensProp('data')),
	getFormData
)

const incompleteFormsData = (state: any) => filterStepIds(getFormData(state).data)

export const incompleteForms = R.compose(
	R.values,
	filterStepIds,
	formData
)

const buttonTitleForFormCompletion = ( { forms: { complete, incomplete } }) => {
	if (incomplete || incomplete.length > 0) {
		return 'Resume'
	} else if (EDITING_FORMS_SUPPORTTED && complete && incomplete) {
		return 'Edit'
	} else {
		return 'Start'
	}
}

// export const completedFormsGroupedByStepIdSortedByDate = R.compose(
// 	R.groupBy(R.prop('stepId')),
// 	completedForms
// )

// R.compose(
// 	R.sortBy(R.prop('updatedAt')),
// 	R.find(f => f.stepId === step.stepId)
// )
// R.compose(
// 	R.sortBy(R.prop('timeStamp')),
// 	R.find(f => f.stepId === step.stepId)
// )

export const combineSteps = R.compose(
	R.sortWith([
		R.descend(R.path(['forms', 'incomplete', 'updatedAt'])),
		R.ascend(R.path(['forms', 'complete', 'timeStamp']))
	]),
	({
		completedForms,
		incompleteForms,
		allSteps,
	}) => allSteps.map(step => ({
			...step,
			forms: ({
				complete: R.find(f => f.stepId === step.stepId, completedForms),
				incomplete: R.find(f => f.stepId === step.stepId, incompleteForms),
			})
		}
	)),
	combineSelectors({
		completedForms,
		incompleteForms,
		allSteps,
	})
)

const withSelectors = selectors => item => ({
	...item,
	...combineSelectors(selectors)(item)
})

export const buttonTitlesForFormCompletion = state => stepId => {
	return R.compose(
		buttonTitleForFormCompletion,
		R.find(i => i.step.stepId === stepId),
		R.prop('sortedStepsWithForms'),
		sortedStepsWithForms
	)(state)
}

export const sortedStepsWithForms = state => {
	const steps = combineSteps(state).map(withSelectors(buttonTitleForFormCompletion));
	const latestStepId = R.view(R.lensPath([0, 'stepId']), steps)
	debugger;
	return {
		steps,
		latestStepId
	}
}


export const modelsAndDataForExercise = (state: any) => (stepId: string) => {
	//TComb Forms helpers

	const models = workbooks[stepId]
	const localData = getFormData(state).data[stepId]

	if (!localData) {
		return {
			models,
			formData: {}
		}
	}

	const mergeForm = (sum, formKey) => ({
		...sum,
		...(localData[formKey] && {
			[formKey]: removeIvalidValuesInsteadOfDoingAnyMigrationForNow(models[formKey], localData[formKey])
		})
	})
	const formData = Object.keys(models).reduce(mergeForm, {})

	return {
		models,
		formData
	}
}

export const isSynchingFormData = (state: any) => getFormData(state).requestCount > 0

export default {
	sortedStepsWithForms,
	buttonTitlesForFormCompletion,
	completedForms,
	modelsAndDataForExercise,
	formData,
	incompleteFormsData,
	incompleteForms,
	isSynchingFormData
}
