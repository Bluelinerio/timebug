import R from 'ramda'
import {
  historyReducerLenses,
  NavigationActionStepIdLens,
  NavigationActionFormIdLens,
  NavigationActionRouteNameLens
} from './index.js'

import { HISTORY, VISITS, LAST_VISITED } from '../../constants/reducers'
import { STEP_SCREEN, WORKBOOK_SCREEN } from '../../constants/screens'

describe('test history reducer lenses', () => {
  it('should have the following lenses:', () => {
    expect(Object.keys(historyReducerLenses.visits)).toContain(STEP_SCREEN)
    expect(Object.keys(historyReducerLenses.visits)).toContain(WORKBOOK_SCREEN)
    expect(Object.keys(historyReducerLenses.visits)).toContain(
      STEP_SCREEN + 'WithStepId'
    )
    expect(Object.keys(historyReducerLenses.visits)).toContain(
      WORKBOOK_SCREEN + 'WithStepId'
    )
    expect(Object.keys(historyReducerLenses.lastVisited)).toBeTruthy()
  })

  it('should have a function that takes a step id and return returns a lense for visit of that step screen of that step Id', () => {
    const stateWithHistoryVisitAtStepScreenWithStepId1 = {
      [HISTORY]: {
        [VISITS]: {
          [STEP_SCREEN]: {
            '1': 'test'
          }
        }
      }
    }
    const lenseWithHistoryVisitAtStepScreenWithStepId1 = historyReducerLenses.visits[
      STEP_SCREEN + 'WithStepId'
    ]('1')
    expect(
      R.view(
        lenseWithHistoryVisitAtStepScreenWithStepId1,
        stateWithHistoryVisitAtStepScreenWithStepId1
      )
    ).toEqual('test')
  })

  it('should have a lense for step screen visits', () => {
    const object = {
      '1': 'test'
    }
    const stateWithHistoryVisitAtStepScreenWithStepScreens = {
      [HISTORY]: {
        [VISITS]: {
          [STEP_SCREEN]: object
        }
      }
    }
    const lenseWithHistoryVisitAtStepScreen =
      historyReducerLenses.visits[STEP_SCREEN]

    expect(
      R.view(
        lenseWithHistoryVisitAtStepScreen,
        stateWithHistoryVisitAtStepScreenWithStepScreens
      )
    ).toEqual(object)
  })
  it('should have a lense for workbook screen visits', () => {
    const object = {
      '1': 'test'
    }
    const stateWithHistoryVisitAtStepScreenWithWorkbookScreens = {
      [HISTORY]: {
        [VISITS]: {
          [WORKBOOK_SCREEN]: object
        }
      }
    }
    const lenseWithHistoryVisitAtWorkbookScreen =
      historyReducerLenses.visits[WORKBOOK_SCREEN]
    expect(
      R.view(
        lenseWithHistoryVisitAtWorkbookScreen,
        stateWithHistoryVisitAtStepScreenWithWorkbookScreens
      )
    ).toEqual(object)
  })

  it('should have a function that takes a step id and return returns a lense for visit of that workbook screen of that step Id', () => {
    const stateWithHistoryVisitAtWrokbookScreenWithStepId1 = {
      [HISTORY]: {
        [VISITS]: {
          [WORKBOOK_SCREEN]: {
            '1': 'test'
          }
        }
      }
    }
    const lenseWithHistoryVisitAtWrokbookScreenWithStepId1 = historyReducerLenses.visits[
      WORKBOOK_SCREEN + 'WithStepId'
    ]('1')

    expect(
      R.view(
        lenseWithHistoryVisitAtWrokbookScreenWithStepId1,
        stateWithHistoryVisitAtWrokbookScreenWithStepId1
      )
    ).toEqual('test')
  })
  it('should have a Set last visited with screen route from navigation action and add time stamp', () => {
    const object = { this: 'that' }
    const state = {
      [HISTORY]: {
        [LAST_VISITED]: object
      }
    }
    const value = R.view(R.lensPath([HISTORY, LAST_VISITED]), state)
    expect(value).toEqual(object)
  })
})

describe('test navigation actions lenses', () => {
  it('should have a lense for stepId of a navigation action', () => {
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
    expect(R.view(NavigationActionStepIdLens, action)).toEqual('1')
  })
  it('should have a lense for formId of a navigation action', () => {
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
    expect(R.view(NavigationActionFormIdLens, action)).toEqual('1')
  })
  it('should have a lense for formId of a navigation action', () => {
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
    // expect(R.view(NavigationActionRouteNameLens, action)).toEqual(
    //   'AssignmentFlow'
    // )
  })
})
