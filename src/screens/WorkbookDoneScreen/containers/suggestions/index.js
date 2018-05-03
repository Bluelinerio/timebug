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
  stepIds
} from './constants'

import type { StepId, Category } from './types'
import sequenceMotivationText from './sequenceMotivationText'
import categoyMotivationText from './categoyMotivationText'
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
  if (!categoyMotivationText) {
    throw new Error('missing categoyMotivationText')
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
  ].find(key => !Object.keys(categoyMotivationText).includes(key))

  if (missingKey) {
    throw new Error(`categoyMotivationText: missing key ${missingKey}`)
  }

  if (!nextStepSuggestion) {
    throw new Error('missing nextStepSuggestion')
  }
}

const applyData = data =>
  R.compose(R.fromPairs, R.map(a => [a[0], a[1](data)]), R.toPairs)

export const getSuggstedStep = (previousSteps: [StepId]) => {
  const [suggestedStepId: StepId, category: Category] = nextStepSuggestion(
    previousSteps
  )

  const texts = Object.keys(categoyMotivationText).includes(category)
    ? categoyMotivationText[category]
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
  name: 'NextStepSuggstion',
  data: NextStepSuggestionData
}

const NEXT_STEP_SUGGESTION_NAME = 'NextStepSuggstion'

const createNextStepSuggestion = (data: NextStepSuggestionData) => ({
  name: NEXT_STEP_SUGGESTION_NAME,
  data
})

export const suggestNextStep = (
  previousSteps: [StepId]
): NextStepSuggestion => {
  const { suggestedStepId, category, texts } = getSuggstedStep(previousSteps)
  return createNextStepSuggestion({
    previousSteps,
    suggestedStepId,
    category,
    texts: applyData({
      suggestedNextStep: suggestedStepId,
      previousStep: R.last(previousSteps)
    })(texts)
  })
}

export const Screens = {
  HOME_SCREEN,
  DONE_SCREEN
}
