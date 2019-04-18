// @flow
import type { Sections, TimeElement } from '../types'
import { red500, yellow500, cyan500 } from '2020_constants/colors'

export const SECTIONS: Sections = {
  MENU: 'MENU',
  CHECK_IN: 'CHECK_IN',
  WEEKLY_LIST: 'WEEKLY_LIST',
}

export const EVENING = 'EVENING'
export const MORNING = 'MORNING'
export const AFTERNOON = 'AFTERNOON'

export const TIME: Array<TimeElement> = [
  {
    key: EVENING,
    text: 'evening',
    period: '17:00-02:59',
    format: 'HH:mm',
    operators: {
      end: [['d', 'add', 1]],
    },
    effects: {
      start: [
        {
          condition: '00:00-2:59',
          effect: [['d', 'sub', 1]],
        },
      ],
      end: [
        {
          condition: '00:00-2:59',
          effect: [['d', 'sub', 1]],
        },
      ],
    },
  },
  {
    key: MORNING,
    text: 'morning',
    period: '03:00-11:59',
    format: 'HH:mm',
  },
  {
    key: AFTERNOON,
    text: 'afternoon',
    period: '12:00-16:59',
    format: 'HH:mm',
  },
]

export const CHART_KEYS = {
  TODAY: 'TODAY',
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY',
  SUNDAY: 'SUNDAY',
  WEEKLY_AVG: 'WEEKLY_AVG',
  MONTHLY_AVG: 'MONTHLY_AVG',
}

export const CHARTS = [
  {
    key: CHART_KEYS.TODAY,
    title: `Today`,
  },
  {
    key: CHART_KEYS.WEEKLY_AVG,
    title: `Weekly Average`,
  },
  {
    key: CHART_KEYS.MONTHLY_AVG,
    title: 'Monthly Average',
  },
]

export const chartLegendElements = [
  {
    key: 'physical',
    color: red500,
    text: 'Physical',
  },
  {
    key: 'emotional',
    color: cyan500,
    text: 'Emotional',
  },
  {
    key: 'spiritual',
    color: yellow500,
    text: 'Spiritual',
  },
]
