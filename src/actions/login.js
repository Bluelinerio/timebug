// @flow
import { GET_ABOUT_INFO_FROM_CMS, REQUEST } from '../constants/actionTypes';

export function getAboutInfoFromCMS() {
  return {
    type: GET_ABOUT_INFO_FROM_CMS[REQUEST],
  }
}
