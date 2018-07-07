import R from 'ramda'
import routes from '../../navigation/routes'
import { composeReducers } from './utils'
import { NavigationActions } from 'react-navigation'

const NavigationActionStepIdLens = R.lensPath(['params', 'stepId'])
const NavigationActionFormIdLens = R.lensPath(['params', 'formId'])
const NavigationActionRouteNameLens = R.lensPath(['routeName'])

export const NavigationReducerKeys = {
  visits: 'visits',
  pages: {
    stepWorkbook: 'stepWorkbook',
    stepGuide: 'stepGuide'
  }
}
export const ActionTypes = [NavigationActions.NAVIGATE]

const navigationReducer = (state = {}, action) => {
  const stepWorkbookLensWithStep = (stepId: string) =>
    R.lensPath([
      NavigationReducerKeys.visits,
      NavigationReducerKeys.pages.stepWorkbook,
      stepId
    ])
  const stepGuideLensWithStep = (stepId: string) =>
    R.lensPath([
      NavigationReducerKeys.visits,
      NavigationReducerKeys.pages.stepGuide,
      stepId
    ])
  const updateScreen = append => previous => ({
    count: ((previous && previous.count) || 0) + 1,
    last: Date.now(),
    ...(append || {})
  })

  const tagVisit = (state = {}, action) => {
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

  const tagLastVisited = (state, action) => ({
    ...state,
    lastVisitedPage: {
      routeName: R.view(NavigationActionRouteNameLens, action),
      timeStamp: Date.now()
    }
  })

  return composeReducers(tagVisit, tagLastVisited)(state, action)
}

export default navigationReducer
