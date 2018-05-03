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
  PHASE3
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
    if (!categoyMotivationText) {
      throw new Error('categoyMotivationText is not defined')
    }
    if (!sequenceMotivationText) {
      throw new Error('sequenceMotivationText is not defined')
    }
    if (!sequenceMotivationText[suggestedStepId]) {
      throw new Error(
        `missing stepId ${suggestedStepId} in sequenceMotivationText`
      )
    }
    if (!categoyMotivationText[category]) {
      throw new Error(`missing key ${category} in categoyMotivationText`)
    }
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

export type NextStepSuggestion = {
  type: 'NextStepSuggstion',
  data: {
    previousSteps: Array<StepId>,
    suggestedStepId: StepId,
    category: Category,
    texts: {
      [HOME_SCREEN | DONE_SCREEN]: string
    }
  }
}
export const suggestNextStep = (
  previousSteps: [StepId]
): NextStepSuggestion => {
  const { suggestedStepId, category, texts } = getSuggstedStep(previousSteps)
  return {
    type: 'NextStepSuggstion',
    data: {
      previousSteps,
      suggestedStepId,
      category,
      texts: applyData({
        suggestedNextStep: suggestedStepId,
        previousStep: R.last(previousSteps)
      })(texts)
    }
  }
}

export const Screens = {
  HOME_SCREEN,
  DONE_SCREEN
}
