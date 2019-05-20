// @flow
import { CHECKINS, SETTINGS } from '../constants'

export type SECTIONS = SETTINGS | CHECKINS

export type ProvidedContextState = {
  selected: SECTIONS,
  openCheckins: () => void,
  openSettings: () => void,
  openDevelopment?: () => void,
}
