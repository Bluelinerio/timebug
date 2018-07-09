// @flow
import R from 'ramda'
import {
  CHECKIN_MEDITATION,
} from '../../constants/checkins'

export const isMeditationCheckin = R.whereEq({ name: CHECKIN_MEDITATION })