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
const { sortedSteps } = cmsSelectors

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

const buttonTitleForFormCompletion = ({ completedForms, incomplete }) => {
	if (Object.keys(incomplete).length > 0) {
		return 'Resume'
	} else if (EDITING_FORMS_SUPPORTTED && completedForms && Object.keys(completedForms).length > 0) {
		return 'Edit'
	} else {
		return 'Start'
	}
}

export const combineSteps = R.compose(
	({
		completedForms,
		incompleteForms,
		sortedSteps,
	}) => {
		debugger;
		return sortedSteps.map(step => ({
			...step,
			forms: ({
				complete: R.compose(
					R.sortBy(R.prop('updatedAt')),
					R.find(f => f.stepId === step.stepId)
				)(completedForms),
				incomplete: R.compose(
					R.sortBy(R.prop('timeStamp')),
					R.find(f => f.stepId === step.stepId)
				)(incompleteForms),
			})
		}))
	},
	combineSelectors({
		completedForms,
		incompleteForms,
		sortedSteps,
	})
)

export const sortedStepsWithForms = state => {
	debugger;
	const steps = combineSteps(state);
	const completed = completedForms(state)
	const incompleteForms = incompleteFormsData(state)
	const { latestStepId } = Object.keys(incompleteForms).reduce((sum, latestStepId) => {
		const timeStamp = incompleteForms[latestStepId] && incompleteForms[latestStepId].timeStamp
		if (timeStamp) {
			if (!sum.timeStamp || sum.timeStamp < timeStamp) {
				return {
					latestStepId,
					timeStamp
				}
			}
		}
		return sum
	}, {})

	return {
		steps: sortedSteps(state)
			.map(step => ({
				completedForms: completed.find(f => f.stepId),
				incomplete: filterNumbers(incompleteForms[step.stepId]),
				step
			}))
			.map(step => ({
				...step,
				buttonTitleForFormCompletion: buttonTitleForFormCompletion(step)
			})),
		latestStepId
	}
}
export const buttonTitlesForFormCompletion = state => stepId => {
	return R.compose(
		buttonTitleForFormCompletion,
		R.find(i => i.step.stepId === stepId),
		R.prop('sortedStepsWithForms'),
		sortedStepsWithForms
	)(state)
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
