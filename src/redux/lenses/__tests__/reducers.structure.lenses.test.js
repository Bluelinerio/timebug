import R from 'ramda'
import reducersStructure from './reducers.structure.lenses'
import {
  HISTORY,
  VISITS,
  LAST_VISITED,
  COUNT,
  TIME_STAMP,
  ROUTE_NAME
} from '../../constants/reducers'
import screens, {
  STEP_SCREEN,
  WORKBOOK_SCREEN,
  WORKBOOK_DONE_SCREEN
} from '../../constants/screens'
import { stepIds } from '../../constants/steps'

const object = {
  test: 'test'
}

describe('screens import', () => {
  it('should make sure screens is an object', () => {
    expect(typeof screens).toEqual('object')
  })
})

describe('Reducers structure test', () => {
  describe('The value for history', () => {
    it('should have lens', () => {
      const value = R.view(reducersStructure.history.lens, {
        [HISTORY]: object
      })
      expect(value).toEqual(object)
    })
    describe('The value for lastVisited', () => {
      it('should have a lens', () => {
        const value = R.view(
          R.compose(
            reducersStructure.history.lens,
            reducersStructure.history.lastVisited.lens
          ),
          {
            [HISTORY]: {
              [LAST_VISITED]: object
            }
          }
        )
        expect(value).toEqual(object)
      })
      it('should have a routeName lense', () => {
        const value = R.view(
          R.compose(
            reducersStructure.history.lens,
            reducersStructure.history.lastVisited.lens,
            reducersStructure.history.lastVisited.routeName.lens
          ),
          {
            [HISTORY]: {
              [LAST_VISITED]: {
                [ROUTE_NAME]: object
              }
            }
          }
        )
        expect(value).toEqual(object)
      })
      it('should have a count lens', () => {
        const value = R.view(
          R.compose(
            reducersStructure.history.lens,
            reducersStructure.history.lastVisited.lens,
            reducersStructure.history.lastVisited.count.lens
          ),
          {
            [HISTORY]: {
              [LAST_VISITED]: {
                [COUNT]: object
              }
            }
          }
        )
        expect(value).toEqual(object)
      })
      it('should have a timeStamp lens', () => {
        const value = R.view(
          R.compose(
            reducersStructure.history.lens,
            reducersStructure.history.lastVisited.lens,
            reducersStructure.history.lastVisited.timeStamp.lens
          ),
          {
            [HISTORY]: {
              [LAST_VISITED]: {
                [TIME_STAMP]: object
              }
            }
          }
        )
        expect(value).toEqual(object)
      })
    })

    describe('The value for visits', () => {
      it('should have a lens', () => {
        const value = R.view(
          R.compose(
            reducersStructure.history.lens,
            reducersStructure.history.visits.lens
          ),
          {
            [HISTORY]: {
              [VISITS]: object
            }
          }
        )
        expect(value).toEqual(object)
      })
      R.keys(screens).forEach(screenKey => {
        const screen = screens[screenKey]
        describe(`The value for ${screen}`, () => {
          it(`should be an object`, () => {
            expect(typeof reducersStructure.history.visits[screen]).toEqual(
              'object'
            )
          })
          it(`should have a lens for ${screen}`, () => {
            const value = R.view(
              R.compose(
                reducersStructure.history.lens,
                reducersStructure.history.visits.lens,
                reducersStructure.history.visits[screen].lens
              ),
              {
                [HISTORY]: {
                  [VISITS]: {
                    [screen]: object
                  }
                }
              }
            )
            expect(value).toEqual(object)
          })
          if (
            [STEP_SCREEN, WORKBOOK_SCREEN, WORKBOOK_DONE_SCREEN].includes(
              screen
            )
          ) {
            stepIds.forEach(stepId => {
              describe(`The value for ${stepId} (stepId)`, () => {
                it(`should be an object`, () => {
                  expect(
                    typeof reducersStructure.history.visits[screen][stepId]
                  ).toEqual('object')
                })

                it(`should have a lens`, () => {
                  const value = R.view(
                    R.compose(
                      reducersStructure.history.lens,
                      reducersStructure.history.visits.lens,
                      reducersStructure.history.visits[screen].lens,
                      reducersStructure.history.visits[screen][stepId].lens
                    ),
                    {
                      [HISTORY]: {
                        [VISITS]: {
                          [screen]: {
                            [stepId]: object
                          }
                        }
                      }
                    }
                  )
                  expect(value).toEqual(object)
                })
              })
            })
          }
        })
      })
    })
  })
})
