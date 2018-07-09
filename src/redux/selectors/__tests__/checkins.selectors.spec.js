import {
  CHECKIN_MEDITATION,
  CHECKIN_EMOJI,
} from '../../../constants/checkins'
import checkinsSelectors from '../checkins.selectors';
const {
  checkins,
  isMeditationCheckin,
  showUserMeditationOption
} = checkinsSelectors

const empjiCheckin = {
  id: '',
  data: {},
  createdAt:'',
  updatedAt:'',
  version:'',
  name: CHECKIN_EMOJI
}

const meditationCheckin = {
  id: '',
  data: {},
  createdAt:'',
  updatedAt:'',
  version:'',
  name: CHECKIN_MEDITATION
}

describe('checkinSelectors', () => {
  describe('checkins', () => {
    describe('given State with user and a CHECKIN', () => {
      const CHECKINS = [
        empjiCheckin
      ]
      const state = {
        user: {
          checkins: CHECKINS
        }
      }
      it('returns CHECKIN', () => {
        expect(checkins(state)).toEqual(CHECKINS)
      })
    })
    describe('given state with no user', () => {
      it('returns an empty array', () => {
        expect(checkins({})).toEqual([])
      })
    })
  })
  describe('isMeditationCheckin', () => {
    it('returns true when a given an object with name: CHECKIN_MEDITATION', () => {
      expect(isMeditationCheckin({ name: CHECKIN_MEDITATION})).toEqual(true)
    })
    it('returns false for an object with name that is not CHECKIN_MEDITATION', () => {
      expect(isMeditationCheckin({ name: ''})).toEqual(false)
    })
    it('return false for an object with no name field', () => {
      expect(isMeditationCheckin({})).toEqual(false)
    })
  })
  describe('showUserMeditationOption', () => {
    const state = {
        user: {
          checkins: [meditationCheckin]
        }
      }
      it('returns true when provided with state where user checkins includes a meditation checkin', () => {
        expect(showUserMeditationOption(state)).toEqual(true)
      })
      it('returns false when user is null', () => {
        expect(showUserMeditationOption({ })).toEqual(false)
      })
      it('returns false checkins is empty', () => {
        expect(showUserMeditationOption({
          user: {
            checkins: []
          }
        })).toEqual(false)
      })
  })
})
