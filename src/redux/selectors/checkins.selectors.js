// @flow
import R        from 'ramda'
import {
  // CHECKIN_PHYSICALLY,
  // CHECKIN_EMOTIONALLY,
  // CHECKIN_MENTALLY,
  // CHECKIN_DAILY,
  // CHECKIN_MOOD,
  CHECKIN_MEDITATION,
  // CHECKIN_EMOJI,
}               from '../../constants/checkins'
import { user } from './user.selectors'

const checkins                 = R.compose(
  R.prop('checkins'),
  user
)
const isMeditationCheckin      = R.whereEq({ name: CHECKIN_MEDITATION })
const showUserMeditationOption = R.compose(
  R.not(-1),
  R.findIndex(isMeditationCheckin),
  checkins
)

export default {
  checkins,
  isMeditationCheckin,
  showUserMeditationOption
}