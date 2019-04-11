// @flow
import type { Sections, TimeElement } from '../types'

export const SECTIONS: Sections = {
  MENU: 'MENU',
  CHECK_IN: 'CHECK_IN',
  WEEKLY_LIST: 'WEEKLY_LIST',
}

export type TimeObject = {
  [x: string]: TimeElement,
}

export const TIME: TimeObject = {
  AM_8: {
    key: 'AM_8',
    time: '08:00',
    format: 'HH:mm',
  },
  PM_2: {
    key: 'PM_2',
    time: '14:00',
    format: 'HH:mm',
  },
  PM_8: {
    key: 'PM_8',
    time: '20:00',
    format: 'HH:mm',
  },
}
