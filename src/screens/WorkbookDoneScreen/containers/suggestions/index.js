// @flow
import {
  HOME_SCREEN,
  DONE_SCREEN,
} from '../../../../constants/screens'
import {
  stepIds,
  PHASE1,
  PHASE2,
  PHASE3,
} from '../../../../constants/steps'
import {
  REFLECTION,
  TEAMWORK,
  GOALS,
  CAREER,
  HOBBIES,
  HEALTH,
  RELATIONSHIPS,
  ENVIRONMENT,
  SPIRITUALITY,
} from '../../../../constants/suggestions';

import type { StepId, Category } from './types'
import sequenceMotivationText from './sequenceMotivationText'
import categoryMotivationText from './categoryMotivationText'
import nextStepSuggestion from './nextStepSuggestion'
import R from 'ramda'

if (__DEV__) {
  if (!sequenceMotivationText) {
    throw new Error('missing sequenceMotivationText')
  }
  if (stepIds.find(stepId => !sequenceMotivationText[stepId])) {
    throw new Error(
      `missing stepIds ${R.difference(
        Object.keys(sequenceMotivationText),
        stepIds
      )}`
    )
  }
  if (!categoryMotivationText) {
    throw new Error('missing categoryMotivationText')
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
    PHASE3
  ].find(key => !Object.keys(categoryMotivationText).includes(key))

  if (missingKey) {
    throw new Error(`categoryMotivationText: missing key ${missingKey}`)
  }

  if (!nextStepSuggestion) {
    throw new Error('missing nextStepSuggestion')
  }
}

const applyData = data =>
  R.compose(R.fromPairs, R.map(a => [a[0], a[1](data)]), R.toPairs)

export const getSuggestedStep = (previousSteps: [StepId]) => {
  // Missing try catch
  const sortedSteps = previousSteps.map(val => parseInt(val)).sort((a,b) => a - b).map(val => val.toString())
  const [suggestedStepId: StepId, category: Category] = nextStepSuggestion(
    sortedSteps
  )

  const texts = Object.keys(categoryMotivationText).includes(category)
    ? categoryMotivationText[category]
    : sequenceMotivationText[suggestedStepId]

  if (__DEV__) {
    if (!texts) {
      throw new Error('missing texts')
    }
    const keys = [HOME_SCREEN, DONE_SCREEN]
    if (!R.equals(Object.keys(texts), keys)) {
      throw new Error(`missing keys ${R.difference(keys, Object.keys(texts))}`)
    }
  }
  return {
    suggestedStepId,
    category,
    texts
  }
}

export type NextStepSuggestionData = {
  previousSteps: Array<StepId>,
  suggestedStepId: StepId,
  category: Category,
  texts: {
    [HOME_SCREEN | DONE_SCREEN]: string
  }
}

export type NextStepSuggestion = {
  name: 'NextStepSuggestion',
  data: NextStepSuggestionData
}

const NEXT_STEP_SUGGESTION_NAME = 'NextStepSuggestion'

const createNextStepSuggestion = (data: NextStepSuggestionData) => ({
  name: NEXT_STEP_SUGGESTION_NAME,
  data
})

export const suggestNextStep = (
  previousSteps: [StepId]
): NextStepSuggestion => {
  const { suggestedStepId, category, texts } = getSuggestedStep(previousSteps)
  return createNextStepSuggestion({
    previousSteps,
    suggestedStepId,
    category,
    texts: applyData({
      suggestedNextStep: suggestedStepId,
      previousStep:  R.last(R.reverse(previousSteps))
    })(texts)
  })
}

export const Screens = {
  HOME_SCREEN,
  DONE_SCREEN
}
