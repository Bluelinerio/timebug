import R from 'ramda'
import routes from '../../navigation/routes'
import { composeReducers } from './utils'

const NavigationActionStepIdLens = R.lensPath(['params', 'stepId'])
const NavigationActionFormIdLens = R.lensPath(['params', 'formId'])
const NavigationActionRouteNameLens = R.lensPath(['routeName'])

export const SuggestionsReducerKeys = {
  suggestionsHistory: 'suggestionsHistory',
  checkinHistory: 'checkinHistory',
  lastCheckin: 'lastCheckin',
}

const suggestionsReducer = (state = {}, action) => {
  const stepWorkbookLensWithStep = (stepId: string) =>
    R.lensPath([
      SuggestionsReducerKeys.pageVisits,
      SuggestionsReducerKeys.pages.stepWorkbook,
      stepId
    ])
  const stepGuideLensWithStep = (stepId: string) =>
    R.lensPath([
      SuggestionsReducerKeys.pageVisits,
      SuggestionsReducerKeys.pages.stepGuide,
      stepId
    ])
  const updateScreen = append => previous => ({
    count: ((previous && previous.count) || 0) + 1,
    last: Date.now(),
    ...(append || {})
  })

  const tagPageVisits = (state = {}, action) => {
    switch (R.view(NavigationActionRouteNameLens, action)) {
      case routes.root.AssignmentFlow:
      case routes.step.StepScreen: {
        return R.over(
          stepGuideLensWithStep(R.view(NavigationActionStepIdLens, action)),
          updateScreen({}),
          state
        )
      }
      case routes.step.WorkbookScreen:
        return R.over(
          stepWorkbookLensWithStep(R.view(NavigationActionStepIdLens, action)),
          updateScreen({
            formId: R.view(NavigationActionFormIdLens)
          }),
          state
        )
      default:
        break
    }
  }

  const tagLastVisitedPage = (state, action) => ({
    ...state,
    lastVisitedPage: {
      routeName: R.view(NavigationActionRouteNameLens, action),
      timestamp: Date.now()
    }
  })

  return composeReducers(tagPageVisits, tagLastVisitedPage)(state, action)
}

export default suggestionsReducer
