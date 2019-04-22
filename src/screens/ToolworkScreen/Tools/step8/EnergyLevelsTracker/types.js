// @flow
import type { Moment } from 'moment'

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
  day: string, // Day the answer belongs to
  extendedTime: string, // The moment the value is stored formatted as MM/DD/YYYY HH:mm:ss
  isoTimeOfPeriod: string, // Iso stamp of the beginning of the period defined by "key"
  timeTaken: string, // The moment the value is stored as ISO
  value: any,
}

export type DataSet = Array<DataPoint> //Set of Datapoints ordered by the time they happened belonging to a single day

export type DataPoint = {
  level: number, // Energy level for said data point
  time: number, // Time unit in decimal value for said data point, it's the value from the minutes division of the day from 0 to 24
}

export type Data = {
  physicalData: DataSet,
  emotionalData: DataSet,
  spiritualData: DataSet,
}

export type ChartSpec = {
  title: string,
  key: string,
}

export type CarouselEntryType = {
  data: Data,
  title: string,
  key: string,
}
