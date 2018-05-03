// @flow
import { NEIGHBOR, HOME_SCREEN, DONE_SCREEN } from './constants'
import type { StepId, Category } from './types'
import sequenceMotivationText from './sequenceMotivationText'
import categoyMotivationText from './categoyMotivationText'
import nextStepSuggestion from './nextStepSuggestion'
import R from 'ramda'

const applyData = data =>
  R.compose(R.fromPairs, R.map(a => [a[0], a[1](data)]), R.toPairs)

export const getSuggstedStep = (previousSteps: [StepId]) => {
  const [suggestedStepId: StepId, category: Category] = nextStepSuggestion(
    previousSteps
  )

  if (Object.keys(categoyMotivationText).includes(category)) {
    return {
      suggestedStepId,
      category,
      texts: categoyMotivationText[category][suggestedStepId]
    }
  } else if (category === NEIGHBOR) {
    return {
      suggestedStepId,
      category,
      texts: sequenceMotivationText[suggestedStepId]
    }
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
        suggestedStepId,
        previousStep: R.last(previousSteps)
      })(texts)
    }
  }
}

export const Screens = {
  HOME_SCREEN,
  DONE_SCREEN
}
