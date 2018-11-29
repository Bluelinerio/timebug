// @flow
import R from 'ramda';
import {
  getUserState,
  getCms,
  getFormData,
  getAwards,
  getUIState,
  getCheckinState,
  getPersistState,
  getGoals,
} from './rootReducer.selectors';
import {
  // UNDETERMINED,
  ANONYMOUS,
  AUTHENTICATING,
} from '../../services/apollo/models';
// models
import workbooks from '../../screens/WorkbookScreen/forms';
import { removeIvalidValuesInsteadOfDoingAnyMigrationForNow } from '../tcomb';
import type { User, Form } from '../../services/apollo/models';
import type { Step, Slide } from '../../services/cms';
import { getStepColors, getPhaseColors } from '../../services/dummyCms';

export const filterWithKeys = (predicate, obj) =>
  R.pipe(R.toPairs, R.filter(R.apply(predicate)), R.fromPairs)(obj);

function isPositiveInteger(n) {
  return n >>> 0 === parseFloat(n);
}

export const filterNumbers = (obj: {}) =>
  filterWithKeys(key => isPositiveInteger(key), obj);

export const filterKeys = (keys: [string]) => (obj: {}) =>
  filterWithKeys(key => keys.includes(key), obj);
export const range = (start, end) =>
  Array(end - start)
    .fill()
    .map((v, i) => i + start);

export const stepIds = range(1, 30).map((v, i) => i.toString());

export const filterStepIds = filterKeys(stepIds);

// CMS
const sortSteps = (a: Step, b: Step) => a.number - b.number;
const steps = (state: any): [Step] => getCms(state).steps;
const sortedSteps = (state: any): [Step] =>
  Object.values(steps(state)).sort(sortSteps);
const stepColors = (state: any): { number: string } =>
  getCms(state).colors.steps;
const introSlides = (state: any): [Slide] =>
  getCms(state).onboardingPages.intro.slides;
const phaseColors = (state: any): { string: string } =>
  getCms(state).colors.phases;

const isCMSLoading = (state: any) => getCms(state).requestCount > 0;
const totalNumberOfSteps = (state: any) => getCms(state).totalNumberOfSteps;
const colors = (state: any) => getCms(state).colors;
const uniqueColors = (state: any) => [
  ...new Set([
    ...Object.values(getCms(state).colors.steps),
    ...Object.values(getCms(state).colors.phases),
  ]),
];
const meditations = (state: any) => getCms(state).meditations;
const step = (number: number) => (state: any) => steps(state)[number];

const pages = state => getCms(state).pages;
const appInstructions = (state: any) => pages(state)['AppInstructions'];

// User
const getUser = (state: any): ?User => getUserState(state);
const user = (state: any): ?User =>
  typeof getUserState(state) === 'string' ? null : getUserState(state);
const userId = (state: any) => user(state) && user(state).id;

const isNotLoggedIn = (state: any): boolean => !user(state);
const isLoggedIn = (state: any): boolean => !!user(state);
const isAnonymous = (state: any): boolean => getUserState(state) === ANONYMOUS;
const isAuthenticating = (state: any): boolean =>
  getUserState(state) === AUTHENTICATING;

const sortForms = (a: Form, b: Form) => a.stepId - b.stepId;
const sortFormsChronologically = (a: Form, b: Form) =>
  Date.parse(b.updatedAt) - Date.parse(a.updatedAt);
// stepId on the server is an Int!. A clear idea how to

const hasCompletedForms = (state: any): boolean =>
  user(state) && user(state).forms.length > 0;

const hasNoCompletedForms = R.compose(R.not, hasCompletedForms);

const completedForms = (state: any): [Form] =>
  user(state) ? user(state).forms.map(f => f) : [];

const completedFormsData = (state: any) =>
  completedForms(state).reduce(
    (forms, form) => ({
      ...forms,
      [form.stepId]: form.data,
    }),
    {}
  );

const completedFormsChronologically = (state: any): [Form] =>
  completedForms(state).sort(sortFormsChronologically);

const sortedCompletedForms = (state: any): [Form] =>
  completedForms(state).sort(sortForms);

const completedStepIds = (state: any): [string] =>
  completedForms(state).map(f => f.stepId);

const formWithStepId = (state: any) => (stepId: string): Form =>
  completedForms(state).find(f => f.stepId === stepId);

// form data
const formData = (state: any) => getFormData(state).data;
const incompleteFormsData = (state: any) =>
  filterStepIds(getFormData(state).data);

const EDITING_FORMS_SUPPORTTED = false;
const buttonTitleForFormCompletion = ({ completedForms, incomplete }) => {
  if (Object.keys(incomplete).length > 0) {
    return 'Resume';
  } else if (
    EDITING_FORMS_SUPPORTTED &&
    completedForms &&
    Object.keys(completedForms).length > 0
  ) {
    return 'Edit';
  } else {
    return 'Start';
  }
};

const sortedStepsWithForms = state => {
  const completed = completedForms(state);
  const incompleteForms = incompleteFormsData(state);

  const { latestStepId } = Object.keys(incompleteForms).reduce(
    (sum, latestStepId) => {
      const timeStamp =
        incompleteForms[latestStepId] &&
        incompleteForms[latestStepId].timeStamp;
      if (timeStamp) {
        if (!sum.timeStamp || sum.timeStamp < timeStamp) {
          return {
            latestStepId,
            timeStamp,
          };
        }
      }
      return sum;
    },
    {}
  );

  return {
    sortedStepsWithForms: sortedSteps(state)
      .map(step => ({
        completedForms: completed.find(f => f.stepId),
        incomplete: filterNumbers(incompleteForms[step.stepId]),
        step,
      }))
      .map(step => ({
        ...step,
        buttonTitleForFormCompletion: buttonTitleForFormCompletion(step),
      })),
    latestStepId,
  };
};

const buttonTitlesForFormCompletion = state => stepId => {
  return R.compose(
    buttonTitleForFormCompletion,
    R.find(i => i.step.stepId === stepId),
    R.prop('sortedStepsWithForms'),
    sortedStepsWithForms
  )(state);
};

const modelsAndDataForExercise = (state: any) => (stepId: string) => {
  //TComb Forms helpers

  const models = workbooks[stepId];
  const localData = getFormData(state).data[stepId];
  if (!localData) {
    return {
      models,
      formData: {},
    };
  }

  const mergeForm = (sum, formKey) => ({
    ...sum,
    ...(localData[formKey] && {
      [formKey]: removeIvalidValuesInsteadOfDoingAnyMigrationForNow(
        models[formKey],
        localData[formKey]
      ),
    }),
  });
  const formData = Object.keys(models).reduce(mergeForm, {});

  return {
    models,
    formData,
  };
};

const isSynchingFormData = (state: any) => getFormData(state).requestCount > 0;

const loadingFormData = (state: any) => getFormData(state).loadingFormData;

const isStepCompleted = (state: any) => {
  const _stepCompleted = (step: number) => {
    const currentUser = user(state);
    if (!currentUser) return false;
    const { forms } = currentUser;
    const completed =
      forms && forms.find(form => `${form.stepId}` === `${step}`)
        ? true
        : false;
    return completed;
  };
  return _stepCompleted;
};
/**
 * Should check CMS for colors, for now it's hardcoded
 */
const statefullStepColors = (state: any) => getStepColors(state);
const overridePhaseColors = (state: any) => getPhaseColors(state);
/**
 * Award
 */

const awardModelsAndData = (state: any) => getAwards(state);

const awardModelForStep = (state: any) => (step: number) =>
  awardModelsAndData(state).models[step]
    ? awardModelsAndData(state).models[step]
    : {};

const awardDataForStep = (state: any) => (step: number) =>
  awardModelsAndData(state).data[step]
    ? awardModelsAndData(state).data[step]
    : {};

const awardModelAndDataForStep = (state: any) => (step: number) => {
  const data = awardDataForStep(state)(step);
  const model = awardModelForStep(state)(step);
  return {
    data,
    model,
  };
};

/**
 * UI
 */

const stateForScreen = (state: any) => (screen: string) =>
  getUIState(state).screens[screen] || {};

/**
 * Checkins
 */
const getCheckins = (state: any) => getCheckinState(state).checkins;

/**
 * Persist Status
 */

const hasStoreLoaded = (state: any) =>
  getPersistState(state).status === 'LOADED';

/**
 * Goals
 */
const getGoalsData = (state: any) => getGoals(state).data;

const getGoalsDataForGoal = (state: any) => {
  const data = getGoalsData(state);
  return (goalId: string) => {
    const dataForGoals = data[goalId];
    return dataForGoals;
  };
};

const getGoalStepsForGoalAndForm = (state: any) => {
  const data = getGoalsData(state);
  return (goalId: string, formId: string) => {
    const dataForGoals = data[goalId];
    const form = dataForGoals[formId];
    const onlyValueElements = Object.keys(form)
      .filter(key => key !== 'timestamp' && key !== 'id')
      .reduce((object, key) => {
        return {
          ...object,
          [key]: form[key],
        };
      }, {});
    return onlyValueElements;
  };
};

const getGoalsStepsForGoalAndFormStateless = (
  data: any,
  goalId: string,
  formId: string
) => {
  const dataForGoals = data[goalId] || {};
  const form = dataForGoals[formId] || {};
  const onlyValueElements = Object.keys(form)
    .filter(key => key !== 'timestamp' && key !== 'id')
    .reduce((object, key) => {
      return {
        ...object,
        [key]: form[key],
      };
    }, {});
  return onlyValueElements;
};

const formHelpSlides = state => getCms(state).helpSlides || {};

const selectors = {
  getCms,
  sortedSteps,
  sortedStepsWithForms,
  buttonTitlesForFormCompletion,
  getUser,
  steps,
  meditations,
  phaseColors,
  introSlides,
  step,
  pages,
  appInstructions,
  colors,
  uniqueColors,
  stepColors,
  isCMSLoading,
  totalNumberOfSteps,
  user,
  userId,
  isLoggedIn,
  isNotLoggedIn,
  isAnonymous,
  isAuthenticating,
  hasCompletedForms,
  hasNoCompletedForms,
  completedForms,
  sortedCompletedForms,
  completedFormsChronologically,
  completedFormsData,
  completedStepIds,
  formWithStepId,
  modelsAndDataForExercise,
  formData,
  incompleteFormsData,
  isSynchingFormData,
  loadingFormData,
  awardModelAndDataForStep,
  statefullStepColors,
  overridePhaseColors,
  stateForScreen,
  getCheckins,
  hasStoreLoaded,
  getGoalsData,
  getGoalsDataForGoal,
  getGoalStepsForGoalAndForm,
  getGoalsStepsForGoalAndFormStateless,
  formHelpSlides,
  isStepCompleted,
};

export default selectors;
