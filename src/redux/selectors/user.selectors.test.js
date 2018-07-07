import userSelectors from './user.selectors'
import { ANONYMOUS } from '../../types';

describe('User selectors test', () => {
  describe('user tests', () => {
    it('should return falsy when user is set to anonumous', () => {
      expect(
        userSelectors.user({
          user: ANONYMOUS
        })
      ).toBeFalsy()
    })
  })
})
