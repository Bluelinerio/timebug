// @flow
import R from 'ramda'
import workbooks from '../../screens/WorkbookScreen/forms'
import { getFormData } from '../rootReducer'
import { removeIvalidValuesInsteadOfDoingAnyMigrationForNow } from '../tcomb'
import { filterKeys, filterNumbers } from './utils'
import { stepIds } from '../../constants/steps'
import formsSelectors from './forms.selectors'
import cmsSelectors from './cms.selectors'

const { completedForms } = formsSelectors
const { sortedSteps } = cmsSelectors

export const filterStepIds = filterKeys(stepIds)
const EDITING_FORMS_SUPPORTTED = false

const formData = (state: any) => getFormData(state).data
const incompleteFormsData = (state: any) => filterStepIds(getFormData(state).data)
const buttonTitleForFormCompletion = ({ completedForms, incomplete }) => {
	if (Object.keys(incomplete).length > 0) {
		return 'Resume'
	} else if (EDITING_FORMS_SUPPORTTED && completedForms && Object.keys(completedForms).length > 0) {
		return 'Edit'
	} else {
		return 'Start'
	}
}

const sortedStepsWithForms = state => {
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
		sortedStepsWithForms: sortedSteps(state)
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
const buttonTitlesForFormCompletion = state => stepId => {
	return R.compose(
		buttonTitleForFormCompletion,
		R.find(i => i.step.stepId === stepId),
		R.prop('sortedStepsWithForms'),
		sortedStepsWithForms
	)(state)
}
const modelsAndDataForExercise = (state: any) => (stepId: string) => {
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
const isSynchingFormData = (state: any) => getFormData(state).requestCount > 0

export default {
	sortedStepsWithForms,
	buttonTitlesForFormCompletion,
	completedForms,
	modelsAndDataForExercise,
	formData,
	incompleteFormsData,
	isSynchingFormData
}
