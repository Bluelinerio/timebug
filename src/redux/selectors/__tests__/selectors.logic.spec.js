import {
  CHECKIN_MEDITATION,
} from '../../../constants/checkins'
import {
  showUserMeditationOption
} from '../selectors.logic'

const meditationCheckin = {
  id: '',
  data: {},
  createdAt:'',
  updatedAt:'',
  version:'',
  name: CHECKIN_MEDITATION
}

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
