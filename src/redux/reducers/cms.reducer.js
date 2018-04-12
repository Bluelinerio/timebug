// @flow
import { FETCH_CMS, SEED_CMS } from '../actions/cms.actions'
import type { Step, Colors, OnobardingPage, Page } from '../../services/cms'

export type CMSState = {
  requestCount: number,
  lastFetchDate: ?number,
  totalNumberOfSteps: number,
  steps: Array<Step>,
  colors: Colors,
  onboardingPages: [OnobardingPage],
  pages: [Page],
  error: ?string
}

type StepsAction = {
  type: string,
  payload?: Array<Step> | Colors
}

const initialState: CMSState = {
  requestCount: 0,
  lastFetchDate: null,
  totalNumberOfSteps: 30,
  error: null
}

function cmsReducer(state: CMSState = initialState, action: StepsAction) {
  switch (action.type) {
    case SEED_CMS:
      return {
        ...state,
        ...action.payload,
      }
    case FETCH_CMS.STARTED:
      return { ...state, requestCount: state.requestCount + 1 }
    case FETCH_CMS.SUCCEEDED:
      return {
        ...state,
        ...action.payload,
        lastFetchDate: Date.now(),
        requestCount: state.requestCount - 1
      }
    case (FETCH_CMS.CANCELLED, FETCH_CMS.ERRORED):
      return {
        ...state,
        requestCount: state.requestCount - 1,
        error: action.error || null
      }
    default:
      return state
  }
}
export default cmsReducer
