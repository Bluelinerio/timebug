import { set } from 'ramda'
import userSelectors from '../user.selectors'
import {
  UNDETERMINED,
  ANONYMOUS,
  AUTHENTICATING,
} from '../../../types'
import { user as userLens } from '../../lenses/rootReducer.lenses'

describe('userSelectors', () => {
  const ID = 'dfadl;kfgjd'
  const USER = { id: ID }
  const noUser = {}
  const authenticatingUser = set(userLens, AUTHENTICATING)({})
  const anonymousUser = set(userLens, ANONYMOUS)({})
  const undeterminedUser = set(userLens, UNDETERMINED)({})
  const withUser = set(userLens, USER)({})

  describe('user', () => {
    it('returns undefined when userState is UNDETERMINED', () => {
      expect(
        userSelectors.user(undeterminedUser)
      ).toBeUndefined()
    })
    it('returns undefined when userState is ANONYMOUS', () => {
      expect(
        userSelectors.user(anonymousUser)
      ).toBeUndefined()
    })
    it('returns undefined when userState is AUTHENTICATING', () => {
      expect(userSelectors.user(authenticatingUser)).toBeUndefined()
    })
    it('returns the object when user is an object with id', () => {
      expect(
        userSelectors.user(withUser)
      ).toEqual(USER)
    })
  })
  describe('userId', () => {
    test('return the id of undefined', () => {
      expect(userSelectors.userId(anonymousUser)).toBeUndefined()
      expect(userSelectors.userId(noUser)).toBeUndefined()
      expect(userSelectors.userId(authenticatingUser)).toBeUndefined()
      expect(userSelectors.userId(undeterminedUser)).toBeUndefined()
      expect(userSelectors.userId(withUser)).toEqual(ID)
    })
  })
  describe('isLoggedIn', () => {
    test('return true only when user is an object with id', () => {
      expect(userSelectors.isLoggedIn(anonymousUser)).toEqual(false)
      expect(userSelectors.isLoggedIn(noUser)).toEqual(false)
      expect(userSelectors.isLoggedIn(authenticatingUser)).toEqual(false)
      expect(userSelectors.isLoggedIn(undeterminedUser)).toEqual(false)
      expect(userSelectors.isLoggedIn(withUser)).toEqual(true)
    })
  })
  describe('isNotLoggedIn', () => {
    test('return false only when user is an object with id', () => {
      expect(userSelectors.isNotLoggedIn(anonymousUser)).toEqual(true)
      expect(userSelectors.isNotLoggedIn(noUser)).toEqual(true)
      expect(userSelectors.isNotLoggedIn(authenticatingUser)).toEqual(true)
      expect(userSelectors.isNotLoggedIn(undeterminedUser)).toEqual(true)
      expect(userSelectors.isNotLoggedIn(withUser)).toEqual(false)
    })
  })
  describe('isAnonymous', () => {
    test('return true only when user is ANONYMOUS', () => {
      expect(userSelectors.isAnonymous(anonymousUser)).toEqual(true)
      expect(userSelectors.isAnonymous(noUser)).toEqual(false)
      expect(userSelectors.isAnonymous(authenticatingUser)).toEqual(false)
      expect(userSelectors.isAnonymous(undeterminedUser)).toEqual(false)
      expect(userSelectors.isAnonymous(withUser)).toEqual(false)
    })
  })
  describe('needsLogin', () => {
    test('return true only when user is ANONYMOUS', () => {
      expect(userSelectors.needsLogin(anonymousUser)).toEqual(true)
      expect(userSelectors.needsLogin(noUser)).toEqual(false)
      expect(userSelectors.needsLogin(authenticatingUser)).toEqual(false)
      expect(userSelectors.needsLogin(undeterminedUser)).toEqual(false)
      expect(userSelectors.needsLogin(withUser)).toEqual(false)
    })
  })

  describe('isAuthenticating', () => {
    test('return true only when user is AUTHENTICATING', () => {
      expect(userSelectors.isAuthenticating(anonymousUser)).toEqual(false)
      expect(userSelectors.isAuthenticating(noUser)).toEqual(false)
      expect(userSelectors.isAuthenticating(authenticatingUser)).toEqual(true)
      expect(userSelectors.isAuthenticating(undeterminedUser)).toEqual(false)
      expect(userSelectors.isAuthenticating(withUser)).toEqual(false)
    })
  })
  describe('isUndetermined', () => {
    test('return true only when user is UNDETERMINED', () => {
      expect(userSelectors.isUndetermined(anonymousUser)).toEqual(false)
      expect(userSelectors.isUndetermined(noUser)).toEqual(false)
      expect(userSelectors.isUndetermined(authenticatingUser)).toEqual(false)
      expect(userSelectors.isUndetermined(undeterminedUser)).toEqual(true)
      expect(userSelectors.isUndetermined(withUser)).toEqual(false)
    })
  })
})
