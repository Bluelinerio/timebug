// @flow
import R from 'ramda';
import {
	getUserState,
	getCms,
	getFormData
} from './rootReducer';
import { UNDETERMINED, ANONYMOUS, AUTHENTICATING } from '../services/apollo/models';
import type { Progress, User, Form } from '../services/apollo/models';
import type { Colors, Step, Slide } from '../services/cms';

// CMS
const sortSteps = (a: Step, b: Step) => a.number - b.number
const steps = (state: any) => getCms(state).steps
const sortedSteps = (state: any) :[Step] => Object.values( steps(state) ).sort(sortSteps) 
const stepColors = (state: any):{ number : string } => getCms(state).colors.steps;
const introSlides = (state: any): [Slide] => getCms(state).onboardingPages.intro.slides;
const phaseColors = (state: any):{ string : string } => getCms(state).colors.phases;

const isCMSLoading = (state: any) => getCms(state).requestCount > 0
const totalNumberOfSteps = (state: any) => getCms(state).totalNumberOfSteps
const colors = (state:any) => getCms(state).colors
const aboutText = (state:any) => getCms(state).about

// User
const user = (state: any): ?User =>
	typeof getUserState(state) === 'string' ? null : getUserState(state)
const isUserStateUNDETERMINED = (state: any): boolean => getUserState(state) === UNDETERMINED
const isUserStateAUTHENTICATING = (state: any): boolean => getUserState(state) === AUTHENTICATING
const isLoggedIn = (state: any) : boolean => !!user(state)
const isAnonymous = (state: any) : boolean => getUserState(state) === ANONYMOUS

const sortForms = (a: Form, b: Form) => a.stepId - b.stepId

const completedForms = (state: any): [Form] => user(state) 
	? user(state).forms
	: []

const sortedCompletedForms = (state: any) => completedForms(state).sort(sortForms);

const completedStepIds = (state: any): [string] => completedForms(state).map(f => f.stepId)


// CMS+Pgroess
const assignmentsForStep = (state: any) => (step: number) => steps(state)[step].refAssignment.map(i => i.fields);
const colorForStep = (step: number) => (state:any) => stepColors(state)[step]
const step = (number: number) => (state:any) => steps(state)[number]

//
import models from '../screens/WorkBookScreen/forms';
const getFormModels = (state: any) => (step: number) => models[step]

//
const _getFormData = (state: any) => (step: number) => getFormData(state).data[step]
const fetchingFormData = (state: any) => getFormData(state).requestCount > 0

export default {
	getCms,
	sortedSteps,
	steps,
	colorForStep,
	phaseColors,
	aboutText,
	introSlides,
	step,
	colors,
	stepColors,
	isCMSLoading,
	totalNumberOfSteps,
	assignmentsForStep,
	user,
	isLoggedIn,
	isUserStateUNDETERMINED,
	isUserStateAUTHENTICATING,
	isAnonymous,
	completedForms,
	sortedCompletedForms,
	completedStepIds,
	getFormModels,
	getFormData: _getFormData,
	fetchingFormData
}
