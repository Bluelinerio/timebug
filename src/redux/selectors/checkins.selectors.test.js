import R from 'ramda'
// import {
//   checkins,
//   isMeditationCheckin,
//   showUserMeditationOption
// } from './checkins.selectors'

const checkins = R.compose(
  R.prop('checkins'),
  R.prop('user')
)

const object = { test : 'test' }
describe('checkin selectors test', () => {
  describe('checkin selector', () => {
    it('should shold return checkin from state with checkins', () => {
      const stateWithCheckins = {
        user: {
          checkins: object
        }
      }
      const value = checkins(stateWithCheckins)
      expect(value).toEqual(object)
    })
  })
})