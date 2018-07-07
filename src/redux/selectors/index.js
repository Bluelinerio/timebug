// @flow
import * as userSelectors from './user.selectors'
import * as cmsSelectors from './cms.selectors'
import * as checkinSelectors from './checkins.selectors'
import * as formDataSelectors from './formData.selectors'
import * as formsSelectors from './forms.selectors'

const selectors = {
  ...userSelectors,
  ...cmsSelectors,
  ...checkinSelectors,
  ...formDataSelectors,
  ...formsSelectors
}

export default selectors