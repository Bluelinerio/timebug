import R from 'ramda'
import { reduceStepIds, branch, branchFn } from './utils'
import { stepIds } from '../../constants/steps'
describe('Test lenese util functions', () => {
  describe('Reduce step ids tests', () => {
    it('should be a function', () => {
      expect(typeof reduceStepIds).toEqual('function')
    })
    it('should return an object with all stepIds', () => {
      const value = reduceStepIds(() => 'this')
      expect(Object.keys(value)).toEqual(stepIds)
    })
    it('should return an object with the results of what is return from the first argument which is a function.', () => {
      const value = reduceStepIds(() => 'this')
      expect(Object.values(value)).toEqual(Array(30).fill('this'))
    })
  })
  describe('branch tests', () => {
    it('should return second argument on true', () => {
      const value = branch(R.contains(R.__, [1, 2, 3, 4]), 'yes', 'no')(1)
      expect(value).toBe('yes')
    })
    it('should return third argument on false', () => {
      const value = branch(R.contains(R.__, [1, 2, 3, 4]), 'yes', 'no')(5)
      expect(value).toBe('no')
    })
  })
  describe('branchFn tests', () => {
    it('should return the result of the results of the second argument with the value', () => {
      const value = branchFn(
        R.contains(R.__, [1, 2, 3, 4]),
        number => 'contains ' + number,
        number => 'missing ' + number
      )(1)
      expect(value).toBe('contains 1')
    })
    it('should return the result of the results of the third argument with the value', () => {
      const value = branchFn(
        R.contains(R.__, [1, 2, 3, 4]),
        number => 'contains ' + number,
        number => 'missing ' + number
      )(5)
      expect(value).toBe('missing 5')
    })
  })
})
