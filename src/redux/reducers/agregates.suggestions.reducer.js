import { SUBMIT_CHECKIN } from '../actionTypes'

export const SuggestionsReducerKeys = {
  suggestionsHistory: 'suggestionsHistory',
  currentSuggestion: 'currentSuggestion',
  checkinHistory: 'checkinHistory',
  lastCheckin: 'lastCheckin'
}

export const ActionTypes = [SUBMIT_CHECKIN]

const suggestionsReducer = (state = {}, action) => {
  switch (action.type) {
    case SUBMIT_CHECKIN:
      return {
        ...state,
        [SuggestionsReducerKeys.lastCheckin]: action.payload,
        [SuggestionsReducerKeys.checkinHistory]: {
          ...state[SuggestionsReducerKeys.checkinHistory],
          [Date.now()]: action.payload
        }
      }
    default:
      return state
  }
}

export default suggestionsReducer
