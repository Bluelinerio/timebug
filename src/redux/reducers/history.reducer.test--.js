import R from 'ramda'
import historyReducer, {
  updateScreen,
  setLastVisitedWithScreenRouteFromNavigationActionAndAddTimeStamp,
  initialState
} from './history.reducer'
import { historyReducerLenses } from '../lenses'

describe('updateScreen', () => {
  it('should be a function', () => {
    expect(typeof updateScreen).toEqual('function')
  })
  it('should be a function that return a function', () => {
    expect(typeof updateScreen()).toEqual('function')
  })
  it('should not need to have a first argument to evaluate the second', () => {
    const value = updateScreen()({})
    expect(value).toBeTruthy()
  })
  it('should always return a an object with a count and last fields', () => {
    const value = updateScreen()({})
    const keys = Object.keys(value)
    expect(keys).toEqual(['count', 'last'])
  })
  it('should return a count of 1 when received an empty object', () => {
    const value = updateScreen()({}).count
    expect(value).toEqual(1)
  })
  it('should return a count of 2 when received an object with a field of count that is 1', () => {
    const value = updateScreen()({
      count: 1
    }).count
    expect(value).toEqual(2)
  })
  it('should append whatever values provided in the first argument', () => {
    const provided = {
      name: 'amos'
    }
    const value = updateScreen(provided)({})
    expect(value.name).toEqual('amos')
  })
})

const action = {
  type: 'Navigation/NAVIGATE',
  routeName: 'AssignmentFlow',
  params: {
    stepId: '1',
    stepColor: '#005587',
    stepNumber: 1,
    formId: '1'
  }
}

describe('Set last visited with screen route from navigation action and add time stamp', () => {
  it('should be a function', () => {
    expect(
      typeof setLastVisitedWithScreenRouteFromNavigationActionAndAddTimeStamp
    ).toEqual('function')
  })
  it('should throw if no arguments are given', () => {
    expect(
      setLastVisitedWithScreenRouteFromNavigationActionAndAddTimeStamp,
    ).toThrow()
  })
})

describe('history reducer', () => {
  it('should be a function', () => {
    expect(typeof historyReducer).toEqual('function')
  })
  it('should have default initial state', () => {
    expect(historyReducer()).toEqual(initialState)
  })
  // it('after first action should return a state with last visits and history', () => {
  //   const state = {}
  //   const action = {
  //     type: 'Navigation/NAVIGATE',
  //     routeName: 'AssignmentFlow',
  //     params: {
  //       stepId: '1',
  //       stepColor: '#005587',
  //       stepNumber: 1,
  //       formId: '1'
  //     }
  //   }
  //   const expected = {
  //     history: {
  //       visits: {
  //         stepGuide: {
  //           '1': {
  //             count: 1,
  //             last: Date.now()
  //           }
  //         }
  //       }
  //     }
  //   }
  //   const value = historyReducer(state, action)
  //   expect(value).toEqual(expected)
  // })
})
