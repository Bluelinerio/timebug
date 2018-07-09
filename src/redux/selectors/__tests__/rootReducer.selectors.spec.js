import R from 'ramda'
import {
  getUserState,
  getCms,
  getFormData,
  getAgregateState,
} from '../rootReducer.selectors'
import * as rootReducerLenses from '../../lenses/rootReducer.lenses'

const OBJECT = { id: 'unique' }

describe('rootReducerSelectors', () => {
  describe('getUserState', () => {
    it('given a value, returns values of the user lense', () => {
      const state = R.set(rootReducerLenses.user, OBJECT)({})
      expect(getUserState(state)).toEqual(OBJECT)
    })
    it('given no value, returns undefined', () => {
      expect(getUserState({})).toBeUndefined()
    })
  })
  describe('getCms', () => {
    it('given a value, returns values of the cms lense', () => {
      const state = R.set(rootReducerLenses.cms, OBJECT)({})
      expect(getCms(state)).toEqual(OBJECT)
    })
    it('given no value, returns undefined', () => {
      expect(getCms({})).toBeUndefined()
    })
  })

  describe('getFormData', () => {
    it('given a value, returns values of the formData lense', () => {
      const state = R.set(rootReducerLenses.formData, OBJECT)({})
      expect(getFormData(state)).toEqual(OBJECT)
    })
    it('given no value, returns undefined', () => {
      expect(getFormData({})).toBeUndefined()
    })
  })

  describe('getAgregateState', () => {
    it('given a value, returns values of the agregates lense', () => {
      const state = R.set(rootReducerLenses.agregates, OBJECT)({})
      expect(getAgregateState(state)).toEqual(OBJECT)
    })
    it('given no value, returns undefined', () => {
      expect(getAgregateState({})).toBeUndefined()
    })
  })
})
