// @flow
import R from 'ramda'
import {
  // CHECKIN_PHYSICALLY,
  // CHECKIN_EMOTIONALLY,
  // CHECKIN_MENTALLY,
  // CHECKIN_DAILY,
  // CHECKIN_MOOD,
  CHECKIN_MEDITATION,
  // CHECKIN_EMOJI,
} from '../../constants/checkins'
import { viewOr } from './utils'
import * as reducerLenses from '../lenses/reducer.lenses'

const checkins = viewOr([], reducerLenses.checkinsLens)

const isMeditationCheckin = R.whereEq({ name: CHECKIN_MEDITATION })

const showUserMeditationOption = R.pipe(
  checkins,
  R.findIndex(isMeditationCheckin),
  R.equals(-1),
  R.not,
)

export default {
  checkins,
  isMeditationCheckin,
  showUserMeditationOption
}