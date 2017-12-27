// @flow
import { getUserState, getCms, getStorageLoaded } from './rootReducer';
import { UNDETERMINED, ANONYMOUS, AUTHENTICATING } from '../services/apollo/models';
import type { Progress } from '../services/apollo/models';
import type { Colors, Step } from '../services/cms';
import type { StepsState } from './reducers/cms.reducer'

const sortSteps = (a: Step, b: Step) => a.number - b.number
const isStorageLoaded = (state: any):boolean => getStorageLoaded(state);
const steps = (state) => getCms(state).steps
const sortedSteps = (state: any) :[Step] => Object.values( steps(state) ).sort(sortSteps) 
const stepColors = (state: any):Colors => getCms(state).colors.steps;
const isCMSLoading = (state: any) => getCms(state).requestCount > 0
const totalNumberOfSteps = (state: any) => getCms(state).totalNumberOfSteps
const colors = (state:any) => getCms(state).colors
const aboutText = (state:any) => getCms(state).about

const user = (state: any): ?User =>
	typeof getUserState(state) === 'string' ? null : getUserState(state)
const isUserStateUNDETERMINED = (state: any): boolean => getUserState(state) === UNDETERMINED
const isUserStateAUTHENTICATING = (state: any): boolean => getUserState(state) === AUTHENTICATING
const isLoggedIn = (state: any) : boolean => !!user(state)

const progress = (state: any): ?Progress => user(state) ? user(state).progress : null;
const currentStepNumber = (state: any): number => progress(state) ? progress(state).step : 0;
const currentStep = (state: any): Step => steps(state)[currentStepNumber(state)];
const currentStepColor = (state: any) => stepColors(state)[currentStepNumber(state)];
const assignments = (state: any) => currentStep(state).refAssignment.map(i => i.fields);
const colorForStep = (step: number) => (state:any) => stepColors(state)[step]
const step = (number: number) => (state:any) => steps(state)[number]

export default {
	isStorageLoaded,
	getCms,
	sortedSteps,
	colorForStep,
	aboutText,
	step,
	colors,
	isCMSLoading,
	totalNumberOfSteps,
	currentStepNumber,
	currentStep,
	progress,
	assignments,
	currentStepColor,
	user,
	isLoggedIn,
	isUserStateUNDETERMINED,
	isUserStateAUTHENTICATING
}