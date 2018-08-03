import R from 'ramda'
import {
  HistoryReducerLastVisitedScreen,
  HistoryReducerLastVisitedCount,
  HistoryReducerLastVisitedRouteName,
  HistoryReducerLastVisitedtimeStamp,
  HistoryReducerVisits,
  HistoryReducerVisitsToScreen
} from './history.reducer.lenses'
import screens from '../../constants/screens'
import {
  VISITS,
  LAST_VISITED,
  COUNT,
  TIME_STAMP,
  ROUTE_NAME
} from '../../constants/reducers'

const object = {
  test: 'text'
}

describe('Inner History Reducer Lens test', () => {
  it('should have a last visited lens', () => {
    const value = R.view(HistoryReducerLastVisitedScreen, {
      [LAST_VISITED]: object
    })
    expect(value).toEqual(object)
  })
  it('should have a Last visited routeName lens', () => {
    const value = R.view(HistoryReducerLastVisitedRouteName, {
      [LAST_VISITED]: {
        [ROUTE_NAME]: object
      }
    })
    expect(value).toEqual(object)
  })
  it('should have a last visited count lens', () => {
    const value = R.view(HistoryReducerLastVisitedCount, {
      [LAST_VISITED]: {
        [COUNT]: object
      }
    })
    expect(value).toEqual(object)
  })
  it('should have last visited time stamp lens', () => {
    const value = R.view(HistoryReducerLastVisitedtimeStamp, {
      [LAST_VISITED]: {
        [TIME_STAMP]: object
      }
    })
    expect(value).toEqual(object)
  })
  it('should have a visits lens', () => {
    const value = R.view(HistoryReducerVisits, {
      [VISITS]: object
    })
    expect(value).toEqual(object)
  })
  it('should have a visits to screen function that returns a lens for each screen', () => {
    expect(typeof screens).toEqual('object')
    R.keys(screens).forEach(screenKey => {
      const screen = screens[screenKey]
      const value = R.view(HistoryReducerVisitsToScreen(screen), {
        [VISITS]: {
          [screen]: object
        }
      })
      expect(value).toEqual(object)
    })
  })
})
