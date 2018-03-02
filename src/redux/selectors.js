// @flow
import R from "ramda";
import { getUserState, getCms, getFormData } from "./rootReducer";
import {
  UNDETERMINED,
  ANONYMOUS,
  AUTHENTICATING
} from "../services/apollo/models";
import type { User, Form } from "../services/apollo/models";
import type { Colors, Step, Slide } from "../services/cms";

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
const aboutText = (state: any) => getCms(state).about;

// User
const user = (state: any): ?User =>
  typeof getUserState(state) === "string" ? null : getUserState(state);
const userId = (state: any) => user(state) && user(state).id;

const isLoggedIn = (state: any): boolean => !!user(state);
const isAnonymous = (state: any): boolean => getUserState(state) === ANONYMOUS;

const sortForms = (a: Form, b: Form) => a.stepId - b.stepId;

// stepId on the server is an Int!. A clear idea how to
const completedFormsData = (state: any) =>
  completedForms(state).reduce(
    (forms, form) => ({
      ...forms,
      [form.stepId]: form.data
    }),
    {}
  );

const completedForms = (state: any): [Form] =>
  user(state) ? user(state).forms : [];

const sortedCompletedForms = (state: any): [Form] =>
  completedForms(state).sort(sortForms);

const completedStepIds = (state: any): [string] =>
  completedForms(state).map(f => f.stepId);

const formWithStepId = (state: any) => (stepId: string): Form =>
  completedForms(state).find(f => f.stepId);

// CMS`
const assignmentsForStepId = (state: any) => (stepId: string) =>
  steps(state)[stepId].assignments;
const colorForStepWithId = (state: any) => (stepId: string) =>
  stepColors(state)[stepId];
const step = (number: number) => (state: any) => steps(state)[number];

// models
import workbooks from "../screens/WorkbookScreen/forms";
// form data
const formData = (state: any) => getFormData(state).data;
const incompleteFormsData = (state: any) => getFormData(state).data;

const modelsAndDataForExercise = (state: any) => (stepId: string) => {
  //TComb Forms helpers
  const isValueAValidTCombType = (value, type) =>
    type.is(value) ? value : null;
  const removeIvalidValuesInsteadOfDoingAnyMigrationForNow = (model, value) =>
    Object.keys(model.type.meta.props).reduce(
      (sum, key) => ({
        ...sum,
        ...(isValueAValidTCombType(value[key], model.type.meta.props[key]) && {
          [key]: value[key]
        })
      }),
      {}
    );

  const models = workbooks[stepId];
  const localData = getFormData(state).data[stepId];

  if (!localData) {
    return {
      models,
      formData: {}
    };
  }

  const mergeForm = (sum, formKey) => ({
    ...sum,
    ...(localData[formKey] && {
      [formKey]: removeIvalidValuesInsteadOfDoingAnyMigrationForNow(
        models[formKey],
        localData[formKey]
      )
    })
  });
  const formData = Object.keys(models).reduce(mergeForm, {});

  return {
    models,
    formData
  };
};

const isSynchingFormData = (state: any) => getFormData(state).requestCount > 0;

export default {
  getCms,
  sortedSteps,
  steps,
  colorForStepWithId,
  phaseColors,
  aboutText,
  introSlides,
  step,
  colors,
  stepColors,
  isCMSLoading,
  totalNumberOfSteps,
  assignmentsForStepId,
  user,
  userId,
  isLoggedIn,
  isAnonymous,
  completedForms,
  sortedCompletedForms,
  completedFormsData,
  completedStepIds,
  formWithStepId,
  modelsAndDataForExercise,
  formData,
  incompleteFormsData,
  isSynchingFormData
};
