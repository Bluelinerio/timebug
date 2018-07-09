import { set, pipe } from 'ramda'
import cmsSelectors from '../cms.selectors'
import * as reducerLenses from '../../lenses/reducer.lenses'

const {
  steps,
  sortedSteps,
  meditations,
  phaseColors,
  stepColors,
  introSlides,
  step,
  pages,
  appInstructions,
  colors,
  uniqueColors,
  isCMSLoading,
  totalNumberOfSteps
} = cmsSelectors

describe('cmsSelectors', () => {
  const ID = 'sldfkjadfasd'
  const OBJECT = { id: ID }
  describe('steps', () => {
    const state = set(reducerLenses.steps, OBJECT)({})
    it('returns the value of the stepLens', () => {
      expect(steps(state)).toEqual(OBJECT)
    })
    it('returns an empty object when lens fail', () => {
      expect(steps({})).toEqual({})
    })
  })

  describe('sortedSteps', () => {
    describe('FIRST: { number: 1 } SECOND: { number: 2 } and STEPS: { 1: FIRST, 2: SECOND }', () => {
      const FIRST = {
        number: 1
      }
      const SECOND = {
        number: 2
      }
      const STEPS = {
        '1': FIRST,
        '2': SECOND
      }
      const state = set(reducerLenses.steps, STEPS)({})
      it('returns an array with the first object { number: 1 } and second { number: 2 } ', () => {
        const result = sortedSteps(state)
        console.log(JSON.stringify(result))
        expect(result[0]).toEqual(FIRST)
        expect(result[1]).toEqual(SECOND)
      })
    })
    it('returns an empty array when lens fail', () => {
      expect(sortedSteps({})).toEqual([])
    })
  })
  describe('meditations', () => {
    it('returns the value of the lens', () => {
      const state = set(reducerLenses.meditations, OBJECT)({})
      expect(meditations(state)).toEqual(OBJECT)
    })
    it('returns an empty object when lens fail', () => {
      expect(meditations({})).toEqual([])
    })
  })
  describe('colors', () => {
    it('returns the value of the lens', () => {
      const state = set(reducerLenses.colors, OBJECT)({})
      expect(colors(state)).toEqual(OBJECT)
    })
    it('returns undefined when lens fail', () => {
      expect(colors({})).toBeUndefined()
    })
  })
  describe('phaseColors', () => {
    it('returns the value of the lens', () => {
      const state = set(reducerLenses.phaseColors, OBJECT)({})
      expect(phaseColors(state)).toEqual(OBJECT)
    })
    it('returns an empty object when lens fail', () => {
      expect(phaseColors({})).toEqual({})
    })
  })
  describe('stepColors', () => {
    it('returns the value of the lens', () => {
      const state = set(reducerLenses.stepColors, OBJECT)({})
      expect(stepColors(state)).toEqual(OBJECT)
    })
    it('returns an empty object when lens fail', () => {
      expect(stepColors({})).toEqual({})
    })
  })
  describe('uniqueColors', () => {
    describe('given state with PHASE_COLORS: { key: \'1\' } STEP_COLORS: { key: \'2\' }', () => {
      const PHASE_COLORS = { key: '1' }
      const STEP_COLORS = { key: '2' }
      const state = pipe(
        set(reducerLenses.phaseColors, PHASE_COLORS),
        set(reducerLenses.stepColors, STEP_COLORS)
      )({})
      it('returns [\'1\', \'2\']', () => {
        expect(uniqueColors(state)).toEqual(['1', '2'])
      })
    })
    it('returns empty array when lens fail', () => {
      expect(uniqueColors({})).toEqual([])
    })
  })
  describe('introSlides', () => {
    it('returns the value of the lens', () => {
      const state = set(reducerLenses.introSlides, OBJECT)({})
      expect(introSlides(state)).toEqual(OBJECT)
    })
    it('returns an empty array when lens fail', () => {
      expect(introSlides({})).toEqual([])
    })
  })
  describe('step', () => {
    describe('FIRST, SECOND and STEPS: { 1: FIRST, 2: SECOND }', () => {
      const FIRST = 'FIRST'
      const SECOND = 'SECOND'
      const STEPS = {
        '1': FIRST,
        '2': SECOND
      }
      const state = set(reducerLenses.steps, STEPS)({})
      it('returns FIRST provided the steps lens and \'1\' as second arg', () => {
        expect(step(state)(1)).toEqual(FIRST)
      })
      it('returns undefined provided the steps lens and \'3\' as second arg', () => {
        expect(step(state)('3')).toBeUndefined()
      })
    })
  })
  describe('pages', () => {
    it('returns the value of the lens', () => {
      const state = set(reducerLenses.pages, OBJECT)({})
      expect(pages(state)).toEqual(OBJECT)
    })
    it('returns an empty array when lens fail', () => {
      expect(pages({})).toEqual([])
    })
  })
  describe('appInstructions', () => {
    it('returns the value of the lens', () => {
      const state = set(reducerLenses.appInstructions, OBJECT)({})
      expect(appInstructions(state)).toEqual(OBJECT)
    })
    it('returns undefined when lens fail', () => {
      expect(appInstructions({})).toBeUndefined()
    })
  })
  describe('isCMSLoading', () => {
    it('returns true when setting cmsRequestCount to 1', () => {
      const state = set(reducerLenses.cmsRequestCount, 1)({})
      // console.log(JSON.stringify(this.state.))
      expect(isCMSLoading(state)).toEqual(true)
    })
    it('returns true when setting cmsRequestCount to 0', () => {
      const state = set(reducerLenses.cmsRequestCount, 0)({})
      expect(isCMSLoading(state)).toEqual(false)
    })
    it('returns false when lens fail', () => {
      expect(isCMSLoading({})).toEqual(false)
    })
  })
  describe('totalNumberOfSteps', () => {
    it('returns the value of the lens', () => {
      const state = set(reducerLenses.totalNumberOfSteps, 10)({})
      expect(totalNumberOfSteps(state)).toEqual(10)
    })
    it('returns 30 when lens fail', () => {
      expect(totalNumberOfSteps({})).toEqual(30)
    })
  })
})
