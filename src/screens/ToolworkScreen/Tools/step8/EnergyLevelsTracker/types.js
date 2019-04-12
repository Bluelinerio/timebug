// @flow
import type { Moment }                       from 'moment'

export type CheckinElement = {
  key: string,
  format: string,
  time: string,
  enabled: boolean,
  filled: boolean,
  data: any,
}

export type Sections = {
  MENU: string,
  CHECK_IN: string,
  WEEKLY: string,
}

type Operator = Array<string, string, number>

type Condition = {
  condition: string,
  effect: Array<Operator>,
}

export type TimeElement = {
  key: string,
  text: string,
  period: string,
  format: string,
  operators?: {
    end?: Array<Operator>,
    start?: Array<Operator>,
  },
  effects: {
    start: Array<Condition>,
    end: Array<Condition>,
  },
}

export type PeriodPayload = {
  selectedTime: TimeUnit,
  day: string,
  extra: {
    timeStamp: string,
    isSpecialPeriod: boolean, // true if it's period between 00:00 and 2:59 am that belongs to previous day
  },
}

export type TimeUnit = {
  key: string,
  text: string,
  format: string,
  start: Moment,
  end: Moment,
  effects?: {
    start: Array<Condition>,
    end: Array<Condition>,
  },
}

export type ToolValue = {
  timeKey: string,
  day: string, //Formatted as MM/DD/YYYY
  extendedTime: string, // Formatted as MM/DD/YYYY HH:mm:ss
  isoTime: string, // Iso stamp
  value: any,
}