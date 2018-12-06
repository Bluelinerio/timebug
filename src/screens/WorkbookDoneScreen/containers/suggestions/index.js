// @flow
import {
  HOME_SCREEN,
  DONE_SCREEN,
  REFLECTION,
  TEAMWORK,
  GOALS,
  CAREER,
  HOBBIES,
  HEALTH,
  RELATIONSHIPS,
  ENVIRONMENT,
  SPIRITUALITY,
  PHASE1,
  PHASE2,
  PHASE3,
  stepIds,
} from './constants';

import type { StepId, Category } from './types';
import sequenceMotivationText, {
  SequenceMotivationObject,
} from './sequenceMotivationText';
import categoryMotivationText, {
  CategoryMotivationObject,
} from './categoryMotivationText';
import nextStepSuggestion, { Suggestion } from './nextStepSuggestion';
import R from 'ramda';

if (__DEV__) {
  if (!sequenceMotivationText) {
    throw new Error('missing sequenceMotivationText');
  }
  if (stepIds.find(stepId => !sequenceMotivationText[stepId])) {
    throw new Error(
      `missing stepIds ${R.difference(
        Object.keys(sequenceMotivationText),
        stepIds
      )}`
    );
  }
  if (!categoryMotivationText) {
    throw new Error('missing categoryMotivationText');
  }
  const missingKey = [
    REFLECTION,
    TEAMWORK,
    GOALS,
    CAREER,
    HOBBIES,
    HEALTH,
    RELATIONSHIPS,
    ENVIRONMENT,
    SPIRITUALITY,
    PHASE1,
    PHASE2,
    PHASE3,
  ].find(key => !Object.keys(categoryMotivationText).includes(key));

  if (missingKey) {
    throw new Error(`categoryMotivationText: missing key ${missingKey}`);
  }

  if (!nextStepSuggestion) {
    throw new Error('missing nextStepSuggestion');
  }
}

/**
 * Types
 */
type ApplyArg = {
  suggestedNextStep: string,
  previousStep: string,
};

export type MotivationText =
  | SequenceMotivationObject
  | CategoryMotivationObject;

export type NextStepSuggestionData = {
  previousSteps: Array<StepId>,
  suggestedStepId: StepId,
  category: Category,
  texts: {
    [HOME_SCREEN | DONE_SCREEN]: string,
  },
};

export type NextStepSuggestion = {
  name: 'NextStepSuggestion',
  data: NextStepSuggestionData,
};

/**
 * End Types
 */

/**
 * Constants
 */

const NEXT_STEP_SUGGESTION_NAME = 'NextStepSuggestion';

/**
 * End Constants
 */

/**
 * Returns a function that takes a Key: Value pair and applies data to the Value function
 * @param {*} data
 * Data to be used as arguments to the function
 */
const applyData = (data: ApplyArg | any) =>
  R.compose(R.fromPairs, R.map(a => [a[0], a[1](data)]), R.toPairs);

/**
 * Gets the next suggested step, it's category and it's recommended text.
 * @param {Array<StepId>} previousSteps
 * The user's completed steps
 */
export const getSuggestedStep = (previousSteps: [StepId]) => {
  // Missing try catch
  const sortedSteps: [StepId] = previousSteps
    .map(val => parseInt(val))
    .sort((a, b) => a - b)
    .map(val => val.toString());
  const [
    suggestedStepId: StepId,
    category: Category,
  ]: Suggestion = nextStepSuggestion(sortedSteps);

  const texts: MotivationText = Object.keys(categoryMotivationText).includes(
    category
  )
    ? categoryMotivationText[category]
    : sequenceMotivationText[suggestedStepId];

  if (__DEV__) {
    if (!texts) {
      throw new Error('missing texts');
    }
    const keys = [HOME_SCREEN, DONE_SCREEN];
    if (!R.equals(Object.keys(texts), keys)) {
      throw new Error(`missing keys ${R.difference(keys, Object.keys(texts))}`);
    }
  }

  return {
    suggestedStepId,
    category,
    texts,
  };
};

const createNextStepSuggestion = (
  data: NextStepSuggestionData
): NextStepSuggestion => ({
  name: NEXT_STEP_SUGGESTION_NAME,
  data,
});

/**
 * Returns the nextStepSuggestion based on the users interests and behavior
 * @param {Array<StepId>} previousSteps
 * The user's completed steps
 */

export const suggestNextStep = (
  previousSteps: [StepId]
): NextStepSuggestion => {
  const { suggestedStepId, category, texts } = getSuggestedStep(previousSteps);
  return createNextStepSuggestion({
    previousSteps,
    suggestedStepId,
    category,
    texts: applyData({
      suggestedNextStep: suggestedStepId,
      previousStep: R.last(R.reverse(previousSteps)),
    })(texts),
  });
};

export const Screens = {
  HOME_SCREEN,
  DONE_SCREEN,
};
